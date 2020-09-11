(this.webpackJsonphabits=this.webpackJsonphabits||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},32:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),o=a.n(c),r=a(10),i=a(1);a(32);var u=function(){return l.a.createElement("div",{className:"nav-bar"},l.a.createElement("div",{className:"nav-brand"},l.a.createElement("span",{className:"nav-icons"},l.a.createElement("h1",null,"#"))),l.a.createElement("div",{className:"nav-list"},l.a.createElement("ul",null,l.a.createElement("li",{className:"nav-icons"},l.a.createElement(r.b,{to:"/"},"A")),l.a.createElement("li",{className:"nav-icons"},l.a.createElement(r.b,{to:"/habit"},"B")),l.a.createElement("li",{className:"nav-icons"},l.a.createElement(r.b,{to:"/todo"},"C")))))},s=a(8),m=a(7),h=a.n(m);a(55);var b=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),r=Object(s.a)(o,2),i=r[0],u=r[1];return l.a.createElement("div",{className:"habit-form-container"},l.a.createElement("h1",null,"Add New Habit"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===a&&alert("Please fill the newHabit field"),""===i&&alert("Please fill the oldHabit field"),h.a.post("https://habit-server.herokuapp.com/api/habits/",{oldHabit:i,newHabit:a}).then((function(){alert("Habit created successfully"),window.location.reload()})).catch((function(){alert("Could not creat habit. Please try again")}))}},l.a.createElement("input",{onChange:function(e){return c(e.target.value)},type:"text",placeholder:"Enter your new habit"}),l.a.createElement("input",{onChange:function(e){return u(e.target.value)},type:"text",placeholder:"Enter your old habit"}),l.a.createElement("input",{type:"submit"})))};a(56);var d=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){h.a.get("https://habit-server.herokuapp.com/api/habits/").then((function(e){return c(e)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",{className:"habit-list-container"},l.a.createElement("h1",null,"List of Habits In Progress"),null===a?l.a.createElement("p",null,"Loading..."):0===a.data.length?l.a.createElement("p",null,"No habit available"):l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Current Habit List"),l.a.createElement("ol",null,a.data.map((function(e,t){return l.a.createElement("li",{key:t,id:e.id},"oldHabit: ",e.oldHabit," - newHabit: ",e.newHabit)})))))};a(57);var E=function(){return l.a.createElement("div",{className:"habit-container"},l.a.createElement("div",{className:"habit-title-container"},l.a.createElement("h1",{className:"habit-title"}," Habit Builder")),l.a.createElement("div",{className:"habit-body-container"},l.a.createElement(d,null),l.a.createElement(b,null)))};a(58);var p=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),r=Object(s.a)(o,2),i=r[0],u=r[1];Object(n.useEffect)((function(){h.a.get("https://habit-server.herokuapp.com/api/todos/").then((function(e){console.log(e),c(e)})).catch((function(e){console.log(e)}))}),[]);var m=function(e){h.a.delete("https://habit-server.herokuapp.com/api/todos/delete/"+e.target.value).then((function(e){console.log(e),window.location.reload()})).catch((function(e){console.log(e)}))};return l.a.createElement("div",{className:"todo-container"},l.a.createElement("div",{className:"todo-title-container"},l.a.createElement("h1",null,"To-Do List")),l.a.createElement("div",{className:"todo-body-container"},l.a.createElement("div",{className:"task-list-container"},null===a?l.a.createElement("p",null,"Loading..."):l.a.createElement("ul",null,a.data.map((function(e,t){return l.a.createElement("li",{key:t},l.a.createElement("span",null,e.task),l.a.createElement("button",{type:"submit",name:"delete-btn",value:e._id,onClick:m},"X"))})))),l.a.createElement("div",{className:"task-form-container"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),h.a.post("https://habit-server.herokuapp.com/api/todos/",{task:i}).then((function(e){console.log(e),window.location.reload()})).catch((function(e){console.log(e)}))}},l.a.createElement("input",{onChange:function(e){return u(e.target.value)},type:"text",placeholder:"New Task"}),l.a.createElement("input",{type:"submit"})))))};var f=function(){return l.a.createElement("div",{className:"home-container"},l.a.createElement("h1",null,"Welcome To HabitBuilder"))},v=(a(59),function(){return l.a.createElement(r.a,null,l.a.createElement(u,null),l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",component:f}),l.a.createElement(i.b,{path:"/habit",component:E}),l.a.createElement(i.b,{path:"/todo",component:p}),l.a.createElement(i.a,{to:"/"})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.9ce711fa.chunk.js.map