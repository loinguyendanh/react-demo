(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),o=(a(13),a(14),a(15),a(7)),l=a(1),c=a(2),u=a(3),m=a(4),d=a(20),h=(a(16),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header row"},r.a.createElement("div",{className:"header-info col-md-6 text-left pl-4"},"Header"),r.a.createElement("div",{className:"header-info col-md-6 text-right pr-4"},this.props.timer))}}]),a}(n.Component)),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(l.a)(this,a),t.call(this)}return Object(c.a)(a,[{key:"handleDelete",value:function(e){window.confirm("Are you sure")&&this.props.deleteUser(e)}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",{className:"col-md-6 body-info pt-4"},r.a.createElement("h5",null,"List"),r.a.createElement("table",{className:"table table-striped table-bordered table-hover mt-2"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,(null===(e=this.props.users)||void 0===e?void 0:e.length)>0?this.props.users.map((function(e){var a=e.name,n=e.email,s=e.id;return r.a.createElement("tr",{key:s},r.a.createElement("td",null,a),r.a.createElement("td",{className:"hover"},r.a.createElement("span",null,n),r.a.createElement("div",{className:"button-action"},r.a.createElement("button",{type:"reset",className:"btn btn-sm btn-success mr-2",onClick:function(a){t.props.getUserEdit(e)}},"Edit"),r.a.createElement("button",{type:"reset",className:"btn btn-sm btn-danger",onClick:function(a){return t.handleDelete(e)}},"Delete"))))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"2"},"No data")))))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).showForm=function(){return n.props.showForm?r.a.createElement("form",null,r.a.createElement("div",{className:"form-detail"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(e){n.props.handleChange(e)},name:"name",type:"name",className:"form-control",placeholder:"Enter name",id:"name",required:!0,defaultValue:n.props.edit?n.props.user.name:"",key:n.props.user.id})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(e){n.props.handleChange(e)},name:"email",type:"email",className:"form-control",placeholder:"Enter email",id:"email",required:!0,defaultValue:n.props.edit?n.props.user.email:"",key:n.props.user.id}))),r.a.createElement("button",{type:"reset",onClick:function(e){return n.props.reset()},className:"btn btn-danger mr-4"},"Cancel"),r.a.createElement("button",{type:"reset",className:"btn btn-primary",onClick:function(e){n.props.saveUser()}},"Save")):r.a.createElement("button",{onClick:function(e){return n.props.clickShowForm()},className:"btn btn-primary mr-4"},"Create")},n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6 pt-4"},r.a.createElement("h5",null,"Detail"),this.showForm())}}]),a}(n.Component);a(17);function v(e){var t=(new Date).getTime()-e.getTime(),a=Math.floor(t%864e5/36e5),n=Math.floor(t%36e5/6e4),r=Math.floor(t%6e4/1e3);return"".concat(a,":").concat(n,":").concat(r)}var E=function(e,t){localStorage.setItem(e,JSON.stringify(t))},b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={users:[],timer:null,initTime:new Date,name:"",email:"",user:{},edit:!1,showForm:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.createTimeLoad(),this.getListUser()}},{key:"createTimeLoad",value:function(){var e=this;setInterval((function(){e.setState({timer:v(e.state.initTime)})}),1e3)}},{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"saveUser",value:function(){var e=this;if(this.state.name&&this.state.email){var t=this.state.users;if(this.state.edit){var a=t.findIndex((function(t){return t.id===e.state.user.id})),n={id:this.state.user.id,name:this.state.name,email:this.state.email};t[a]=n}else t.push({id:Object(d.a)(),name:this.state.name,email:this.state.email});E("users",t),this.getListUser(),this.reset()}else alert("Enter Name and Email")}},{key:"getListUser",value:function(){var e,t=(e="users",JSON.parse(localStorage.getItem(e)));(null===t||void 0===t?void 0:t.length)&&this.setState({users:t})}},{key:"getUserEdit",value:function(e){this.setState({user:e,name:e.name,email:e.email,edit:!0,showForm:!0})}},{key:"deleteUser",value:function(e){var t=this.state.users.filter((function(t){return t.id!==e.id}));E("users",t),this.getListUser()}},{key:"showForm",value:function(){this.setState({showForm:!0})}},{key:"reset",value:function(){this.setState({edit:!1,name:"",email:"",showForm:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{timer:this.state.timer}),r.a.createElement("div",{className:"row body"},r.a.createElement(p,{users:this.state.users,getUserEdit:function(t){return e.getUserEdit(t)},deleteUser:function(t){return e.deleteUser(t)}}),r.a.createElement(f,{saveUser:function(t){return e.saveUser(t)},handleChange:function(t){return e.handleChange(t)},user:this.state.user,edit:this.state.edit,reset:function(){return e.reset()},showForm:this.state.showForm,clickShowForm:function(t){return e.showForm()}})))}}]),a}(n.Component);var g=function(){return r.a.createElement("div",{className:"App container"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f238d7fa.chunk.js.map