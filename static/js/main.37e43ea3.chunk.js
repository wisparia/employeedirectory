(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(2),c=n.n(i),a=n(15),r=n.n(a),s=(n(25),n(5)),l=(n(26),n(16)),b=n(17),d=n(19),m=n(18),j=function(e){var t=e.name,n=e.phone,i=e.email;return Object(o.jsxs)("div",{children:[t," ",n," ",i]})},p=(i.Component,function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark justify-content-center",children:Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:"Employee Directory"})})}),h=(n(27),function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark justify-content-center search",children:[Object(o.jsx)("input",{})," ",Object(o.jsx)("button",{class:"btn btn-primary btn-sm",children:"Search"})]})}),u=n(3),y=n.n(u),O=(n(14),function(){var e=Object(i.useState)([{id:1,name:"John Doe",email:"john.doe@test.com",phone:"423-234-2443",location:"Edmonds, WA",position:"Software Engineer",birthday:"12.1.1982"},{id:2,name:"George Frank",email:"george.frank@test.com",phone:"565-453-8845",location:"Seattle, WA",position:"Software Manager",birthday:"8.12.1965"},{id:3,name:"Harriet Smith",email:"harriet.smith@test.com",phone:"678-688-7878",location:"Edmonds, WA",position:"Sales Representitive",birthday:"6.22.1979"},{id:4,name:"Wayne Day",email:"wayne.day@test.com",phone:"234-444-1232",location:"Lynnwood, WA",position:"Intern",birthday:"11.21.1999"},{id:5,name:"Leonard Boots",email:"leonard.boots@test.com",phone:"123-454-9900",location:"Seattle, WA",position:"Software Engineer",birthday:"5.4.1980"},{id:6,name:"River Druppar",email:"River.Druppar@test.com",phone:"345-567-6456",location:"Shoreline, WA",position:"Front-End Developer",birthday:"2.26.1992"},{id:7,name:"Dean Robinson",email:"dean.robinson@test.com",phone:"787-687-7777",location:"Mountlake Terrace, WA",position:"Receptionst",birthday:"4.01.1971"},{id:8,name:"Maurice Beck",email:"maurice.beck@test.com",phone:"334-333-4554",location:"Brier, WA",position:"CEO",birthday:"12.09.1956"},{id:9,name:"Ruben Byrd",email:"ruben.byrd@test.com",phone:"234-234-4234",location:"Bellvue, WA",position:"Sales Representitive",birthday:"7.30.1965"},{id:10,name:"Crystal Phillips",email:"crystal.phillips@test.com",phone:"666-655-5656",location:"Seattle, WA",position:"Software Engineer",birthday:"3.19.1989"}]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(null),r=Object(s.a)(a,2),l=(r[0],r[1]);Object(i.useEffect)((function(){y.a.get("https://randomuser.me/api/?results=20"),l(!1),l(!0)}),[n]);var b=function(e){l(!0),console.log("Clicked");var t=n.sort((function(t,n){return t[e].localeCompare(n[e])}));console.log(t),c(t),l(e),console.log(n.sort((function(t,n){return t[e].localeCompare(n[e])})))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(p,{}),Object(o.jsx)(h,{}),Object(o.jsxs)("div",{class:"row justify-content-center buttons",children:[Object(o.jsx)("div",{class:"col-sm-2",children:Object(o.jsxs)("button",{type:"button",class:"btn btn-primary btn-lg btn-block",onClick:function(){return b("name")},children:[" ","name"]})}),Object(o.jsx)("div",{class:"col-sm-2",children:Object(o.jsx)("button",{type:"button",class:"btn btn-primary btn-lg btn-block",onClick:function(){return b("phone")},children:"phone"})}),Object(o.jsxs)("div",{class:"col-sm-2",children:[" ",Object(o.jsx)("button",{type:"button",class:"btn btn-primary btn-lg btn-block",onClick:function(){return b("email")},children:"email"})]}),Object(o.jsxs)("div",{class:"col-sm-2",children:[" ",Object(o.jsx)("button",{type:"button",class:"btn btn-primary btn-lg btn-block",onClick:function(){return b("location")},children:"location"})]}),Object(o.jsxs)("div",{class:"col-sm-2",children:[" ",Object(o.jsx)("button",{type:"button",class:"btn btn-primary btn-lg btn-block",onClick:function(){return b("position")},children:"department"})]}),Object(o.jsx)("div",{class:"col-sm-2",children:Object(o.jsx)("button",{type:"button",class:"btn btn-primary btn-lg btn-block",onClick:function(){return b("birthday")},children:"birthday"})})]}),n&&n.map((function(e){return Object(o.jsxs)("div",{class:"row justify-content-center tableStyle",children:[Object(o.jsx)("div",{class:"col-sm-2",children:e.name}),Object(o.jsx)("div",{class:"col-sm-2",children:e.phone}),Object(o.jsx)("div",{class:"col-sm-2",children:e.email}),Object(o.jsx)("div",{class:"col-sm-2",children:e.location}),Object(o.jsx)("div",{class:"col-sm-2",children:e.position}),Object(o.jsx)("div",{class:"col-sm-2",children:e.birthday})]})}))]})});r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.37e43ea3.chunk.js.map