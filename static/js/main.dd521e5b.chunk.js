(this.webpackJsonpmemorygame=this.webpackJsonpmemorygame||[]).push([[0],{27:function(e,a,t){e.exports=t(41)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(8),r=t.n(c),i=(t(32),t(33),t(7)),o=t(21),l=t(15),m=t(16),g=t(25),p=t(17),h=t(26),d=t(18),u=t(20),k=(t(34),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(g.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(s)))).state={score:0,highScore:0,images:[{src:"./assets/images/totadile.png",picked:!1},{src:"./assets/images/squirtle.png",picked:!1},{src:"./assets/images/pikachu.png",picked:!1},{src:"./assets/images/psyduck.png",picked:!1},{src:"./assets/images/phampy.png",picked:!1},{src:"./assets/images/munchlax.png",picked:!1},{src:"./assets/images/jirachi.png",picked:!1},{src:"./assets/images/fenekin.png",picked:!1},{src:"./assets/images/charmander.png",picked:!1},{src:"/assets/images/charizard.png",picked:!1},{src:"./assets/images/bulbasaur.png",picked:!1},{src:"./assets/images/blastoise.png",picked:!1}]},t.handleClick=function(e){var a=e.target.id,n=t.state.images,s=t.state.score,c=t.state.highScore;if(n[a].picked)s>c&&(c=s),s=0,n.forEach((function(e){e.picked=!1}));else{n[a].picked=!0,console.log(n);for(var r=n.length-1;r>0;r--){var i=Math.floor(Math.random()*r),o=n[r];n[r]=n[i],n[i]=o}console.log(n),s+=1}document.getElementById("score").textContent=s,document.getElementById("high-score").textContent=c,t.setState({score:s,highScore:c,images:n})},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(d.a,null,this.state.images.map((function(a){return s.a.createElement(u.a,{className:"game-tile m-2",src:a.src,key:e.state.images.indexOf(a),id:e.state.images.indexOf(a),thumbnail:!0,onClick:e.handleClick})})))}}]),a}(n.Component));var f=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(i.a,{bg:"light",expand:"lg",sticky:"top"},s.a.createElement(i.a.Brand,{href:"#home"},"Memory Game!"),s.a.createElement(i.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end"},s.a.createElement(i.a.Text,null,"Score: ",s.a.createElement("span",{id:"score"},"0")," | High Score: ",s.a.createElement("span",{id:"high-score"},"0")))),s.a.createElement(o.a,null,s.a.createElement("h1",{className:"mb-4"},"Click Memory Game"),s.a.createElement("p",null,"Clicking on an image earns 1 point. ",s.a.createElement("br",null),"Clicking on the same image resets the game! ",s.a.createElement("br",null),"Let's see how high you can go!")),s.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(37);var E=t(24);r.a.render(s.a.createElement(E.a,{basename:"/Memory-Game"},s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.dd521e5b.chunk.js.map