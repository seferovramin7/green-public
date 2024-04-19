"use strict";(self.webpackChunkgreen_public=self.webpackChunkgreen_public||[]).push([[2957],{85405:(L,g,t)=>{t.d(g,{B:()=>U,D:()=>B,H:()=>y,R:()=>I});var s=t(74081),l=t(10701),E=t(32370),m=t(27997),c=t(73354),O=t(74758),P=t(27875),d=t(87006),r=t(10411),o=t(76827),M=t(61020),v=t(37995),T=t(47706),n=t(72450);const e=(0,n.default)(l.k)`
  svg path {
    fill: ${({theme:i})=>i.colors.neutral600};
  }
`,D=({name:i})=>(0,s.jsxs)(l.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,d.Q1)(300),children:[(0,s.jsx)(e,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,s.jsx)(r.Z,{width:`${8/16}rem`})}),(0,s.jsx)(E.Z,{fontWeight:"bold",children:i})]}),B=()=>(0,s.jsx)(v.D,{renderItem:i=>{if(i.type===T.D.STAGE)return(0,s.jsx)(D,{name:typeof i.item=="string"?i.item:null})}}),I=({children:i})=>(0,s.jsx)(m.A,{children:(0,s.jsx)(c.o,{tabIndex:-1,children:(0,s.jsx)(O.D,{children:i})})}),U=({href:i})=>{const{formatMessage:h}=(0,M.Z)();return(0,s.jsx)(d.rU,{startIcon:(0,s.jsx)(o.Z,{}),to:i,children:h({id:"global.back",defaultMessage:"Back"})})},y=({title:i,subtitle:h,navigationAction:K,primaryAction:u})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.SL,{name:i}),(0,s.jsx)(P.T,{navigationAction:K,primaryAction:u,title:i,subtitle:h})]})},62957:(L,g,t)=>{t.d(g,{ProtectedReviewWorkflowsPage:()=>J});var s=t(74081),l=t(27279),E=t(10701),m=t(77970),c=t(70774),O=t(38566),P=t(38101),d=t(93153),r=t(50086),o=t(32370),M=t(10989),v=t(86967),T=t(4987),n=t(87006),e=t(36938),D=t(26784),B=t(78665),I=t(53532),U=t(61020),y=t(40464),i=t(59461),h=t(51447),K=t(72450),u=t(59491),S=t(66947),k=t(74563),$=t(85405),j=t(9991),z=t(47706),G=t(60625),Pt=t(64797),Ot=t(85811),gt=t(37995),mt=t(15816),ct=t(97442),vt=t(13576),ft=t(87830),Tt=t(47184),Ct=t(364),ht=t(71563),Lt=t(49204),Wt=t(47853),At=t(74919),Rt=t(29206),Bt=t(98934),It=t(43433),Ut=t(75719),yt=t(8175),Kt=t(6078),ut=t(51943),jt=t(55783),xt=t(92249),wt=t(41942),pt=t(22919),St=t(53915),$t=t(75041),Zt=t(30200),Qt=t(91379),Ft=t(33299),Nt=t(33409),Ht=t(63645),Yt=t(7988),kt=t(7055),zt=t(26757),Gt=t(58311),Vt=t(29510),Xt=t(16946),Jt=t(10124),bt=t(69530),qt=t(86961),ts=t(51527),ss=t(19764),os=t(42982),ns=t(26126);const V=(0,K.default)(n.rU)`
  align-items: center;
  height: ${(0,n.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:a})=>`${a.spaces[2]}}`};
  width: ${(0,n.Q1)(32)};

  svg {
    height: ${(0,n.Q1)(12)};
    width: ${(0,n.Q1)(12)};

    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,X=()=>{const{formatMessage:a}=(0,U.Z)(),{push:Z}=(0,h.k6)(),{trackUsage:Q}=(0,n.rS)(),[x,w]=l.useState(null),[b,W]=l.useState(!1),{collectionTypes:q,singleTypes:tt,isLoading:st}=(0,u.u)(),{meta:f,workflows:F,isLoading:p,refetch:ot}=(0,G.u)(),{del:nt}=(0,n.kY)(),{formatAPIError:et}=(0,n.So)(),N=(0,n.lm)(),{getFeature:at,isLoading:H}=(0,k.u)(),_t=(0,i.v9)(S.s),{allowedActions:{canCreate:Y,canDelete:it}}=(0,n.ss)(_t.settings?.["review-workflows"]),C=at("review-workflows")?.[z.C],{mutateAsync:lt,isLoading:rt}=(0,y.useMutation)(async({workflowId:_,stages:A})=>{const{data:{data:R}}=await nt(`/admin/review-workflows/workflows/${_}`,{data:A});return R},{onSuccess(){N({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),Et=_=>[...q,...tt].find(R=>R.uid===_)?.info.displayName,dt=_=>{w(_)},Mt=()=>{w(null)},Dt=async()=>{if(x)try{const _=await lt({workflowId:x});return await ot(),w(null),_}catch(_){return _ instanceof I.d7&&N({type:"warning",message:et(_)}),null}};return l.useEffect(()=>{!p&&!H&&C&&f&&f?.workflowCount>parseInt(C,10)&&W(!0)},[H,p,f,f?.workflowCount,C]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)($.H,{primaryAction:Y&&(0,s.jsx)(n.Qj,{startIcon:(0,s.jsx)(e.Z,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{C&&f&&f?.workflowCount>=parseInt(C,10)?(_.preventDefault(),W(!0)):Q("willCreateWorkflow")},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:a({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:a({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,s.jsxs)($.R,{children:[p||st?(0,s.jsx)(E.k,{justifyContent:"center",children:(0,s.jsx)(m.a,{children:a({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,s.jsxs)(c.i,{colCount:3,footer:Y&&(0,s.jsx)(O.c,{icon:(0,s.jsx)(e.Z,{}),onClick:()=>{C&&f&&f?.workflowCount>=parseInt(C,10)?W(!0):(Z("/settings/review-workflows/create"),Q("willCreateWorkflow"))},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,s.jsx)(P.h,{children:(0,s.jsxs)(d.Tr,{children:[(0,s.jsx)(r.Th,{children:(0,s.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,s.jsx)(r.Th,{children:(0,s.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,s.jsx)(r.Th,{children:(0,s.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,s.jsx)(r.Th,{children:(0,s.jsx)(M.T,{children:a({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(v.p,{children:F?.map(_=>(0,l.createElement)(d.Tr,{...(0,n.X7)({fn(A){A.target.nodeName!=="BUTTON"&&Z(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,s.jsx)(r.Td,{width:(0,n.Q1)(250),children:(0,s.jsx)(o.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,s.jsx)(r.Td,{children:(0,s.jsx)(o.Z,{textColor:"neutral800",children:_.stages.length})}),(0,s.jsx)(r.Td,{children:(0,s.jsx)(o.Z,{textColor:"neutral800",children:(_?.contentTypes??[]).map(Et).join(", ")})}),(0,s.jsx)(r.Td,{children:(0,s.jsxs)(E.k,{alignItems:"center",justifyContent:"end",children:[(0,s.jsx)(V,{to:`/settings/review-workflows/${_.id}`,"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,s.jsx)(D.Z,{})}),F.length>1&&it&&(0,s.jsx)(T.h,{"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,s.jsx)(B.Z,{}),noBorder:!0,onClick:()=>{dt(String(_.id))}})]})})))})]}),(0,s.jsx)(n.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:rt,isOpen:!!x,onToggleDialog:Mt,onConfirm:Dt}),(0,s.jsxs)(j.L.Root,{isOpen:b,onClose:()=>W(!1),children:[(0,s.jsx)(j.L.Title,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,s.jsx)(j.L.Body,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},J=()=>{const a=(0,i.v9)(S.s);return(0,s.jsx)(n.O4,{permissions:a.settings?.["review-workflows"]?.main,children:(0,s.jsx)(X,{})})}},59491:(L,g,t)=>{t.d(g,{u:()=>c});var s=t(27279),l=t(87006),E=t(53532),m=t(40464);function c(){const{get:O}=(0,l.kY)(),{formatAPIError:P}=(0,l.So)(),d=(0,l.lm)(),r=(0,m.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:e}}=await O("/content-manager/components");return e},onError(e){e instanceof E.d7&&d({type:"warning",message:P(e)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:e}}=await O("/content-manager/content-types");return e},onError(e){e instanceof E.d7&&d({type:"warning",message:P(e)})}}]),[o,M]=r,v=o.isLoading||M.isLoading,T=s.useMemo(()=>(M?.data??[]).filter(e=>e.kind==="collectionType"&&e.isDisplayed),[M?.data]),n=s.useMemo(()=>(M?.data??[]).filter(e=>e.kind!=="collectionType"&&e.isDisplayed),[M?.data]);return{isLoading:v,components:s.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:T,singleTypes:n}}},60625:(L,g,t)=>{t.d(g,{u:()=>m});var s=t(27279),l=t(87006),E=t(40464);function m(c={}){const{get:O}=(0,l.kY)(),{id:P="",...d}=c,r={populate:"stages"},{data:o,isLoading:M,status:v,refetch:T}=(0,E.useQuery)(["review-workflows","workflows",P],async()=>{const{data:D}=await O(`/admin/review-workflows/workflows/${P}`,{params:{...r,...d}});return D}),n=s.useMemo(()=>{let D=[];return o?.data&&(Array.isArray(o.data)?D=o.data:D=[o.data]),D},[o]);return{meta:s.useMemo(()=>{let D;return o&&"meta"in o&&(D=o.meta),D},[o]),workflows:n,isLoading:M,status:v,refetch:T}}},38566:(L,g,t)=>{t.d(g,{c:()=>r});var s=t(74081),l=t(72450),E=t(93415),m=t(84366),c=t(10701),O=t(32370);const P=(0,l.default)(E.x)`
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
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,d=(0,l.default)(E.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:o,icon:M,...v})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(m.i,{}),(0,s.jsx)(d,{as:"button",background:"primary100",padding:5,...v,children:(0,s.jsxs)(c.k,{children:[(0,s.jsx)(P,{"aria-hidden":!0,background:"primary200",children:M}),(0,s.jsx)(E.x,{paddingLeft:3,children:(0,s.jsx)(O.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
