"use strict";(self.webpackChunk_hitachivantara_uikit_adoption_ts=self.webpackChunk_hitachivantara_uikit_adoption_ts||[]).push([[445],{19445:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(72791),c=a(90704),i=a(29439),r=a(14682),s=a(1426),u=a(74569),o=a.n(u),h="https://swapi.py4e.com/api/",l=function(e){return o().get(e).then((function(e){return e.data}))},p=a(80184),d=function(){var e=(0,n.useState)(0),t=(0,i.Z)(e,2),a=t[0],c=t[1],u=(0,n.useState)(0),o=(0,i.Z)(u,2),d=o[0],m=o[1],f=(0,n.useState)(10),g=(0,i.Z)(f,2),x=g[0],T=g[1],_=(0,n.useState)([]),y=(0,i.Z)(_,2),S=y[0],Z=y[1],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,s.ZP)("".concat(h,"starships/").concat(e),l,{suspense:!0})}("?page=".concat(a+1)),k=v.data;(0,n.useEffect)((function(){k&&(Z(k.results),T(k.results.length),0===d&&m(Math.ceil(k.count/10)))}),[d,k]);return(0,p.jsx)(r.Z,{id:"test",data:S,columns:[{headerText:"Name",accessor:"name",cellType:"alpha-numeric",minWidth:150},{headerText:"Model",accessor:"model",cellType:"alpha-numeric",minWidth:150},{headerText:"Manufacturer",accessor:"manufacturer",cellType:"alpha-numeric",minWidth:150},{headerText:"Cargo Capacity",accessor:"cargo_capacity",cellType:"numeric",minWidth:100},{headerText:"Crew",accessor:"crew",cellType:"numeric",minWidth:100}],showPageSize:!1,sortable:!1,page:a,pages:d,pageSize:x,paginationServerSide:!0,onPageChange:function(e){c(e)}})},m=a(60796),f=function(){return(0,p.jsx)(m.W2,{children:(0,p.jsx)(c.Z,{container:!0,children:(0,p.jsx)(c.Z,{item:!0,xs:12,children:(0,p.jsx)(d,{})})})})}}}]);
//# sourceMappingURL=445.23ee05fc.chunk.js.map