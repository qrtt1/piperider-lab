"use strict";(self.webpackChunk_infuseai_piperider_ui=self.webpackChunk_infuseai_piperider_ui||[]).push([[982],{1982:function(e,n,t){t.r(n),t.d(n,{SRPage:function(){return V},default:function(){return H}});var i=t(2904),s=t(8794),l=t(952),a=t(1288),r=t(3182),o=t(1831),d=t(5322),x=t(1431),c=t(7615),u=t(6830),j=t(1756),h=t(1676),v=t(2158),p=t(6564),f=t(2122),m=t(7437),b=t(5432),g=t(5887);function y(){var e,n,t;(0,f.mq)({eventName:o.FP.PAGE_VIEW,eventProperties:{type:o.ll,page:"assertion-list-page"}});var i=(0,j.useState)(""),s=(0,x.Z)(i,2),l=s[0],a=s[1],r=o.nq.getState(),d=r.assertionsOnly,y=r.isCloudReport,W=(d||{}).metadata,A=y?b.ee:b.p0;return(0,g.jsxs)(c.xu,{children:[(0,g.jsxs)(u.bZ,{status:"warning",mb:5,children:[(0,g.jsx)(u.zM,{}),(0,g.jsxs)(c.xu,{children:[(0,g.jsx)(u.Cd,{children:"The Assertions page is deprecated and will be removed in the future"}),(0,g.jsxs)(u.X,{fontSize:"sm",children:["If you have a strong need for this page, please contact us by the"," ",(0,g.jsx)(c.rU,{href:A,style:{textDecoration:"underline"},children:"feedback link"}),". Your feedback is important to us. Thank you!"]})]})]}),(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Assertions"}),(0,g.jsx)(c.kC,{maxW:m.eb-50,w:"100%",children:(0,g.jsx)(v.f,{onChange:a,filterString:l})}),(0,g.jsx)(c.kC,{justify:"start",maxW:m.eb-50,w:"100%",my:5,children:Number(null===W||void 0===W||null===(e=W.base)||void 0===e?void 0:e.total)>0&&(0,g.jsx)(h.F,{total:null===W||void 0===W||null===(n=W.base)||void 0===n?void 0:n.total,failed:null===W||void 0===W||null===(t=W.base)||void 0===t?void 0:t.failed})}),(0,g.jsx)(p.O,{maxW:m.eb-50,w:"100%",singleOnly:!0,filterString:l,comparableAssertions:d})]})}var W=t(4163);function A(){var e,n;(0,f.mq)({eventName:o.FP.PAGE_VIEW,eventProperties:{type:o.ll,page:"metrics-page"}});var t=o.nq.getState().BMOnly;return(0,g.jsxs)(c.xu,{children:[(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Metrics"}),(0,g.jsxs)(c.rj,{templateColumns:{base:"1fr",xl:"1fr 1fr"},w:"100%",gap:5,children:[(null!==(e=null===t||void 0===t?void 0:t.base)&&void 0!==e?e:[]).map((function(e){return(0,g.jsx)(c.P4,{children:(0,g.jsx)(W.l,{data:{base:e},singleOnly:!0})},e.name)})),!(null!==t&&void 0!==t&&null!==(n=t.base)&&void 0!==n&&n.length)&&(0,g.jsx)(s.Jd,{text:"No metrics data available"})]})]})}var C=t(2471),S=t(7708),w=t(4641),_=t(962),z=t(3512),N=t(7267),P=t(8685),k=t(421),D=t(5737);function O(){var e,n=(0,d.vs)(),t=null===n||void 0===n?void 0:n.uniqueId,i=decodeURIComponent((null===n||void 0===n?void 0:n.tableName)||""),s=decodeURIComponent((null===n||void 0===n?void 0:n.columnName)||"");(0,P.mq)({eventName:P.FP.PAGE_VIEW,eventProperties:{type:P.ll,page:"column-details-page"}});var l=D.n.getState().tableColumnsOnly,a=void 0===l?[]:l,r=t||"table.".concat(i);if(void 0===r)return(0,g.jsx)(z.J,{text:"No data found for '".concat(r,".").concat(s,"'")});var o=a.find((function(e){return(0,x.Z)(e,1)[0]===r}));if(!o)return(0,g.jsx)(z.J,{text:"No data found for '".concat(r,".").concat(s,"'")});var u=null===(e=o[1].base)||void 0===e?void 0:e.__table,j=null===u||void 0===u?void 0:u.columns,h=j?j[s]:void 0,v=h||{},p=v.type,f=v.histogram,m=v.schema_type,b=(0,N.MM)(null===h||void 0===h?void 0:h.type),y=b.backgroundColor,W=b.icon;if(!r||!u||!o||!h)return(0,g.jsx)(z.J,{text:"No data found for '".concat(r,".").concat(s,"'")});var A=(0,N.hG)(p);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k.Q,{title:s,subtitle:m,infoTip:null===h||void 0===h?void 0:h.description,icon:W,iconColor:y,mb:5}),(0,g.jsxs)(c.rj,{width:"100%",templateColumns:{base:"1fr",xl:"1fr 1px 1fr"},gap:5,children:[(0,g.jsxs)(c.gC,{spacing:10,flex:"1",width:"100%",flexGrow:1,flexShrink:1,children:[(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Data Composition"}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(C.t,{columnDatum:h})]}),(0,N.jl)(p)&&(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsxs)(c.xv,{fontSize:"xl",children:[h?(0,P.B1)(null===h||void 0===h?void 0:h.type):"Type "," ","Statistics"]}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(_.E,{columnDatum:h})]}),A&&f&&(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Quantile Data"}),(0,g.jsx)(c.iz,{}),(0,g.jsx)(w.M,{columnDatum:h})]})]}),(0,g.jsx)(c.iz,{orientation:"vertical"}),(0,g.jsx)(c.gC,{spacing:10,width:"100%",children:(0,g.jsx)(S.r,{columnDatum:h})})]})]})}function E(){var e=(0,i.TH)(),n=(0,x.Z)(e,2),t=n[0],s=n[1];return(0,j.useEffect)((function(){t&&"/"!==t||s("/tables")}),[t,s]),(0,g.jsx)(g.Fragment,{})}function F(){var e,n,t=(0,d.e$)(),i=t.tableName,s=t.uniqueId;(0,P.mq)({eventName:P.FP.PAGE_VIEW,eventProperties:{type:P.ll,page:"table-details-page"}});var l=D.n.getState().tableColumnsOnly,a=void 0===l?[]:l,r=i||s;if(void 0===r)return(0,g.jsx)(z.J,{text:"No data found for '".concat(r,"'")});var o=s||"table.".concat(i),u=a.find((function(e){return(0,x.Z)(e,1)[0]===o}));if(!u)return(0,g.jsx)(z.J,{text:"No data found for '".concat(r,"'")});var j=null===(e=u[1].base)||void 0===e?void 0:e.__table;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k.Q,{title:j.name,subtitle:"Table",infoTip:j.description,mb:5}),(0,g.jsxs)(c.rj,{width:"100%",templateColumns:{base:"1fr","2xl":"1fr 1px 1fr"},gap:5,children:[(0,g.jsxs)(c.gC,{spacing:10,children:[(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Table Statistics"}),(0,g.jsx)(c.iz,{my:1}),(0,g.jsx)(P.Se,{tableDatum:j})]}),(0,g.jsxs)(c.xu,{width:"100%",children:[(0,g.jsx)(c.xv,{fontSize:"xl",children:"Duplicate Rows"}),(0,g.jsx)(c.iz,{my:1}),(0,g.jsx)(P.e0,{tableDatum:j})]})]}),(0,g.jsx)(c.iz,{orientation:"vertical"}),(0,g.jsx)(P.rH,{columns:null===u||void 0===u||null===(n=u[1].base)||void 0===n?void 0:n.__columns,singleOnly:!0})]})]})}var T=t(2175),I=t(3660),q=t(5939),Z=t(4236),G=t(1352),M=t(5282),R=t(3066);function J(){var e,n,t,i=(0,I.qY)(),s=(0,j.useState)(-1),l=(0,x.Z)(s,2),a=l[0],r=l[1],o=D.n.getState(),d=o.tableColumnsOnly,u=void 0===d?[]:d,h=o.assertionsOnly;return(0,G.m)({eventName:M.FP.PAGE_VIEW,eventProperties:{type:M.ll,page:"table-list-page"}}),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c.xv,{fontSize:"xl",fontWeight:"semibold",textAlign:"left",children:"Tables"}),(0,g.jsxs)(c.kC,{direction:"column",width:"100%",minHeight:"650px",children:[(0,g.jsxs)(c.rj,{templateColumns:m.Dp,maxW:m.xD,px:4,my:6,children:[(0,g.jsx)(c.xv,{children:"Name"}),(0,g.jsx)(c.xv,{children:"Summary"}),(0,g.jsx)(c.xv,{children:"Assertions"})]}),u.map((function(e,n){return(0,g.jsx)(q.h,{combinedAssertions:h,combinedTableEntry:e,singleOnly:!0,onInfoClick:function(){r(n),i.onOpen()}},n)}))]}),(0,g.jsxs)(R.W,(0,T.Z)((0,T.Z)({},i),{},{size:"2xl",title:-1!==a&&u[a][0],onClose:function(){r(-1),i.onClose()},children:[(0,g.jsxs)(c.xv,{fontSize:"lg",mb:4,children:["Description:"," ",null!==(e=-1!==a&&(null===(n=u[a][1].base)||void 0===n?void 0:n.description))&&void 0!==e?e:(0,g.jsx)(c.xv,{as:"i",children:"No description provided."})]}),-1!==a&&(0,g.jsx)(Z.r,{singleOnly:!0,columns:null===(t=u[a][1].base)||void 0===t?void 0:t.__columns})]}))]})}function V(e){var n=e.data,t=e.sideNavTop,x=void 0===t?"0px":t;return(0,o.nq)((function(e){return e.setReportRawData}))({base:n}),(0,g.jsx)(i.F0,{hook:r.w,children:(0,g.jsx)(l.$,{sideNavTop:x,singleOnly:!0,children:(0,g.jsxs)(i.rs,{children:[(0,g.jsx)(i.AW,{path:d.bw,children:(0,g.jsx)(E,{})}),(0,g.jsx)(i.AW,{path:d.KX,children:(0,g.jsx)(J,{})}),(0,g.jsx)(i.AW,{path:d.WF,children:(0,g.jsx)(F,{})}),(0,g.jsx)(i.AW,{path:d.t3,children:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:d.mo,children:(0,g.jsx)(F,{})}),(0,g.jsx)(i.AW,{path:d.n3,children:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:d.d2,children:(0,g.jsx)(F,{})}),(0,g.jsx)(i.AW,{path:d.Sx,children:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:d.iB,children:(0,g.jsx)(F,{})}),(0,g.jsx)(i.AW,{path:d.dF,children:(0,g.jsx)(O,{})}),(0,g.jsx)(i.AW,{path:d.$n,children:(0,g.jsx)(y,{})}),(0,g.jsx)(i.AW,{path:d.xH,children:(0,g.jsx)(A,{})}),(0,g.jsx)(i.AW,{path:d.Mu,children:(0,g.jsx)(s.gb,{})}),(0,g.jsx)(i.AW,{children:(0,g.jsx)(a.T,{})})]})})})}var H=V}}]);
//# sourceMappingURL=982.a81ff683.chunk.js.map