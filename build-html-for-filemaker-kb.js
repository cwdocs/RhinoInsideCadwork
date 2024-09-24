/**
 * This script is in charge of building all the HTML files from the Markdown
 * files so that we can copy-paste it into the FileMaker manual database.
 * A few custom changes have been made to the parser, to meet our needs:
 *
 * - `cadwork` should always be converted to lowercase.
 *
 * - paths to the images will be changed because these images have been uploaded
 *   on the production server and we want to refer them with domain relative
 *   URLs.
 *
 * - All headings (`<h1>` to `<h7>`) contain a trailing space that we remove.
 *
 * - We don't want the full HTML with the `<html>`, `<head>`, `<body>`, CSS and
 *   JS files. We just want the pure HTML of the text, because we'll paste it
 *   in the FileMaker fields.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { Notebook } = require('crossnote');

// By default, we will only generate the HTML to paste inside the FileMaker field.
// But if you want to generate full HTML pages instead, then just add `fullhtml`
// as an argument: `node build-html-for-filemaker-kb.js fullhtml`
const GENERATE_HTML_WITH_HEAD = isFullHtml();
// The local path to the images.
const OLD_IMAGE_PATH = 'img/';
// The final public path to the images, on the KB server, without the leading slash.
// https://kb.cadwork.ch/storage/rhino_inside_cadwork/images/
const NEW_IMAGE_PATH = 'storage/rhino_inside_cadwork/images/'; // Path relative to the domain.

const NOTEBOOK_CONFIG = {
    notebookPath: '',
    // https://shd101wyy.github.io/crossnote/interfaces/NotebookConfig.html
    config: {
        useRelativeFilePath: true,    // Relative path to images and not absolute.
        isForPreview: false,          // Not for VS code preview pane.
        breakOnSingleNewLine: false,  // We don't want new lines to become `<br>` tags.
        previewTheme: 'github-light.css',
        codeBlockTheme: 'auto.css',
        enableEmojiSyntax: true,
        enableExtendedTableSyntax: true,
        enableLinkify: true,          // Convert URLs to links automatically.
        enableScriptExecution: false, // No need to run code chuncks.
        enableTypographer: true,      // Enable smartypants and other sweet transforms.
        frontMatterRenderingOption: 'none', // 'none' | 'table' | 'code block'
        enableHTML5Embed: true,
        // We will change the parser to adapt it to our own specific needs.
        // @see https://shd101wyy.github.io/crossnote/interfaces/ParserConfig.html
        parserConfig: {
            // Alter the Markdown before converting it with the parser.
            onWillParseMarkdown: async function (markdown) {
                markdown = makeCadworkLowerCase(markdown);
                if (!GENERATE_HTML_WITH_HEAD) {
                    markdown = changeMarkdownImagePath(markdown, OLD_IMAGE_PATH, NEW_IMAGE_PATH);
                }
                return markdown
            },
            // Alter the resulting HTML code.
            onDidParseMarkdown: async function (html) {
                html = removeTrailingSpacesInHeadings(html);
                if (!GENERATE_HTML_WITH_HEAD) {
                    html = makeImagesAbsoluteToDomain(html);
                }
                return html;
            }
        }
    }
};

/**
 * Looks in the command line to see if "fullhtml", "full-html" or "full_html" has
 * been set in the arguments. This is used to determine if we generate the HTML
 * with the `<html>`, `<head>` and `<body>` tags or not.
 * 
 * @returns {Boolean}
 */
function isFullHtml() {
    // Read the process arguments to see if "fullhtml", "full-html" or "full_html" is set.
    for (const arg of process.argv) {
        if (arg.match(/\bfull[-_]?html\b/i)) {
            return true;
        }
    }

    return false;
}

/**
 * Searches for the `cadwork` word everywhere and makes it lowercase, to
 * be consistent in all the documentation.
 * 
 * @param {String} markdown The Markdown text to modify.
 * @returns {String} The modified Markdown text.
 */
function makeCadworkLowerCase(markdown) {
    return markdown.replace(/\bcadwork\b/gi, 'cadwork');
}

/**
 * Remove trailing spaces in each heading tags (`<h1>` to `<h7>`).
 * 
 * @param {String} html The HTML code to modify.
 * @returns {String} The modified HTML.
 */
function removeTrailingSpacesInHeadings(html) {
    return html.replace(/\s+(?=<\/h[1-7]>)/gi, '');
}

/**
 * This function will alter some Markdown by finding all images and then
 * changing the path to a new path.
 * 
 * @param {String} markdown The Markdown text to modify.
 * @param {String} oldPath The old path to the images.
 * @param {String} newPath The new path to the images.
 * @returns {String} The modified Markdown text.
 */
function changeMarkdownImagePath(markdown, oldPath, newPath) {
    // Regular expression to find image tags.
    const regex = /!\[(?<alt>[^\]]*)\]\((?<path>(?:"[^"]+")|\S+)(?:\s+(?<caption>(?:"[^"]+")|\S+?))?\)/g;

    return markdown.replace(regex, (fullMatch, alt, path, caption) => {
        // The image path could have quotes around it.
        const regexQuotedString = /^"(.*?)"$/;
        const matchesQuotedString = regexQuotedString.test(path);

        let unquotedImgPath;
        let newImgPath;
        let spaceAndCaption = '';

        // Extract the path from a quoted string, if it's the case.
        if (matchesQuotedString) {
            unquotedImgPath = matchesQuotedString[1];
        } else {
            unquotedImgPath = path;
        }
        // Do a search and replace of the old path, but only at the beginning.
        let newUnquotedPath = unquotedImgPath.replace(
            // The old path can contain some "../" in front of it, if the
            // Markdown file is in some sub-folders.
            new RegExp('^(\.\.\/)*' + oldPath),
            newPath
        );
        // If the new path contains spaces, then put back the quotes around it.
        if (newUnquotedPath.match(/\s/)) {
            newImgPath = `"${newUnquotedPath}"`;
        } else {
            newImgPath = newUnquotedPath;
        }

        if (caption !== undefined && caption !== '' && caption !== '""') {
            spaceAndCaption = ' ' + caption;
        }

        return `![${alt}](${newImgPath}${spaceAndCaption})`;;
    });
}

/**
 * Changes the path of all `<img>` tags found in the given HTML to make them
 * relative to the domain, starting with a `/`.
 * 
 * @param {String} html The HTML text to modify.
 * @returns {String} The modified HTML.
 */
function makeImagesAbsoluteToDomain(html) {
    const imgRegex = /<img (?<attributes>[^>]+)>/gi;
    const srcRegex = /src\s*=\s*"(?<url>[^"]+)"/i;

    return html.replace(imgRegex, (imgTag, attributes) => {
        return "<img " + attributes.replace(srcRegex, 'src="/$<url>"') + '>';
    });
}

/**
 * This is the main function of this file. It had to be created because
 * we are using JavaScript async calls with `await`.
 * 
 * @returns {void}
 */
async function main() {
    const notebook = await Notebook.init(NOTEBOOK_CONFIG);

    // Get all the `docs/*.md` files.
    let files = glob.sync('docs/**/*.md');

    for (const filename of files) {
        const fileAbsolutePath = path.resolve(filename);

        // Get the markdown engine for a specific note file in your notebook.
        const engine = notebook.getNoteMarkdownEngine(fileAbsolutePath);

        // Open in browser.
        //await engine.openInBrowser({ runAllCodeChunks: true });

        if (GENERATE_HTML_WITH_HEAD) {
            // Full page HTML export.
            await engine.htmlExport({ offline: false, runAllCodeChunks: true });
        } else {
            // Only HTML (without the head, body, etc).
            let fileBuffer = fs.readFileSync(fileAbsolutePath);
            let markdown = fileBuffer.toString();
            try {
                let parseResult = await engine.parseMD(markdown, NOTEBOOK_CONFIG.config);
                const htmlFileAbsolutePath = fileAbsolutePath.replace(/\.md$/, '.html');
                fs.writeFileSync(htmlFileAbsolutePath, parseResult.html);
            }
            catch (e) {
                console.log("ERROR!", e);
                return;
            }
        }

        // Chrome (puppeteer) export.
        //await engine.chromeExport({ fileType: 'pdf', runAllCodeChunks: true }); // fileType = 'pdf'|'png'|'jpeg'

        // ebook export.
        //await engine.eBookExport({ fileType: 'epub' }); // fileType = 'epub'|'pdf'|'mobi'|'html'

        // pandoc export.
        //await engine.pandocExport({ runAllCodeChunks: true });

        // markdown(gfm) export.
        //await engine.markdownExport({ runAllCodeChunks: true });
    }
}

main();
