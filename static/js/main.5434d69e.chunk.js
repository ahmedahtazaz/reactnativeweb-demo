(this["webpackJsonpreactnativeweb-demo"]=this["webpackJsonpreactnativeweb-demo"]||[]).push([[0],{55:function(e,t,o){e.exports=o(72)},60:function(e,t,o){},62:function(e,t,o){e.exports=o.p+"static/media/logo.0c9ebdb8.png"},72:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(18),c=o.n(r),l=(o(60),o(31)),s=o.n(l),i=o(32),h=o(33),d=o(53),m=o(34),w=o(54),p=o(12),u=o(76),f=o(51),g=o(77),b=o(75),E=function(e){function t(){var e,o;Object(i.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={email:"",password:""},o.handleEmail=function(e){o.setState({email:e})},o.handlePassword=function(e){o.setState({password:e})},o._postData=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:(e=new FormData).append("username",o.state.email),e.append("password",o.state.password),console.log("DeiveId = "),console.log(e),fetch("https://staging.jemtv.com/email-user/index.php/user",{method:"POST",headers:{"Sec-Fetch-Mode":"no-cors","Sec-Fetch-Site":"none","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,POST","Access-Control-Max-Age":"1000","Access-Control-Allow-Headers":"*"},body:e}).then((function(e){alert(e),console.log(e)})).catch((function(e){console.error(e)}));case 6:case"end":return t.stop()}}))},o}return Object(w.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=o(62);return a.a.createElement(p.a,{style:{backgroundColor:"black",width:"100%",height:"100%"}},a.a.createElement(p.a,{style:{alignItems:"center",justifyContent:"center",flexDirection:"column"}},a.a.createElement(u.a,{source:e,style:{width:192,height:192}}),a.a.createElement(f.a,{style:{color:"white",fontSize:30}},"Login Screen ")),a.a.createElement(p.a,{style:{flex:2,flexDirection:"column",top:40,left:30}},a.a.createElement(g.a,{style:{height:40,width:"85%",fontSize:15,color:"white",borderColor:"white",borderWidth:1},placeholder:"Enter Email",placeholderTextColor:"white",onChangeText:this.handleEmail}),a.a.createElement(g.a,{style:{height:40,top:15,width:"85%",fontSize:15,color:"white",borderColor:"white",borderWidth:1},placeholder:"Enter Password",placeholderTextColor:"white",onChangeText:this.handlePassword}),a.a.createElement(b.a,{onPress:this._postData,title:"Login"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.5434d69e.chunk.js.map