(this["webpackJsonpreactnativeweb-demo"]=this["webpackJsonpreactnativeweb-demo"]||[]).push([[0],{55:function(e,t,n){e.exports=n(72)},60:function(e,t,n){},62:function(e,t,n){e.exports=n.p+"static/media/logo.0c9ebdb8.png"},72:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(18),c=n.n(r),i=(n(60),n(31)),s=n.n(i),l=n(32),h=n(33),d=n(53),m=n(34),p=n(54),u=n(12),w=n(76),f=n(51),g=n(77),b=n(75),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={email:"",password:""},n.handleEmail=function(e){n.setState({email:e})},n.handlePassword=function(e){n.setState({password:e})},n._postData=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:(e=new FormData).append("username",n.state.email),e.append("password",n.state.password),console.log("DeiveId = "),console.log(e),"https://cors-anywhere.herokuapp.com/",fetch("https://cors-anywhere.herokuapp.com/https://staging.jemtv.com/email-user/index.php/user",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){alert(e.message),console.log(e)})).catch((function(e){console.error(e)}));case 7:case"end":return t.stop()}}))},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=n(62);return a.a.createElement(u.a,{style:{backgroundColor:"black",width:"100%",height:"100%"}},a.a.createElement(u.a,{style:{alignItems:"center",justifyContent:"center",flexDirection:"column"}},a.a.createElement(w.a,{source:e,style:{width:192,height:192}}),a.a.createElement(f.a,{style:{color:"white",fontSize:30}},"Login Screen ")),a.a.createElement(u.a,{style:{flexDirection:"column",justifyContent:"center",alignItems:"center"}},a.a.createElement(g.a,{style:{height:40,width:"65%",fontSize:15,color:"white",borderColor:"white",borderWidth:1},placeholder:"Enter Email",placeholderTextColor:"white",onChangeText:this.handleEmail}),a.a.createElement(g.a,{style:{height:40,width:"65%",top:15,fontSize:15,color:"white",borderColor:"white",borderWidth:1},placeholder:"Enter Password",placeholderTextColor:"white",onChangeText:this.handlePassword}),a.a.createElement(b.a,{onPress:this._postData,title:"Login"})))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.c88331b8.chunk.js.map