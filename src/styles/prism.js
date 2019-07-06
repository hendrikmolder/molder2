import { css } from 'styled-components'

const prism = css`
code[class*="language-"],
pre[class*="language-"] {
  font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
  font-size: 14px;
  line-height: 1.375;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  background: #fbfaf9;
  color: #9a86fd;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #fbfaf9;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
  text-shadow: none;
  background: #fbfaf9;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #c3bdb6;
}

.token.punctuation {
  color: #c3bdb6;
}

.token.namespace {
  opacity: .7;
}

.token.tag,
.token.operator,
.token.number {
  color: #6a51e6;
}

.token.property,
.token.function {
  color: #e09142;
}

.token.tag-id,
.token.selector,
.token.atrule-id {
  color: #b37537;
}

code.language-javascript,
.token.attr-name {
  color: #e09142;
}

code.language-css,
code.language-scss,
.token.boolean,
.token.string,
.token.entity,
.token.url,
.language-css .token.string,
.language-scss .token.string,
.style .token.string,
.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit,
.token.statement,
.token.regex,
.token.atrule {
  color: #8a75f5;
}

.token.placeholder,
.token.variable {
  color: #c4b9fe;
}

.token.deleted {
  text-decoration: line-through;
}

.token.inserted {
  border-bottom: 1px dotted #b37537;
  text-decoration: none;
}

.token.italic {
  font-style: italic;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.important {
  color: #e09142;
}

.token.entity {
  cursor: help;
}

pre > code.highlight {
  outline: .4em solid #e09142;
  outline-offset: .4em;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers .line-numbers-rows {
  border-right-color: #ebe6e0;
}

.line-numbers-rows > span:before {
  color: #d8d1ca;
}

/* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 * alpha transparency in 8 digits hex notation coming to a browser near you soon:
 * https://drafts.csswg.org/css-color/#hex-notation
 */
.line-highlight {
  background: #b3753733;
  background: linear-gradient(to right, #b3753733 70%, #b3753700);
}
`

export default prism