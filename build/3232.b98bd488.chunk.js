"use strict";(self.webpackChunkgreen_public=self.webpackChunkgreen_public||[]).push([[3232],{38566:(rt,U,s)=>{s.d(U,{c:()=>I});var t=s(74081),_=s(72450),p=s(93415),V=s(84366),m=s(10701),Z=s(32370);const k=(0,_.default)(p.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:E})=>E.colors.primary600};
  }
`,S=(0,_.default)(p.x)`
  border-radius: 0 0 ${({theme:E})=>E.borderRadius} ${({theme:E})=>E.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,I=({children:E,icon:X,...F})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(V.i,{}),(0,t.jsx)(S,{as:"button",background:"primary100",padding:5,...F,children:(0,t.jsxs)(m.k,{children:[(0,t.jsx)(k,{"aria-hidden":!0,background:"primary200",children:X}),(0,t.jsx)(p.x,{paddingLeft:3,children:(0,t.jsx)(Z.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:E})})]})})]})},13232:(rt,U,s)=>{s.r(U),s.d(U,{default:()=>St});var t=s(74081),_=s(93415),p=s(10701),V=s(50703),m=s(32370),Z=s(70774),k=s(38101),S=s(93153),I=s(50086),E=s(48102),X=s(38566),F=s(4987),dt=s(27875),ct=s(74758),d=s(87006),ht=s(95066),R=s(36938),J=s(26784),_t=s(78665),pt=s(91561),gt=s(31440),ut=s(59082),ft=s(76827),D=s(98934),mt=s(10131),G=s(6078),Y=s(51943),$=s(61020),w=s(51447),L=s(27279),r=s(23713),x=s(72450),Qt=s(364),zt=s(13356),Nt=s(43433),Vt=s(83287),Xt=s(6699),wt=s(12665),Ht=s(8175),Jt=s(47853),Gt=s(63799),Yt=s(84921),qt=s(59461),te=s(79146),ee=s(29206),se=s(88702),ne=s(81465),oe=s(51527),ie=s(49204),ae=s(74919),le=s(51006);const xt=(0,x.default)(_.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`,q=x.default.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,d.Q1)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,d.Q1)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:e?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,tt=({customRowComponent:e,component:n,isFromDynamicZone:o=!1,isNestedInDZComponent:i=!1,firstLoopComponentUid:c})=>{const{modifiedData:l}=(0,r.u)(),{schema:{attributes:g}}=D(l,["components",n],{schema:{attributes:[]}});return(0,t.jsx)(q,{isChildOfDynamicZone:o,className:"component-row",children:(0,t.jsx)("td",{colSpan:12,children:(0,t.jsx)(st,{customRowComponent:e,items:g,targetUid:n,firstLoopComponentUid:c||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:i,isSub:!0,secondLoopComponentUid:c?n:null})})})},Et=({isActive:e=!1,icon:n="cube"})=>(0,t.jsx)(p.k,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:(0,t.jsx)(V.J,{as:r.C[n]||r.C.cube,height:5,width:5})}),et=(0,x.default)(_.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,d.Q1)(8)};

  svg {
    width: ${(0,d.Q1)(10)};
    height: ${(0,d.Q1)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Mt=(0,x.default)(p.k)`
  width: ${(0,d.Q1)(140)};
  height: ${(0,d.Q1)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${et} {
      display: block;
    }

    ${m.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`,yt=({component:e,dzName:n,index:o,isActive:i=!1,isInDevelopmentMode:c=!1,onClick:l})=>{const{modifiedData:g,removeComponentFromDynamicZone:C}=(0,r.u)(),{schema:{icon:y,displayName:M}}=D(g,["components",e],{schema:{}}),u=a=>{a.stopPropagation(),C(n,o)};return(0,t.jsxs)(Mt,{alignItems:"center",direction:"column",className:i?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:l,role:"tab",tabIndex:i?0:-1,cursor:"pointer","aria-selected":i,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[(0,t.jsx)(Et,{icon:y,isActive:i}),(0,t.jsx)(_.x,{marginTop:1,maxWidth:"100%",children:(0,t.jsx)(m.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:M})}),c&&(0,t.jsx)(et,{as:"button",onClick:u,children:(0,t.jsx)(ht.Z,{})})]})},jt=(0,x.default)(R.Z)`
  width: ${(0,d.Q1)(32)};
  height: ${(0,d.Q1)(32)};
  padding: ${(0,d.Q1)(9)};
  border-radius: ${(0,d.Q1)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Dt=(0,x.default)(_.x)`
  height: ${(0,d.Q1)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Ct=(0,x.default)(p.k)`
  width: 100%;
  overflow-x: auto;
`,Ot=(0,x.default)(_.x)`
  padding-top: ${(0,d.Q1)(90)};
`,Pt=(0,x.default)(p.k)`
  flex-shrink: 0;
  width: ${(0,d.Q1)(140)};
  height: ${(0,d.Q1)(80)};
  justify-content: center;
  align-items: center;
`,Tt=({customRowComponent:e,components:n=[],addComponent:o,name:i,targetUid:c})=>{const{isInDevelopmentMode:l}=(0,r.u)(),[g,C]=(0,L.useState)(0),{formatMessage:y}=(0,$.Z)(),M=a=>{g!==a&&C(a)},u=()=>{o(i)};return(0,t.jsx)(q,{className:"dynamiczone-row",isFromDynamicZone:!0,children:(0,t.jsxs)("td",{colSpan:12,children:[(0,t.jsx)(Dt,{paddingLeft:8,children:(0,t.jsxs)(Ct,{gap:2,children:[l&&(0,t.jsx)("button",{type:"button",onClick:u,children:(0,t.jsxs)(Pt,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(jt,{}),(0,t.jsx)(m.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:y({id:(0,r.g)("button.component.add"),defaultMessage:"Add a component"})})]})}),(0,t.jsx)(p.k,{role:"tablist",gap:2,children:n.map((a,h)=>(0,t.jsx)(yt,{dzName:i||"",index:h,component:a,isActive:g===h,isInDevelopmentMode:l,onClick:()=>M(h)},a))})]})}),(0,t.jsx)(Ot,{children:n.map((a,h)=>{const f={customRowComponent:e,component:a};return(0,t.jsx)(_.x,{id:`dz-${i}-panel-${h}`,role:"tabpanel","aria-labelledby":`dz-${i}-tab-${h}`,style:{display:g===h?"block":"none"},children:(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,L.createElement)(tt,{...f,isFromDynamicZone:!0,component:c,key:a})})})},a)})})]})})},vt=(0,x.default)(_.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e,color:n})=>e.colors[`${n}600`]};
  }
`,bt=(0,x.default)(_.x)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,Bt=({children:e,icon:n,color:o,...i})=>(0,t.jsx)(bt,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...i,children:(0,t.jsxs)(p.k,{children:[(0,t.jsx)(vt,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),(0,t.jsx)(_.x,{paddingLeft:3,children:(0,t.jsx)(m.Z,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:e})})]})}),st=({addComponentToDZ:e,customRowComponent:n,editTarget:o,firstLoopComponentUid:i,isFromDynamicZone:c=!1,isMain:l=!1,isNestedInDZComponent:g=!1,isSub:C=!1,items:y=[],secondLoopComponentUid:M,targetUid:u})=>{const{formatMessage:a}=(0,$.Z)(),{trackUsage:h}=(0,d.rS)(),{isInDevelopmentMode:f,modifiedData:B,isInContentTypeView:P}=(0,r.u)(),{onOpenModalAddField:v}=(0,r.a)(),O=()=>{h("hasClickedCTBAddFieldBanner"),v({forTarget:o,targetUid:u})};return u?y.length===0&&l?(0,t.jsxs)(Z.i,{colCount:2,rowCount:2,children:[(0,t.jsx)(k.h,{children:(0,t.jsxs)(S.Tr,{children:[(0,t.jsx)(I.Th,{children:(0,t.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(I.Th,{children:(0,t.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.c4,{action:(0,t.jsx)(E.z,{onClick:O,size:"L",startIcon:(0,t.jsx)(R.Z,{}),variant:"secondary",children:a({id:(0,r.g)("table.button.no-fields"),defaultMessage:"Add new field"})}),colSpan:2,content:P?{id:(0,r.g)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,r.g)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})]}):(0,t.jsxs)(xt,{children:[(0,t.jsx)(_.x,{paddingLeft:6,paddingRight:l?6:0,...l&&{style:{overflowX:"auto"}},children:(0,t.jsxs)("table",{children:[l&&(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)("th",{colSpan:2,children:(0,t.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)("tbody",{children:y.map(T=>{const{type:A}=T,W=n;return(0,t.jsxs)(L.Fragment,{children:[(0,t.jsx)(W,{...T,isNestedInDZComponent:g,targetUid:u,editTarget:o,firstLoopComponentUid:i,isFromDynamicZone:c,secondLoopComponentUid:M}),A==="component"&&(0,t.jsx)(tt,{...T,customRowComponent:n,targetUid:u,isNestedInDZComponent:c,editTarget:o,firstLoopComponentUid:i}),A==="dynamiczone"&&(0,t.jsx)(Tt,{...T,customRowComponent:n,addComponent:e,targetUid:u})]},T.name)})})]})}),l&&f&&(0,t.jsx)(X.c,{icon:(0,t.jsx)(R.Z,{}),onClick:O,children:a({id:(0,r.g)(`form.button.add.field.to.${B.contentType?B.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),C&&f&&(0,t.jsx)(Bt,{icon:(0,t.jsx)(R.Z,{}),onClick:O,color:c?"primary":"neutral",children:a({id:(0,r.g)("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):(0,t.jsxs)(Z.i,{colCount:2,rowCount:2,children:[(0,t.jsx)(k.h,{children:(0,t.jsxs)(S.Tr,{children:[(0,t.jsx)(I.Th,{children:(0,t.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(I.Th,{children:(0,t.jsx)(m.Z,{variant:"sigma",textColor:"neutral600",children:a({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(d.c4,{colSpan:2,content:{id:(0,r.g)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}})]})},At=(0,x.default)(_.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:n})=>e.colors[n]};
    display: block;
  }
`,It=x.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:n})=>e.colors[n]};
  }
`,$t=e=>(0,t.jsx)(At,{children:(0,t.jsx)(It,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),Rt=({type:e,customField:n=null,repeatable:o=!1})=>{const{formatMessage:i}=(0,$.Z)();let c=e;return["integer","biginteger","float","decimal"].includes(e)?c="number":["string"].includes(e)&&(c="text"),n?(0,t.jsx)(m.Z,{children:i({id:(0,r.g)("attribute.customField"),defaultMessage:"Custom field"})}):(0,t.jsxs)(m.Z,{children:[i({id:(0,r.g)(`attribute.${c}`),defaultMessage:e}),"\xA0",o&&i({id:(0,r.g)("component.repeatable"),defaultMessage:"(repeatable)"})]})},Lt=({content:e})=>(0,t.jsx)(t.Fragment,{children:Y(e)}),Wt=(0,x.default)(_.x)`
  position: relative;
`,Kt=(0,L.memo)(({configurable:e=!0,customField:n=null,editTarget:o,firstLoopComponentUid:i=null,isFromDynamicZone:c=!1,name:l,onClick:g,relation:C="",repeatable:y=!1,secondLoopComponentUid:M=null,target:u=null,targetUid:a=null,type:h})=>{const{contentTypes:f,isInDevelopmentMode:B,removeAttribute:P}=(0,r.u)(),{formatMessage:v}=(0,$.Z)(),O=h==="relation"&&C.includes("morph"),T=["integer","biginteger","float","decimal"].includes(h)?"number":h,A=D(f,[u],{}),W=D(A,["schema","displayName"],""),K=D(A,"plugin"),H=u?"relation":T,Q=()=>{O||e!==!1&&g(o,M||i||a,l,h,n)};let b;return M&&i?b=2:i?b=1:b=0,(0,t.jsxs)(Wt,{as:"tr",...(0,d.X7)({fn:Q,condition:B&&e&&!O}),children:[(0,t.jsxs)("td",{style:{position:"relative"},children:[b!==0&&(0,t.jsx)($t,{color:c?"primary200":"neutral150"}),(0,t.jsxs)(p.k,{paddingLeft:2,gap:4,children:[(0,t.jsx)(r.A,{type:H,customField:n}),(0,t.jsx)(m.Z,{fontWeight:"bold",children:l})]})]}),(0,t.jsx)("td",{children:u?(0,t.jsxs)(m.Z,{children:[v({id:(0,r.g)(`modelPage.attribute.${O?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",(0,t.jsxs)("span",{style:{fontStyle:"italic"},children:[(0,t.jsx)(Lt,{content:W}),"\xA0",K&&`(${v({id:(0,r.g)("from"),defaultMessage:"from"})}: ${K})`]})]}):(0,t.jsx)(Rt,{type:h,customField:n,repeatable:y})}),(0,t.jsx)("td",{children:B?(0,t.jsx)(p.k,{justifyContent:"flex-end",...d.UW,children:e?(0,t.jsxs)(p.k,{gap:1,children:[!O&&(0,t.jsx)(F.h,{onClick:Q,label:`${v({id:"app.utils.edit",defaultMessage:"Edit"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(J.Z,{})}),(0,t.jsx)(F.h,{onClick:z=>{z.stopPropagation(),P(o,l,M||i||"")},label:`${v({id:"global.delete",defaultMessage:"Delete"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(_t.Z,{})})]}):(0,t.jsx)(pt.Z,{})}):(0,t.jsx)(_.x,{height:(0,d.Q1)(32)})})]})}),Ut=e=>{let n;switch(e){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=e}return n},Zt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},kt=(0,L.memo)(({disabled:e,isTemporary:n=!1,isInContentTypeView:o=!0,contentTypeKind:i="collectionType",targetUid:c=""})=>{const{formatMessage:l}=(0,$.Z)(),{push:g}=(0,w.k6)(),{collectionTypesConfigurations:C,componentsConfigurations:y,singleTypesConfigurations:M}=Zt,u=l({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let a=C;const h=()=>(n||g(o?`/content-manager/collection-types/${c}/configurations/edit`:`/content-manager/components/${c}/configurations/edit`),!1);return o&&i==="singleType"&&(a=M),o||(a=y),(0,t.jsx)(d.jW,{permissions:a,children:(0,t.jsx)(E.z,{startIcon:(0,t.jsx)(gt.Z,{}),variant:"tertiary",onClick:h,disabled:n||e,children:u})})}),St=()=>{const{initialData:e,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:i,submitData:c}=(0,r.u)(),{formatMessage:l}=(0,$.Z)(),{trackUsage:g}=(0,d.rS)(),C=(0,w.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:y,onOpenModalAddField:M,onOpenModalEditField:u,onOpenModalEditSchema:a,onOpenModalEditCustomField:h}=(0,r.a)(),f=i?"contentType":"component",B=[f,"schema","attributes"],P=D(n,[f,"uid"]),v=D(n,[f,"isTemporary"],!1),O=D(n,[f,"schema","kind"],null),T=D(n,B,[]),A=mt(e,[f,"plugin"]),W=!G(n,e),K=i?"contentType":"component",H=j=>{y({dynamicZoneTarget:j,targetUid:P})},Q=async(j,nt,ot,it,at)=>{const lt=Ut(it);at?h({forTarget:j,targetUid:nt,attributeName:ot,attributeType:lt,customFieldUid:at}):u({forTarget:j,targetUid:nt,attributeName:ot,attributeType:lt,step:it==="component"?"2":null})};let b=D(n,[f,"schema","displayName"],"");const z=D(n,[f,"schema","kind"],""),N=C?.params.currentUID==="create-content-type";!b&&N&&(b=l({id:(0,r.g)("button.model.create"),defaultMessage:"Create new collection type"}));const Ft=()=>{const j=z||f;j==="collectionType"&&g("willEditNameOfContentType"),j==="singleType"&&g("willEditNameOfSingleType"),a({modalType:f,forTarget:f,targetUid:P,kind:j})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.NL,{message:j=>j.hash==="#back"?!1:l({id:(0,r.g)("prompt.unsaved")}),when:W}),(0,t.jsx)(dt.T,{id:"title",primaryAction:o&&(0,t.jsxs)(p.k,{gap:2,children:[!N&&(0,t.jsx)(E.z,{startIcon:(0,t.jsx)(R.Z,{}),variant:"secondary",onClick:()=>{M({forTarget:K,targetUid:P})},children:l({id:(0,r.g)("button.attributes.add.another"),defaultMessage:"Add another field"})}),(0,t.jsx)(E.z,{startIcon:(0,t.jsx)(ut.Z,{}),onClick:()=>c(),type:"submit",disabled:G(n,e),children:l({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:o&&!A&&!N&&(0,t.jsx)(E.z,{startIcon:(0,t.jsx)(J.Z,{}),variant:"tertiary",onClick:Ft,children:l({id:"app.utils.edit",defaultMessage:"Edit"})}),title:Y(b),subtitle:l({id:(0,r.g)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:(0,t.jsx)(d.rU,{startIcon:(0,t.jsx)(ft.Z,{}),to:"/plugins/content-type-builder/",children:l({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(ct.D,{children:(0,t.jsxs)(p.k,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(p.k,{justifyContent:"flex-end",children:(0,t.jsx)(p.k,{gap:2,children:(0,t.jsx)(kt,{targetUid:P,isTemporary:v,isInContentTypeView:i,contentTypeKind:O,disabled:N},"link-to-cm-settings-view")})}),(0,t.jsx)(_.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(st,{items:T,customRowComponent:j=>(0,t.jsx)(Kt,{...j,onClick:Q}),addComponentToDZ:H,targetUid:P,editTarget:K,isMain:!0})})]})})]})}}}]);
