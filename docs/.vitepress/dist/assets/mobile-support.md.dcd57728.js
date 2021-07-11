import{o as n,c as s,a}from"./app.2f713d2d.js";const p='{"title":"移动端支持","description":"","frontmatter":{},"relativePath":"mobile-support.md","lastUpdated":1625999333983}',t={},o=a('<h1 id="移动端支持"><a class="header-anchor" href="#移动端支持" aria-hidden="true">#</a> 移动端支持</h1><p>模板支持使用 vw/vh 做为移动端的布局单位，并默认集成了 <a href="https://www.npmjs.com/package/postcss-px-to-viewport" target="_blank" rel="noopener noreferrer">postcss-px-to-viewport</a> 插件。</p><p>使用也很简单，只需将根目录下的 <code>.postcss.config.js</code> 文件修改为 <code>postcss.config.js</code> 即可，文件内具体配置信息可根据项目实际调整：</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&#39;postcss-px-to-viewport&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 需要转换的单位，默认为 px</span>\n            unitToConvert<span class="token operator">:</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// 视窗的宽度，对应的是我们设计稿的宽度</span>\n            viewportWidth<span class="token operator">:</span> <span class="token number">750</span><span class="token punctuation">,</span>\n            <span class="token comment">// 指定 px 转换为视窗单位值的小数位数（很多时候无法整除）</span>\n            unitPrecision<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n            <span class="token comment">// 能转化为 vw 的属性列表</span>\n            propList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token comment">// 指定需要转换成的视窗单位，建议使用 vw</span>\n            viewportUnit<span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// 字体使用的视口单位</span>\n            fontViewportUnit<span class="token operator">:</span> <span class="token string">&#39;vw&#39;</span><span class="token punctuation">,</span>\n            <span class="token comment">// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名</span>\n            selectorBlackList<span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">&#39;.ignore&#39;</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token comment">// 小于或等于 1px 不转换为视窗单位，你也可以设置为你想要的值</span>\n            minPixelValue<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            <span class="token comment">// 允许在媒体查询中转换 px</span>\n            mediaQuery<span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>最后在开发中就可以直接使用 px 了，最终输出就是 vw 。</p>',5);t.render=function(a,p,t,e,c,r){return n(),s("div",null,[o])};export default t;export{p as __pageData};
