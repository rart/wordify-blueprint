(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[4,12],{187:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n,r,l=t(0),s=t(5),i=t(86),c=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t};!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(r||(r={}));function o(e){var a=function(a){return l.createElement(i.a.Consumer,null,(function(t){Object(s.f)(t);var n=a.value,r=a.children,l=c(a,["value","children"]),i="string"===typeof n?new Date(n||0):n;return r("formatDate"===e?t.formatDateToParts(i,l):t.formatTimeToParts(i,l))}))};return a.displayName=r[e],a}function u(e){var a=function(a){return l.createElement(i.a.Consumer,null,(function(t){Object(s.f)(t);var n=a.value,r=a.children,i=c(a,["value","children"]),o=t[e](n,i);if("function"===typeof r)return r(o);var u=t.textComponent||l.Fragment;return l.createElement(u,null,o)}))};return a.displayName=n[e],a}function m(e){return e}u("formatDate"),u("formatTime"),u("formatNumber"),u("formatList"),u("formatDisplayName"),o("formatDate"),o("formatTime")},192:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"c",(function(){return m})),t.d(a,"a",(function(){return d}));var n=t(4),r=t(0),l=t.n(r),s=t(25),i=t(193),c=t(73),o=t(11),u="landscape",m="landscapeCompressed",d="imageBackground";a.d=function(e){var a,t,r,f=Object(i.a)().formatDate,p=Object(o.b)(),g=Object(n.a)(p,1)[0].isAuthoring,b=e.classes,v=e.parentModelId,N=e.format,E=void 0===N?"portrait":N,h=e.showBlurb,y=void 0!==h&&h,C=e.numOfComments,k=e.model,O=e.model,P=Object(n.a)(O.authorBio_o,1)[0],x=P.name_s,j=P.profilePic_s,L=O.blurb_t,_=O.headline_s,w=O.mainImage_s,D=O.mainImageAlt_s,T=void 0===D?"":D,F=O.categories_o,B=O.craftercms.dateModified,I=k.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace(".xml",""),M=Object(c.b)({model:k,parentModelId:v,isAuthoring:g}).props;switch(E){case"portrait":return l.a.createElement(s.b,Object.assign({to:I,className:"blog-entry ".concat(null!==(a=null===b||void 0===b?void 0:b.root)&&void 0!==a?a:"")},M),l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{src:w,alt:T})),l.a.createElement("div",{className:"blog-content-body"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:j,alt:""})," ",x)," \u2022 ",l.a.createElement("span",{className:"mr-2"},f(B)),C&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",C))),l.a.createElement("h2",null,_)));case u:return l.a.createElement("div",Object.assign({className:"post-entry-horizontal"},M),l.a.createElement(s.b,{to:I,className:null===b||void 0===b?void 0:b.root},l.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(w,")")}}),l.a.createElement("span",{className:"text"},l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"author mr-2"},l.a.createElement("img",{src:j,alt:""})," ",x),"\u2022 ",l.a.createElement("span",{className:"mr-2"},f(B)),C&&l.a.createElement(l.a.Fragment,null,"\u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," $",C))),l.a.createElement("h2",null,_))));case m:return l.a.createElement(s.b,Object.assign({to:I,className:null===b||void 0===b?void 0:b.root},M),l.a.createElement("img",{src:w,alt:T,className:"mr-4"}),l.a.createElement("div",{className:"text"},l.a.createElement("h4",null,_),l.a.createElement("div",{className:"post-meta"},l.a.createElement("span",{className:"mr-2"},f(B)))));case d:return l.a.createElement(s.b,{to:I,className:"a-block d-flex align-items-center ".concat(null!==(t=null===b||void 0===b?void 0:b.root)&&void 0!==t?t:""),style:{backgroundImage:"url(".concat(w,")")}},l.a.createElement("div",Object.assign({className:"text ".concat(null===b||void 0===b?void 0:b.innerWrapper)},M),l.a.createElement("div",{className:"post-meta"},F&&l.a.createElement(l.a.Fragment,null,null===F||void 0===F?void 0:F.map((function(e){return l.a.createElement("span",{className:"category",key:e.key},e.value_smv)}))," \u2022 "),l.a.createElement("span",{className:"mr-2"},f(B)),C&&l.a.createElement(l.a.Fragment,null," \u2022 ",l.a.createElement("span",{className:"ml-2"},l.a.createElement("span",{className:"fa fa-comments"})," ",C))),l.a.createElement("h3",null,null!==(r=_.text)&&void 0!==r?r:_),y&&l.a.createElement("p",null,L)));default:return console.error('Unknown PostCard format "'.concat(E,'" on post "').concat(_,'"')),l.a.createElement(s.b,Object.assign({to:I,className:null===b||void 0===b?void 0:b.root},M),l.a.createElement("h2",null,_))}}},193:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),r=t(86),l=t(5);function s(){var e=Object(n.useContext)(r.a);return Object(l.f)(e),e}},194:function(e,a,t){"use strict";var n=t(90),r=t(60),l=t(88),s=t(62),i=t(61),c=t(0),o=t(86),u=t(89),m=t(5),d=t(74),f=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t},p=t.n(d).a||d;function g(e,a){return Object(u.a)(Object.assign(Object.assign({},m.a),{locale:"en"}),Object(m.b)(),e,a)}var b=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){var a=this.props,t=a.values,n=f(a,["values"]),r=e.values,l=f(e,["values"]);return!p(r,t)||!p(n,l)}},{key:"render",value:function(){var e=this;return c.createElement(o.a.Consumer,null,(function(a){e.props.defaultMessage||Object(m.f)(a);var t=a||{},r=t.formatMessage,l=void 0===r?g:r,s=t.textComponent,i=void 0===s?c.Fragment:s,o=e.props,u=o.id,d=o.description,f=o.defaultMessage,p=o.values,b=o.children,v=o.tagName,N=void 0===v?i:v,E=l({id:u,description:d,defaultMessage:f},p);return Array.isArray(E)||(E=[E]),"function"===typeof b?b.apply(void 0,Object(n.a)(E)):N?c.createElement.apply(c,[N,null].concat(Object(n.a)(E))):E}))}}]),t}(c.Component);b.displayName="FormattedMessage",b.defaultProps={values:{}},a.a=b},195:function(e,a,t){"use strict";var n=t(31),r=t(17),l=t(0),s=t.n(l);a.a=function(e){var a=Object(r.a)(e),t=e.component,l=void 0===t?"div":t,i=Object(n.a)({},e);return delete i.model,delete i.component,delete i.fieldId,s.a.createElement(l,Object.assign({},a,i))}},196:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n);a.default=function(e){var a=e.ice,t=e.model,n=t.bio_t,l=t.name_s,s=t.profilePic_s,i=t.linkButtonText_s,c=t.linkButtonUrl_s,o=t.showLinkButton_b,u=t.facebookLink_s,m=t.twitterLink_s,d=t.instagramLink_s,f=t.youTubeLink_s;return r.a.createElement("div",Object.assign({className:"sidebar-box"},a),r.a.createElement("div",{className:"bio text-center"},r.a.createElement("img",{src:s,alt:"",className:"img-fluid"}),r.a.createElement("div",{className:"bio-body"},r.a.createElement("h2",null,l),r.a.createElement("p",null,n),o&&r.a.createElement("p",null,r.a.createElement("a",{href:c,className:"btn btn-primary btn-sm rounded"},i)),r.a.createElement("p",{className:"social"},u&&r.a.createElement("a",{href:u,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-facebook"})),m&&r.a.createElement("a",{href:m,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-twitter"})),d&&r.a.createElement("a",{href:d,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-instagram"})),f&&r.a.createElement("a",{href:f,className:"p-2",target:"_blank",rel:"noreferrer noopener"},r.a.createElement("span",{className:"fa fa-youtube-play"}))))))}},199:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(196),s=t(17),i=t(195);function c(e){var a=e.model,t=Object(s.d)(e);return r.a.createElement(l.default,{ice:t,model:a})}a.a=function(e){var a,t=e.model,n=e.fieldId;return r.a.createElement(i.a,{model:t,component:"div",fieldId:n,style:{float:"left"},className:"bio-zone"},null===(a=t[n])||void 0===a?void 0:a.map((function(e){return r.a.createElement(c,{key:e.craftercms.id,model:e})})))}},200:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(194),s=t(192),i=t(17);a.a=function(){var e=Object(i.f)();return r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},r.a.createElement(l.a,{id:"common.latestPostsTitle",defaultMessage:"Latest Posts"})),r.a.createElement("div",{className:"post-entry-sidebar"},r.a.createElement("ul",null,null===e||void 0===e?void 0:e.map((function(e){return r.a.createElement("li",{key:e.craftercms.id},r.a.createElement(s.d,{model:e,format:s.c}))})))))}},201:function(e,a,t){"use strict";t.d(a,"b",(function(){return d})),t.d(a,"a",(function(){return f}));var n=t(0),r=t.n(n),l=t(194),s=t(17),i=t(15),c=t(59),o=t(36);function u(e){var a,t,n=e.title,l=e.filter,i=e.baseUrl,c=e.listClass,u=e.resource.read().data,m=Object(o.a)(u.taxonomy.items).filter(l)[0],d=Object(s.d)({model:m});return Array.isArray(null===m||void 0===m||null===(a=m.items)||void 0===a?void 0:a.item)&&m.items.item.length>0&&r.a.createElement("div",{className:"sidebar-box"},r.a.createElement("h3",{className:"heading"},n),r.a.createElement("ul",Object.assign({className:c},d),null===m||void 0===m||null===(t=m.items)||void 0===t?void 0:t.item.map((function(e){return r.a.createElement("li",{key:e.key},r.a.createElement("a",{href:"".concat(i,"/").concat(e.key)},e.value))}))))}function m(e){var a=Object(s.i)();return r.a.createElement(n.Suspense,{fallback:r.a.createElement(c.a,{screenHeight:!1})},r.a.createElement(u,Object.assign({},e,{resource:a})))}function d(){return r.a.createElement(m,{title:r.a.createElement(l.a,{id:"sidebarTags.tagsSectionTitle",defaultMessage:"Tags"}),filter:Object(i.c)("tags.xml"),baseUrl:"/tag",listClass:"tags"})}function f(){return r.a.createElement(m,{title:r.a.createElement(l.a,{id:"sidebarCategories.categoriesSectionTitle",defaultMessage:"Categories"}),filter:Object(i.c)("categories.xml"),baseUrl:"/category",listClass:"categories"})}},202:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(187),s=t(193),i=t(91),c=Object(l.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(s.a)().formatMessage;return r.a.createElement("div",{className:"sidebar-box search-form-wrap"},r.a.createElement(i.a,{id:"s",placeholder:e(c.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},203:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(204),s=t.n(l);a.a=function(e){var a=e.pageCount,t=e.onPageChange;return r.a.createElement(s.a,{containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:0,pageCount:a,onPageChange:function(e){var a=e.selected;return t(a)},disableInitialCallback:!0,previousLabel:r.a.createElement("span",null,"<"),nextLabel:r.a.createElement("span",null,">")})}},204:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,r=t(205),l=(n=r)&&n.__esModule?n:{default:n};a.default=l.default},205:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),r=t(0),l=o(r),s=o(t(49)),i=o(t(206)),c=o(t(207));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,r=a.pageCount,s=a.marginPagesDisplayed,i=a.breakLabel,o=a.breakClassName,u=a.breakLinkClassName,m=t.state.selected;if(r<=n)for(var d=0;d<r;d++)e.push(t.getPageElement(d));else{var f=n/2,p=n-f;m>r-n/2?f=n-(p=r-m):m<n/2&&(p=n-(f=m));var g=void 0,b=void 0,v=void 0,N=function(e){return t.getPageElement(e)};for(g=0;g<r;g++)(b=g+1)<=s||b>r-s||g>=m-f&&g<=m+p?e.push(N(g)):i&&e[e.length-1]!==v&&(v=l.default.createElement(c.default,{key:g,breakLabel:i,breakClassName:o,breakLinkClassName:u,onClick:t.handleBreakClick.bind(null,g)}),e.push(v))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,r=t.pageLinkClassName,s=t.activeClassName,c=t.activeLinkClassName,o=t.extraAriaContext;return l.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:r,activeClassName:s,activeLinkClassName:c,extraAriaContext:o,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,r=e.pageCount,s=e.containerClassName,i=e.previousLinkClassName,c=e.previousLabel,o=e.nextLinkClassName,u=e.nextLabel,m=this.state.selected,d=t+(0===m?" "+a:""),f=n+(m===r-1?" "+a:""),p=0===m?"true":"false",g=m===r-1?"true":"false";return l.default.createElement("ul",{className:s},l.default.createElement("li",{className:d},l.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":p},c)),this.pagination(),l.default.createElement("li",{className:f},l.default.createElement("a",{onClick:this.handleNextPage,className:o,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":g},u)))}}]),a}(r.Component);u.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=u},206:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l(t(0)),r=l(t(49));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.onClick,l=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",s=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:r,role:"button",className:t,href:l,tabIndex:"0","aria-label":s,"aria-current":i,onKeyPress:r},e.page))};s.propTypes={onClick:r.default.func.isRequired,selected:r.default.bool.isRequired,pageClassName:r.default.string,pageLinkClassName:r.default.string,activeClassName:r.default.string,activeLinkClassName:r.default.string,extraAriaContext:r.default.string,href:r.default.string,ariaLabel:r.default.string,page:r.default.number.isRequired},a.default=s},207:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=l(t(0)),r=l(t(49));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,l=e.onClick,s=t||"break";return n.default.createElement("li",{className:s},n.default.createElement("a",{className:r,onClick:l,role:"button",tabIndex:"0",onKeyPress:l},a))};s.propTypes={breakLabel:r.default.oneOfType([r.default.string,r.default.node]),breakClassName:r.default.string,breakLinkClassName:r.default.string,onClick:r.default.func.isRequired},a.default=s},217:function(e,a,t){"use strict";t.r(a);var n=t(31),r=t(4),l=t(0),s=t.n(l),i=t(87),c=t(200),o=t(192),u=t(199),m=t(202),d=t(201),f=t(17),p=t(25),g=function(e){var a=e.category,t=e.isTag?"tag":"category";return s.a.createElement(p.b,{to:"/".concat(t,"/").concat(a.key),className:"blog-entry category-card"},a.image_s&&s.a.createElement("img",{className:"background",src:a.image_s,alt:a.value}),s.a.createElement("h2",{className:"title"},a.value))},b=t(36),v=t(15),N=t(59),E=t(203);function h(e){var a,t,i=e.resource,c=e.isTag,u=e.categoryId,m=i.read().data,d=Object(b.a)(m.taxonomy.items).filter(Object(v.c)(c?"tags.xml":"categories.xml"))[0],p=Object(f.d)({model:d}),N=Object(l.useState)({itemsPerPage:8,currentPage:0}),h=Object(r.a)(N,2),y=h[0],C=h[1];u&&(t=null===d||void 0===d?void 0:d.items.item.filter((function(e){return e.key===u}))[0]);var k=Object(f.e)(y,t);return s.a.createElement(s.a.Fragment,null,u?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h2",{className:"mb-4"},c?"Tag":"Category",": ",null===(a=t)||void 0===a?void 0:a.value)),s.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},s.a.createElement("div",{className:"row mb-5 mt-5"},s.a.createElement("div",{className:"col-md-12"},null===k||void 0===k?void 0:k.items.map((function(e){return s.a.createElement(o.d,{key:e.craftercms.id,model:e,format:o.b})})))),(null===k||void 0===k?void 0:k.pageCount)>1&&s.a.createElement("div",{className:"row mt-5"},s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("nav",{"aria-label":"Categories navigation",className:"text-center"},s.a.createElement(E.a,{pageCount:k.pageCount,onPageChange:function(e){C(Object(n.a)({},y,{currentPage:e}))}})))))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h2",{className:"mb-4"},c?"Tags":"Categories",":")),s.a.createElement("div",{className:"col-md-12 col-lg-8"},s.a.createElement("div",Object.assign({className:"row"},p),null===d||void 0===d?void 0:d.items.item.map((function(e){return s.a.createElement("div",{className:"col-md-6 mb-4",key:e.key},s.a.createElement(g,{category:e,isTag:c}))}))))))}a.default=function(e){var a=e.model,t=e.match,n=e.meta,o=n.siteTitle,p=n.socialLinks,g="/tag/:id?"===t.path,b=Object(l.useState)(),v=Object(r.a)(b,2),E=v[0],y=v[1],C=Object(f.i)();return Object(l.useEffect)((function(){"/category/:id?"!==t.path&&"/tag/:id?"!==t.path||y(t.params.id)}),[t.params,t.path]),s.a.createElement(i.a,{siteTitle:o,socialLinks:p},s.a.createElement("section",{className:"site-section pt-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row blog-entries"},s.a.createElement(l.Suspense,{fallback:s.a.createElement(N.a,{screenHeight:!1})},s.a.createElement(h,{resource:C,categoryId:E,isTag:g})),s.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},s.a.createElement(m.a,null),s.a.createElement(u.a,{model:a,fieldId:"bios_o"}),s.a.createElement(c.a,null),s.a.createElement(d.a,null),s.a.createElement(d.b,null))))))}}}]);
//# sourceMappingURL=4.f8e9ee68.chunk.js.map