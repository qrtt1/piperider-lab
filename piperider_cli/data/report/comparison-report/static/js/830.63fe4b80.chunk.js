"use strict";(self.webpackChunkpiperider_report=self.webpackChunkpiperider_report||[]).push([[830],{2830:function(n,i,e){e.r(i),e.d(i,{default:function(){return z}});var s=e(4367),l=e(8951),d=e(4982),t=e(9547),r=e(6311),c=e(1399),a=e(4777),o=e(5491),u=e(1470),h=e(6009),x=e(6579),j=e(1758),v=e(3970),p=e(853),m=e.n(p),f=e(6937),T=e(3225),g=e(3154),b=e(4986),C=e(548),y=e(2274),k=e(5374),w=["base","input"];function A(n){switch(n.status){case"passed":return(0,k.jsx)(r.xv,{as:"span",role:"img",children:"\u2705"});case"failed":return(0,k.jsx)(r.xv,{as:"span",role:"img",children:"\u274c"});default:return(0,k.jsx)(r.xv,{as:"span",role:"img",children:"-"})}}function _(n){var i=n.base,e=void 0===i?[]:i,s=n.input,l=void 0===s?[]:s,a=(0,t.Z)(n,w),o=m()([].concat((0,d.Z)(e),(0,d.Z)(l)),(function(n){return"".concat(n.level,"_").concat(n.column,"_").concat(n.name)})),u=Object.values(o).map((function(n){var i={level:n[0].level,column:n[0].column,name:n[0].name};return n.forEach((function(n){"base"===n.from?i.base=n:i.input=n})),i}));return 0===u.length?(0,k.jsx)(r.kC,{direction:"column",children:(0,k.jsx)(r.xv,{textAlign:"center",children:"No tests available"})}):(0,k.jsx)(c.xJ,{children:(0,k.jsxs)(c.iA,{variant:"simple",children:[(0,k.jsx)(c.hr,{children:(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Th,{children:"Level"}),(0,k.jsx)(c.Th,{children:"Column"}),(0,k.jsx)(c.Th,{children:"Assertion"}),(0,k.jsx)(c.Th,{children:"Base Status"}),(0,k.jsx)(c.Th,{children:"Input Status"}),(0,k.jsx)(c.Th,{})]})}),(0,k.jsx)(c.p3,{children:Object.values(u).map((function(n){var i,e;return(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Td,{children:n.level}),(0,k.jsx)(c.Td,{children:n.column}),(0,k.jsx)(c.Td,{children:n.name}),(0,k.jsx)(c.Td,{children:(0,k.jsx)(A,{status:null===(i=n.base)||void 0===i?void 0:i.status})}),(0,k.jsx)(c.Td,{children:(0,k.jsx)(A,{status:null===(e=n.input)||void 0===e?void 0:e.status})}),(0,k.jsx)(c.Td,{onClick:function(){return null===a||void 0===a?void 0:a.onDetailVisible(n)},children:(0,k.jsx)(r.xv,{as:"span",cursor:"pointer",children:"\ud83d\udd0d"})})]},(0,j.x0)())}))})]})})}function W(n){var i=n.base,e=n.input,d=[],t={},a=0,o=0,u=0,h=0;return Object.entries((null===i||void 0===i?void 0:i.columns)||[]).forEach((function(n){var i=(0,l.Z)(n,2),e=i[0],s=i[1];t[s.name]=a,d.push({name:e,changed:!0,base:s,input:void 0}),a++,u++})),Object.entries((null===e||void 0===e?void 0:e.columns)||[]).forEach((function(n){var i=(0,l.Z)(n,2),e=i[0],r=i[1];if(t.hasOwnProperty(r.name)){var c=t[r.name],a=d[c].base.schema_type!==r.schema_type;d[c]=(0,s.Z)((0,s.Z)({},d[c]),{},{input:r,changed:a}),u--,a&&h++}else d.push({name:e,changed:!0,base:void 0,input:r}),o++})),(0,k.jsxs)(r.kC,{direction:"column",children:[(0,k.jsxs)(r.xv,{mb:4,p:2,children:["Added:",(0,k.jsx)(r.xv,{as:"span",fontWeight:700,ml:1,children:o}),", Deleted:",(0,k.jsx)(r.xv,{as:"span",fontWeight:700,ml:1,children:u}),", Changed:"," ",(0,k.jsx)(r.xv,{as:"span",fontWeight:700,ml:1,children:h})]}),(0,k.jsxs)(r.kC,{justifyContent:"space-evenly",children:[(0,k.jsx)(c.xJ,{width:"50%",children:(0,k.jsxs)(c.iA,{variant:"simple",children:[(0,k.jsx)(c.hr,{children:(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Th,{children:"Column"}),(0,k.jsx)(c.Th,{children:"Type"})]})}),(0,k.jsx)(c.p3,{children:d.map((function(n){var i,e,s,l;return(0,k.jsxs)(c.Tr,{color:n.changed?"red.500":"inherit",children:[(0,k.jsx)(c.Td,{children:null!==(i=null===(e=n.base)||void 0===e?void 0:e.name)&&void 0!==i?i:"-"}),(0,k.jsx)(c.Td,{children:null!==(s=null===(l=n.base)||void 0===l?void 0:l.schema_type)&&void 0!==s?s:"-"})]},(0,j.x0)(10))}))})]})}),(0,k.jsx)(r.kC,{justifyContent:"center",children:(0,k.jsx)(r.iz,{orientation:"vertical"})}),(0,k.jsx)(c.xJ,{width:"50%",children:(0,k.jsxs)(c.iA,{variant:"simple",children:[(0,k.jsx)(c.hr,{children:(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Th,{children:"Column"}),(0,k.jsx)(c.Th,{children:"Value"})]})}),(0,k.jsx)(c.p3,{children:d.map((function(n){var i,e,s,l;return(0,k.jsxs)(c.Tr,{color:n.changed?"red.500":"inherit",children:[(0,k.jsx)(c.Td,{children:null!==(i=null===(e=n.input)||void 0===e?void 0:e.name)&&void 0!==i?i:"-"}),(0,k.jsx)(c.Td,{children:null!==(s=null===(l=n.input)||void 0===l?void 0:l.schema_type)&&void 0!==s?s:"-"})]},(0,j.x0)(10))}))})]})})]})]})}function O(n){var i,e,s,d,t=n.name,c=n.base,a=n.input,o=c||a,u=(0,v.useState)([]),h=(0,l.Z)(u,2),x=h[0],j=h[1];return(0,v.useEffect)((function(){if((null===c||void 0===c?void 0:c.type)!==(null===a||void 0===a?void 0:a.type)||"string"!==(null===c||void 0===c?void 0:c.type)&&"datetime"!==(null===c||void 0===c?void 0:c.type)){var n=c?(0,b.rg)({base:c.distribution.counts,input:null,labels:c.distribution.labels}):null,i=a?(0,b.rg)({base:a.distribution.counts,input:null,labels:a.distribution.labels}):null;j([n,i])}else{var e=(0,b.Uu)({base:c.distribution,input:a.distribution});j([e])}}),[c,a]),(0,k.jsx)(r.kC,{direction:"column",children:(0,k.jsxs)(r.rj,{my:4,templateColumns:"500px 1fr",gap:3,children:[(0,k.jsx)(r.kC,{direction:"column",gap:2,minH:"250px",children:(0,k.jsxs)(r.kC,{direction:"column",gap:3,children:[(0,k.jsxs)(r.kC,{justifyContent:"space-between",children:[(0,k.jsxs)(r.xv,{children:[(0,k.jsx)(r.xv,{as:"span",fontWeight:700,color:"gray.900",fontSize:"lg",mr:1,children:o.name}),"","(",(0,k.jsx)(r.EK,{children:o.schema_type}),")"]}),(0,k.jsxs)(r.kC,{gap:8,children:[(0,k.jsx)(r.xv,{fontWeight:700,textAlign:"right",width:"100px",children:"Base"}),(0,k.jsx)(r.xv,{fontWeight:700,textAlign:"right",width:"100px",children:"Input"})]})]}),(0,k.jsxs)(r.kC,{direction:"column",children:[(0,k.jsx)(T.$,{name:"Total",base:null!==c&&void 0!==c&&c.total?(0,g.uf)(null===c||void 0===c?void 0:c.total):"-",input:null!==a&&void 0!==a&&a.total?(0,g.uf)(null===a||void 0===a?void 0:a.total):"-"}),(0,k.jsx)(T.$,{name:"Missing",base:(0,g.ro)(c),input:(0,g.ro)(a)}),(0,k.jsx)(T.$,{name:"Distinct",base:null!==c&&void 0!==c&&c.distinct?(0,g.uf)(c.distinct):"-",input:null!==a&&void 0!==a&&a.distinct?(0,g.uf)(a.distinct):"-"})]}),"numeric"===o.type&&(0,k.jsxs)(r.kC,{direction:"column",children:[(0,k.jsx)(T.$,{name:"Min",base:null!==c&&void 0!==c&&c.min?(0,g.uf)(c.min):"-",input:null!==a&&void 0!==a&&a.min?(0,g.uf)(a.min):"-"}),(0,k.jsx)(T.$,{name:"Max",base:null!==c&&void 0!==c&&c.max?(0,g.uf)(c.max):"-",input:null!==a&&void 0!==a&&a.max?(0,g.uf)(a.max):"-"}),(0,k.jsx)(T.$,{name:"Average",base:null!==c&&void 0!==c&&c.avg?(0,g.uf)(c.avg):"-",input:null!==a&&void 0!==a&&a.avg?(0,g.uf)(a.avg):"-"})]}),"datetime"===o.type&&(0,k.jsxs)(r.kC,{direction:"column",children:[(0,k.jsx)(T.$,{name:"Min",base:null!==(i=null===c||void 0===c?void 0:c.min)&&void 0!==i?i:"-",input:null!==(e=null===a||void 0===a?void 0:a.min)&&void 0!==e?e:"-"}),(0,k.jsx)(T.$,{name:"Max",base:null!==(s=null===c||void 0===c?void 0:c.max)&&void 0!==s?s:"-",input:null!==(d=null===a||void 0===a?void 0:a.max)&&void 0!==d?d:"-"})]})]})}),1===x.length&&(0,k.jsx)(S,{data:x[0]}),2===x.length&&(0,k.jsxs)(r.rj,{my:4,templateColumns:"1fr 1fr",gap:3,children:[x[0]?(0,k.jsx)(S,{data:x[0]}):(0,k.jsx)(r.kC,{alignItems:"center",justifyContent:"center",color:"gray.500",children:"No data available"}),x[1]?(0,k.jsx)(S,{data:x[1]}):(0,k.jsx)(r.kC,{alignItems:"center",justifyContent:"center",color:"gray.500",children:"No data available"})]})]})},t)}function Z(n){var i=n.base,e=n.input,s=(0,b.yl)(null===i||void 0===i?void 0:i.columns,null===e||void 0===e?void 0:e.columns);return Object.entries(s).map((function(n){var i=(0,l.Z)(n,2),e=i[0],s=i[1];return(0,k.jsx)(O,{name:e,base:s.base,input:s.input},e)}))}function z(n){var i,e,s,d,t,j,p=n.base,m=n.input,T=n.reportName,w=(0,b.mT)(null===p||void 0===p?void 0:p.assertion_results,"base"),O=(0,b.mT)(null===m||void 0===m?void 0:m.assertion_results,"input"),z=(0,a.qY)(),S=z.isOpen,$=z.onOpen,E=z.onClose,N=(0,v.useState)(null),B=(0,l.Z)(N,2),H=B[0],I=B[1];return(0,C.j)(T),(0,k.jsxs)(f.o,{children:[(0,k.jsxs)(r.kC,{direction:"column",minH:"calc(100vh + 1px)",width:"100%",children:[(0,k.jsx)(r.kC,{mx:"10%",mt:4,children:(0,k.jsxs)(o.aG,{fontSize:"lg",children:[(0,k.jsx)(o.gN,{children:(0,k.jsx)(x.rU,{href:"/",children:(0,k.jsx)(o.At,{href:"/",children:"Tables"})})}),(0,k.jsx)(o.gN,{isCurrentPage:!0,children:(0,k.jsx)(o.At,{href:"#",children:T})})]})}),(0,k.jsxs)(r.kC,{border:"1px solid",borderColor:"gray.300",bg:"white",borderRadius:"md",p:6,mt:3,mx:"10%",direction:"column",gap:8,children:[(0,k.jsx)(r.X6,{fontSize:24,children:"Overview"}),(0,k.jsx)(c.xJ,{children:(0,k.jsxs)(c.iA,{variant:"simple",children:[(0,k.jsx)(c.hr,{children:(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Th,{width:"10%"}),(0,k.jsx)(c.Th,{width:"45%",children:"Base"}),(0,k.jsx)(c.Th,{width:"45%",children:"Input"})]})}),(0,k.jsxs)(c.p3,{children:[(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Td,{children:"Table"}),(0,k.jsx)(c.Td,{children:null!==(i=null===p||void 0===p?void 0:p.name)&&void 0!==i?i:"-"}),(0,k.jsx)(c.Td,{children:null!==(e=null===m||void 0===m?void 0:m.name)&&void 0!==e?e:"-"})]}),(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Td,{children:"Rows"}),(0,k.jsx)(c.Td,{children:null!==(s=null===p||void 0===p?void 0:p.row_count)&&void 0!==s?s:"-"}),(0,k.jsx)(c.Td,{children:null!==(d=null===m||void 0===m?void 0:m.row_count)&&void 0!==d?d:"-"})]}),(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Td,{children:"Columns"}),(0,k.jsx)(c.Td,{children:null!==(t=null===p||void 0===p?void 0:p.col_count)&&void 0!==t?t:"-"}),(0,k.jsx)(c.Td,{children:null!==(j=null===m||void 0===m?void 0:m.col_count)&&void 0!==j?j:"-"})]}),(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Td,{children:"Test status"}),(0,k.jsx)(c.Td,{children:(0,k.jsxs)(r.xv,{children:[(0,k.jsxs)(r.xv,{as:"span",fontWeight:700,children:[w.passed," "]}),"Passed",", ",(0,k.jsxs)(r.xv,{as:"span",fontWeight:700,color:w.failed>0?"red.500":"inherit",children:[w.failed," "]}),"Failed"]})}),(0,k.jsx)(c.Td,{children:(0,k.jsxs)(r.xv,{children:[(0,k.jsxs)(r.xv,{as:"span",fontWeight:700,children:[O.passed," "]}),"Passed",", ",(0,k.jsxs)(r.xv,{as:"span",fontWeight:700,color:O.failed>0?"red.500":"inherit",children:[O.failed," "]}),"Failed"]})})]})]})]})}),(0,k.jsxs)(u.mQ,{isLazy:!0,children:[(0,k.jsxs)(u.td,{children:[(0,k.jsx)(u.OK,{children:"Schema"}),(0,k.jsx)(u.OK,{children:"Profiling"}),(0,k.jsx)(u.OK,{children:"Tests"})]}),(0,k.jsxs)(u.nP,{children:[(0,k.jsx)(u.x4,{children:(0,k.jsx)(W,{base:p,input:m})}),(0,k.jsx)(u.x4,{children:(0,k.jsx)(Z,{base:p,input:m})}),(0,k.jsx)(u.x4,{children:(0,k.jsx)(_,{base:null===w||void 0===w?void 0:w.tests,input:null===O||void 0===O?void 0:O.tests,onDetailVisible:function(n){I(n),$()}})})]})]})]})]}),(0,k.jsxs)(h.u_,{isOpen:S,size:"2xl",onClose:function(){E(),I(null)},children:[(0,k.jsx)(h.ZA,{}),(0,k.jsxs)(h.hz,{children:[(0,k.jsx)(h.xB,{children:null===H||void 0===H?void 0:H.name}),(0,k.jsx)(h.ol,{}),(0,k.jsx)(h.fe,{children:(0,k.jsx)(c.xJ,{children:(0,k.jsxs)(c.iA,{variant:"simple",children:[(0,k.jsx)(c.hr,{children:(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Th,{}),(0,k.jsx)(c.Th,{children:"Status"}),(0,k.jsx)(c.Th,{children:"Expected"}),(0,k.jsx)(c.Th,{children:"Actual"})]})}),(0,k.jsxs)(c.p3,{children:[(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Td,{fontWeight:700,children:"Base"}),(0,k.jsx)(c.Td,{children:(0,k.jsx)(A,{status:null===H||void 0===H?void 0:H.base.status})}),(0,k.jsx)(c.Td,{children:(0,g.aH)(null===H||void 0===H?void 0:H.base.expected)}),(0,k.jsx)(c.Td,{children:(0,g.aH)(null===H||void 0===H?void 0:H.base.actual)})]}),(0,k.jsxs)(c.Tr,{children:[(0,k.jsx)(c.Td,{fontWeight:700,children:"Input"}),(0,k.jsx)(c.Td,{children:(0,k.jsx)(A,{status:null===H||void 0===H?void 0:H.input.status})}),(0,k.jsx)(c.Td,{children:(0,g.aH)(null===H||void 0===H?void 0:H.input.expected)}),(0,k.jsx)(c.Td,{children:(0,g.aH)(null===H||void 0===H?void 0:H.base.actual)})]})]})]})})}),(0,k.jsx)(h.mz,{children:(0,k.jsx)(y.zx,{onClick:E,children:"Close"})})]})]})]})}function S(n){var i=n.data,e=(0,v.useRef)(null),s=(0,v.useRef)(null);return(0,v.useEffect)((function(){i.length>0&&(0,b.vU)({containerWidth:s.current.getBoundingClientRect().width,svgTarget:e.current,tooltipTarget:".chart",data:i})}),[i]),(0,k.jsx)(r.kC,{className:"chart",ref:s,width:"100%",children:(0,k.jsx)("svg",{ref:e})})}},3225:function(n,i,e){e.d(i,{$:function(){return d}});var s=e(6311),l=e(5374);function d(n){var i=n.name,e=n.base,d=n.input;return(0,l.jsxs)(s.kC,{justifyContent:"space-between",children:[(0,l.jsx)(s.xv,{fontWeight:700,children:i}),(0,l.jsxs)(s.kC,{gap:8,children:[(0,l.jsx)(s.xv,{textAlign:"right",width:"100px",children:e}),d&&(0,l.jsx)(s.xv,{textAlign:"right",width:"100px",children:d})]})]})}}}]);
//# sourceMappingURL=830.63fe4b80.chunk.js.map