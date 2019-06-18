import React from 'react'
import renderer from 'react-test-renderer'

import CodeBlock from './index'

describe('CodeBlock', () => {
    it('renders correctly with title', () => {
        const tree = renderer
            .create(<CodeBlock input={input}/>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })


})



const codeBlock = `
<pre class="language-graphql">
                    <code class="language-graphql">
                        <span class="token keyword">query</span> MyQuery <span class="token punctuation">{</span>
  allPrismicPage <span class="token punctuation">{</span>
    edges <span class="token punctuation">{</span>
      node <span class="token punctuation">{</span>
        data <span class="token punctuation">{</span>
          body <span class="token punctuation">{</span>
            <span class="token operator">...</span> <span class="token keyword">on</span> <span class="token class-name">PrismicPageBodyCodeBlock</span> <span class="token punctuation">{</span>
              id
              primary <span class="token punctuation">{</span>
                code_block <span class="token punctuation">{</span>
                  html
                <span class="token punctuation">}</span>
                file_name
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token operator">...</span> <span class="token keyword">on</span> <span class="token class-name">PrismicPageBodyText</span> <span class="token punctuation">{</span>
              id
              primary <span class="token punctuation">{</span>
                text <span class="token punctuation">{</span>
                  html
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    </code>
</pre>`

const input = {
    primary: {
        code_block: codeBlock
    }
}