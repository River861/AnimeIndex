(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3865cc83"],{1195:function(e,t,n){e.exports=n.p+"img/avatar.ba24cd45.png"},"2a37":function(e,t,n){"use strict";var i=n("5ccf"),o=n.n(i);o.a},"5ccf":function(e,t,n){},6066:function(e,t,n){e.exports=n.p+"img/iconstwo.97855820.png"},c66d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"profile-main-container"}},[n("div",{attrs:{id:"profile-head"}},[e._m(0),n("div",{attrs:{id:"user-info-container"}},[e._m(1),n("div",{attrs:{id:"user-text-wrap"}},[n("div",{attrs:{id:"user-name"}},[e._v(e._s(e.note))]),n("div",{attrs:{id:"user-vip"}},[e._v(e._s(e.vip))]),n("div",{attrs:{id:"user-sign"}},[n("p",{attrs:{id:"user-sign-content"}},[e._v("sign")]),n("div",{style:e.editicon,attrs:{id:"edit"},on:{click:function(t){return e.editprofile()}}})])])])]),n("div",{attrs:{id:"profile-body-container"}},[n("div",{attrs:{id:"profile-body-head"}},[n("span",{attrs:{id:"profile-body-title"}},[e._v("订阅番剧")]),n("div",{style:e.more,attrs:{id:"more"},on:{click:function(t){return e.working(t)},mouseover:function(t){return e.mouseonMore()},mouseout:function(t){return e.mouseoffMore()}}},[e._v("更多")])]),n("div",{attrs:{id:"profile-body-body"}})])])},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"back-img-wrap"}},[i("img",{attrs:{id:"back-img",src:n("0739"),width:"300px"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"user-avatar-wrap"}},[i("img",{attrs:{id:"user-avatar",src:n("1195"),width:"80px"}})])}],r=(n("6b54"),n("f499")),a=n.n(r),d=(n("a481"),n("1157")),s=n.n(d),c={name:"profile",data:function(){return{note:"",editsign:"",vip:"",animechased:{},more:{"vertical-align":"-6px",backgroundPosition:"-310px -404px",border:"1px solid #b8c0cc",color:"#6d757a","font-size":"12px","line-height":"22px","border-radius":"4px",padding:"0 19px 0 10px","font-weight":"400","font-family":"initial",top:"20px",right:"19px",width:"24px",height:"24px",position:"absolute","background-repeat":"no-repeat",backgroundImage:"url("+n("6066")+")"},editicon:{"vertical-align":"-6px",backgroundPosition:"-1428px -340px",width:"24px",height:"24px","margin-top":"12px","margin-left":"0px","margin-right":"7px","background-repeat":"no-repeat",backgroundImage:"url("+n("ea3e")+")"}}},methods:{___trans:function(e){return null==e?"0":e.replace(/[#:\/\\?*<>"| ()]/g,"_")},working:function(e){this.$message({type:"info",message:"施工中~"})},mouseonMore:function(){document.getElementById("more").style.backgroundPosition="-438px -404px",document.getElementById("more").style.borderColor="#00a1d6",document.getElementById("more").style.color="#00a1d6"},mouseoffMore:function(){document.getElementById("more").style.backgroundPosition="-310px -404px",document.getElementById("more").style.borderColor="#b8c0cc",document.getElementById("more").style.color="#6d757a"},editprofile:function(){var e=this;this.$prompt("你的个人签名：",{confirmButtonText:"提交"}).then(function(t){var n=t.value;e.editsign=n}).then(function(){fetch(e.$store.state.backend+"/editSign",{method:"POST",mode:"cors",body:a()({username:localStorage.getItem("username"),sign:e.editsign})}).then(function(e){return e.json()}).then(function(e){document.getElementById("user-sign-content").innerHTML=e["sign"]}).catch(function(t){e.$message({type:"info",message:"网络连接失败"})})})},addAnimeLink:function(){var e=this;s()("#profile-body-body").on("click",".profile-bangumi-img",function(t){fetch(e.$store.state.backend+"/postName",{method:"POST",mode:"cors",body:a()({name:e.animechased[t.target.getAttribute("value")][0]})}).then(e.$router.push("detail"))}),s()("#profile-body-body").on("click","#profile-bangumi-title",function(t){fetch(e.$store.state.backend+"/postName",{method:"POST",mode:"cors",body:a()({name:t.target.innerHTML})}).then(e.$router.push("detail"))})}},created:function(){var e=this;fetch(this.$store.state.backend+"/loadFanSpace",{method:"GET",mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.note=t["nickname"],localStorage.getItem("username")!=t["nickname"]&&(document.getElementById("edit").hidden=!0,document.getElementById("user-sign-content").style.marginLeft="0px"),document.getElementById("user-sign-content").innerHTML=t["sign"],t["face"]&&(document.getElementById("user-avatar").src="data:image/png;base64,"+t["face"]),e.vip=t["vip"],e.animechased=t["animechased"];var i="",o="",r=t["animechased"][0];r>8&&(t["animechased"][0]=8);for(var a=1;a<=t["animechased"][0];a++)o=a%2==1?"profile-bangumi-item-left":"profile-bangumi-item-right",i+="<div id="+o+'>                                 <div id="profile-bangumi-img-wrap">                                     <img id="profile-bangumi-img" class="profile-bangumi-img" src="" value='+a.toString()+' width="110px" height="144px">                                 </div>                                 <div id="profile-bangumi-detail">                                     <div id="profile-bangumi-title" title='+t["animechased"][a][0]+">"+t["animechased"][a][0]+'</div>                                     <p id="profile-detail-intro">'+t["animechased"][a][1]+"</p>                                 </div>                             </div>";document.getElementById("profile-body-body").innerHTML=i;var d=document.getElementsByClassName("profile-bangumi-img");for(a=0;a<d.length;a++)d[a].src=n("afdc")("./"+e.___trans(t["animechased"][a+1][0])+".png");e.addAnimeLink(),window.scrollTo(0,0)})}},m=c,u=(n("2a37"),n("2877")),l=Object(u["a"])(m,i,o,!1,null,null,null);t["default"]=l.exports},ea3e:function(e,t,n){e.exports=n.p+"img/icons.2966195b.png"}}]);
//# sourceMappingURL=chunk-3865cc83.83838e9e.js.map