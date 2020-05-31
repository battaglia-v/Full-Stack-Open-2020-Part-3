(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=(t(20),t(4)),l=t(3),i=function(e){var n=e.newName,t=e.handleNameChange,a=e.handleNumberChange,u=e.newNumber,c=e.addName;return r.a.createElement("form",{value:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{onChange:t,value:n})),r.a.createElement("div",null,"number:",r.a.createElement("input",{onChange:a,value:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:c},"add")))},d=function(e){var n=e.filteredPersons,t=e.deletePerson;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement("p",{key:e.name}," ",e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id,e.name)}},"delete"))})))},m=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:e.handleFilterChange}))},s=t(2),f=t.n(s),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},E=function(e){return f.a.post(h,e).then((function(e){return e.data}))},p=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var n=e.message;return null===n?null:n.includes("Added")||n.includes("Updated")?r.a.createElement("div",{className:"addedMessage"},n):n.includes("Error")||n.includes("Deleted")?r.a.createElement("div",{className:"errorMessage"},n):void 0},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),f=s[0],h=s[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),O=j[0],C=j[1],N=Object(a.useState)(""),k=Object(l.a)(N,2),y=k[0],S=k[1],P=Object(a.useState)(!0),D=Object(l.a)(P,2),T=D[0],F=D[1],A=Object(a.useState)(null),J=Object(l.a)(A,2),L=J[0],M=J[1];Object(a.useEffect)((function(){b().then((function(e){u(e)}))}),[]);var U=T?t:t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:L}),r.a.createElement(m,{handleFilterChange:function(e){S(e.target.value),F(!1),console.log(y)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(i,{newName:f,newNumber:O,handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){C(e.target.value)},addName:function(e){e.preventDefault();var n={name:f,number:O};if(0!==t.filter((function(e){return e.name===f})).length){window.alert("".concat(f," is already added to phonebook, replace the old number with a new one?"));var a=t.find((function(e){return e.name===f})),r=Object(o.a)(Object(o.a)({},a),{},{number:O});return p(r.id,r).then((function(e){u(t.map((function(n){return n.id!==r.id?n:e}))),M("Updated ".concat(r.name)),setTimeout((function(){M(null)}),3e3),h(""),C("")})).catch((function(e){M("Error - ".concat(r.name," has already been removed from the server")),setTimeout((function(){M(null)}),3e3)}))}return E(n).then((function(e){u(t.concat(e)),h(""),C(""),M("Added ".concat(n.name,"'")),setTimeout((function(){M(null)}),3e3)}))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{filteredPersons:U,deletePerson:function(e,n){window.confirm("Do you really want to delete ".concat(n,"?"))&&(u(t.filter((function(n){return n.id!==e}))),v(e).then((function(){M("Deleted ".concat(n)),setTimeout((function(){M(null)}),4e3)})))}}))};f.a.get("http://localhost:3001/persons").then((function(e){console.log(e)})),c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ce5745e9.chunk.js.map