"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[728],{5728:function(e,i,n){n.r(i),n.d(i,{CRPage:function(){return Q},default:function(){return X}});var t=n(2904),l=n(8794),r=n(952),s=n(1288),o=n(3182),d=n(1831),a=n(5322),x=n(1431),c=n(7615),u=n(6830),h=n(1756),j=n(2158),v=n(3129),m=n(6564),p=n(2122),f=n(7437),g=n(5737),b=n(5432),C=n(5887);function y(){var e,i,n,t;(0,p.mq)({eventName:d.FP.PAGE_VIEW,eventProperties:{type:d.bB,page:"assertion-list-page"}});var l=(0,h.useState)(""),r=(0,x.Z)(l,2),s=r[0],o=r[1],a=g.n.getState(),y=a.assertionsOnly,z=a.isCloudReport,S=(y||{}).metadata,w=z?b.ee:b.p0;return(0,C.jsxs)(c.xu,{children:[(0,C.jsxs)(u.bZ,{status:"warning",mb:5,children:[(0,C.jsx)(u.zM,{}),(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(u.Cd,{children:"The Assertions page is deprecated and will be removed in the future"}),(0,C.jsxs)(u.X,{fontSize:"sm",children:["If you have a strong need for this page, please contact us by the"," ",(0,C.jsx)(c.rU,{href:w,style:{textDecoration:"underline"},children:"feedback link"}),". Your feedback is important to us. Thank you!"]})]})]}),(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Assertions"})}),(0,C.jsx)(c.kC,{maxW:f.eb-50,w:"100%",mt:5,children:(0,C.jsx)(j.f,{onChange:o,filterString:s})}),(0,C.jsx)(c.kC,{justify:"start",maxW:f.eb-50,w:"100%",my:5,children:(0,C.jsx)(v.z4,{baseAssertionFailed:null===S||void 0===S||null===(e=S.base)||void 0===e?void 0:e.failed,baseAssertionTotal:null===S||void 0===S||null===(i=S.base)||void 0===i?void 0:i.total,targetAssertionFailed:null===S||void 0===S||null===(n=S.target)||void 0===n?void 0:n.failed,targetAssertionTotal:null===S||void 0===S||null===(t=S.target)||void 0===t?void 0:t.total})}),(0,C.jsx)(m.O,{w:f.eb,comparableAssertions:y,filterString:s,setFilterString:o})]})}var z=n(4163);function S(){var e,i;(0,p.mq)({eventName:d.FP.PAGE_VIEW,eventProperties:{type:d.bB,page:"metrics-page"}});var n=d.nq.getState().BMOnly,t=null!==(e=null!==(i=null===n||void 0===n?void 0:n.target)&&void 0!==i?i:null===n||void 0===n?void 0:n.base)&&void 0!==e?e:[];return(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Metrics"})}),(0,C.jsxs)(c.rj,{templateColumns:{base:"1fr",xl:"1fr 1fr"},w:"100%",gap:5,children:[t.map((function(e,i){var t,l,r=null===n||void 0===n||null===(t=n.base)||void 0===t?void 0:t.find((function(i){return i.name===e.name}));return(0,C.jsx)(c.P4,{children:(0,C.jsx)(z.l,{data:{base:r,target:null===n||void 0===n||null===(l=n.target)||void 0===l?void 0:l[i]}})},e.name)})),0===t.length&&(0,C.jsx)(l.Jd,{text:"No metrics data available"})]})]})}var w=n(2471),T=n(7708),A=n(962),W=n(4641),_=n(3512),N=n(7267),k=n(421);function P(){var e,i,n=(0,a.vs)(),t=null===n||void 0===n?void 0:n.uniqueId,l=decodeURIComponent((null===n||void 0===n?void 0:n.tableName)||""),r=decodeURIComponent((null===n||void 0===n?void 0:n.columnName)||"");(0,p.mq)({eventName:d.FP.PAGE_VIEW,eventProperties:{type:d.bB,page:"column-details-page"}});var s=g.n.getState().tableColumnsOnly,o=void 0===s?[]:s,u=t||"table.".concat(l);if(void 0===u)return(0,C.jsx)(_.J,{text:"No data found for '".concat(u,".").concat(r,"'")});var h=o.find((function(e){return(0,x.Z)(e,1)[0]===u}));if(!h)return(0,C.jsx)(_.J,{text:"No data found for '".concat(u,".").concat(r,"'")});var j=null===(e=h[1].base)||void 0===e?void 0:e.__table,v=null===j||void 0===j?void 0:j.columns,m=v?v[r]:void 0,b=null===(i=h[1].target)||void 0===i?void 0:i.__table,y=null===b||void 0===b?void 0:b.columns,z=y?y[r]:void 0,S=z||m,P=(m||{}).type,F=(z||{}).type;if(!m&&!z)return(0,C.jsx)(_.J,{text:"No profile data found for '".concat(l,".").concat(r,"'")});function E(e){var i=e.title,n=e.Comp;return void 0===m?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(n,{columnDatum:z})]}):void 0===z?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(n,{columnDatum:m})]}):(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]}),(0,C.jsx)(c.iz,{}),(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:8,minWidth:0,children:[(0,C.jsx)(n,{columnDatum:m}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{columnDatum:z})]})]})}function I(e){var i=e.children;function n(){return(0,C.jsx)(c.xu,{bg:"gray.100",width:"100%",height:"100%",borderWidth:"2px",borderColor:"lightgray"})}return void 0===m?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{}),(0,C.jsx)(c.iz,{orientation:"vertical"}),i]}):void 0===z?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[i,(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{})]}):(0,C.jsx)(C.Fragment,{children:i})}var B=(0,N.MM)(null===S||void 0===S?void 0:S.type),Z=B.backgroundColor,R=B.icon;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(k.Q,{title:r,subtitle:null===S||void 0===S?void 0:S.schema_type,infoTip:(null===z||void 0===z?void 0:z.description)||(null===m||void 0===m?void 0:m.description),mb:5,borderBottom:f.dx,icon:R,iconColor:Z}),(0,C.jsx)(D,{}),(0,C.jsx)(I,{children:(0,C.jsxs)(c.gC,{spacing:10,children:[(0,C.jsx)(E,{title:"Data Composition",Comp:w.t}),((0,N.jl)(P)||(0,N.jl)(F))&&(0,C.jsx)(E,{title:S?"".concat((0,d.B1)(null===S||void 0===S?void 0:S.type)," Statistics"):"Type Statistics",Comp:A.E}),((0,N.hG)(P)||(0,N.hG)(F))&&(0,C.jsx)(E,{title:"Quantile Data",Comp:W.M}),(0,C.jsx)(E,{title:"Visualizations",Comp:T.r})]})})]})}function D(){return(0,C.jsx)(c.rj,{templateColumns:"1fr 1fr",mb:2,gap:10,children:["Base","Target"].map((function(e,i){return(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:e})},i)}))})}function F(){var e=(0,t.TH)(),i=(0,x.Z)(e,2),n=i[0],l=i[1];return(0,h.useEffect)((function(){n&&"/"!==n||l("/tables")}),[n,l]),(0,C.jsx)(C.Fragment,{})}var E=n(7348),I=n(4777),B=n(6741),Z=n(346);function R(){var e,i,n=(0,a.e$)(),t=n.tableName,l=n.uniqueId;t=decodeURIComponent(t||""),(0,p.mq)({eventName:d.FP.PAGE_VIEW,eventProperties:{type:d.bB,page:"table-details-page"}});var r=g.n.getState().tableColumnsOnly,s=void 0===r?[]:r,o=l||"table.".concat(t),u=s.find((function(e){return(0,x.Z)(e,1)[0]===o}));if(!u)return(0,C.jsx)(_.J,{text:"No data found for table '".concat(o,"'")});var h=(0,x.Z)(u,2)[1],j=h.base,v=h.target,m=null===j||void 0===j?void 0:j.__table,f=null===v||void 0===v?void 0:v.__table;function b(e){var i=e.title,n=e.Comp;return void 0===m?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsx)(n,{tableDatum:f})]}):void 0===f?(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsx)(n,{tableDatum:m})]}):(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]}),(0,C.jsx)(c.iz,{my:1}),(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{tableDatum:m}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{tableDatum:f})]})]})}function y(e){var i=e.title,n=e.children;function t(){return void 0===m||void 0===f?(0,C.jsx)(c.xv,{fontSize:"xl",children:i}):(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(c.xv,{fontSize:"xl",children:i}),(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(c.xv,{fontSize:"xl",children:i})]})}return(0,C.jsxs)(c.xu,{width:"100%",children:[(0,C.jsx)(t,{}),(0,C.jsx)(c.iz,{my:1}),n]})}function z(e){var i=e.children;function n(){return(0,C.jsx)(c.xu,{bg:"gray.100",width:"100%",height:"100%",borderWidth:"2px",borderColor:"lightgray"})}return void 0===m?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[(0,C.jsx)(n,{}),(0,C.jsx)(c.iz,{orientation:"vertical"}),i]}):void 0===f?(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,children:[i,(0,C.jsx)(c.iz,{orientation:"vertical"}),(0,C.jsx)(n,{})]}):(0,C.jsx)(C.Fragment,{children:i})}return(0,C.jsxs)(c.xu,{children:[(0,C.jsx)(k.Q,{title:null===(e=f||m)||void 0===e?void 0:e.name,subtitle:"Table",mb:5,infoTip:null===(i=f||m)||void 0===i?void 0:i.description}),(0,C.jsx)(O,{}),(0,C.jsx)(z,{children:(0,C.jsxs)(c.gC,{spacing:10,children:[(0,C.jsx)(b,{title:"Table Statistics",Comp:B.S}),(0,C.jsx)(y,{title:"Schema",children:(0,C.jsx)(q,{tableEntry:u})}),(0,C.jsx)(b,{title:"Duplicate Rows",Comp:Z.e})]})})]})}function O(){return(0,C.jsxs)(c.rj,{templateColumns:"1fr 1px 1fr",gap:3,mb:10,children:[(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:"Base"})}),(0,C.jsx)(c.iz,{}),(0,C.jsx)(c.kC,{alignItems:"center",w:"100%",children:(0,C.jsx)(c.xv,{fontWeight:"semibold",fontSize:"2xl",color:"gray.400",w:"100%",children:"Target"})})]})}function q(e){var i=e.tableEntry,n=(0,x.Z)(i,2)[1],t=n.base,l=n.target,r=l||t,s=function(){return(0,C.jsx)(c.kC,{direction:"column",width:"100%",children:(0,C.jsx)(E.xJ,{width:"100%",children:(0,C.jsxs)(E.iA,{variant:"simple",children:[(0,C.jsx)(E.hr,{children:(0,C.jsxs)(E.Tr,{children:[(0,C.jsx)(E.Th,{width:"25%",children:"Base Column"}),(0,C.jsx)(E.Th,{width:"25%",borderRight:"1px",borderRightColor:"gray.200",children:"Base Type"}),(0,C.jsx)(E.Th,{width:"25%",children:"Traget Column"}),(0,C.jsx)(E.Th,{width:"25%",children:"Target Type"})]})}),(0,C.jsx)(E.p3,{children:null===r||void 0===r?void 0:r.__columns.map((function(e){var i,n,t,l,r,s,o=(0,x.Z)(e,3),d=o[0],a=o[1],u=a.base,h=a.target,j=o[2];return(0,C.jsxs)(E.Tr,{_hover:{bg:"blackAlpha.50",cursor:"inherit"},"data-cy":"table-list-schema-item",children:[(0,C.jsx)(E.Td,{color:null!==j&&void 0!==j&&j.mismatched?"red.500":"inherit",maxW:"350px",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",noOfLines:1,whiteSpace:"normal",title:null!==(i=null===u||void 0===u?void 0:u.name)&&void 0!==i?i:I.Nj,children:null!==(n=null===u||void 0===u?void 0:u.name)&&void 0!==n?n:I.Nj})}),(0,C.jsx)(E.Td,{color:null!==j&&void 0!==j&&j.mismatched?"red.500":"inherit",borderRight:"1px",borderRightColor:"gray.200",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(t=null===u||void 0===u?void 0:u.schema_type)&&void 0!==t?t:I.Nj})}),(0,C.jsx)(E.Td,{color:null!==j&&void 0!==j&&j.mismatched?"red.500":"inherit",whiteSpace:"normal",children:(0,C.jsx)(c.xv,{fontSize:"xs",as:"span",noOfLines:1,whiteSpace:"normal",title:null!==(l=null===h||void 0===h?void 0:h.name)&&void 0!==l?l:I.Nj,children:null!==(r=null===h||void 0===h?void 0:h.name)&&void 0!==r?r:I.Nj})}),(0,C.jsx)(E.Td,{color:null!==j&&void 0!==j&&j.mismatched?"red.500":"inherit",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(s=null===h||void 0===h?void 0:h.schema_type)&&void 0!==s?s:I.Nj})})]},d)}))})]})})})},o=function(){return(0,C.jsx)(c.kC,{direction:"column",width:"100%",children:(0,C.jsx)(E.xJ,{width:"100%",children:(0,C.jsxs)(E.iA,{variant:"simple",children:[(0,C.jsx)(E.hr,{children:(0,C.jsxs)(E.Tr,{children:[(0,C.jsx)(E.Th,{width:"50%",children:"Column"}),(0,C.jsx)(E.Th,{width:"50%",children:"Type"})]})}),(0,C.jsx)(E.p3,{children:null===r||void 0===r?void 0:r.__columns.map((function(e){var i,n,t,l=(0,x.Z)(e,3),r=l[0],s=l[1],o=s.base,d=s.target,a=(l[2],o||d);return(0,C.jsxs)(E.Tr,{_hover:{bg:"blackAlpha.50",cursor:"inherit"},"data-cy":"table-list-schema-item",children:[(0,C.jsx)(E.Td,{maxW:"350px",children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",noOfLines:1,whiteSpace:"normal",title:null!==(i=null===a||void 0===a?void 0:a.name)&&void 0!==i?i:I.Nj,children:null!==(n=null===a||void 0===a?void 0:a.name)&&void 0!==n?n:I.Nj})}),(0,C.jsx)(E.Td,{children:(0,C.jsx)(c.xv,{as:"span",fontSize:"xs",children:null!==(t=null===a||void 0===a?void 0:a.schema_type)&&void 0!==t?t:I.Nj})})]},r)}))})]})})})};return void 0===(null===t||void 0===t?void 0:t.name)||void 0===(null===l||void 0===l?void 0:l.name)?(0,C.jsx)(o,{}):(0,C.jsx)(s,{})}var G=n(2175),J=n(5939),M=n(3660),V=n(4236),U=n(5282),H=n(3066);function L(){var e,i,n,t;(0,p.mq)({eventName:U.FP.PAGE_VIEW,eventProperties:{type:U.bB,page:"table-list-page"}});var l,r=(0,M.qY)(),s=(0,h.useState)(-1),o=(0,x.Z)(s,2),d=o[0],a=o[1],u=g.n.getState(),j=u.tableColumnsOnly,v=void 0===j?[]:j,m=u.assertionsOnly;if(-1!==d){var b=(0,x.Z)(v[d],2)[1],y=b.base;l=b.target||y}return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(c.kC,{direction:"column",w:"100%",minHeight:"650px",children:[(0,C.jsx)(c.kC,{w:"100%",children:(0,C.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Tables"})}),(0,C.jsxs)(c.rj,{templateColumns:f.Dp,maxW:f.xD,px:4,my:6,children:[(0,C.jsx)(c.xv,{children:"Name"}),(0,C.jsx)(c.xv,{children:"Summary"}),(0,C.jsx)(c.xv,{children:"Assertions"})]}),v.map((function(e,i){return(0,C.jsx)(c.kC,{children:(0,C.jsx)(J.h,{combinedAssertions:m,combinedTableEntry:e,onInfoClick:function(){a(i),r.onOpen()}})},i)}))]}),(0,C.jsxs)(H.W,(0,G.Z)((0,G.Z)({},r),{},{size:"2xl",title:null===(e=l)||void 0===e?void 0:e.name,onClose:function(){a(-1),r.onClose()},children:[(0,C.jsxs)(c.xv,{fontSize:"lg",mb:4,children:["Description:"," ",null!==(i=null===(n=l)||void 0===n?void 0:n.description)&&void 0!==i?i:(0,C.jsx)(c.xv,{as:"i",children:"No description provided."})]}),-1!==d&&(0,C.jsx)(V.r,{columns:null===(t=l)||void 0===t?void 0:t.__columns})]}))]})}function Q(e){var i=e.data,n=e.sideNavTop,x=void 0===n?"0px":n;return(0,d.nq)((function(e){return e.setReportRawData}))(i),(0,C.jsx)(t.F0,{hook:o.w,children:(0,C.jsx)(r.$,{sideNavTop:x,children:(0,C.jsxs)(t.rs,{children:[(0,C.jsx)(t.AW,{path:a.bw,children:(0,C.jsx)(F,{})}),(0,C.jsx)(t.AW,{path:a.KX,children:(0,C.jsx)(L,{})}),(0,C.jsx)(t.AW,{path:a.KX,children:(0,C.jsx)(L,{})}),(0,C.jsx)(t.AW,{path:a.WF,children:(0,C.jsx)(R,{})}),(0,C.jsx)(t.AW,{path:a.t3,children:(0,C.jsx)(P,{})}),(0,C.jsx)(t.AW,{path:a.mo,children:(0,C.jsx)(R,{})}),(0,C.jsx)(t.AW,{path:a.n3,children:(0,C.jsx)(P,{})}),(0,C.jsx)(t.AW,{path:a.d2,children:(0,C.jsx)(R,{})}),(0,C.jsx)(t.AW,{path:a.Sx,children:(0,C.jsx)(P,{})}),(0,C.jsx)(t.AW,{path:a.iB,children:(0,C.jsx)(R,{})}),(0,C.jsx)(t.AW,{path:a.dF,children:(0,C.jsx)(P,{})}),(0,C.jsx)(t.AW,{path:a.$n,children:(0,C.jsx)(y,{})}),(0,C.jsx)(t.AW,{path:a.xH,children:(0,C.jsx)(S,{})}),(0,C.jsx)(t.AW,{path:a.Mu,children:(0,C.jsx)(l.gb,{})}),(0,C.jsx)(t.AW,{children:(0,C.jsx)(s.T,{})})]})})})}var X=Q}}]);
//# sourceMappingURL=728.c6696c0f.chunk.js.map