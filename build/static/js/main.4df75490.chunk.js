(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),o=t.n(c),u=(t(20),t(4)),l=t(3),i=function(e){var n=e.newName,t=e.handleNameChange,a=e.handleNumberChange,c=e.newNumber,o=e.addName;return r.a.createElement("form",{value:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{onChange:t,value:n})),r.a.createElement("div",null,"number:",r.a.createElement("input",{onChange:a,value:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:o},"add")))},d=function(e){var n=e.filteredPersons,t=e.deletePerson;return r.a.createElement(r.a.Fragment,null,n.map((function(e){return r.a.createElement("p",{key:e.name}," ",e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id,e.name)}},"delete"))})))},m=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{onChange:e.handleFilterChange}))},s=function(e){var n=e.message;return null===n?null:n.includes("Added")||n.includes("Updated")?r.a.createElement("div",{className:"addedMessage"},n):r.a.createElement("div",{className:"errorMessage"},n)},f=t(2),h=t.n(f),b="/api/persons",p=function(){return h.a.get(b).then((function(e){return e.data}))},E=function(e){return h.a.post(b,e).then((function(e){return e.data}))},g=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),f=Object(l.a)(o,2),h=f[0],b=f[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),O=j[0],C=j[1],N=Object(a.useState)(""),k=Object(l.a)(N,2),y=k[0],S=k[1],P=Object(a.useState)(!0),D=Object(l.a)(P,2),F=D[0],A=D[1],J=Object(a.useState)(null),L=Object(l.a)(J,2),M=L[0],T=L[1];Object(a.useEffect)((function(){p().then((function(e){c(e)}))}),[]);var U=F?t:t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{message:M}),r.a.createElement(m,{handleFilterChange:function(e){S(e.target.value),A(!1),console.log(y)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(i,{newName:h,newNumber:O,handleNameChange:function(e){b(e.target.value)},handleNumberChange:function(e){C(e.target.value)},addName:function(e){e.preventDefault();var n={name:h,number:O};if(0!==t.filter((function(e){return e.name===h})).length){if(window.confirm("".concat(h," is already added to phonebook, replace the old number with a new one?"))){var a=t.find((function(e){return e.name===h})),r=Object(u.a)(Object(u.a)({},a),{},{number:O});g(r.id,r).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e}))),T("Updated ".concat(r.name))})).catch((function(e){c(t.filter((function(e){return e.id!==r.id}))),T("Error - ".concat(r.name," has already been removed from the server"))}))}}else E(n).then((function(e){c(t.concat(e)),T("Added ".concat(h," "))})).catch((function(e){console.log(e.response.data),T(e.response.data)}));b(""),C(""),setTimeout((function(){T(null)}),3e3)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{filteredPersons:U,deletePerson:function(e,n){window.confirm("Do you really want to delete ".concat(n,"?"))&&(c(t.filter((function(n){return n.id!==e}))),v(e).then((function(){T("Deleted ".concat(n)),setTimeout((function(){T(null)}),4e3)})))}}))};h.a.get("http://localhost:3001/api/persons").then((function(e){console.log(e)})),o.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4df75490.chunk.js.map