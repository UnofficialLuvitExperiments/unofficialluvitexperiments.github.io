"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[301],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?l.createElement(h,a(a({ref:t},s),{},{components:n})):l.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var p=2;p<i;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1181:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var l=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],r={sidebar_position:2,slug:"/docs/tutorial/hello-world"},u="Your First Luvit App",p={unversionedId:"documentation/tutorial/hello-world",id:"documentation/tutorial/hello-world",isDocsHomePage:!1,title:"Your First Luvit App",description:'In this tutorial, we will be creating a simple Hello World app that runs in the Luvit environment. By the end of it, this application will have become a (very simple) webserver that responds to your requests with the same "Hello world" text, can be run like any ordinary executable completely on its own, and is turned into a self-contained package ready to be uploaded and shared with the world.',source:"@site/docs/03-documentation/02-tutorial/02-hello-world.md",sourceDirName:"03-documentation/02-tutorial",slug:"/docs/tutorial/hello-world",permalink:"/docs/tutorial/hello-world",editUrl:"https://github.com/luvit/luvit.io/edit/master/website/docs/03-documentation/02-tutorial/02-hello-world.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/docs/tutorial/hello-world"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/tutorial/getting-started"},next:{title:"Enter the Event Loop",permalink:"/docs/tutorial/asynchronous-event-loop"}},s=[{value:"Creating Your Application",id:"creating-your-application",children:[]},{value:"Running the Application",id:"running-the-application",children:[]},{value:"The Luvi Environment",id:"the-luvi-environment",children:[]},{value:"Relative Imports",id:"relative-imports",children:[]},{value:"Default Module Paths",id:"default-module-paths",children:[]},{value:"Introducing the Event Loop",id:"introducing-the-event-loop",children:[]}],d={toc:s};function c(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,l.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"your-first-luvit-app"},"Your First Luvit App"),(0,i.kt)("p",null,'In this tutorial, we will be creating a simple Hello World app that runs in the Luvit environment. By the end of it, this application will have become a (very simple) webserver that responds to your requests with the same "Hello world" text, can be run like any ordinary executable completely on its own, and is turned into a self-contained package ready to be uploaded and shared with the world.'),(0,i.kt)("h2",{id:"creating-your-application"},"Creating Your Application"),(0,i.kt)("p",null,"Luvit apps adhere to a specific structure when they are turned into packages, but for now you can simply create a regular lua script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="HelloWorld.lua"',title:'"HelloWorld.lua"'},'print("Hello world")\n')),(0,i.kt)("p",null,"This script could also be run in a standard ",(0,i.kt)("inlineCode",{parentName:"p"},"lua")," interpreter, as it doesn't make use of the Luvit standard library."),(0,i.kt)("h2",{id:"running-the-application"},"Running the Application"),(0,i.kt)("p",null,"So far, this seems pretty boring. Running the script by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"luvit HelloWorld.lua")," will yield the following output:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hello world")),(0,i.kt)("p",null,"... and after this, your program exits. That is exactly what you'd expect. Let's make things interesting and access the global environment."),(0,i.kt)("h2",{id:"the-luvi-environment"},"The Luvi Environment"),(0,i.kt)("p",null,"In order to explore something you ",(0,i.kt)("em",{parentName:"p"},"can't")," usually do in standard Lua, we now modify the script to import ",(0,i.kt)("inlineCode",{parentName:"p"},"uv")," from the Luvit ecosystem:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="HelloWorld.lua"',title:'"HelloWorld.lua"'},'local uv = require("uv")\n\nprint("Hello world")\n\nlocal SLEEP_TIME_IN_MILLISECONDS = 3000\nuv.sleep(SLEEP_TIME_IN_MILLISECONDS)\n\nprint("Good morning!")\n')),(0,i.kt)("p",null,"Running the script again should now print"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Hello world")),(0,i.kt)("p",null,"before waiting three seconds, printing"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Good morning!")),(0,i.kt)("p",null,"and finally exiting."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"uv")," library allows us to call any function provided by the ",(0,i.kt)("a",{parentName:"p",href:"http://docs.libuv.org/en/v1.x/api.html"},(0,i.kt)("inlineCode",{parentName:"a"},"libuv"))," C-library from Lua. This makes it possible to do a variety of things Lua can't easily do, such as accessing the file system, creating threads, setting timers, or sending network messages. All this is automatically included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"luvit")," executable (and, in fact, even inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"luvi")," runtime itself) so we can always ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," it."),(0,i.kt)("p",null,"Before we focus on the ",(0,i.kt)("inlineCode",{parentName:"p"},"uv")," library and what else it can do, there's something very important that we can learn from the above:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Luvit environment is not the same as a standard Lua environment!")," It has all the regular Lua 5.1 functions, like ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dofile"),", but as we have seen above it also allows importing certain libraries that aren't usually present. These are intended to enhance the Lua environment, and will be injected into your application by the ",(0,i.kt)("inlineCode",{parentName:"p"},"luvi")," runtime."),(0,i.kt)("p",null,'Next we will see that there are also certain "magic" globals exposed by the runtime. Let\'s modify the script as follows:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="HelloWorld.lua"',title:'"HelloWorld.lua"'},'local uv = require("uv")\n\nprint("Hello world")\n\nlocal SLEEP_TIME_IN_MILLISECONDS = 3000\nuv.sleep(SLEEP_TIME_IN_MILLISECONDS)\n\nprint("Good morning!")\n\nprint(uv)\np(uv)\n')),(0,i.kt)("p",null,"The output will be similar to the last time we ran the script, except now we can see the output of calling the embedded ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," global (a shorthand for ",(0,i.kt)("inlineCode",{parentName:"p"},"pretty-print"),"). Evidently, Lua's ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," cannot print complex data structures because it simply calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"__tostring")," metamethod, resulting in an output like ",(0,i.kt)("inlineCode",{parentName:"p"},"table: 0x0232126a23f8"),". Luvit's pretty-print library can however print these recursively and in a human-readable fashion, which makes it a handy tool for debugging or to refresh your memory without having to look up APIs."),(0,i.kt)("p",null,"Printing ",(0,i.kt)("inlineCode",{parentName:"p"},"uv")," via ",(0,i.kt)("inlineCode",{parentName:"p"},"pretty-print")," will give you an overview of the entire API surface, i.e., all the functions exported from the ",(0,i.kt)("inlineCode",{parentName:"p"},"libuv")," C-library. Don't worry too much about how to use them all for now, we'll get back to that shortly. It should look approximately like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"02-luv-api-dump.png",src:n(985).Z}),"\nPictured: The expected console output ",(0,i.kt)("a",{target:"_blank",href:n(1497).Z},"(click here to enlarge)")),(0,i.kt)("p",null,"Needless to say, you can do the same thing with any of the other embedded libraries or bindings, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"jit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"openssl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"miniz")," or even the default Lua libraries like ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"os"),". Generally, any Lua object can be printed, including your own tables and variables."),(0,i.kt)("p",null,"If you aren't sure what other functionality is made available globally, simply consult the ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/global-environment"},"references")," section of this documentation."),(0,i.kt)("h2",{id:"relative-imports"},"Relative Imports"),(0,i.kt)("p",null,"There is one more important difference between Luvi's environment and what you might know from a standard Lua implementation:"),(0,i.kt)("p",null,"Lua offers the ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," function as a way to load modules; if you haven't used it before you might want to look up the ",(0,i.kt)("a",{parentName:"p",href:"https://www.lua.org/pil/8.1.html"},"documentation")," for it. In a ",(0,i.kt)("inlineCode",{parentName:"p"},"luvi"),"-based environment, this module loader is modified to behave more like the one included in the JavaScript ecosystem from which it was inspired. This means you can import modules using relative paths, which we'll be exploring next."),(0,i.kt)("p",null,"In order to test how this works, we will create a simple module in another file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="HelloWorldModule.lua"',title:'"HelloWorldModule.lua"'},'local uv = require("uv")\n\nlocal HelloWorldModule = {}\n\nfunction HelloWorldModule:HelloWorld()\n    print("Hello world")\n\n    local SLEEP_TIME_IN_MILLISECONDS = 3000\n    uv.sleep(SLEEP_TIME_IN_MILLISECONDS)\n\n    print("Good morning!")\nend\n\nreturn HelloWorldModule\n')),(0,i.kt)("p",null,"We can simply import this into our main script (the file that we execute by running ",(0,i.kt)("inlineCode",{parentName:"p"},"luvit HelloWorld.lua"),") as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="HelloWorld.lua"',title:'"HelloWorld.lua"'},'local HelloWorldModule = require("./HelloWorldModule")\n\nHelloWorldModule:HelloWorld()\n')),(0,i.kt)("p",null,"As you yould expect, the output will be the exact same as in the previous version, even if loaded from the ",(0,i.kt)("inlineCode",{parentName:"p"},"HelloWorldModule.lua")," file."),(0,i.kt)("p",null,"Luvit's custom require handler will resolve the path and determine it should load the file in the same directory (",(0,i.kt)("inlineCode",{parentName:"p"},".")," is the current folder). This doesn't work in a standard Lua environment, at least not without modifying the loading process - a problem we can avoid entirely. You can use any path and organize your application in whichever way you prefer, then use relative paths where needed via ",(0,i.kt)("inlineCode",{parentName:"p"},"require"),"."),(0,i.kt)("p",null,"It's important to always remember that paths are resolved differently in Luvit, because this can otherwise have some surprising effects."),(0,i.kt)("h2",{id:"default-module-paths"},"Default Module Paths"),(0,i.kt)("p",null,'Specifically, there is a global "default module path" that is being used when you haven\'t given a path, but only a module name.'),(0,i.kt)("p",null,"By default, Luvi will look into a ",(0,i.kt)("inlineCode",{parentName:"p"},"libs")," and then a ",(0,i.kt)("inlineCode",{parentName:"p"},"deps")," folder (in this order) to determine whether there are any modules that match the name of the requested import, and load them from there if possible."),(0,i.kt)("p",null,"The implication is that writing ",(0,i.kt)("inlineCode",{parentName:"p"},'local HelloWorldModule = require("HelloWorldModule")'),' will "just work" if you put ',(0,i.kt)("inlineCode",{parentName:"p"},"HelloWorldModule.lua")," into either a ",(0,i.kt)("inlineCode",{parentName:"p"},"libs")," or a ",(0,i.kt)("inlineCode",{parentName:"p"},"deps")," folder, as long as the file exports a module (",(0,i.kt)("inlineCode",{parentName:"p"},"return")," yields a ",(0,i.kt)("inlineCode",{parentName:"p"},"table"),")."),(0,i.kt)("p",null,"Let's just try this out quickly before we continue. Move the ",(0,i.kt)("inlineCode",{parentName:"p"},"HelloWorldModule.lua")," file into a new folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"libs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="libs/HelloWorldModule.lua"',title:'"libs/HelloWorldModule.lua"'},'local uv = require("uv")\n\nlocal HelloWorldModule = {}\n\nfunction HelloWorldModule:HelloWorld()\n    print("Hello world")\n\n    local SLEEP_TIME_IN_MILLISECONDS = 3000\n    uv.sleep(SLEEP_TIME_IN_MILLISECONDS)\n\n    print("Good morning!")\nend\n\nreturn HelloWorldModule\n')),(0,i.kt)("p",null,"Make sure it's placed in a ",(0,i.kt)("inlineCode",{parentName:"p"},"libs")," folder and then try to import it, like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="HelloWorld.lua"',title:'"HelloWorld.lua"'},'local HelloWorldModule = require("HelloWorldModule")\n\nHelloWorldModule:HelloWorld()\n')),(0,i.kt)("p",null,"In fact, if you don't move ",(0,i.kt)("inlineCode",{parentName:"p"},"HelloWorldModule")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"libs/HelloWorldModule")," it will still work, because ",(0,i.kt)("inlineCode",{parentName:"p"},"require")," also checks the current folder (",(0,i.kt)("inlineCode",{parentName:"p"},"."),"). But beware: It does so ",(0,i.kt)("em",{parentName:"p"},"after")," checking the ",(0,i.kt)("inlineCode",{parentName:"p"},"libs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deps")," directories, so if you have two versions it might not load the one you meant to use. It's just a small thing to be aware of, and you shouldn't really have multiple versions anyway, but if you do it's best to make sure the load order is as expected or you might be hunting elusive bugs for quite some time."),(0,i.kt)("h2",{id:"introducing-the-event-loop"},"Introducing the Event Loop"),(0,i.kt)("p",null,"Possibly the most important part of the Luvit environment is the event loop, which is closely linked to ",(0,i.kt)("inlineCode",{parentName:"p"},"libuv")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"uv")," library. So far we haven't done much with ",(0,i.kt)("inlineCode",{parentName:"p"},"uv"),", other than using the ",(0,i.kt)("inlineCode",{parentName:"p"},"timer")," API and dumping all of its exported functions to test ",(0,i.kt)("inlineCode",{parentName:"p"},"pretty-print"),"."),(0,i.kt)("p",null,"In the next section, we'll be using some of the exposed lower-level facilities and dive into what else the underlying ",(0,i.kt)("inlineCode",{parentName:"p"},"libuv")," can do for us."))}c.isMDXComponent=!0},1497:function(e,t,n){t.Z=n.p+"assets/files/02-luv-api-dump-9ce6199078a0cb351cfa8b72a4663cc4.png"},985:function(e,t,n){t.Z=n.p+"assets/images/02-luv-api-dump-9ce6199078a0cb351cfa8b72a4663cc4.png"}}]);