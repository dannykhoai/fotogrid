(this.webpackJsonpfotogrid=this.webpackJsonpfotogrid||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(14),l=a.n(c),i=(a(22),a(5)),o=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FotoGrid"),r.a.createElement("h2",null," Awesome Photobook  "),r.a.createElement("p",null," Try uploading some photos to show the whole World ",r.a.createElement("br",null)," that you have access to the internet \u2603\ufe0f "))},u=a(12),s=a(9);a(31),a(23);s.a.initializeApp({apiKey:"AIzaSyBpngPJObX8dO__rantT5B5GUiCIHD4NTo",authDomain:"fotogrid-f721f.firebaseapp.com",databaseURL:"https://fotogrid-f721f.firebaseio.com",projectId:"fotogrid-f721f",storageBucket:"fotogrid-f721f.appspot.com",messagingSenderId:"144160098659",appId:"1:144160098659:web:55d200b9ff630fbed96b56",measurementId:"G-2YJ18LXKXS"});var m=s.a.storage(),d=s.a.firestore(),f=s.a.firestore.FieldValue.serverTimestamp(),p=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=d.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},g=a(8),b=function(e){var t=e.setSelectedImg,a=p("images").docs;return r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(g.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(g.a.img,{src:e.url,alt:"uploaded imgs",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}),r.a.createElement(g.a.img,{className:"avatar",alt:"uploader avatar",src:e.photoURL||"https://api.adorable.io/avatars/23/abott@adorable.png",initial:{opacity:0},animate:{opacity:1},transition:{delay:2}}))})))},E=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(g.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(g.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))},v=(a(26),a(11)),h=a.n(v),O=a(15),j=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),u=o[0],s=o[1],p=Object(n.useState)(null),g=Object(i.a)(p,2),b=g[0],E=g[1];return Object(n.useEffect)((function(){var t=m.ref(e.name),a=d.collection("images");t.put(e).on("stage_change",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){s(e)}),Object(O.a)(h.a.mark((function e(){var n,r,c,l,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=f,c=I.currentUser,l=c.uid,i=c.photoURL,a.add({url:n,createdAt:r,uid:l,photoURL:i}),E(n);case 7:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:b,error:u}},y=function(e){var t=e.file,a=e.setFile,c=j(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(g.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})},S=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),u=o[0],s=o[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),s("")):(c(null),s("Please select an image file (png or jpg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},u&&r.a.createElement("div",{className:"error"},u),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(y,{file:a,setFile:c})))},w=a(16),I=s.a.auth();function k(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"sign-in",onClick:function(){var e=new s.a.auth.GoogleAuthProvider;I.signInWithPopup(e)}},"Sign in with Google to upload pic \ud83d\udcf7"))}function N(){return I.currentUser&&r.a.createElement("button",{className:"sign-out",onClick:function(){return I.signOut()}},"Sign Out")}var U=function(){var e=Object(w.a)(I);return Object(i.a)(e,1)[0]?r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(S,null)):r.a.createElement(k,null)};var A=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(U,null),r.a.createElement(b,{setSelectedImg:c}),a&&r.a.createElement(E,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.061e5c4b.chunk.js.map