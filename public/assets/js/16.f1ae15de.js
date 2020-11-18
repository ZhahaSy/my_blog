(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{498:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"什么是csrf攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是csrf攻击"}},[s._v("#")]),s._v(" 什么是CSRF攻击？")]),s._v(" "),a("p",[s._v("CSRF(Cross-site request forgery), 即跨站请求伪造，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户"),a("strong",[s._v("目前的登录状态")]),s._v("发起跨站请求。")]),s._v(" "),a("p",[s._v("举个例子, 你在某个论坛点击了黑客精心挑选的小姐姐图片，你点击后，进入了一个新的页面。")]),s._v(" "),a("p",[s._v("那么恭喜你，被攻击了:）")]),s._v(" "),a("p",[s._v("你可能会比较好奇，怎么突然就被攻击了呢？接下来我们就来拆解一下当你点击了链接之后，黑客在背后做了哪些事情。")]),s._v(" "),a("p",[s._v("可能会做三样事情。列举如下：")]),s._v(" "),a("h3",{attrs:{id:"_1-自动发-get-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-自动发-get-请求"}},[s._v("#")]),s._v(" 1. 自动发 GET 请求")]),s._v(" "),a("p",[s._v("黑客网页里面可能有一段这样的代码:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://xxx.com/info?user=hhh&count=100"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("img"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("进入页面后自动发送 get 请求，值得注意的是，这个请求会自动带上关于 xxx.com 的 cookie 信息(这里是假定你已经在 xxx.com 中登录过)。")]),s._v(" "),a("p",[s._v("假如服务器端没有相应的验证机制，它可能认为发请求的是一个正常的用户，因为携带了相应的 cookie，然后进行相应的各种操作，可以是转账汇款以及其他的恶意操作。")]),s._v(" "),a("h3",{attrs:{id:"_2-自动发-post-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-自动发-post-请求"}},[s._v("#")]),s._v(" 2. 自动发 POST 请求")]),s._v(" "),a("p",[s._v("黑客可能自己填了一个表单，写了一段自动提交的脚本。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("form id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hacker-form'")]),s._v(" action"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://xxx.com/info"')]),s._v(" method"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"POST"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hidden"')]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hhh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("input type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hidden"')]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count"')]),s._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hacker-form'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("submit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("同样也会携带相应的用户 cookie 信息，让服务器误以为是一个正常的用户在操作，让各种恶意的操作变为可能。")]),s._v(" "),a("h3",{attrs:{id:"_3-诱导点击发送-get-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-诱导点击发送-get-请求"}},[s._v("#")]),s._v(" 3. 诱导点击发送 GET 请求")]),s._v(" "),a("p",[s._v("在黑客的网站上，可能会放上一个链接，驱使你来点击:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://xxx/info?user=hhh&count=100"')]),s._v(" taget"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"_blank"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("点击进入修仙世界"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("点击后，自动发送 get 请求，接下来和"),a("code",[s._v("自动发 GET 请求")]),s._v("部分同理。")]),s._v(" "),a("p",[s._v("这就是"),a("code",[s._v("CSRF")]),s._v("攻击的原理。和"),a("code",[s._v("XSS")]),s._v("攻击对比，CSRF 攻击并不需要将恶意代码注入用户当前页面的"),a("code",[s._v("html")]),s._v("文档中，而是跳转到新的页面，利用服务器的"),a("strong",[s._v("验证漏洞")]),s._v("和"),a("strong",[s._v("用户之前的登录状态")]),s._v("来模拟用户进行操作。")]),s._v(" "),a("h2",{attrs:{id:"防范措施"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防范措施"}},[s._v("#")]),s._v(" 防范措施")]),s._v(" "),a("h3",{attrs:{id:"_1-利用cookie的samesite属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-利用cookie的samesite属性"}},[s._v("#")]),s._v(" 1. 利用Cookie的SameSite属性")]),s._v(" "),a("p",[a("code",[s._v("CSRF攻击")]),s._v("中重要的一环就是自动发送目标站点下的 "),a("code",[s._v("Cookie")]),s._v(",然后就是这一份 Cookie 模拟了用户的身份。因此在"),a("code",[s._v("Cookie")]),s._v("上面下文章是防范的不二之选。")]),s._v(" "),a("p",[s._v("恰好，在 Cookie 当中有一个关键的字段，可以对请求中 Cookie 的携带作一些限制，这个字段就是"),a("code",[s._v("SameSite")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("SameSite")]),s._v("可以设置为三个值，"),a("code",[s._v("Strict")]),s._v("、"),a("code",[s._v("Lax")]),s._v("和"),a("code",[s._v("None")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("a.")]),s._v(" 在"),a("code",[s._v("Strict")]),s._v("模式下，浏览器完全禁止第三方请求携带Cookie。比如请求"),a("code",[s._v("sanyuan.com")]),s._v("网站只能在"),a("code",[s._v("sanyuan.com")]),s._v("域名当中请求才能携带 Cookie，在其他网站请求都不能。")]),s._v(" "),a("p",[a("strong",[s._v("b.")]),s._v(" 在"),a("code",[s._v("Lax")]),s._v("模式，就宽松一点了，但是只能在 "),a("code",[s._v("get 方法提交表单")]),s._v("况或者"),a("code",[s._v("a 标签发送 get 请求")]),s._v("的情况下可以携带 Cookie，其他情况均不能。")]),s._v(" "),a("p",[a("strong",[s._v("c.")]),s._v(" 在"),a("code",[s._v("None")]),s._v("模式下，也就是默认模式，请求会自动携带上 Cookie。")]),s._v(" "),a("h3",{attrs:{id:"_2-验证来源站点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-验证来源站点"}},[s._v("#")]),s._v(" 2. 验证来源站点")]),s._v(" "),a("p",[s._v("这就需要要用到请求头中的两个字段: "),a("strong",[s._v("Origin")]),s._v("和"),a("strong",[s._v("Referer")]),s._v("。")]),s._v(" "),a("p",[s._v("其中，"),a("strong",[s._v("Origin")]),s._v("只包含域名信息，而"),a("strong",[s._v("Referer")]),s._v("包含了"),a("code",[s._v("具体")]),s._v("的 URL 路径。")]),s._v(" "),a("p",[s._v("当然，这两者都是可以伪造的，通过 Ajax 中自定义请求头即可，安全性略差。")]),s._v(" "),a("h3",{attrs:{id:"_3-csrf-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-csrf-token"}},[s._v("#")]),s._v(" 3. CSRF Token")]),s._v(" "),a("p",[a("code",[s._v("Django")]),s._v("作为 Python 的一门后端框架，用它开发过的同学就知道，在它的模板(template)中, 开发表单时，经常会附上这样一行代码:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("{% csrf_token %}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这就是"),a("code",[s._v("CSRF Token")]),s._v("的典型应用。那它的原理是怎样的呢？")]),s._v(" "),a("p",[s._v("首先，浏览器向服务器发送请求时，服务器生成一个字符串，将其植入到返回的页面中。")]),s._v(" "),a("p",[s._v("然后浏览器如果要发送请求，就必须带上这个字符串，然后服务器来验证是否合法，如果不合法则不予响应。这个字符串也就是"),a("code",[s._v("CSRF Token")]),s._v("，通常第三方站点无法拿到这个 token, 因此也就是被服务器给拒绝。")]),s._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("CSRF(Cross-site request forgery), 即跨站请求伪造，指的是黑客诱导用户点击链接，打开黑客的网站，然后黑客利用用户目前的登录状态发起跨站请求。")]),s._v(" "),a("p",[a("code",[s._v("CSRF")]),s._v("攻击一般会有三种方式:")]),s._v(" "),a("ul",[a("li",[s._v("自动 GET 请求")]),s._v(" "),a("li",[s._v("自动 POST 请求")]),s._v(" "),a("li",[s._v("诱导点击发送 GET 请求。")])]),s._v(" "),a("p",[s._v("防范措施: "),a("code",[s._v("利用 Cookie 的 SameSite 属性")]),s._v("、"),a("code",[s._v("验证来源站点")]),s._v("和"),a("code",[s._v("CSRF Token")]),s._v("。")])])}),[],!1,null,null,null);t.default=r.exports}}]);