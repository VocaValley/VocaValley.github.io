const defaultPage = "pages/index.md";
const pageParam = "page";

function getPageName() {
    const url = new URL(window.location.href);
    return url.searchParams.get(pageParam);
}

function load(path, callback, errorHandler) {
    let Http = new XMLHttpRequest();
    Http.open("GET", path);
    Http.send();

    Http.onreadystatechange = () => {
        if (Http.readyState == 4) {
            if (Http.status == 200) {
                callback(Http.responseText);
            }
            else {
                errorHandler("HTTP GET ERROR<br>Status: " + Http.status + "<br>" + Http.responseText);
            }
        }
    };
}

function render(data) {
    let md = window.markdownit({
        html: true,        // Enable HTML tags in source
        xhtmlOut: true,        // Use '/' to close single tags (<br />).
        // This is only for full CommonMark compatibility.
        breaks: false,        // Convert '\n' in paragraphs into <br>
        langPrefix: 'language-',  // CSS language prefix for fenced blocks. Can be
        // useful for external highlighters.
        linkify: false,        // Autoconvert URL-like text to links

        // Enable some language-neutral replacement + quotes beautification
        // For the full list of replacements, see https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js
        typographer: true,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',

        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externally.
        // If result starts with <pre... internal wrapper is skipped.
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' +
                        hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                        '</code></pre>';
                } catch (__) { }
            }

            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
    });

    md.use(window.markdownitFootnote);
    md.use(window.markdownitEmoji);
    md.use(window.markdownitMark);
    md.use(window.markdownitSup);
    md.use(window.markdownitSub);
    md.use(window.markdownitContainer);
    md.use(window.markdownitDeflist);
    md.use(window.markdownitAbbr);
    md.use(window.markdownitCjkBreaks);
    md.use(window.markdownitCheckbox);

    document.getElementById('render-markdown').innerHTML = md.render(data);
}

function showError(mes) {
    document.getElementById('render-markdown').innerHTML = mes;
}

////
let page = getPageName();
if (page == null) { page = defaultPage; }

load(page, render, showError);