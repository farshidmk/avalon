(this["webpackJsonpavalon-game"]=this["webpackJsonpavalon-game"]||[]).push([[0],{68:function(e,a,t){e.exports=t(77)},73:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),c=(t(73),t(10)),i=t(114),s=t(18),u=t(30),m=t(3),d=t(78),p=t(132),b=t(130),f=t(118),y=t(125),h=t(129),g=t(121),x=Object(i.a)((function(e){return{startSection:{border:"solid red 2px",borderRadius:"5px",width:"100%",height:"100%",padding:"5px",maxWidth:"800px",backgroundColor:"antiquewhite",display:"flex",flexDirection:"column"},playersNo:{minWidth:"200px"},playersName:{margin:"10px 0px",display:"flex",flexWrap:"wrap",justifyContent:"center"},textField:{minWidth:"185px",margin:"5px"},charactersSection:{margin:"10px",border:"2px solid #a2a2a2",borderRadius:"10px",display:"flex",justifyContent:"center",flexWrap:"wrap"},badCharacter:{minWidth:"100px",margin:"5px",backgroundColor:"#aa303099",border:"1px solid red",color:"black",textAlign:"center"},goodCharacter:{minWidth:"100px",margin:"5px",backgroundColor:"#2020aaaa",border:"1px solid blue",color:"white",textAlign:"center"}}})),E={name:"loyal servant",isBad:!1},j=[E,{name:"Merlin",isBad:!1},{name:"Percival",isBad:!1},{name:"Morgana",isBad:!0},{name:"Assassin",isBad:!0},E,{name:"Mordred",isBad:!0},E,E,{name:"Oberon",isBad:!0}],v=function(e){var a=x(),t=Object(n.useState)(5),o=Object(c.a)(t,2),l=o[0],i=o[1],s=Object(n.useState)([]),m=Object(c.a)(s,2),E=m[0],v=m[1];return Object(n.useEffect)((function(){for(var e=[],a=0;a<l;a++)e[a]="player ".concat(a+1);v(e)}),[l]),r.a.createElement("div",{className:a.startSection},r.a.createElement(d.a,{variant:"h3",align:"center"},"Avalon"),r.a.createElement(f.a,{className:a.playersNo},r.a.createElement(p.a,{id:"player-number"},"Player Number"),r.a.createElement(y.a,{labelId:"player-number",id:"player-number-select",value:l,onChange:function(e){return i(e.target.value)}},[5,6,7,8,9,10].map((function(e){return r.a.createElement(b.a,{key:e,value:e},e)})))),E.length>0?r.a.createElement("div",{className:a.playersName},Object(u.a)(Array(l).keys()).map((function(e,t){return r.a.createElement(h.a,{className:a.textField,key:e,id:"player".concat(e+1,"-name"),label:"player ".concat(e+1),variant:"outlined",value:E[t],onChange:function(e){!function(e,a){for(var t=[],n=0;n<l;n++)t[n]=n===a?e:E[n];v(t)}(e.target.value,t)}})}))):null,r.a.createElement("div",{className:a.charactersSection},r.a.createElement(O,{playersNo:l})),r.a.createElement(g.a,{onClick:function(){return e.onStart(E,j.slice(0,l))},variant:"contained",color:"primary"},"Start"))},O=function(e){return r.a.createElement(r.a.Fragment,null,j.slice(0,e.playersNo).map((function(e,a){return r.a.createElement(k,{key:a,name:e.name,isBad:e.isBad})})))},k=function(e){var a,t=x();return r.a.createElement("div",{className:Object(m.a)((a={},Object(s.a)(a,t.badCharacter,e.isBad),Object(s.a)(a,t.goodCharacter,!e.isBad),a))},r.a.createElement("h5",null,e.name))},C=t(122),S=Object(i.a)((function(e){return{badCharacter:{minWidth:"100px",margin:"5px",backgroundColor:"#aa303099",border:"3px solid #aa3030",color:"white",textAlign:"center",background:"radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(0,0,0,1) 87%)"},goodCharacter:{minWidth:"100px",margin:"5px",backgroundColor:"#2020aaaa",border:"3px solid white",color:"black",textAlign:"center",background:"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,32,247,1) 87%)"},playerCardRoot:{width:"500px",marginTop:"10px",display:"flex",padding:"5px",flexDirection:"column",alignItems:"center",border:"3px solid black",borderRadius:"15px 15px 15px 15px",backgroundColor:"#5b5b5b"},characterSection:{minWidth:"300px",minHeight:"150px",padding:"10px",borderRadius:"5px 5px 5px 5px"}}})),N=function(e){var a=Object(n.useState)([]),t=Object(c.a)(a,2),o=t[0],l=t[1],i=Object(n.useState)(0),s=Object(c.a)(i,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){for(var a=Object(u.a)(e.characters),t=Object(u.a)(e.players),n=[],r=[],o=[],c=0;c<e.characters.length;c++){var i=a[Math.floor(Math.random()*a.length)];n[c]={name:t[c],role:i};var s=a.indexOf(i);s>-1&&a.splice(s,1)}n.forEach((function(e){e.role.isBad&&r.push(e.name),"Merlin"!==e.role.name&&"Morgana"!==e.role.name||o.push(e.name)})),n.forEach((function(e){(e.role.isBad||"Merlin"===e.role.name)&&(e.knowingPlayers=r),"Percival"===e.role.name&&(e.merlinsFace=o)})),l(n)}),[e.characters,e.players]),Object(n.useEffect)((function(){return function(){return e.onPlayersGetRole(o)}})),r.a.createElement("div",null,o.length?r.a.createElement(w,{player:o[m],nextPlayer:function(){m>=o.length-1?e.onGameStart():d((function(e){return e+1}))}}):r.a.createElement("h1",null,"Avalon"))},w=function(e){var a,t=S(),o=Object(n.useState)(!1),l=Object(c.a)(o,2),i=l[0],u=l[1];return r.a.createElement("div",{className:t.playerCardRoot},r.a.createElement("h3",null,e.player.name),r.a.createElement("p",null,"click on button to ",i?" hide ":" show "," your character"),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){return u((function(e){return!e}))},style:{marginButton:"15px"}},i?" hide ":" show "),r.a.createElement(C.a,{in:i},r.a.createElement("div",{className:Object(m.a)(t.characterSection,(a={},Object(s.a)(a,t.badCharacter,e.player.role.isBad),Object(s.a)(a,t.goodCharacter,!e.player.role.isBad),a))},r.a.createElement("h3",null,e.player.role.name),e.player.role.isBad?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u0647\u0645 \u062a\u06cc\u0645\u06cc \u0647\u0627\u06cc \u0634\u0645\u0627 :"),e.player.knowingPlayers.map((function(e,a){return r.a.createElement("h5",{key:a,style:{color:"black"}},e)}))):"Percival"===e.player.role.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u06cc\u06a9\u06cc \u0627\u0632 \u062f\u0648 \u0628\u0627\u0632\u06cc\u06a9\u0646\u0627\u0646 \u0632\u06cc\u0631 \u0645\u0631\u0644\u06cc\u0646 \u0627\u0633\u062a \u0648 \u062f\u06cc\u06af\u0631\u06cc \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0646\u0642\u0634 \u0645\u0631\u0644\u06cc\u0646 \u062c\u0627 \u0632\u062f\u0647 \u0627\u0633\u062a"),e.player.merlinsFace.map((function(e,a){return r.a.createElement("h5",{key:"merlin-face-".concat(a)},e)}))):"Merlin"===e.player.role.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\u0634\u0645\u0627 \u062a\u06cc\u0645 \u0634\u06cc\u0637\u0627\u0646 \u0631\u0627 \u0645\u06cc\u0634\u0646\u0627\u0633\u06cc\u062f \u0648\u0644\u06cc \u0622\u0646\u0647\u0627 \u0646\u0628\u0627\u06cc\u062f \u0645\u062a\u0648\u062c\u0647 \u0646\u0642\u0634 \u0634\u0645\u0627 \u062f\u0631 \u0628\u0627\u0632\u06cc \u0634\u0648\u0646\u062f"),e.player.knowingPlayers.map((function(e,a){return r.a.createElement("h5",{key:a,style:{color:"white"}},e)}))):r.a.createElement("p",null,"\u0634\u0645\u0627 \u0627\u0632 \u06cc\u0627\u0631\u0627\u0646 \u0648\u0641\u0627\u062f\u0627\u0631 \u067e\u0627\u062f\u0634\u0627\u0647\u06cc \u0647\u0633\u062a\u06cc\u062f \u0648 \u062f\u0631 \u0645\u0627\u0645\u0648\u0631\u06cc\u062a \u0647\u0627 \u062d\u062a\u0645\u0627 \u0628\u0627\u06cc\u062f \u0645\u0648\u0641\u0642\u06cc\u062a \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"))),r.a.createElement(g.a,{onClick:function(){e.nextPlayer()},style:{margin:"5px",marginTop:"55px"},fullWidth:!0,variant:"contained",disabled:i},"Next player"))},M=t(127),R=t(128),B=t(123),I=t(124),W=t(126),P=Object(i.a)((function(e){return{missionsRoot:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center"},boardRoot:{width:"85%",height:"90%",backgroundColor:"#grey",border:"2px solid black",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"},round:{borderRadius:"50%",border:"2px solid red",margin:"5px",height:"10vh",width:"10vh",display:"flex",alignItems:"center",justifyContent:"center"},missionFailed:{backgroundColor:"red"},missionSuccess:{backgroundColor:"blue"},currentMission:{cursor:"pointer",animationName:"$blinker",animationDuration:"2s",animationTimingFunction:"linear",animationIterationCount:"infinite"},modal:{display:"flex",alignItems:"center",flexDirection:"column"},modalRoot:{backgroundColor:e.palette.background.paper,border:"2px solid red",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:"500px",minWidth:"300px",margin:"auto"},playersName:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"},buttonsSection:{display:"flex",margin:"5px 2px",justifyContent:"space-evenly"},"@keyframes blinker":{from:{backgroundColor:"red"},to:{backgroundColor:"blue"}}}})),F=function(e){var a=P(),t=e.playersWithRole,o=t.length,l=[[2,3,2,3,3],[2,3,4,3,4],[2,3,5,4,4],[3,4,4,5,5],[3,4,4,5,5],[3,4,4,5,5]],i=Object(n.useState)(!1),u=Object(c.a)(i,2),d=u[0],p=u[1],b=Object(n.useState)((function(){var e=[];return l[o-5].forEach((function(a){e.push({players:a,status:"not-completed"})})),e})),f=Object(c.a)(b,2),y=f[0],h=f[1],g=Object(n.useState)(0),x=Object(c.a)(g,2),E=x[0],j=x[1],v=Object(n.useState)(y[E]),O=Object(c.a)(v,2),k=O[0],C=O[1],S=Object(n.useState)([]),N=Object(c.a)(S,2),w=N[0],M=N[1],R=Object(n.useState)(0),B=Object(c.a)(R,2),I=B[0],W=B[1],F=Object(n.useState)(!1),G=Object(c.a)(F,2),T=G[0],V=G[1],J=Object(n.useState)(""),$=Object(c.a)(J,2),q=$[0],H=$[1];function z(e){var a=y;if(a[E]=e?{players:a[E].players,status:"failed"}:{players:a[E].players,status:"success"},C(y[E+1]),j((function(e){return e+1})),h(a),V(!1),M([]),E>=2){var t=0;y.forEach((function(e){"failed"===e.status&&(t+=1)})),t>=3?H("bad"):E-(t+1)>=3&&H("good")}}return q?r.a.createElement("div",null,r.a.createElement("h1",null,"Winner is ",q," guys")):T?r.a.createElement(D,{playersInMission:w,onMissionCompleted:function(e){return z(e)}}):r.a.createElement("div",{className:a.missionsRoot},r.a.createElement("h3",null,"ignored times: ",I),r.a.createElement("p",null,"if 5 times ignore the kings, mission will be failed!"),r.a.createElement("div",{className:a.boardRoot},y&&y.length>0&&y.map((function(e,t){var n;return r.a.createElement("div",{key:"mission-".concat(t),className:Object(m.a)(a.round,(n={},Object(s.a)(n,a.missionFailed,"failed"===e.status),Object(s.a)(n,a.missionSuccess,"success"===e.status),Object(s.a)(n,a.currentMission,t===E),n)),onClick:function(){t===E&&p(!0)}},e.players)})),r.a.createElement(A,{open:d,handleClose:function(){return p(!1)},playersNoInMission:k.players,playersWithRole:t,playersInMission:w,setPlayersInMission:function(e){return M(e)},onVotingResult:function(e){e?(W(0),V(!0)):I<5?(W((function(e){return e+1})),V(!1)):(W(0),z(!1),V(!1))}})))},A=function(e){var a=P(),t=Object(n.useState)(e.playersNoInMission),o=Object(c.a)(t,2),l=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(c.a)(s,2),d=m[0],p=m[1];return r.a.createElement(M.a,{className:a.modal,open:e.open,disableBackdropClick:!0,closeAfterTransition:!0,BackdropComponent:R.a,BackdropProps:{timeout:500}},r.a.createElement("div",{className:a.modalRoot},l>0?r.a.createElement("h5",null,"Choose ".concat(l," Players")):r.a.createElement("h5",null,"click start to vote"),r.a.createElement(B.a,{className:a.playersName},e.playersWithRole.map((function(a,t){return r.a.createElement(I.a,{key:"form-control-".concat(t),control:r.a.createElement(W.a,{checked:e.playersInMission.includes(a),onChange:function(){e.playersInMission.includes(a)?(e.setPlayersInMission((function(e){return e.filter((function(e){return e!==a}))})),i((function(e){return e+1}))):l>0&&(e.setPlayersInMission((function(e){return[].concat(Object(u.a)(e),[a])})),i((function(e){return e-1})))},name:a.name}),label:a.name})}))),r.a.createElement("div",{className:a.buttonsSection},r.a.createElement(g.a,{variant:"contained",color:"primary",disabled:l>0||d,onClick:function(){return p(!0)}},"start"),r.a.createElement(g.a,{variant:"contained",color:"primary",disabled:d,onClick:e.handleClose},"exit")),r.a.createElement(C.a,{in:d},r.a.createElement("div",{className:a.buttonsSection},r.a.createElement(g.a,{variant:"outlined",color:"primary",onClick:function(){e.handleClose(),e.onVotingResult(!0),p(!1)}},"Approve"),r.a.createElement(g.a,{variant:"outlined",color:"secondary",onClick:function(){e.handleClose(),e.onVotingResult(!1),e.setPlayersInMission([]),p(!1),i(e.playersNoInMission)}},"Deny")))))},D=function(e){var a=e.playersInMission,t=e.onMissionCompleted,o=(P(),Object(n.useState)(!1)),l=Object(c.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(0),m=Object(c.a)(u,2),d=m[0],p=m[1];function b(e){p((function(e){return e+1})),"failed"===e&&s(!0),d>=a.length-1&&t(i)}return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,a[d].name),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){return b("success")}},"Success"),r.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:function(){return b("failed")}},"fail")))},G=Object(i.a)((function(e){return{root:{height:"100vh",width:"100%",display:"flex",justifyContent:"center",overflow:"auto"}}})),T=function(){var e=G(),a=Object(n.useState)(0),t=Object(c.a)(a,2),o=t[0],l=t[1],i=Object(n.useState)([]),s=Object(c.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)([]),p=Object(c.a)(d,2),b=p[0],f=p[1],y=Object(n.useState)([]),h=Object(c.a)(y,2),g=h[0],x=h[1];return r.a.createElement("div",{className:e.root},0===o?r.a.createElement(v,{onStart:function(e,a){m(e),f(a),l(1)}}):1===o?r.a.createElement(N,{players:u,characters:b,onGameStart:function(){return l(2)},onPlayersGetRole:function(e){return x(e)}}):2===o?r.a.createElement(F,{playersWithRole:g}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.7fa9312b.chunk.js.map