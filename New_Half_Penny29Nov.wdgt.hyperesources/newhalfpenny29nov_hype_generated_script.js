//	HYPE.documents["New_Half_Penny29Nov.wdgt"]

(function(){(function k(){var h="New_Half_Penny29Nov.wdgt.hyperesources",e="New_Half_Penny29Nov.wdgt",d="newhalfpenny29nov_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),b=0;b<f.length;b++){var a=f[b].src;if(null!=a&&-1!=a.indexOf("newhalfpenny29nov_hype_generated_script.js")){h=a.substr(0,a.lastIndexOf("/"));break}}}catch(n){}null==window.HYPE_DocumentsToLoad&&(window.HYPE_DocumentsToLoad=[]);if(false==!1&&null==window.HYPE_248)null==window.HYPE_dtl_248?(window.HYPE_dtl_248=[],window.HYPE_dtl_248.push(k),
e=document.getElementsByTagName("head")[0],d=document.createElement("script"),d.type="text/javascript",d.src=h+"/HYPE.js?hype_version=248",e.appendChild(d)):window.HYPE_dtl_248.push(k);else{f=window.HYPE.documents;if(null!=f[e]){a=1;b=e;do e=""+b+"-"+a++;while(null!=f[e]);for(var c=document.getElementsByTagName("div"),a=!1,b=0;b<c.length;b++)if(c[b].id==d&&null==c[b].getAttribute("HYP_dn")){var a=1,g=d;do d=""+g+"-"+a++;while(null!=document.getElementById(d));c[b].id=d;a=!0;break}if(!1==a)return}for(var a=
new HYPE_248,c=[],c=[{name:"coinPressed",source:"function(hypeDocument, element, event) {\tif (window.pressed != true){\n\tconsole.log (\"pressed coin\" + event.target.id);\n\t\n\t\n\tconsole.log (\"ios6\"+isIOS6());\n\t\n\t\n\t\n\tif (!isIOS6()){\n\t\n\n\t$(\"#\"+event.target.id).css('webkitFilter','brightness(1.52)','saturate(0.6)','contrast(1.1)');\n\t\n\t}\n\t\n\t\n\t\n\t\n\tif ($(\"#coinmovie\")[0].paused){\n\t$(\"#coinmovie\")[0].play();}else{\n\t$(\"#coinmovie\")[0].currentTime=0;\n\t}\n\n\n\t\n\tvar tl = new TimelineMax({onComplete:goScreen2,onCompleteParams:[event.target.id]});\n\t\n\ttl.staggerTo ([$(\"#coin12\"),$(\"#coin11\"),$(\"#coin10\"),$(\"#coin9\"),$(\"#coin8\"),$(\"#coin7\"),$(\"#coin6\"),$(\"#coin5\"),$(\"#coin4\"),$(\"#coin3\"),$(\"#coin2\"),$(\"#coin1\")],.8,{top:1000,ease:Bounce.easeOut},.05);\n\ttl.play();\n\twindow.pressed = true;\n\t\n\t}\n\t\n\n\n\n\n\t\n\t\n}",identifier:"60"},{name:"backPressed",source:"function(hypeDocument, element, event) {\t\n\tconsole.log (\"back\");\n\t\n\t\n\t\n\t\n\t    \n\t\t\tif ($(\"#coinmovie\")[0].paused){\n\t$(\"#coinmovie\")[0].play();}else{\n\t$(\"#coinmovie\")[0].currentTime=0;\n\t}\n\t\nresetCoins();\n\nTweenMax.staggerFrom([$(\"#coin12\"),$(\"#coin11\"),$(\"#coin10\"),$(\"#coin9\"),$(\"#coin8\"),$(\"#coin7\"),$(\"#coin6\"),$(\"#coin5\"),$(\"#coin4\"),$(\"#coin3\"),$(\"#coin2\"),$(\"#coin1\")],.7,{top:-150,ease:Bounce.easeOut},.1);\n\t\n\t\n}",identifier:"75"},{name:"sceneSetup",source:"function(hypeDocument, element, event) {\t\n\t//hide screen 2\n\n\tTweenMax.to ($(\"#screen2\",0,{autoAlpha:0});\n\t\n\t\n}",identifier:"70"},{name:"releaseCoin",source:"function(hypeDocument, element, event) {\t\n\t\n\t\n\t\n\t\n\t\n\tif (iOSversion()[0] >=7){\n\t\n\t\t\n\t\t\n\n\t\n\t$(\"#\"+event.target.id).css('webkitFilter','brightness(1)','saturate(1)','contrast(1)');\n\t\n\t}\n\n\t\n}",identifier:"87"}],g={},l={},b=0;b<c.length;b++)try{l[c[b].identifier]=c[b].name,g[c[b].name]=eval("(function(){return "+c[b].source+"})();")}catch(m){a.log(m),g[c[b].name]=function(){}}a.z_a({b:0,c:0,bQ:0,bC:0,d:0,aS:0,M:0,e:3,aT:0,N:0,f:2,O:0,g:5,aU:0,P:0,Q:0,aV:0,R:5,bG:3,aW:3,aI:0,S:0,T:0,l:2,aX:0,bH:2,m:5,bI:3,aJ:0,n:5,aK:0,bJ:3,X:0,aL:0,A:5,aZ:0,Y:1,B:5,bK:3,bL:3,C:5,D:5,t:0,E:0,G:5,bO:2,bA:5,a:0,bB:0});a.z_b({"18":{n:"newExtraCodev2.js"},"10":{n:"cent01%402x.png",p:1},"19":{n:"pennycode.js"},"11":{n:"cent02%402x.png",p:1},"0":{n:"avenir.ttf"},"12":{n:"cent03%402x.png",p:1},"1":{n:"cent09%402x.png",p:1},"20":{n:"RetinArrow_sw.png",p:1},"2":{n:"cent10%402x.png",p:1},"13":{n:"jquery-2.0.3.min.js"},"3":{n:"cent11%402x.png",p:1},"21":{n:"coin.mp4",g:"53",t:"video/mp4"},"14":{n:"jquery.gsap.min.js"},"4":{n:"cent12%402x.png",p:1},"5":{n:"cent04%402x.png",p:1},"15":{n:"TweenMax.min.js"},"6":{n:"cent05%402x.png",p:1},"16":{n:"bg_strp.jpg",p:1},"7":{n:"cent06%402x.png",p:1},"8":{n:"cent07%402x.png",p:1},"17":{n:"bgstrip.jpg",p:1},"9":{n:"cent08%402x.png",p:1}});a.z_c(["<!-- Custom Fonts -->\n\t<style>\n    @font-face {\n        font-family: 'avenir';\n        src:              url('New_Half_Penny29Nov.wdgt.hyperesources/avenir.ttf') format('truetype'),\n            \n    }\n</style>"]);a.z_d([{x:0,p:"600px",c:"#FFFFFF",A:{a:[{p:4,h:"70"}]},v:{"55":{aR:"0",x:"visible",a:-707,i:"coinmovie",b:49,j:"absolute",bE:"53",c:603,k:"video",z:"36",d:603,aO:"1",aQ:"0",aH:"0"},"10":{bJ:"1.000000",aE:{a:[{p:4,h:"87"}]},q:"100% 100%",c:100,d:100,r:"inline",aN:"10_pressed",bK:"1.000000",aP:"pointer",h:"5",i:"coin4",w:"",j:"absolute",x:"visible",k:"div",aB:{a:[{p:4,h:"60"}]},z:"14",bI:"1.000000",a:667,o:"content-box",b:338},"78":{o:"content-box",h:"17",p:"repeat-x",x:"visible",a:0,b:0,j:"absolute",r:"inline",c:1024,k:"div",z:"1",d:98304},"11":{o:"content-box",bI:"1.000000",h:"6",a:263,x:"visible",aN:"11_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"15",d:100,i:"coin5",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:450,bK:"1.000000",bJ:"1.000000"},"64":{aU:8,G:"#161616",aV:8,r:"inline",s:"avenir",bD:"none",t:20,Z:"break-word",w:"Your Choice",bF:"83",j:"absolute",x:"visible",yy:"pre",k:"div",y:"preserve",z:"3",aS:8,aT:8,a:360,b:0},"12":{o:"content-box",bI:"1.000000",h:"7",a:399,x:"visible",aN:"12_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"16",d:100,i:"coin6",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:450,bK:"1.000000",bJ:"1.000000"},"72":{o:"content-box",h:"5",x:"visible",a:567,q:"100% 100%",i:"real",j:"absolute",r:"inline",aA:{a:[{p:4,h:"60"}]},k:"div",c:100,d:100,z:"47",b:-131,aP:"pointer"},"65":{aU:8,G:"#161616",aV:8,r:"inline",s:"avenir",bD:"none",t:20,Z:"break-word",w:"The Real Penny",bF:"83",j:"absolute",x:"visible",yy:"pre",k:"div",y:"preserve",z:"4",aS:8,aT:8,a:531,b:0},"13":{o:"content-box",bI:"1.000000",h:"8",a:531,x:"visible",aN:"13_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"17",d:100,i:"coin7",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:450,bK:"1.000000",bJ:"1.000000"},"3":{aU:8,G:"#161616",c:596,aV:8,r:"inline",d:90,s:"avenir",t:48,Z:"break-word",w:"A penny, your thoughts.",j:"absolute",x:"visible",k:"div",y:"preserve",z:"6",aS:8,aT:8,a:225,F:"center",b:65},"14":{o:"content-box",bI:"1.000000",h:"9",a:667,x:"visible",aN:"14_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"18",d:100,i:"coin8",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:450,bK:"1.000000",bJ:"1.000000"},"81":{aU:8,G:"#161616",c:521,aV:8,r:"inline",d:164,s:"avenir",t:18,Y:"21px",Z:"break-word",i:"sorry",w:"Too bad! Nice try, but you didn\u2019t choose the right coin. It turns out that most people have a hard time remembering the correct details. In our daily lives, we need enough information to tell a penny from a dime or a quarter, but we don\u2019t usually need to compare one penny to another. This game suggests that people are likely to remember only as much as they need to, and not much more.",j:"absolute",x:"visible",k:"div",y:"preserve",z:"48",aS:8,aT:8,a:-208,F:"justify",b:-204},"74":{aU:8,G:"#161616",c:521,aV:8,r:"inline",d:164,s:"avenir",t:18,Y:"21px",Z:"break-word",i:"congrats",w:"Correct! You\u2019ve made the right choice. But most people have a hard time remembering the correct details. In our daily lives, we need enough information to tell a penny from a dime or a quarter, but we don\u2019t usually need to compare one penny to another. This game suggests that people are likely to remember only as much as they need to, and not much more.",j:"absolute",x:"visible",k:"div",y:"preserve",z:"44",aS:8,aT:8,a:703,F:"justify",b:-180},"5":{aU:8,G:"#000000",c:804,aV:8,r:"inline",d:114,s:"Helvetica,Arial,Sans-Serif",t:18,Z:"break-word",i:"blurb1",w:"<font color=\"#161616\" face=\"Avenir-Book\">How good is your memory for familiar objects, say, coins that you use each day? Let\u2019s find out\u2026&nbsp;</font><div><font color=\"#161616\" face=\"Avenir-Book\">Only one of these images of a US penny is accurate. Which one is it?<p><font color=\"#161616\" face=\"Avenir-Book\">Click on your choice to see if your answer is correct. \n\n\n</font></p></font></div>",j:"absolute",x:"visible",k:"div",y:"preserve",z:"8",aS:8,aT:8,a:121,F:"center",b:155},"15":{bJ:"1.000000",aE:{a:[{p:4,h:"87"}]},c:100,q:"100% 100%",d:100,aN:"15_pressed",r:"inline",bK:"1.000000",aP:"pointer",h:"10",i:"coin1",j:"absolute",x:"visible",k:"div",aB:{a:[{p:4,h:"60"}]},z:"19",bI:"1.000000",a:263,o:"content-box",b:338},"82":{aU:8,G:"#161616",c:521,aV:8,r:"inline",d:164,e:"1.000000",s:"avenir",bD:"none",t:17,Y:"21px",Z:"break-word",i:"result_blurb",w:"Sorry, you didn't choose the right coin, but you're not alone. Most people have a hard time making this choice. You need to be able to recognize a penny when you see one. But you don't need to remember many details to distinguish it from a dime or quarter. This sort of experimentation suggests that you're likely to remember only enough about an object to let you recognize it in everyday life.",bF:"83",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:252,F:"justify",b:177},"6":{o:"content-box",bI:"1.000000",h:"1",a:263,x:"visible",aN:"6_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"10",d:100,i:"coin9",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:562,bK:"1.000000",bJ:"1.000000"},"16":{o:"content-box",bI:"1.000000",h:"11",a:399,x:"visible",aN:"16_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"20",d:100,i:"coin2",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:338,bK:"1.000000",bJ:"1.000000"},"7":{o:"content-box",bI:"1.000000",h:"2",a:399,x:"visible",aN:"7_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"11",d:100,i:"coin10",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:562,bK:"1.000000",bJ:"1.000000"},"83":{k:"div",x:"visible",c:789,d:597,z:"9",i:"screen2",r:"inline",a:0,j:"absolute",e:"0.000000",b:171},"8":{o:"content-box",bI:"1.000000",h:"3",a:531,x:"visible",aN:"8_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"12",d:100,i:"coin11",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:562,bK:"1.000000",bJ:"1.000000"},"90":{o:"content-box",h:"20",x:"visible",a:19,q:"100% 100%",b:544,j:"absolute",r:"inline",c:42,k:"div",z:"6",d:41,bF:"83",aB:{a:[{p:4,h:"75"}]}},"17":{bJ:"1.000000",c:100,q:"100% 100%",d:100,aN:"17_pressed",r:"inline",bK:"1.000000",aP:"pointer",h:"12",i:"coin3",w:"",j:"absolute",x:"visible",k:"div",aB:{a:[{p:4,h:"60"}]},z:"21",bI:"1.000000",a:531,o:"content-box",b:338},"9":{o:"content-box",bI:"1.000000",h:"4",a:667,x:"visible",aN:"9_pressed",q:"100% 100%",j:"absolute",r:"inline",c:100,k:"div",z:"13",d:100,i:"coin12",aB:{a:[{p:4,h:"60"}]},aP:"pointer",b:562,bK:"1.000000",bJ:"1.000000"}},n:"intro",T:{"14_pressed":{i:"14_pressed",n:"14_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"14"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"14"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"14"},{y:1,i:"bJ",s:"1.000000",z:0,o:"14",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"14",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"14",f:"2"}],f:30},"7_pressed":{i:"7_pressed",n:"7_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"7"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"7"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"7"},{y:1,i:"bJ",s:"1.000000",z:0,o:"7",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"7",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"7",f:"2"}],f:30},"12_pressed":{i:"12_pressed",n:"12_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"12"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"12"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"12"},{y:1,i:"bJ",s:"1.000000",z:0,o:"12",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"12",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"12",f:"2"}],f:30},"10_pressed":{i:"10_pressed",n:"10_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"10"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"10"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"10"},{y:1,i:"bJ",s:"1.000000",z:0,o:"10",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"10",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"10",f:"2"}],f:30},"6_pressed":{i:"6_pressed",n:"6_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"6"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"6"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"6"},{y:1,i:"bJ",s:"1.000000",z:0,o:"6",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"6",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"6",f:"2"}],f:30},"86_pressed":{i:"86_pressed",n:"86_pressed",z:0,a:[],f:30},"9_pressed":{i:"9_pressed",n:"9_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"9"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"9"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"9"},{y:1,i:"bJ",s:"1.000000",z:0,o:"9",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"9",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"9",f:"2"}],f:30},"13_pressed":{i:"13_pressed",n:"13_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"13"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"13"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"13"},{y:1,i:"bJ",s:"1.000000",z:0,o:"13",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"13",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"13",f:"2"}],f:30},"17_pressed":{i:"17_pressed",n:"17_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"17"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"17"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"17"},{y:1,i:"bJ",s:"1.000000",z:0,o:"17",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"17",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"17",f:"2"}],f:30},"11_pressed":{i:"11_pressed",n:"11_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"11"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"11"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"11"},{y:1,i:"bJ",s:"1.000000",z:0,o:"11",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"11",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"11",f:"2"}],f:30},"15_pressed":{i:"15_pressed",n:"15_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"15"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"15"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"15"},{y:1,i:"bJ",s:"1.000000",z:0,o:"15",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"15",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"15",f:"2"}],f:30},"8_pressed":{i:"8_pressed",n:"8_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"8"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"8"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"8"},{y:1,i:"bJ",s:"1.000000",z:0,o:"8",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"8",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"8",f:"2"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:2.14,a:[{y:0,p:1,i:"Video Track",z:2.14,o:"55",f:"2"}],f:30},"16_pressed":{i:"16_pressed",n:"16_pressed",z:1,a:[{f:"2",y:0,z:1,i:"bJ",e:"1.000000",s:"1.000000",o:"16"},{f:"2",y:0,z:1,i:"bK",e:"1.000000",s:"1.000000",o:"16"},{f:"2",y:0,z:1,i:"bI",e:"1.000000",s:"1.000000",o:"16"},{y:1,i:"bJ",s:"1.000000",z:0,o:"16",f:"2"},{y:1,i:"bK",s:"1.000000",z:0,o:"16",f:"2"},{y:1,i:"bI",s:"1.000000",z:0,o:"16",f:"2"}],f:30}},o:"1"}]);a.z_e(l);a.z_p=g;a.z_f(0);a.z_g(d);a.z_h(h);a.z_i(0);a.z_j(false);
a.z_k(true);a.z_l(true);a.z_m(true);a.z_n(e);f[e]=a.API;document.getElementById(d).setAttribute("HYP_dn",e);a.z_o(this.body)}})();})();
