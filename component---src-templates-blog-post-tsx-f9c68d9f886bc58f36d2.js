(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{505:function(e,t,n){"use strict";n.r(t);n(41),n(286);var r=n(0),a=n.n(r),o=n(104),i=n(495),c=n(284),s=n(510),l=n(511),u=n(493),d=n(494),m=n(1),p=n.n(m),f=n(4),h=n.n(f),b=(n(6),n(181)),y=n(182),v=n(2),w=n(43),E=n(256);function g(e){var t=e.children,n=e.className,r=e.content,o=h()("header",n),i=Object(b.a)(g,e),c=Object(y.a)(g,e);return a.a.createElement(c,p()({},i,{className:o}),v.a.isNil(t)?r:t)}g.handledProps=["as","children","className","content"],g.propTypes={},g.create=Object(E.c)(g,(function(e){return{content:e}}));var O=g;function j(e){var t=e.children,n=e.className,r=e.content,o=h()("description",n),i=Object(b.a)(j,e),c=Object(y.a)(j,e);return a.a.createElement(c,p()({},i,{className:o}),v.a.isNil(t)?r:t)}j.handledProps=["as","children","className","content"],j.propTypes={},j.create=Object(E.c)(j,(function(e){return{content:e}}));var N=j;function _(e){var t=e.children,n=e.className,r=e.content,o=h()("extra",n),i=Object(b.a)(_,e),c=Object(y.a)(_,e);return a.a.createElement(c,p()({},i,{className:o}),v.a.isNil(t)?r:t)}_.handledProps=["as","children","className","content"],_.propTypes={},_.create=Object(E.c)(_,(function(e){return{content:e}}));var C=_;function I(e){var t=e.children,n=e.className,r=e.content,o=h()("meta",n),i=Object(b.a)(I,e),c=Object(y.a)(I,e);return a.a.createElement(c,p()({},i,{className:o}),v.a.isNil(t)?r:t)}I.handledProps=["as","children","className","content"],I.propTypes={},I.create=Object(E.c)(I,(function(e){return{content:e}}));var S=I;function k(e){var t=e.children,n=e.className,r=e.content,o=e.description,i=e.extra,c=e.header,s=e.meta,l=e.verticalAlign,u=h()(Object(w.f)(l),"content",n),d=Object(b.a)(k,e),m=Object(y.a)(k,e);return v.a.isNil(t)?a.a.createElement(m,p()({},d,{className:u}),O.create(c,{autoGenerateKey:!1}),S.create(s,{autoGenerateKey:!1}),N.create(o,{autoGenerateKey:!1}),C.create(i,{autoGenerateKey:!1}),r):a.a.createElement(m,p()({},d,{className:u}),t)}k.handledProps=["as","children","className","content","description","extra","header","meta","verticalAlign"],k.propTypes={};var P=k,D=(n(142),n(519)),T=n.n(D),x=n(106),M=n.n(x);function q(e){var t=e.children,n=e.className,r=e.content,o=e.divided,i=e.items,c=e.link,s=e.relaxed,l=e.unstackable,u=h()("ui",Object(w.a)(o,"divided"),Object(w.a)(c,"link"),Object(w.a)(l,"unstackable"),Object(w.b)(s,"relaxed"),"items",n),d=Object(b.a)(q,e),m=Object(y.a)(q,e);if(!v.a.isNil(t))return a.a.createElement(m,p()({},d,{className:u}),t);if(!v.a.isNil(r))return a.a.createElement(m,p()({},d,{className:u}),r);var f=M()(i,(function(e){var t=e.childKey,n=T()(e,["childKey"]),r=t||[n.content,n.description,n.header,n.meta].join("-");return a.a.createElement(K,p()({},n,{key:r}))}));return a.a.createElement(m,p()({},d,{className:u}),f)}q.handledProps=["as","children","className","content","divided","items","link","relaxed","unstackable"],q.propTypes={};var A=q,U=n(283);function G(e){var t=e.size,n=Object(b.a)(G,e);return a.a.createElement(U.a,p()({},n,{size:t,ui:!!t,wrapped:!0}))}G.handledProps=["size"],G.propTypes={},G.create=Object(E.c)(G,(function(e){return{src:e}}));var Q=G;function R(e){var t=e.children,n=e.className,r=e.content,o=e.description,i=e.extra,c=e.header,s=e.image,l=e.meta,u=h()("item",n),d=Object(b.a)(R,e),m=Object(y.a)(R,e);return v.a.isNil(t)?a.a.createElement(m,p()({},d,{className:u}),Q.create(s,{autoGenerateKey:!1}),a.a.createElement(P,{content:r,description:o,extra:i,header:c,meta:l})):a.a.createElement(m,p()({},d,{className:u}),t)}R.handledProps=["as","children","className","content","description","extra","header","image","meta"],R.Content=P,R.Description=N,R.Extra=C,R.Group=A,R.Header=O,R.Image=Q,R.Meta=S,R.propTypes={};var K=R,W=n(190),B=n(512),F=n(498),L=n(514),V=n(496);n.d(t,"pageQuery",(function(){return z}));t.default=Object(V.b)((function(e){var t=e.data.post,n=t.frontmatter,a=t.html,m=t.timeToRead,p=n.author.avatar.children[0],f=e.data.post.frontmatter.tags.map((function(e){return r.createElement(c.a,{key:e},r.createElement(o.Link,{to:"/blog/tags/"+e+"/"},e))})),h=e.data.recents.edges.map((function(e){var t=e.node,n=t.frontmatter.author.avatar.children[0],a=Object(i.get)(t,"frontmatter.image.children.0.fixed",{}),c=r.createElement(s.a.Group,null,r.createElement(s.a,null,r.createElement(s.a.Avatar,{src:n.fixed.src,srcSet:n.fixed.srcSet}),r.createElement(s.a.Content,null,r.createElement(s.a.Author,{style:{fontWeight:400}},t.frontmatter.author.id),r.createElement(s.a.Metadata,{style:{margin:0}},t.timeToRead," min read"))));return r.createElement("div",{key:t.fields.slug,style:{paddingBottom:"1em"}},r.createElement(l.a,{as:o.Link,to:t.fields.slug,image:a,header:t.frontmatter.title,extra:c}))})),b=Object(i.get)(n,"image.children.0.fixed",{});return r.createElement(u.a,null,r.createElement(F.a,null),r.createElement(d.a,{vertical:!0,style:{border:"none"}},r.createElement(K.Group,null,r.createElement(K,null,r.createElement(K.Image,{size:"tiny",src:p.fixed.src,srcSet:p.fixed.srcSet,circular:!0}),r.createElement(K.Content,null,r.createElement(K.Description,null,n.author.id),r.createElement(K.Meta,null,n.author.bio),r.createElement(K.Extra,null,n.updatedDate," - ",m," min read")))),r.createElement(W.a,{as:"h1"},n.title)),r.createElement(U.a,Object.assign({},b,{fluid:!0})),r.createElement(d.a,{vertical:!0,style:{border:"none"},dangerouslySetInnerHTML:{__html:a}}),r.createElement(d.a,{vertical:!0},f),e.data.site&&e.data.site.siteMetadata&&e.data.site.siteMetadata.disqus&&r.createElement(d.a,{vertical:!0},r.createElement(L.DiscussionEmbed,{shortname:e.data.site.siteMetadata.disqus,config:{}})),r.createElement(d.a,{vertical:!0},r.createElement(B.a,{padded:!0,centered:!0},h)))}));var z="1959793157"},513:function(e,t,n){"use strict";n(83),n(49),n(42),n(26),n(23),n(9),n(109),n(194),n(196),n(31),n(63),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var a=this,o=arguments,i=function(){r=null,n||e.apply(a,o)},c=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),c&&e.apply(a,o)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,a=!1,o=void 0;try{for(var c,s=n[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var l=c.value;if(e[l]!==t[l]&&!i(e[l]))return!0}}catch(u){a=!0,o=u}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}return!1};var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},514:function(e,t,n){"use strict";n(63),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n(515),a=n(516),o=n(518);t.CommentCount=r.CommentCount,t.CommentEmbed=a.CommentEmbed,t.DiscussionEmbed=o.DiscussionEmbed;var i={CommentCount:r.CommentCount,CommentEmbed:a.CommentEmbed,DiscussionEmbed:o.DiscussionEmbed};t.default=i},515:function(e,t,n){"use strict";n(191),n(82),n(63),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=n(513);var s=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?s():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(i.default.Component)},516:function(e,t,n){"use strict";n(517),n(29),n(33),n(9),n(191),n(82),n(63),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(i.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},517:function(e,t,n){"use strict";var r=n(18),a=n(56),o=n(72),i=n(195),c=n(107),s=n(22),l=n(143).f,u=n(193).f,d=n(32).f,m=n(145).trim,p=r.Number,f=p,h=p.prototype,b="Number"==o(n(108)(h)),y="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,o=(t=y?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,s=t.slice(2),l=0,u=s.length;l<u;l++)if((i=s.charCodeAt(l))<48||i>a)return NaN;return parseInt(s,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(b?s((function(){h.valueOf.call(n)})):"Number"!=o(n))?i(new f(v(t)),n,p):v(t)};for(var w,E=n(30)?l(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;E.length>g;g++)a(f,w=E[g])&&!a(p,w)&&d(p,w,u(f,w));p.prototype=h,h.constructor=p,n(35)(r,"Number",p)}},518:function(e,t,n){"use strict";n(191),n(82),n(63),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=(r=o)&&r.__esModule?r:{default:r},c=n(513);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}(i.default.Component)},519:function(e,t,n){var r=n(287);e.exports=function(e,t){if(null==e)return{};var n,a,o=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-f9c68d9f886bc58f36d2.js.map