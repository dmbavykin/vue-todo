webpackJsonp([1],{"1/mx":function(t,e){},"4ZNT":function(t,e){},"6hFY":function(t,e){},"87Ar":function(t,e){},Hg9g:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=o("VU/8")({name:"app"},s,!1,function(t){o("6hFY")},null,null).exports,i=o("/ocq"),r=o("mvHQ"),c=o.n(r),d=o("fZjL"),l=o.n(d),u=o("Gu7T"),m=o.n(u),p=o("mtWM"),v=o.n(p),f=v.a.create({baseURL:"https://todosio.herokuapp.com/api/",transformRequest:[].concat(m()(function(){var t=v.a.defaults.transformRequest;return t?t instanceof Array?t:[t]:[]}()),[function(t,e){var o=JSON.parse(localStorage.getItem("headers"))||{};return delete o["content-type"],l()(o).forEach(function(t){e[t]=o[t]}),t}]),transformResponse:[].concat(m()(function(){var t=v.a.defaults.transformResponse;return t?t instanceof Array?t:[t]:[]}()),[function(t,e){return e["access-token"]&&localStorage.setItem("headers",c()(e)),t}])});var h={name:"login",data:function(){return{credentials:{email:"",password:""},errors:""}},methods:{logIn:function(){var t=this;(function(t){var e=t.credentials;return f.post("auth/sign_in",e)})({credentials:this.credentials}).then(function(e){t.$router.push({name:"Home"})}).catch(function(e){t.errors=e.response.data.errors.join("\n")})}}},_={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:""}},[o("div",{staticClass:"container auth-form"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-8 offset-sm-2"},[o("div",{staticClass:"h1 text-primary"},[t._v("Log in")]),t._v(" "),o("form",{on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.logIn(e)}}},[t.errors?o("div",{staticClass:"alert alert-danger"},[t._v("\n            "+t._s(t.errors)+"\n          ")]):t._e(),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.logIn}},[t._v("Log In")]),t._v(" "),o("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"Registration"}}},[t._v("Registration")])],1)])])])])])},staticRenderFns:[]};var C=o("VU/8")(h,_,!1,function(t){o("furg")},"data-v-ba052058",null).exports;var g={name:"registration",data:function(){return{credentials:{email:"",password:"",password_confirmation:""},errors:""}},methods:{signUp:function(){var t=this;(function(t){var e=t.credentials;return f.post("auth",e)})({credentials:this.credentials}).then(function(e){t.$router.push({name:"Home"})}).catch(function(e){t.errors=e.response.data.errors.join("\n")})}}},j={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:""}},[o("div",{staticClass:"container registration-form"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-8 offset-sm-2"},[o("div",{staticClass:"h1 text-primary"},[t._v("Sign up")]),t._v(" "),o("form",{on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.signUp(e)}}},[t.errors?o("div",{staticClass:"alert alert-danger"},[t._v("\n            "+t._s(t.errors)+"\n          ")]):t._e(),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.email,expression:"credentials.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.credentials.email},on:{input:function(e){e.target.composing||t.$set(t.credentials,"email",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password,expression:"credentials.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.credentials.password},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.credentials.password_confirmation,expression:"credentials.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm password"},domProps:{value:t.credentials.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.credentials,"password_confirmation",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.signUp}},[t._v("Sign up")]),t._v(" "),o("router-link",{staticClass:"btn btn-success",attrs:{to:{name:"Login"}}},[t._v("Login")])],1)])])])])])},staticRenderFns:[]};var k=o("VU/8")(g,j,!1,function(t){o("Hg9g")},"data-v-c97ed82e",null).exports;var b=o("ESch"),w=o("PxEr"),y={name:"comment",props:["comment","project-id"],data:function(){return{fileURL:""}},methods:{deleteComment:function(){var t=this;(function(t){var e=t.projectId,o=t.todoId,n=t.commentId;return f.delete("projects/"+e+"/todos/"+o+"/comments/"+n)})({projectId:this.project_id,todoId:this.comment.todo_id,commentId:this.comment.id}).then(function(e){t.$emit("delete-comment",t.comment)})}},mounted:function(){this.fileURL="https://todosio.herokuapp.com/"+this.comment.file.url}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comment row"},[e("div",{staticClass:"col-sm-3"},[this._v("\n    "+this._s(this.comment.custom_created_at)+"\n  ")]),this._v(" "),e("div",{staticClass:"col-sm-1 offset-sm-8"},[e("i",{staticClass:"fa fa-trash cursor-pointer",on:{click:this.deleteComment}})]),this._v(" "),e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-8"},[this._v("\n        "+this._s(this.comment.content)+"\n      ")]),this._v(" "),this.comment.file.url?e("div",{staticClass:"col-sm-2"},[e("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:this.fileURL,download:""}},[this._v("Download file")])]):this._e()])])])},staticRenderFns:[]};var I=o("VU/8")(y,x,!1,function(t){o("1/mx")},"data-v-261c12e7",null).exports,S={name:"todo",data:function(){return{doneStatus:!1,headers:null,showEditTodoBlock:!1,editedContent:"",comments:[],comment:"",file:null}},beforeCreate:function(){var t=this;(function(t){var e=t.projectId,o=t.todoId;return f.get("projects/"+e+"/todos/"+o+"/comments")})({projectId:this.$options.propsData.todo.project_id,todoId:this.$options.propsData.todo.id}).then(function(e){t.comments=e.data})},methods:{changeDoneStatus:function(){!function(t){var e=t.projectId,o=t.todoId,n=t.doneStatus;f.put("projects/"+e+"/todos/"+o,{is_done:n})}({projectId:this.todo.project_id,todoId:this.todo.id,doneStatus:!this.doneStatus})},editTodoContent:function(){var t=this;if(!this.editedContent)return!1;(function(t){var e=t.projectId,o=t.todoId,n=t.content;return f.put("projects/"+e+"/todos/"+o,{content:n})})({projectId:this.todo.project_id,todoId:this.todo.id,content:this.editedContent}).then(function(e){t.todo.content=e.data.content,t.toggleEditTodoBlock()})},deleteTodo:function(){var t=this;(function(t){var e=t.projectId,o=t.todoId;return f.delete("projects/"+e+"/todos/"+o)})({projectId:this.todo.project_id,todoId:this.todo.id}).then(function(e){t.$emit("delete-todo",t.todo)})},toggleEditTodoBlock:function(){this.showEditTodoBlock=!this.showEditTodoBlock},openCommentsModal:function(){this.$refs.commentsModal.show()},addComment:function(t){var e=this;if(!this.comment)return!1;var o=new FormData;o.append("content",this.comment),o.append("file",this.$refs.fileinput.files[0]),function(t){var e=t.projectId,o=t.todoId,n=t.data;return f.post("projects/"+e+"/todos/"+o+"/comments/",n)}({projectId:this.todo.project_id,todoId:this.todo.id,data:o}).then(function(t){e.comments.push(t.data),e.resetComment()})},deleteComment:function(t){var e=this.comments.indexOf(t);this.comments.splice(e,1)},resetComment:function(){this.comment="",this.$refs.fileinput.value=null}},mounted:function(){this.editedContent=this.todo.content,this.doneStatus=this.todo.is_done,this.headers=JSON.parse(localStorage.getItem("headers"))},computed:{doneStyles:function(t){return{"text-decoration":t.doneStatus?"line-through":"none"}}},components:{"b-modal":b.a,Comment:I},directives:{"b-modal":w.a},props:["todo"]},N={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"col-sm-12"},[o("div",{staticClass:"row todo"},[o("div",{staticClass:"col-sm-1"},[o("form",[o("div",{staticClass:"checkbox-inline"},[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.doneStatus,expression:"doneStatus"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.doneStatus)?t._i(t.doneStatus,null)>-1:t.doneStatus},on:{click:t.changeDoneStatus,change:function(e){var o=t.doneStatus,n=e.target,s=!!n.checked;if(Array.isArray(o)){var a=t._i(o,null);n.checked?a<0&&(t.doneStatus=o.concat([null])):a>-1&&(t.doneStatus=o.slice(0,a).concat(o.slice(a+1)))}else t.doneStatus=s}}})])])])]),t._v(" "),o("div",{staticClass:"col-sm-9 todo-content"},[t.showEditTodoBlock?o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.editedContent,expression:"editedContent"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"edit-todo-"+t.todo.id},domProps:{value:t.editedContent},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.toggleEditTodoBlock(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.editTodoContent(e)}],input:function(e){e.target.composing||(t.editedContent=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-group-append"},[o("span",{staticClass:"input-group-text",attrs:{id:"edit-todo-"+t.todo.id},on:{click:t.editTodoContent}},[t._v("Edit todo")])])]):o("span",{style:t.doneStyles},[t._v(t._s(t.todo.content))])]),t._v(" "),o("div",{staticClass:"col-sm-2"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4"},[t._v("\n            "+t._s(this.comments.length)+"\n            "),o("i",{staticClass:"fa fa-comment cursor-pointer",on:{click:t.openCommentsModal}}),t._v(" "),o("b-modal",{ref:"commentsModal",attrs:{title:"Add Comment","hide-footer":""}},[o("form",{on:{submit:function(e){e.preventDefault(),t.addComment(e)}}},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"add-comment",name:"content",placeholder:"Enter Your Comment"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("input",{ref:"fileinput",staticClass:"form-control",attrs:{type:"file",name:"file"}})]),t._v(" "),o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-primary"},[t._v("Save")]),t._v(" "),o("button",{staticClass:"btn btn-danger",on:{click:t.resetComment}},[t._v("Cancel")])])]),t._v(" "),o("hr"),t._v(" "),t._l(t.comments,function(e){return o("comment",{key:e.id,attrs:{comment:e,"project-id":t.todo.project_id},on:{"delete-comment":function(o){t.deleteComment(e)}}})})],2)],1),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("i",{staticClass:"fa fa-pencil cursor-pointer",on:{click:t.toggleEditTodoBlock}})]),t._v(" "),o("div",{staticClass:"col-sm-4"},[o("i",{staticClass:"fa fa-trash cursor-pointer",on:{click:t.deleteTodo}})])])])])])])},staticRenderFns:[]};var E=o("VU/8")(S,N,!1,function(t){o("87Ar")},"data-v-1de7bf2a",null).exports;var P=o("DAYN"),T={name:"project",data:function(){return{content:"",show_edit_name_block:!1,editedName:"",todos:[]}},methods:{addTodo:function(){var t=this;if(!this.content)return!1;(function(t){var e=t.project,o=t.content;return f.post("projects/"+e.id+"/todos",{content:o,order:e.todos.length+1})})({project:this.project,content:this.content}).then(function(e){t.content="",t.todos.push(e.data)})},renameProject:function(){var t=this;if(!this.editedName)return!1;(function(t){var e=t.id,o=t.title;return f.put("projects/"+e,{title:o})})({id:this.project.id,title:this.editedName}).then(function(e){t.project.title=e.data.title,t.toggleEditNameBlock()})},deleteProject:function(){var t=this;(function(t){var e=t.id;return f.delete("projects/"+e)})({id:this.project.id}).then(function(e){t.$emit("delete-project",t.project)})},deleteTodo:function(t){var e=this.todos.indexOf(t);this.todos.splice(e,1)},toggleEditNameBlock:function(){this.show_edit_name_block=!this.show_edit_name_block},sortTodos:function(){var t=this.todos.map(function(t,e){return t.order=++e,{id:t.id,order:t.order}});!function(t){var e=t.projectId,o=t.todos;f.post("projects/"+e+"/todos/sorting",{todos:o})}({projectId:this.project.id,todos:t})}},mounted:function(){this.editedName=this.project.title,this.todos=this.project.todos.sort(function(t,e){return t.order-e.order})},props:["project"],components:{Todo:E,Draggable:o.n(P).a}},$={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:""}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row project-header"},[t._m(0),t._v(" "),o("div",{staticClass:"col-sm-8 project-title"},[t.show_edit_name_block?o("div",{},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.editedName,expression:"editedName"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"rename-project-"+t.project.id,defaultValue:t.project.title},domProps:{value:t.editedName},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.renameProject(e)},input:function(e){e.target.composing||(t.editedName=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-group-append"},[o("span",{staticClass:"input-group-text rename-project-btn cursor-pointer",attrs:{id:"rename-project-"+t.project.id},on:{click:t.renameProject}},[t._v("Rename")])])])]):o("div",{},[t._v(t._s(t.project.title))])]),t._v(" "),o("div",{staticClass:"col-sm-3"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-6"},[o("i",{staticClass:"fa fa-pencil",on:{click:t.toggleEditNameBlock}})]),t._v(" "),o("div",{staticClass:"col-sm-6"},[o("i",{staticClass:"fa fa-trash",on:{click:t.deleteProject}})])])])]),t._v(" "),o("div",{staticClass:"row create-todo"},[t._m(1),t._v(" "),o("div",{staticClass:"col-sm-11"},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Start typing here to create a task...","aria-label":"Start typing here to create a task...","aria-describedby":"create-todo-for-project-"+t.project.id},domProps:{value:t.content},on:{keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27,e.key))return null;t.toggleEditNameBlock(e)},function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addTodo(e)}],input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-group-append"},[o("span",{staticClass:"input-group-text",attrs:{id:"create-todo-for-project-"+t.project.id},on:{click:t.addTodo}},[t._v("Add todo")])])])])]),t._v(" "),o("div",{staticClass:"row todo-block"},[o("draggable",{staticClass:"col-sm-12",attrs:{options:{animation:200}},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1},change:t.sortTodos},model:{value:t.todos,callback:function(e){t.todos=e},expression:"todos"}},t._l(t.todos,function(e){return o("todo",{key:e.id,staticClass:"row",attrs:{todo:e},on:{"delete-todo":t.deleteTodo}})}))],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-1"},[e("i",{staticClass:"fa fa-calendar"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-1"},[e("i",{staticClass:"fa fa-plus"})])}]};var R={name:"home",data:function(){return{projects:[],new_project_name:""}},beforeCreate:function(){var t=this;f.get("projects").then(function(e){t.projects=e.data})},methods:{addProject:function(){var t=this;(function(t){var e=t.title;return f.post("projects",{title:e})})({title:this.new_project_name}).then(function(e){t.projects.push(e.data),t.new_project_name=""})},deleteProject:function(t){var e=this.projects.indexOf(t);this.projects.splice(e,1)},logOut:function(){localStorage.removeItem("headers"),this.$router.push({name:"Login"})}},components:{Project:o("VU/8")(T,$,!1,function(t){o("n0Uc")},"data-v-83a4b0f4",null).exports}},U={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:""}},[o("header",[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-8 offset-sm-1"},[o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.new_project_name,expression:"new_project_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Start typing here to create a project...","aria-label":"Start typing here to create a project...","aria-describedby":"create-project"},domProps:{value:t.new_project_name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addProject(e)},input:function(e){e.target.composing||(t.new_project_name=e.target.value)}}}),t._v(" "),o("div",{staticClass:"input-group-append"},[o("span",{staticClass:"input-group-text cursor-pointer btn-primary",attrs:{id:"create-project"},on:{click:t.addProject}},[o("i",{staticClass:"fa fa-plus"}),t._v(" Add project\n              ")])])])]),t._v(" "),o("div",{staticClass:"col-sm-2 offset-sm-1"},[o("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.logOut}},[t._v("\n            Log Out\n          ")])])])])]),t._v(" "),t._l(t.projects,function(e){return o("project",{key:e.id,attrs:{project:e},on:{"delete-project":t.deleteProject}})})],2)},staticRenderFns:[]};var A=o("VU/8")(R,U,!1,function(t){o("4ZNT")},"data-v-5d625b28",null).exports;n.a.use(i.a);var B=new i.a({routes:[{path:"/",name:"Login",component:C},{path:"/registration",name:"Registration",component:k},{path:"/home",name:"Home",component:A}]}),L=o("18Sv"),F=o.n(L);n.a.config.productionTip=!1,n.a.use(F.a),new n.a({el:"#app",router:B,template:"<App/>",components:{App:a}})},furg:function(t,e){},n0Uc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a961f33c1e7a6496351b.js.map