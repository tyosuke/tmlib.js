Ext.data.JsonP.Function({"alternateClassNames":[],"aliases":{},"html_meta":{},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/function.html#Function' target='_blank'>function.js</a></div></pre><div class='doc-contents'><p>関数</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Function'>Function</span><br/><a href='source/function.html#Function-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-method-bind' class='name expandable'>bind</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>バインド ...</div><div class='long'><p>バインド</p>\n</div></div></div><div id='method-toArrayFunction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Function'>Function</span><br/><a href='source/function.html#Function-method-toArrayFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-method-toArrayFunction' class='name expandable'>toArrayFunction</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>関数を配列対応関数に変換. ...</div><div class='long'><p>関数を配列対応関数に変換.\nforEach の逆アプローチ的な感じ.\n配列を継承したクラスなどに使用する.</p>\n\n<h2>Example</h2>\n\n<pre><code> var hoge = function(n) { console.log(this*n); return this*n; };\n var arr = [5, 10, 15];\n arr.hogeArray = hoge.toArrayFunction();\n var result = arr.hogeArray(100);\n console.log(result);\n</code></pre>\n</div></div></div></div></div></div></div>","statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"linenr":8,"extends":null,"uses":[],"enum":null,"superclasses":[],"meta":{},"component":false,"requires":[],"files":[{"href":"function.html#Function","filename":"function.js"}],"mixedInto":[],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"owner":"Function","meta":{},"name":"bind","id":"method-bind","tagname":"method"},{"owner":"Function","meta":{},"name":"toArrayFunction","id":"method-toArrayFunction","tagname":"method"}],"event":[],"css_mixin":[]},"inheritdoc":null,"inheritable":null,"private":null,"parentMixins":[],"name":"Function","singleton":false,"override":null,"subclasses":[],"id":"class-Function","tagname":"class","mixins":[]});