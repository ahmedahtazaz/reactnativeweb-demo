(this["webpackJsonpreactnativeweb-demo"]=this["webpackJsonpreactnativeweb-demo"]||[]).push([[0],{112:function(e,t,a){e.exports=a.p+"static/media/logo.0c9ebdb8.png"},113:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(21),i=a.n(r),c=(a(97),a(67)),s=a.n(c),l=a(68),h=a(69),m=a(90),d=a(70),p=a(91),u=a(2),b=a(3),g=a(31),w=a(66),f=a(65),j=a(18),y=a(71),O=a.n(y),E=u.a.create({fitImage:{borderRadius:20},fitImageWithSize:{height:112,width:141}}),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={email:"",password:""},a.handleEmail=function(e){a.setState({email:e})},a.handlePassword=function(e){a.setState({password:e})},a._postData=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:(e=new FormData).append("username",a.state.email),e.append("password",a.state.password),console.log("DeiveId = "),console.log(e),"https://cors-anywhere.herokuapp.com/",fetch("https://cors-anywhere.herokuapp.com/https://staging.jemtv.com/email-user/index.php/user",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){alert(e.message),console.log(e)})).catch((function(e){console.error(e)}));case 7:case"end":return t.stop()}}))},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=a(112);return o.a.createElement(b.a,{style:{backgroundColor:"black",width:Object(j.b)("100%"),height:Object(j.a)("100%")}},o.a.createElement(b.a,{style:{marginTop:Object(j.a)("5%"),alignItems:"center",justifyContent:"center",flexDirection:"column"}},o.a.createElement(O.a,{source:e,style:E.fitImageWithSize}),o.a.createElement(g.a,{style:{marginTop:Object(j.a)("10%"),color:"white",fontSize:30}},"Login Screen ")),o.a.createElement(b.a,{style:{marginTop:Object(j.a)("8%"),flexDirection:"column",justifyContent:"center",alignItems:"center"}},o.a.createElement(w.a,{style:{height:Object(j.a)("8%"),width:Object(j.b)("65%"),fontSize:15,color:"white",borderColor:"white",borderWidth:1},placeholder:"Enter Email",placeholderTextColor:"white",onChangeText:this.handleEmail}),o.a.createElement(w.a,{style:{height:Object(j.a)("8%"),width:Object(j.b)("65%"),marginTop:35,fontSize:15,color:"white",borderColor:"white",borderWidth:1},placeholder:"Enter Password",placeholderTextColor:"white",onChangeText:this.handlePassword}),"/>"),o.a.createElement(b.a,{style:{marginTop:Object(j.a)("5%"),marginLeft:Object(j.b)("30%"),marginRight:Object(j.b)("30%")}},o.a.createElement(f.a,{onPress:this._postData,title:"Login"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},92:function(e,t,a){e.exports=a(113)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.f6ff1c1a.chunk.js.map