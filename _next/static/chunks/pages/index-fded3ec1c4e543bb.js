(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7639)}])},7639:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var i=n(5893),r=n(7927),a=n(8395),l=n(7294),o=n(8402),s=n(4040),c=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,d=(0,o.Gp)(function(e,t){let{htmlWidth:n,htmlHeight:i,alt:r,...a}=e;return l.createElement("img",{width:n,height:i,ref:t,alt:r,...a})});d.displayName="NativeImage";var h=(0,o.Gp)(function(e,t){let{fallbackSrc:n,fallback:i,src:r,srcSet:a,align:h,fit:u,loading:x,ignoreFallback:m,crossOrigin:f,fallbackStrategy:p="beforeLoadOrError",referrerPolicy:g,...j}=e,b=null!=x||m||!(void 0!==n||void 0!==i),y=function(e){let{loading:t,src:n,srcSet:i,onLoad:r,onError:a,crossOrigin:o,sizes:c,ignoreFallback:d}=e,[h,u]=(0,l.useState)("pending");(0,l.useEffect)(()=>{u(n?"loading":"pending")},[n]);let x=(0,l.useRef)(),m=(0,l.useCallback)(()=>{if(!n)return;f();let e=new Image;e.src=n,o&&(e.crossOrigin=o),i&&(e.srcset=i),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{f(),u("loaded"),null==r||r(e)},e.onerror=e=>{f(),u("failed"),null==a||a(e)},x.current=e},[n,o,i,c,r,a,t]),f=()=>{x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,s.G)(()=>{if(!d)return"loading"===h&&m(),()=>{f()}},[h,m,d]),d?"loaded":h}({...e,ignoreFallback:b}),w=c(y,p),k={ref:t,objectFit:u,objectPosition:h,...b?j:function(e,t=[]){let n=Object.assign({},e);for(let i of t)i in n&&delete n[i];return n}(j,["onError","onLoad"])};return w?i||l.createElement(o.m$.img,{as:d,className:"chakra-image__placeholder",src:n,...k}):l.createElement(o.m$.img,{as:d,src:r,srcSet:a,crossOrigin:f,loading:x,referrerPolicy:g,className:"chakra-image",...k})});h.displayName="Image",(0,o.Gp)((e,t)=>l.createElement(o.m$.img,{ref:t,as:d,className:"chakra-image",...e}));var u=n(1807);let x=(0,o.m$)(u.E.div,{shouldForwardProp:e=>(0,o.x9)(e)||"transition"===e}),m=e=>{let{children:t,delay:n=0}=e;return(0,i.jsx)(x,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.4,delay:n},mb:6,children:t})},f=e=>{let{data:t}=e;return(0,i.jsxs)(r.xu,{display:{md:"flex"},flexDir:"column",minW:{md:"sm"},maxW:"md",borderWidth:2,borderStyle:"solid",borderRadius:"md",borderColor:(0,a.ff)("blackAlpha.800","whiteAlpha.800"),my:2,p:4,children:[(0,i.jsxs)(r.xu,{display:{md:"flex"},minW:"full",children:[(0,i.jsx)(r.X6,{as:"h2",variant:"job-company-name",children:t.Company}),(0,i.jsx)(r.xu,{as:"span",color:(0,a.ff)("gray.700","gray.400"),fontSize:"xs",flexGrow:1,alignSelf:"center",textAlign:"right",children:t.Date})]}),(0,i.jsx)(r.X6,{as:"h3",variant:"job-title",children:t.Title}),(0,i.jsx)(r.QI,{children:t.Description.map((e,t)=>(0,i.jsx)(r.HC,{fontSize:"lg",textAlign:"justify",children:e},t))})]})},p=()=>(0,i.jsx)(r.xu,{borderTop:0,border:"8px solid transparent",borderBottomColor:(0,a.ff)("black","white"),display:"block",width:0,height:0,mb:-2,mr:-.8}),g=[{Company:"ServiceRocket",Title:"Software Engineer Intern",Date:"1st September 2022 - 19th January 2023",Description:["Make code changes to fix any found design issues in the existing codes, to meet the new requirements of our enterprise customer ","Write unit tests, integration tests and perform UAT before deploying the changes to production","Monitored and improved internal software processes"]}],j=[{projectName:"watch2Gether",Tech:["Golang","React","WebSocket"],Description:["Utilized websocket to achieve functionalities such as synchronized player for video and realtime chat"],Link:"https://github.com/jh-tan/simple_w2g_clone"},{projectName:"Contact Tracing Mobile Application",Tech:["Flutter","Firebase"],Description:["Utilize Bluetootoh Low Energy on mobile device to actively advertise data and scan nearby data."],Link:"https://github.com/jh-tan/tracenow"},{projectName:"E-Market Mobile Application",Tech:["Firebase","Google Map API"],Description:["Consumer to Consumer ( C2C ) Android application that allows customers to engage with one another."],Link:"https://github.com/jh-tan/Lesorac"},{projectName:"Lung Cancer Diagnosis Expert System",Tech:["React","Spring Boot"],Description:["Lung cancer self diagnosis web application that used fuzzy logic for diagnosis"],Link:"https://github.com/jh-tan/FL-Diagnosis"},{projectName:"Path Finding Visualizer",Tech:["Pygame"],Description:["Simple path-finding that consists of three path-finding methods which are A*, breadth-first search(BFS) and Dijkstra"],Link:"https://github.com/jh-tan/PathFinding-Visualizer"}],b=["React","Redis","PostgreSQL","MySQL","MongoDB","Firebase"],y=["Confluence","Docker","IntelliJ","Jenkins","Jira","Vim","VSCode"],w=[{languageName:"Golang",proficiency:"50"},{languageName:"JavaScript",proficiency:"50"},{languageName:"Python",proficiency:"40"},{languageName:"Java",proficiency:"40"},{languageName:"C/C++",proficiency:"30"}],k=()=>(0,i.jsxs)(r.gC,{children:[(0,i.jsx)(p,{}),g.map(e=>(0,i.jsxs)(r.xu,{children:[(0,i.jsx)(r.M5,{height:"20px",children:(0,i.jsx)(r.iz,{orientation:"vertical",borderLeftWidth:3,borderColor:(0,a.ff)("gray.600","white")})}),(0,i.jsx)(f,{data:e})]},e.Title)),(0,i.jsx)(r.M5,{height:"20px",children:(0,i.jsx)(r.iz,{orientation:"vertical",borderStyle:"dotted",mt:-4,borderLeftWidth:3,borderColor:(0,a.ff)("gray.600","white")})})]}),S=e=>{let{data:t}=e,n=(0,a.ff)("blackAlpha.800","whiteAlpha.800"),l=(0,a.ff)("gray.900","white");return(0,i.jsxs)(r.P4,{borderWidth:2,borderStyle:"solid",borderRadius:"md",borderColor:n,minHeight:"28",display:"flex",flexDir:"column",children:[(0,i.jsx)(r.X6,{as:"h2",variant:"project-title",m:3,textDecor:"underline",textAlign:"center",children:t.projectName}),(0,i.jsx)(r.QI,{my:3,p:2,flexGrow:1,children:(0,i.jsx)(r.HC,{color:l,fontSize:"lg",children:t.Description})}),(0,i.jsxs)(r.xu,{display:"flex",children:[t.Tech.map((e,t)=>(0,i.jsx)(r.Ct,{alignSelf:"center",borderRadius:"md",ml:3,my:2,bg:(0,a.ff)("blackAlpha.300","whiteAlpha.200"),children:e},t)),(0,i.jsx)(r.rU,{p:2,href:t.Link,target:"_blank",mb:-1,flexGrow:1,textAlign:"end",children:">>"})]})]})},T=()=>{let e=(0,a.ff)("blackAlpha.800","whiteAlpha.800");return(0,i.jsxs)(r.MI,{columns:{md:2,sm:1},spacing:6,mt:3,children:[j.map(e=>(0,i.jsx)(S,{data:e},e.projectName)),(0,i.jsxs)(r.P4,{borderWidth:2,borderStyle:"solid",borderRadius:"md",borderColor:e,minHeight:"28",display:"flex",flexDir:"column",justifyContent:"center",children:[(0,i.jsx)(r.xv,{textAlign:"center",fontSize:"3xl",fontWeight:"black",children:"STAY TUNE "}),(0,i.jsx)(r.xv,{textAlign:"center",fontSize:"3xl",fontWeight:"black",children:"MORE TO COME"}),(0,i.jsx)(r.xv,{textAlign:"center",fontSize:"3xl",fontWeight:"black",children:"..."})]})]})};var v=n(7297),A=n(6829),C=n(917);function N(){let e=(0,v.Z)(["\n  50% {\n    opacity:0;\n  }\n"]);return N=function(){return e},e}function D(){let e=(0,v.Z)(["\n  .cursor {\n    animation: "," 1.75s step-start infinite;\n  }\n\n  .typewriterText {\n    font-size: 21px;\n  }\n"]);return D=function(){return e},e}let E=(0,C.F4)(N()),z=A.Z.span(D(),E),_=e=>{let[t,n]=(0,l.useState)(0),[i,r]=(0,l.useState)(""),[a,o]=(0,l.useState)(0);return(0,l.useEffect)(()=>{switch(a){case 0:{let l=e[t].slice(0,i.length+1);if(l===i){o(1);return}let s=setTimeout(()=>{r(e[t].slice(0,i.length+1))},150);return()=>clearTimeout(s)}case 2:{if(!i){let c=setTimeout(()=>{n(e[t+1]?t+1:0),o(0)},500);return()=>clearTimeout(c)}let d=e[t].slice(0,i.length-1),h=setTimeout(()=>{r(d)},50);return()=>clearTimeout(h)}default:{let u=setTimeout(()=>{o(2)},1e3);return()=>clearTimeout(u)}}},[i,t,a]),i},L=e=>{let{Text:t}=e,n=_(t);return(0,i.jsx)(r.xu,{children:(0,i.jsxs)(z,{children:[(0,i.jsx)("span",{className:"typewriterText",children:n}),(0,i.jsx)("span",{className:"cursor",children:"|"})]})})};function M(){let e=(0,v.Z)(["\n  background-color: #d8d8d8;\n  border-radius: 20px;\n  position: relative;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  height: 30px;\n  width: 'max';\n"]);return M=function(){return e},e}function W(){let e=(0,v.Z)(["\n  background: linear-gradient(to left, #f2709c, #ff9472);\n  box-shadow: 0 3px 3px -5px #f2709c, 0 2px 5px #f2709c;\n  border-radius: 20px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 0;\n  opacity: 0;\n  transition: 2s ease 0.5s;\n"]);return W=function(){return e},e}let P=A.Z.div(M()),R=A.Z.div(W()),O=e=>{let{proficiency:t}=e,[n,r]=(0,l.useState)({});return setTimeout(()=>{r({opacity:1,width:"".concat(t,"%")})},100),(0,i.jsx)(P,{children:(0,i.jsxs)(R,{style:n,children:[t,"%"]})})},F=()=>(0,i.jsx)(r.xu,{children:w.map(e=>(0,i.jsxs)(r.xu,{display:{md:"flex",sm:"flex"},flexDir:"column",children:[(0,i.jsx)(r.xv,{fontSize:"xl",children:e.languageName}),(0,i.jsx)(O,{proficiency:e.proficiency})]},e.languageName))}),G=()=>(0,i.jsxs)(r.xu,{columns:{md:2,sm:1},spacing:6,mt:3,children:[(0,i.jsxs)(r.MI,{columns:{md:2,sm:1},spacing:6,mt:3,children:[(0,i.jsxs)(r.P4,{children:[(0,i.jsxs)(r.X6,{size:"md",textDecoration:"underline",textUnderlineOffset:3,textDecorationThickness:1,mb:1,children:["Technologies"," "]}),(0,i.jsx)(L,{Text:b})]}),(0,i.jsxs)(r.P4,{children:[(0,i.jsxs)(r.X6,{size:"md",textDecoration:"underline",textUnderlineOffset:3,textDecorationThickness:1,mb:1,children:["Tools"," "]}),(0,i.jsx)(L,{Text:y})]})]}),(0,i.jsx)(r.X6,{size:"md",textDecoration:"underline",textUnderlineOffset:3,textDecorationThickness:1,my:2,children:"Language Proficiency"}),(0,i.jsx)(F,{})]});var X=n(5032);let I=()=>(0,i.jsxs)(r.W2,{maxW:"container.md",className:"main-content",children:[(0,i.jsx)(r.xu,{borderRadius:"lg",mb:6,mt:3,p:3,textAlign:"center",bg:(0,a.ff)("whiteAlpha.800","whiteAlpha.200"),css:{backdropFilter:"blur(10px)"},children:(0,i.jsx)(r.xu,{children:"Hello, I'm a Software Engineer that currently based in Singapore | Malaysia."})}),(0,i.jsxs)(r.xu,{display:{md:"flex"},children:[(0,i.jsxs)(r.xu,{flexGrow:1,alignSelf:"center",textAlign:{md:"left",sm:"center"},children:[(0,i.jsx)(r.X6,{as:"h2",variant:"page-title",children:"Tan Jian Hui"}),(0,i.jsx)("p",{children:"Student | Software Engineer"}),(0,i.jsxs)(r.xu,{display:"flex",flexDir:"row",mt:"2",justifyContent:{md:"start",sm:"center"},children:[(0,i.jsx)(r.rU,{href:"https://github.com/jh-tan",target:"_blank",children:(0,i.jsx)(h,{borderColor:(0,a.ff)("blackAlpha.800","whiteAlpha.800"),borderRadius:"full",src:"".concat(X.O,"/images/GitHub-Mark.png"),w:"10",h:"10",mr:2})}),(0,i.jsx)(r.rU,{href:"https://www.linkedin.com/in/jian-hui-tan-157219164",target:"_blank",children:(0,i.jsx)(h,{borderColor:(0,a.ff)("blackAlpha.800","whiteAlpha.800"),borderRadius:"full",src:"".concat(X.O,"/images/linkedin-icon.png"),w:"10",h:"10",mr:2})}),(0,i.jsx)(r.rU,{href:"mailto:hui971105@gmail.com",target:"_blank",children:(0,i.jsx)(h,{borderColor:(0,a.ff)("blackAlpha.800","whiteAlpha.800"),borderRadius:"full",src:"".concat(X.O,"/images/email.png"),w:"10",h:"10"})})]})]}),(0,i.jsx)(r.oM,{width:"140px",height:"140px",mt:{base:4,md:0,sm:4},m:"auto",children:(0,i.jsx)(h,{borderColor:(0,a.ff)("blackAlpha.800","whiteAlpha.800"),borderWidth:2,borderStyle:"solid",display:"inline-block",borderRadius:"full",src:"/images/profile.jpg"})})]}),(0,i.jsxs)(m,{delay:.1,children:[(0,i.jsx)(r.X6,{as:"h2",variant:"section-title",id:"experiences",children:"Work Experience"}),(0,i.jsx)(k,{})]}),(0,i.jsxs)(m,{delay:.3,children:[(0,i.jsx)(r.X6,{as:"h2",variant:"section-title",id:"projects",children:"Projects"}),(0,i.jsx)(T,{})]}),(0,i.jsxs)(m,{delay:.5,children:[(0,i.jsx)(r.X6,{as:"h2",variant:"section-title",id:"skills",children:"Skills"}),(0,i.jsx)(G,{})]})]});var U=I}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);