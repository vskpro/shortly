(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.6387840f.svg"},function(e,t,a){e.exports=a.p+"static/media/hero.5029d049.svg"},,,function(e,t,a){e.exports=a.p+"static/media/brand.1922b68a.svg"},function(e,t,a){e.exports=a.p+"static/media/records.e3d9caa9.svg"},function(e,t,a){e.exports=a.p+"static/media/customizable.cc099cea.svg"},,,,function(e,t,a){e.exports=a(29)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(6),r=a.n(i),c=(a(22),a(23),a(24),a(7)),l=a.n(c);var o=function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"left"},s.a.createElement("img",{src:l.a,alt:"Shortly Logo",className:"logo"}),s.a.createElement("div",{className:"menu"},s.a.createElement("span",{className:"item"},"Features"),s.a.createElement("span",{className:"item"},"Pricing"),s.a.createElement("span",{className:"item"},"Resource"))),s.a.createElement("div",{className:"right"},s.a.createElement("div",{className:"menu"},s.a.createElement("span",{className:"item button"},"Login"),s.a.createElement("span",{className:"item button green"},"Signup")),s.a.createElement("div",{className:"mobile-menu"},s.a.createElement("i",{className:"fa fa-bars"}))))},m=(a(25),a(8)),d=a.n(m);var u=function(){return s.a.createElement("div",{className:"hero-wrapper c-padding"},s.a.createElement("div",{className:"hero-img"},s.a.createElement("img",{src:d.a,alt:"Hero"})),s.a.createElement("div",{className:"hero-left"},s.a.createElement("div",{className:"hero-text"},"More than just",s.a.createElement("br",null),"shorter links"),s.a.createElement("div",{className:"hero-desc"},"Build your brand's recognition and get detailed insights on how your links are performing."),s.a.createElement("button",{className:"action-btn"},"Get started")))},h=a(14),v=a(3),p=a.n(v),E=a(1),b=a(4),g=a(9),N=a(10),f=a(2),y=a(16),k=a(15),x=(a(27),a(11)),L=a.n(x),w=a(12),S=a.n(w),T=a(13),j=a.n(T);a(28);var O=function(){return s.a.createElement("div",{className:"action-area"},s.a.createElement("div",{className:"heading"},"Boost your links today"),s.a.createElement("button",{className:"cyan-btn action-btn"},"Get Started"))},B=function(e){Object(y.a)(a,e);var t=Object(k.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).state={searchText:"",shortLinks:[],isFormLoading:!1},n.setSearchText=n.setSearchText.bind(Object(f.a)(n)),n.onFormSubmit=n.onFormSubmit.bind(Object(f.a)(n)),n.copyShortLink=n.copyShortLink.bind(Object(f.a)(n)),n}return Object(N.a)(a,[{key:"setSearchText",value:function(e){this.setState({searchText:e.target.value})}},{key:"onFormSubmit",value:function(e){e.preventDefault(),this.validateAndProcess()}},{key:"validateAndProcess",value:function(){var e=Object(b.a)(p.a.mark((function e(){var t,a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.getElementById("searchText"),a=document.getElementById("warning"),this.state.searchText){e.next=8;break}t.classList.add("red"),a.classList.add("show"),a.innerHTML="Please enter a URL",e.next=20;break;case 8:if(this.validURL(this.state.searchText)){e.next=14;break}t.classList.add("red"),a.classList.add("show"),a.innerHTML="Please enter valid URL",e.next=20;break;case 14:return this.setState({isFormLoading:!0}),e.next=17,this.getShortUrl(this.state.searchText);case 17:n=e.sent,this.setState(Object(E.a)(Object(E.a)({},this.state),{},{isFormLoading:!1})),Array.isArray(n)?a.innerHTML="Please enter a URL":(t.classList.remove("red"),a.classList.remove("show"),a.innerHTML="Please enter a URL",this.saveReponse(n));case 20:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validURL",value:function(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}},{key:"getShortUrl",value:function(){var e=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api-ssl.bitly.com/v4/shorten",e.next=3,fetch("https://api-ssl.bitly.com/v4/shorten",{method:"POST",mode:"cors",headers:{Authorization:"Bearer 91bfe7a84a45ad2bbb174b3c28453ed6c0ad69ba","Content-Type":"application/json"},body:JSON.stringify({long_url:t})});case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"saveReponse",value:function(e){this.setState(Object(E.a)(Object(E.a)({},this.state),{},{shortLinks:[].concat(Object(h.a)(this.state.shortLinks),[e])})),this.setState(Object(E.a)(Object(E.a)({},this.state),{},{searchText:""}))}},{key:"copyShortLink",value:function(e){e.preventDefault();var t=document.getElementById("copyLink").value,a=document.createElement("textarea");a.value=t,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a),e.target.classList.add("copied"),e.target.innerHTML="Copied"}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"action-wrapper c-padding"},s.a.createElement("div",{className:"violet-area"},s.a.createElement("form",{className:"form",onSubmit:this.onFormSubmit},s.a.createElement("div",{className:"input mb"},s.a.createElement("input",{type:"text",value:this.searchText,onChange:this.setSearchText,placeholder:"Shorten a link here",name:"searchText",id:"searchText"}),s.a.createElement("div",{className:"warning",id:"warning"},"Please enter a link")),s.a.createElement("div",{className:"input"},s.a.createElement("input",{type:"submit",disabled:this.state.isFormLoading,className:"cyan-btn submit-btn",value:this.state.isFormLoading?"Shortening!":"Shorten it!"})))),this.state.shortLinks.map((function(t,a){return s.a.createElement("div",{className:"white-area",key:a},s.a.createElement("div",{className:"main-link"},t.long_url),s.a.createElement("div",{className:"short-link"},s.a.createElement("div",{className:"link"},t.link),s.a.createElement("input",{readOnly:!0,type:"text",className:"hidden",id:"copyLink",value:t.link}),s.a.createElement("button",{onClick:e.copyShortLink,className:"cyan-btn copy-btn"},"Copy")))})),s.a.createElement("div",{className:"highlight-heading"},s.a.createElement("div",{className:"heading"},"Advanced Statistics"),s.a.createElement("div",{className:"desc"},"Track how your links are performing across the web with our advanced statistics dashboard.")),s.a.createElement("div",{className:"three-points"},s.a.createElement("div",{className:"point"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:L.a,alt:"",className:"point-img"})),s.a.createElement("div",{className:"title"},"Brand Recognition"),s.a.createElement("div",{className:"content"},"Boost your brands recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.")),s.a.createElement("div",{className:"point"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:S.a,alt:"",className:"point-img"})),s.a.createElement("div",{className:"title"},"Detailed Records"),s.a.createElement("div",{className:"content"},"Boost your brands recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.")),s.a.createElement("div",{className:"point"},s.a.createElement("div",{className:"image"},s.a.createElement("img",{src:j.a,alt:"",className:"point-img"})),s.a.createElement("div",{className:"title"},"Fully Customizable"),s.a.createElement("div",{className:"content"},"Boost your brands recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.")))),s.a.createElement(O,null))}}]),a}(s.a.Component);var R=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"mobile-lock"},s.a.createElement("span",{className:"text"},"Please rotate your device")),s.a.createElement("div",{className:"header c-padding"},s.a.createElement(o,null)),s.a.createElement("div",{className:"hero"},s.a.createElement(u,null)),s.a.createElement("div",{className:"below-fold"},s.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.bdc93310.chunk.js.map