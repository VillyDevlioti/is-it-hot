(this["webpackJsonpis-it-hot"]=this["webpackJsonpis-it-hot"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(34),r=a.n(c),o=(a(42),a(15)),s=a.n(o),l=a(35),u=a(4),m=a(5),h=a(7),p=a(6),f=(a(44),function(){return i.a.createElement("div",{className:"container-fluid align-items-center"},i.a.createElement("h1",{className:"card-title"},"What's it like outside?"),i.a.createElement("div",{className:"card-body"},i.a.createElement("p",null,"A contextual weather app")))}),d=a(36),v=(a(101),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.text,t=this.props.animation;return i.a.createElement("div",{className:"col-sm-8"},i.a.createElement(d.Animated,{animationIn:t,isVisible:!0},i.a.createElement("div",{className:"weather-card"},i.a.createElement("div",{className:"weather-card-body"},i.a.createElement("h1",null,e)))))}}]),a}(n.Component)),b=(a(102),function(e){return i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},e.children)))}),E=(a(103),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"footer col-sm-8"},i.a.createElement("p",null,"App Developed by Villy Devlioti an amateur full stack developer"),i.a.createElement("p",null,"Checkout my ",i.a.createElement("a",{href:"https://github.com/VillyDevlioti",target:"_blank"},"GitHub "),"and ",i.a.createElement("a",{href:"https://fewl.agency",target:"_blank"},"Company Website")))}}]),a}(n.Component)),g=(a(104),a(105),a(16)),y=a.n(g),k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).findIP=function(){console.log("cc5e6a64f90b532b5195ef09e4852973");y.a.get("http://api.ipstack.com/check?access_key=cc5e6a64f90b532b5195ef09e4852973").then((function(e){n.setState({city:e.data.city}),n.callWeatherAPI(n.state.city)})).catch((function(e){n.setState({error:e})}))},n.callWeatherAPI=function(e){var t="http://api.openweathermap.org/data/2.5/forecast?appid=88f9517c6568905f664912764b0c1031&lang=en&units=metric&q="+e;y.a.get(t).then((function(e){n.contextualMessaging(e.data.list[0].main.temp)})).catch((function(e){n.setState({error:e})}))},n.contextualMessaging=function(e){e>25?n.setState({isHot:!0,animation:"flash"}):15<=e<=25?n.setState({isOK:!0,animation:"tada"}):e<15&&n.setState({isCold:!0,animation:"shakeX"})},n.state={temperature:"",city:"",animation:"",isHot:!1,isOK:!1,isCold:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findIP();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return this.state.isHot?e=i.a.createElement(v,{text:"It's Fucking Hot",animation:this.state.animation}):this.state.isOK?e=i.a.createElement(v,{text:"It's Fucking OK",animation:this.state.animation}):this.state.isCold&&(e=i.a.createElement(v,{text:"It's Fucking Cold",animation:this.state.animation})),i.a.createElement("div",{className:"App"},i.a.createElement(b,null,i.a.createElement(f,null),e),i.a.createElement(E,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){e.exports=a(124)},42:function(e,t,a){},44:function(e,t,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.61b759a1.chunk.js.map