(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},26:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(19),l=a.n(c),i=(a(26),a(8)),s=a(15),u=a(11);a(32),a(33);a(27).config();u.a.initializeApp({apiKey:"AIzaSyCm8WmMt2CdmK_1WEPcdB4grGyAce8I99s",authDomain:"pixelgram-80e0b.firebaseapp.com",projectId:"pixelgram-80e0b",storageBucket:"pixelgram-80e0b.appspot.com",messagingSenderId:"722674977769",appId:"1:722674977769:web:1e7b7a9082a8be73d89978"});var o=u.a.storage(),m=u.a.firestore(),p=u.a.firestore.FieldValue.serverTimestamp,d=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=m.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},f=a(35),g=function(e){var t=e.setSelectedImg,a=d("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(f.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(f.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},b=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(f.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(f.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))},v=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"PixelGram"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Share your pictures with the world"))},E=a(14),j=a.n(E),y=a(20),h=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],d=s[1],f=Object(n.useState)(null),g=Object(i.a)(f,2),b=g[0],v=g[1];return Object(n.useEffect)((function(){var t=o.ref(e.name),a=m.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){d(e)}),Object(y.a)(j.a.mark((function e(){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=p(),a.add({url:n,createdAt:r}),v(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:u}},O=function(e){var t=e.file,a=e.setFile,c=h(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(f.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})},S=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],o=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o(null)):(c(null),o("Please select image of the type png or jpeg"))}}),r.a.createElement("div",{className:"output"},u&&r.a.createElement("div",{className:"error"}," ",u," "),a&&r.a.createElement("div",null," ",a.name," "),a&&r.a.createElement(O,{file:a,setFile:c})))};var w=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(S,null),r.a.createElement(g,{setSelectedImg:c}),a&&r.a.createElement(b,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.16d094f3.chunk.js.map