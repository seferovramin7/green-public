"use strict";(self.webpackChunkgreen_public=self.webpackChunkgreen_public||[]).push([[1069],{41069:(b,p,t)=>{t.r(p),t.d(p,{default:()=>U});var a=t(74081),c=t(27279),h=t(70627),s=t.n(h),m=t(35157),C=t(1821),f=t(10701),v=t(2878),A=t(67588),R=t(55911),y=t(95066),T=t(87006),B=t(61020),I=t(72450);const L=n=>{const{selectProps:u}=n,i=g=>o=>{o.preventDefault(),u.onChange(u.value.filter(_=>_!==g))};return(0,a.jsx)(m.V,{type:"button",tabIndex:-1,icon:(0,a.jsx)(y.Z,{}),onClick:i(n.data),children:n.data.label})},K=(0,I.default)(T.JV)`
  .select-control {
    height: auto;

    & > div:first-child {
      padding: 4px;
      gap: 4px;

      & > div {
        padding-left: 8px;
      }
    }

    .select-multi-value-container {
      margin-right: -8px;
    }
  }
`,M=({value:n,onChange:u,name:i,intlLabel:g,required:o,attribute:_,description:O,placeholder:W,disabled:j,error:P})=>{const{formatMessage:d}=(0,B.Z)(),r=(0,c.useMemo)(()=>(_.options||[]).map(e=>{const[l,E]=[...e.split(/:(.*)/s),e];return!l||!E?null:{label:l,value:E}}).filter(Boolean),[_]),x=(0,c.useMemo)(()=>{let e;try{e=JSON.parse(n||"[]")}catch{e=[]}return Array.isArray(e)?r.filter(l=>e.some(E=>l.value===E)):[]},[n,r]),D=(0,c.useMemo)(()=>P||(o&&!r.length?"No options":null),[o,P,r]);return(0,a.jsx)(C.g,{hint:O&&d(O),error:D,name:i,required:o,children:(0,a.jsxs)(f.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,a.jsx)(v.Q,{children:d(g)}),(0,a.jsx)(K,{isSearchable:!0,isMulti:!0,error:D,name:i,id:i,disabled:j||r.length===0,placeholder:W,defaultValue:x.map(e=>({label:d({id:e.label,defaultMessage:e.label}),value:e.value})),components:{MultiValueContainer:L},options:r.map(e=>({...e,label:d({id:e.label,defaultMessage:e.label})})),onChange:e=>{u({target:{name:i,value:e?.length&&e.filter(l=>!!l)?JSON.stringify(e.filter(l=>!!l).map(l=>l.value)):null,type:_.type}})},classNames:{control:e=>"select-control",multiValue:e=>"select-multi-value",placeholder:e=>"select-placeholder"}}),(0,a.jsx)(A.J,{}),(0,a.jsx)(R.c,{})]})})};M.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},M.propTypes={intlLabel:s().object.isRequired,onChange:s().func.isRequired,attribute:s().object.isRequired,name:s().string.isRequired,description:s().object,disabled:s().bool,error:s().string,labelAction:s().object,required:s().bool,value:s().string};const U=M}}]);
