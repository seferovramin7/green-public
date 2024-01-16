"use strict";(self.webpackChunkgreen_public=self.webpackChunkgreen_public||[]).push([[2957],{85405:(L,g,s)=>{s.d(g,{B:()=>U,D:()=>B,H:()=>y,R:()=>I});var t=s(74081),l=s(10701),E=s(32370),m=s(27997),c=s(73354),O=s(74758),P=s(27875),d=s(15530),r=s(10411),o=s(76827),M=s(61020),v=s(24468),T=s(47706),n=s(19003);const e=(0,n.ZP)(l.k)`
  svg path {
    fill: ${({theme:i})=>i.colors.neutral600};
  }
`,D=({name:i})=>(0,t.jsxs)(l.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,d.Q1)(300),children:[(0,t.jsx)(e,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(r.Z,{width:`${8/16}rem`})}),(0,t.jsx)(E.Z,{fontWeight:"bold",children:i})]}),B=()=>(0,t.jsx)(v.D,{renderItem:i=>{if(i.type===T.D.STAGE)return(0,t.jsx)(D,{name:typeof i.item=="string"?i.item:null})}}),I=({children:i})=>(0,t.jsx)(m.A,{children:(0,t.jsx)(c.o,{tabIndex:-1,children:(0,t.jsx)(O.D,{children:i})})}),U=({href:i})=>{const{formatMessage:h}=(0,M.Z)();return(0,t.jsx)(d.rU,{startIcon:(0,t.jsx)(o.Z,{}),to:i,children:h({id:"global.back",defaultMessage:"Back"})})},y=({title:i,subtitle:h,navigationAction:K,primaryAction:u})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.SL,{name:i}),(0,t.jsx)(P.T,{navigationAction:K,primaryAction:u,title:i,subtitle:h})]})},62957:(L,g,s)=>{s.d(g,{ProtectedReviewWorkflowsPage:()=>J});var t=s(74081),l=s(27279),E=s(10701),m=s(77970),c=s(70774),O=s(38566),P=s(38101),d=s(93153),r=s(50086),o=s(32370),M=s(10989),v=s(86967),T=s(4987),n=s(15530),e=s(36938),D=s(26784),B=s(78665),I=s(53532),U=s(61020),y=s(40464),i=s(59461),h=s(51447),K=s(19003),u=s(59491),S=s(66947),k=s(74563),$=s(85405),j=s(9991),z=s(47706),G=s(60625),Ps=s(64797),Os=s(85811),gs=s(24468),ms=s(15816),cs=s(97442),vs=s(13576),fs=s(87830),Ts=s(47184),Cs=s(364),hs=s(71563),Ls=s(49204),Ws=s(47853),As=s(74919),Rs=s(29206),Bs=s(98934),Is=s(43433),Us=s(75719),ys=s(8175),Ks=s(6078),us=s(51943),js=s(55783),xs=s(92249),ws=s(41942),ps=s(22919),Ss=s(53915),$s=s(75041),Zs=s(30200),Qs=s(91379),Fs=s(33299),Ns=s(33409),Hs=s(63645),Ys=s(7988),ks=s(7055),zs=s(26757),Gs=s(58311),Vs=s(29510),Xs=s(16946),Js=s(10124),bs=s(69530),qs=s(86961),st=s(51527),tt=s(19764),ot=s(42982),nt=s(26126);const V=(0,K.ZP)(n.rU)`
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
`,X=()=>{const{formatMessage:a}=(0,U.Z)(),{push:Z}=(0,h.k6)(),{trackUsage:Q}=(0,n.rS)(),[x,w]=l.useState(null),[b,W]=l.useState(!1),{collectionTypes:q,singleTypes:ss,isLoading:ts}=(0,u.u)(),{meta:f,workflows:F,isLoading:p,refetch:os}=(0,G.u)(),{del:ns}=(0,n.kY)(),{formatAPIError:es}=(0,n.So)(),N=(0,n.lm)(),{getFeature:as,isLoading:H}=(0,k.u)(),_s=(0,i.v9)(S.s),{allowedActions:{canCreate:Y,canDelete:is}}=(0,n.ss)(_s.settings?.["review-workflows"]),C=as("review-workflows")?.[z.C],{mutateAsync:ls,isLoading:rs}=(0,y.useMutation)(async({workflowId:_,stages:A})=>{const{data:{data:R}}=await ns(`/admin/review-workflows/workflows/${_}`,{data:A});return R},{onSuccess(){N({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),Es=_=>[...q,...ss].find(R=>R.uid===_)?.info.displayName,ds=_=>{w(_)},Ms=()=>{w(null)},Ds=async()=>{if(x)try{const _=await ls({workflowId:x});return await os(),w(null),_}catch(_){return _ instanceof I.d7&&N({type:"warning",message:es(_)}),null}};return l.useEffect(()=>{!p&&!H&&C&&f&&f?.workflowCount>parseInt(C,10)&&W(!0)},[H,p,f,f?.workflowCount,C]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)($.H,{primaryAction:Y&&(0,t.jsx)(n.Qj,{startIcon:(0,t.jsx)(e.Z,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{C&&f&&f?.workflowCount>=parseInt(C,10)?(_.preventDefault(),W(!0)):Q("willCreateWorkflow")},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:a({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:a({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)($.R,{children:[p||ts?(0,t.jsx)(E.k,{justifyContent:"center",children:(0,t.jsx)(m.a,{children:a({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(c.i,{colCount:3,footer:Y&&(0,t.jsx)(O.c,{icon:(0,t.jsx)(e.Z,{}),onClick:()=>{C&&f&&f?.workflowCount>=parseInt(C,10)?W(!0):(Z("/settings/review-workflows/create"),Q("willCreateWorkflow"))},children:a({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(P.h,{children:(0,t.jsxs)(d.Tr,{children:[(0,t.jsx)(r.Th,{children:(0,t.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(o.Z,{variant:"sigma",children:a({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(r.Th,{children:(0,t.jsx)(M.T,{children:a({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(v.p,{children:F?.map(_=>(0,l.createElement)(d.Tr,{...(0,n.X7)({fn(A){A.target.nodeName!=="BUTTON"&&Z(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(r.Td,{width:(0,n.Q1)(250),children:(0,t.jsx)(o.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(r.Td,{children:(0,t.jsx)(o.Z,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(r.Td,{children:(0,t.jsx)(o.Z,{textColor:"neutral800",children:(_?.contentTypes??[]).map(Es).join(", ")})}),(0,t.jsx)(r.Td,{children:(0,t.jsxs)(E.k,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(V,{to:`/settings/review-workflows/${_.id}`,"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(D.Z,{})}),F.length>1&&is&&(0,t.jsx)(T.h,{"aria-label":a({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(B.Z,{}),noBorder:!0,onClick:()=>{ds(String(_.id))}})]})})))})]}),(0,t.jsx)(n.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:rs,isOpen:!!x,onToggleDialog:Ms,onConfirm:Ds}),(0,t.jsxs)(j.L.Root,{isOpen:b,onClose:()=>W(!1),children:[(0,t.jsx)(j.L.Title,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(j.L.Body,{children:a({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},J=()=>{const a=(0,i.v9)(S.s);return(0,t.jsx)(n.O4,{permissions:a.settings?.["review-workflows"]?.main,children:(0,t.jsx)(X,{})})}},59491:(L,g,s)=>{s.d(g,{u:()=>c});var t=s(27279),l=s(15530),E=s(53532),m=s(40464);function c(){const{get:O}=(0,l.kY)(),{formatAPIError:P}=(0,l.So)(),d=(0,l.lm)(),r=(0,m.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:e}}=await O("/content-manager/components");return e},onError(e){e instanceof E.d7&&d({type:"warning",message:P(e)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:e}}=await O("/content-manager/content-types");return e},onError(e){e instanceof E.d7&&d({type:"warning",message:P(e)})}}]),[o,M]=r,v=o.isLoading||M.isLoading,T=t.useMemo(()=>(M?.data??[]).filter(e=>e.kind==="collectionType"&&e.isDisplayed),[M?.data]),n=t.useMemo(()=>(M?.data??[]).filter(e=>e.kind!=="collectionType"&&e.isDisplayed),[M?.data]);return{isLoading:v,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:T,singleTypes:n}}},60625:(L,g,s)=>{s.d(g,{u:()=>m});var t=s(27279),l=s(15530),E=s(40464);function m(c={}){const{get:O}=(0,l.kY)(),{id:P="",...d}=c,r={populate:"stages"},{data:o,isLoading:M,status:v,refetch:T}=(0,E.useQuery)(["review-workflows","workflows",P],async()=>{const{data:D}=await O(`/admin/review-workflows/workflows/${P}`,{params:{...r,...d}});return D}),n=t.useMemo(()=>{let D=[];return o?.data&&(Array.isArray(o.data)?D=o.data:D=[o.data]),D},[o]);return{meta:t.useMemo(()=>{let D;return o&&"meta"in o&&(D=o.meta),D},[o]),workflows:n,isLoading:M,status:v,refetch:T}}},38566:(L,g,s)=>{s.d(g,{c:()=>r});var t=s(74081),l=s(19003),E=s(93415),m=s(84366),c=s(10701),O=s(32370);const P=(0,l.ZP)(E.x)`
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
`,d=(0,l.ZP)(E.x)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:o,icon:M,...v})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(m.i,{}),(0,t.jsx)(d,{as:"button",background:"primary100",padding:5,...v,children:(0,t.jsxs)(c.k,{children:[(0,t.jsx)(P,{"aria-hidden":!0,background:"primary200",children:M}),(0,t.jsx)(E.x,{paddingLeft:3,children:(0,t.jsx)(O.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);
