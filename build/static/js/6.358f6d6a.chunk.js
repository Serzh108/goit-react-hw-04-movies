(this["webpackJsonphomework-4"]=this["webpackJsonphomework-4"]||[]).push([[6],{66:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),c=a(13),o=a(16),s=a(17),u=a(18),i=a(21),l=a(20),p=a(0),h=a.n(p),m=a(8),v=a(11),f=a.n(v),b=a(19);f.a.defaults.baseURL="https://api.themoviedb.org/3/";var d=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,u=new Array(n),i=0;i<n;i++)u[i]=arguments[i];return(e=t.call.apply(t,[this].concat(u))).state={selectedMoviesList:[],value:""},e.handleSubmit=function(t){t.preventDefault();var a=t.target.elements[0].value;e.setState({value:a}),e.getData(a),e.props.history.push({pathname:e.props.location.pathname,search:"?query=".concat(a)})},e.handleOnChange=function(t){return e.setState({value:t.target.value})},e.getData=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=12;break}return n="".concat(b.b,"?api_key=").concat("ee1dd5cfcb7b0599fddd455fe2b32d45","&query=").concat(a),t.prev=2,t.next=5,f.a.get(n);case 5:o=t.sent,e.setState((function(e){return{selectedMoviesList:Object(c.a)(o.data.results)}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log("Error: ",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.selectedMoviesList,n=t.value;return h.a.createElement(h.a.Fragment,null,h.a.createElement("form",{onSubmit:this.handleSubmit},h.a.createElement("input",{type:"text",name:"search",value:n,onChange:this.handleOnChange}),h.a.createElement("button",{type:"submit"},"Search")),h.a.createElement("ul",null,a.map((function(t){return h.a.createElement("li",{key:t.id},h.a.createElement(m.b,{to:{pathname:"/movies/".concat(t.id),state:{from:e.props.location}}},t.title))}))))}}]),a}(p.Component);t.default=d}}]);
//# sourceMappingURL=6.358f6d6a.chunk.js.map