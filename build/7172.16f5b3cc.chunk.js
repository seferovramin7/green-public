"use strict";(self.webpackChunkgreen_public=self.webpackChunkgreen_public||[]).push([[7172],{57172:(q,S,t)=>{t.d(S,{ProtectedListPage:()=>gt});var s=t(74081),c=t(27279),f=t(51926),E=t(27997),L=t(73354),D=t(27875),$=t(37472),h=t(32370),y=t(48102),l=t(74758),M=t(93415),B=t(70774),_=t(38566),tt=t(38101),N=t(93153),d=t(50086),K=t(73411),st=t(10989),ot=t(86967),P=t(10701),z=t(72450);const b=z.default.div`
  background: ${({theme:a})=>a.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:a})=>a?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:a})=>a.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:a})=>a.spaces[1]};
    top: ${({theme:a})=>a.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,nt=z.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${b} {
    background: ${({theme:a})=>a.colors.success500};
  }

  &[aria-checked='true'] ${b}:before {
    transform: translateX(1rem);
  }
`,at=c.forwardRef(({label:a,onChange:g,onLabel:v="On",offLabel:r="Off",selected:j,visibleLabels:n=!1,...x},m)=>(0,s.jsx)(nt,{ref:m,role:"switch","aria-checked":j,"aria-label":a,onClick:g,visibleLabels:n,type:"button",...x,children:(0,s.jsxs)(P.k,{children:[(0,s.jsxs)(b,{children:[(0,s.jsx)("span",{children:v}),(0,s.jsx)("span",{children:r})]}),n&&(0,s.jsx)(M.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:j?"success600":"danger600",children:j?v:r})]})}));var H=t(4987),et=t(6191),dt=t(37370),i=t(87006),O=t(36938),p=t(78665),lt=t(26784),it=t(52448),rt=t(61020),A=t(40464),Q=t(59461),V=t(51447),ht=t(47533),G=t(66947),Et=t(64797),Lt=t(85811),Dt=t(37995),$t=t(15816),Bt=t(97442),Pt=t(13576),bt=t(87830),Ot=t(47184),At=t(364),Zt=t(71563),Wt=t(49204),It=t(47853),Rt=t(74919),Ut=t(29206),Ft=t(98934),Nt=t(43433),Kt=t(75719),zt=t(8175),Ht=t(6078),pt=t(51943),Qt=t(55783),Vt=t(92249),Gt=t(41942),Xt=t(22919),Yt=t(53915),Jt=t(75041),kt=t(30200),wt=t(91379),qt=t(33299),_t=t(33409),ts=t(63645),ss=t(7988),os=t(7055),ns=t(26757),as=t(58311),es=t(29510),ds=t(16946),ls=t(10124),is=t(69530),rs=t(86961),hs=t(51527),cs=t(19764),gs=t(42982),vs=t(26126);const ct=()=>{const[a,g]=c.useState(!1),[v,r]=c.useState([]),j=(0,Q.v9)(G.s),{formatMessage:n}=(0,rt.Z)(),{formatAPIError:x}=(0,i.So)(),m=(0,i.lm)();(0,i.go)();const{push:vt}=(0,V.k6)(),{pathname:X}=(0,V.TH)(),{isLoading:xt,allowedActions:{canCreate:Z,canUpdate:W,canDelete:Y}}=(0,i.ss)(j.settings?.webhooks??{}),{get:mt,post:ft,put:jt}=(0,i.kY)(),{notifyStatus:J}=(0,f.G)(),{isLoading:ut,data:u=[],error:I,refetch:k}=(0,A.useQuery)("webhooks",async()=>{const{data:{data:o}}=await mt("/admin/webhooks");return o});c.useEffect(()=>{if(I){m({type:"warning",message:x(I)});return}u&&J(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[u,I,m,n,J,x]);const w=(0,A.useMutation)(()=>ft("/admin/webhooks/batch-delete",{ids:v}),{onError(o){m({type:"warning",message:x(o)}),g(!1)},onSuccess(){r([]),g(!1),k()}}),Ct=(0,A.useMutation)(({id:o,...e})=>jt(`/admin/webhooks/${o}`,e),{onError(o){m({type:"warning",message:x(o)})},onSuccess(){k()}}),yt=()=>w.mutate(),Mt=o=>r(o?u.map(e=>e.id):[]),Tt=(o,e)=>r(o?F=>[...F,e]:F=>F.filter(St=>St!==e)),R=o=>()=>vt(`${X}/${o}`),U=xt||ut,T=u?.length??0,C=v.length;return(0,s.jsxs)(E.A,{children:[(0,s.jsx)(i.SL,{name:"Webhooks"}),(0,s.jsxs)(L.o,{"aria-busy":U,children:[(0,s.jsx)(D.T,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:Z&&!U&&(0,s.jsx)(dt.Q,{as:ht.OL,startIcon:(0,s.jsx)(O.Z,{}),variant:"default",to:`${X}/create`,size:"S",children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),C>0&&Y&&(0,s.jsx)($.Z,{startActions:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.Z,{variant:"epsilon",textColor:"neutral600",children:n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:C})}),(0,s.jsx)(y.z,{onClick:()=>g(!0),startIcon:(0,s.jsx)(p.Z,{}),size:"L",variant:"danger-light",children:n({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,s.jsx)(l.D,{children:U?(0,s.jsx)(M.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,s.jsx)(i.dO,{})}):T>0?(0,s.jsxs)(B.i,{colCount:5,rowCount:T+1,footer:(0,s.jsx)(_.c,{onClick:Z?R("create"):void 0,icon:(0,s.jsx)(O.Z,{}),children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,s.jsx)(tt.h,{children:(0,s.jsxs)(N.Tr,{children:[(0,s.jsx)(d.Th,{children:(0,s.jsx)(K.C,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:C>0&&C<T,value:C===T,onValueChange:Mt})}),(0,s.jsx)(d.Th,{width:"20%",children:(0,s.jsx)(h.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"global.name",defaultMessage:"Name"})})}),(0,s.jsx)(d.Th,{width:"60%",children:(0,s.jsx)(h.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,s.jsx)(d.Th,{width:"20%",children:(0,s.jsx)(h.Z,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,s.jsx)(d.Th,{children:(0,s.jsx)(st.T,{children:n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(ot.p,{children:u.map(o=>(0,s.jsxs)(N.Tr,{onClick:W?R(o.id):void 0,style:{cursor:W?"pointer":"default"},children:[(0,s.jsx)(d.Td,{onClick:e=>e.stopPropagation(),children:(0,s.jsx)(K.C,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${o.name}`,value:v?.includes(o.id),onValueChange:e=>Tt(e,o.id),name:"select"})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(h.Z,{fontWeight:"semiBold",textColor:"neutral800",children:o.name})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(h.Z,{textColor:"neutral800",children:o.url})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(P.k,{children:(0,s.jsx)(at,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${o.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:o.isEnabled,onChange:e=>{e.stopPropagation(),Ct.mutate({...o,isEnabled:!o.isEnabled})},visibleLabels:!0})})}),(0,s.jsx)(d.Td,{children:(0,s.jsxs)(P.k,{gap:1,children:[W&&(0,s.jsx)(H.h,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,s.jsx)(lt.Z,{}),noBorder:!0}),Y&&(0,s.jsx)(H.h,{onClick:e=>{e.stopPropagation(),r([o.id]),g(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,s.jsx)(p.Z,{}),noBorder:!0})]})})]},o.id))})]}):(0,s.jsx)(et.x,{icon:(0,s.jsx)(it.Z,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,s.jsx)(y.z,{variant:"secondary",startIcon:(0,s.jsx)(O.Z,{}),onClick:()=>Z?R("create"):{},children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,s.jsx)(i.QH,{isOpen:a,onToggleDialog:()=>g(o=>!o),onConfirm:yt,isConfirmButtonLoading:w.isLoading})]})},gt=()=>{const a=(0,Q.v9)(G.s);return(0,s.jsx)(i.O4,{permissions:a.settings?.webhooks.main,children:(0,s.jsx)(ct,{})})}},38566:(q,S,t)=>{t.d(S,{c:()=>y});var s=t(74081),c=t(72450),f=t(93415),E=t(84366),L=t(10701),D=t(32370);const $=(0,c.default)(f.x)`
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
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,h=(0,c.default)(f.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,y=({children:l,icon:M,...B})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(E.i,{}),(0,s.jsx)(h,{as:"button",background:"primary100",padding:5,...B,children:(0,s.jsxs)(L.k,{children:[(0,s.jsx)($,{"aria-hidden":!0,background:"primary200",children:M}),(0,s.jsx)(f.x,{paddingLeft:3,children:(0,s.jsx)(D.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
