(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[10],{144:function(e,s,a){"use strict";a.r(s);var t=a(2),c=a(4),n=a(0),o=a(162),l=a(27),r=a(16),d=a(38);s.default=function(e){var s,a=e.model,i=Object(d.d)();0!==e.model.posts_o.length&&(i=e.model.posts_o);var m=Object(l.b)(),j=Object(c.a)(m,1)[0].$;return Object(n.useEffect)((function(){var e=j(".home-slider");return e.owlCarousel({loop:!0,autoplay:!1,margin:10,animateOut:"fadeOut",animateIn:"fadeIn",nav:!0,autoplayHoverPause:!0,items:1,navText:['<span class="ion-chevron-left"></span>','<span class="ion-chevron-right"></span>'],responsive:{0:{items:1,nav:!1},600:{items:1,nav:!1},1e3:{items:1,nav:!0}}}),function(){e.owlCarousel("destroy")}}),[j]),Object(t.jsx)(r.b,{model:a,className:"owl-carousel owl-theme home-slider",children:null===(s=i)||void 0===s?void 0:s.map((function(e,s){return Object(t.jsx)(r.b,{model:a,fieldId:"posts_o",index:s,children:Object(t.jsx)(o.d,{tags:"Food",model:e,showBlurb:!0,format:o.a,classes:{root:"height-lg",innerWrapper:"half-to-full"}})},e.craftercms.id)}))})}},162:function(e,s,a){"use strict";a.d(s,"b",(function(){return d})),a.d(s,"c",(function(){return i})),a.d(s,"a",(function(){return m}));var t=a(2),c=a(4),n=(a(0),a(34)),o=a(168),l=a(16),r="portrait",d="landscape",i="landscapeCompressed",m="imageBackground";s.d=function(e){var s,a,j=Object(o.a)().formatDate,b=e.classes,u=e.format,p=void 0===u?r:u,h=e.showBlurb,x=void 0!==h&&h,f=e.numOfComments,O=e.model,v=e.model,g=Object(c.a)(v.authorBio_o,1)[0],N=g.name_s,I=g.profilePic_s,_=v.headline_s,w=v.mainImage_s,y=v.mainImageAlt_s,k=void 0===y?"":y,B=v.categories_o,C=v.craftercms.dateModified,F=O.craftercms.path.replace(/(\/site\/components)|(index\.xml)/g,"").replace(/(\/site\/website)|(index\.xml)/g,"").replace(/(\/\/)/g,"/").replace(".xml","");switch(p){case r:return Object(t.jsxs)(l.b,{component:n.b,model:O,to:F,className:"blog-entry ".concat(null!==(s=null===b||void 0===b?void 0:b.root)&&void 0!==s?s:""),children:[Object(t.jsx)("div",{className:"img-container",children:Object(t.jsx)(l.d,{component:"img",model:O,renderTarget:"src",fieldId:"mainImage_s",alt:k})}),Object(t.jsxs)("div",{className:"blog-content-body",children:[Object(t.jsxs)("div",{className:"post-meta",children:[Object(t.jsxs)(l.b,{component:"span",model:O,fieldId:"authorBio_o",index:0,className:"author mr-2",children:[Object(t.jsx)("img",{src:I,alt:""})," ",N]})," \u2022 ",Object(t.jsx)("span",{className:"mr-2",children:j(C)}),f&&Object(t.jsxs)(t.Fragment,{children:[" \u2022 ",Object(t.jsxs)("span",{className:"ml-2",children:[Object(t.jsx)("span",{className:"fa fa-comments"})," ",f]})]})]}),Object(t.jsx)(l.d,{component:"h2",model:O,fieldId:"headline_s"})]})]});case d:return Object(t.jsx)("div",{className:"post-entry-horizontal",children:Object(t.jsxs)(l.b,{component:n.b,model:O,to:F,className:null===b||void 0===b?void 0:b.root,children:[Object(t.jsx)(l.d,{model:O,fieldId:"mainImage_s",renderTarget:"style.backgroundImage",format:function(e){return"url(".concat(e,")")},className:"image"}),Object(t.jsxs)("span",{className:"text",children:[Object(t.jsxs)("div",{className:"post-meta",children:[Object(t.jsxs)(l.b,{className:"author mr-2",model:O,fieldId:"authorBio_o",index:0,children:[Object(t.jsx)("img",{src:I,alt:k})," ",N]}),"\u2022 ",Object(t.jsx)("span",{className:"mr-2",children:j(C)}),f&&Object(t.jsxs)(t.Fragment,{children:["\u2022 ",Object(t.jsxs)("span",{className:"ml-2",children:[Object(t.jsx)("span",{className:"fa fa-comments"})," $",f]})]})]}),Object(t.jsx)(l.d,{component:"h2",fieldId:"headline_s",model:O})]})]})});case i:return Object(t.jsxs)(l.b,{component:n.b,model:O,to:F,className:null===b||void 0===b?void 0:b.root,children:[Object(t.jsx)(l.d,{component:"img",renderTarget:"src",model:O,fieldId:"mainImage_s",className:"mr-4",alt:""}),Object(t.jsxs)("div",{className:"text",children:[Object(t.jsx)(l.d,{component:"h4",model:O,fieldId:"headline_s"}),Object(t.jsx)("div",{className:"post-meta",children:Object(t.jsx)("span",{className:"mr-2",children:j(C)})})]})]});case m:return Object(t.jsx)(l.b,{model:O,fieldId:"mainImage_s",className:"a-block d-flex align-items-center ".concat(null!==(a=null===b||void 0===b?void 0:b.root)&&void 0!==a?a:""),style:{backgroundImage:"url(".concat(w,")")},children:Object(t.jsxs)(l.b,{component:n.b,model:O,to:F,className:"text ".concat(null===b||void 0===b?void 0:b.innerWrapper),children:[Object(t.jsxs)("div",{className:"post-meta",children:[B&&Object(t.jsxs)(t.Fragment,{children:[null===B||void 0===B?void 0:B.map((function(e){return Object(t.jsx)("span",{className:"category",children:e.value_smv},e.key)}))," \u2022 "]}),Object(t.jsx)("span",{className:"mr-2",children:j(C)}),f&&Object(t.jsxs)(t.Fragment,{children:[" \u2022 ",Object(t.jsxs)("span",{className:"ml-2",children:[Object(t.jsx)("span",{className:"fa fa-comments"})," ",f]})]})]}),Object(t.jsx)(l.d,{component:"h3",model:O,fieldId:"headline_s"}),x&&Object(t.jsx)(l.d,{component:"p",model:O,fieldId:"blurb_t"})]})});default:return console.error('Unknown PostCard format "'.concat(p,'" on post "').concat(_,'"')),Object(t.jsx)(l.b,{component:n.b,model:O,to:F,className:null===b||void 0===b?void 0:b.root,children:Object(t.jsx)("h2",{children:_})})}}},168:function(e,s,a){"use strict";a.d(s,"a",(function(){return o}));var t=a(0),c=a(83),n=a(12);function o(){var e=Object(t.useContext)(c.a);return Object(n.f)(e),e}}}]);
//# sourceMappingURL=10.66b080ce.chunk.js.map