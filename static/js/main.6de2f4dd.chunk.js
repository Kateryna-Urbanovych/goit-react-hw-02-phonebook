(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={container:"Container_container__21MZC"}},14:function(t,e,n){t.exports={contactItem:"ContactList_contactItem__15QLP"}},15:function(t,e,n){t.exports={btnDelete:"ContactItem_btnDelete__3kqX1"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1YiMT",label:"ContactForm_label__h-7iM",input:"ContactForm_input__3csBL",button:"ContactForm_button__1JA6H"}},22:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(10),i=n.n(o),s=(n(22),n(16)),u=n(4),l=n(5),b=n(7),m=n(6),h=n(11),d=n.n(h),j=n(12),f=n.n(j);var p=function(t){var e=t.children;return Object(a.jsx)("div",{className:f.a.container,children:e})},C=n(13),v=n(2),O=n.n(v),x=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:O.a.form,children:[Object(a.jsxs)("label",{className:O.a.label,children:["Name",Object(a.jsx)("input",{type:"text",className:O.a.input,name:"name",value:e,onChange:this.handleChange,autoComplete:"off"})]}),Object(a.jsxs)("label",{className:O.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",className:O.a.input,name:"number",value:n,onChange:this.handleChange,autoComplete:"off"})]}),Object(a.jsx)("button",{type:"submit",className:O.a.button,disabled:""===e||""===n,children:"Add contact"})]})}}]),n}(c.Component),_=n(9),g=n.n(_);var y=function(t){var e=t.value,n=t.onChange;return Object(a.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(a.jsx)("input",{type:"text",className:g.a.input,value:e,onChange:n,autoComplete:"off"})]})},N=n(14),S=n.n(N),F=n(15),w=n.n(F);var k=function(t){var e=t.name,n=t.number,c=t.onDelete;return Object(a.jsxs)(a.Fragment,{children:[e,": ",n,Object(a.jsx)("button",{type:"button",className:w.a.btnDelete,onClick:c,children:"Delete"})]})};var D=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsx)("li",{className:S.a.contactItem,children:Object(a.jsx)(k,{name:c,number:r,onDelete:function(){n(e)}})},e)}))})},L=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],A=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:L,filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.getContactsNames().includes(n.toLowerCase()))alert("".concat(n," is already in contacts"));else{var c={id:d.a.generate(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(s.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.getContactsNames=function(){return t.state.contacts.reduce((function(t,e){var n=e.name;return t.push(n.toLowerCase()),t}),[])},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)(p,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(x,{onSubmit:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(y,{value:t,onChange:this.changeFilter}),Object(a.jsx)(D,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={label:"Filter_label__3hbRS",input:"Filter_input__ysF7o"}}},[[31,1,2]]]);
//# sourceMappingURL=main.6de2f4dd.chunk.js.map