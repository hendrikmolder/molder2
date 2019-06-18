/**
 * This implementation follows the **gatsby-starter-prismic** example
 * from https://github.com/LekoArts/gatsby-starter-prismic/
 *
 * Modified by Hendrik Molder 2019
 */

const { Elements } = require('prismic-richtext')
const Prism = require('prismjs')
const Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');

require('prismjs/components/prism-java')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-scss')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-json')
require('prismjs/components/prism-diff')
require('prismjs/components/prism-markdown')
require('prismjs/components/prism-graphql')

/* Labels with this name will be inline code */
const codeInline = ['text']

/* Labes with these names will become code blocks */
const codeBlock = ['java', 'javascript', 'css', 'scss', 'jsx', 'bash', 'json', 'diff', 'markdown', 'graphql']

const nw = new Normalizer({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
	/*'break-lines': 80,
	'indent': 2,
	'remove-initial-line-feed': false,
	'tabs-to-spaces': 4,
	'spaces-to-tabs': 4*/
});

const htmlSerialiser = (type, element, content) => {
    switch (type) {
        /* Differentiate between a label an preformatted field */
        case Elements.label: {
            /* Handle inline code */
            if (codeInline.includes(element.data.label)) {
                return `<code class="language-${element.data.label}">${content}</code>`
            }

            /* Handle quotes */
            if (element.data.label === 'quote') {
                return `<blockquote><p>${content}</p></blockquote>`
            }

            /* Handle code blocks */
            if (codeBlock.includes(element.data.label)) {
                return `<pre class="language-${element.data.label}"><code class="language-${element.data.label}">${Prism.highlight(nw.normalize(content), Prism.languages[element.label])}</code>s</pre>`
            }

            return null
        }

        case Elements.preformatted: {
            if (codeBlock.includes(element.label)) {
                return `<pre class="language-${element.label}"><code class="language-${element.label}">${Prism.highlight(nw.normalize(element.text), Prism.languages[element.label])}</code></pre>`
            }

            return null
        }

        default: { return null }
    }
}

module.exports = htmlSerialiser