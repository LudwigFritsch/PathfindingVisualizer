(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],[,,,,,function(t,e,n){},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),a=n(6),s=n.n(a),i=(n(11),n(1)),l=n(3);function r(t,e,n){var o=[],c=function(t){for(var e=[],n=0;n<t.length;n++)for(var o=0;o<t[n].length;o++)e.push(t[n][o]);return e}(t);for(e.distance=0;c.length;){var a=(c=d(c)).shift();if(!a.isWall||a===e||a===n){if("Infinity"===a.distance)return o;if(a.isVisited=!0,o.push(a),a===n)return o;u(a,t)}}}function d(t){for(var e=[],n=[],o=0;o<t.length;o++)"Infinity"!==t[o].distance?e.push(t[o]):n.push(t[o]);return e.sort((function(t,e){return t.distance-e.distance})),e.concat(n)}function u(t,e){for(var n=function(t,e){var n=[],o=t.col,c=t.row;c>0&&n.push(e[c-1][o]);c<e.length-1&&n.push(e[c+1][o]);o>0&&n.push(e[c][o-1]);o<e[0].length-1&&n.push(e[c][o+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),o=0;o<n.length;o++)n[o].distance=t.distance+1,n[o].prevNode=t}function m(t,e,n){var o=[],c=function(t){for(var e=[],n=0;n<t.length;n++)for(var o=0;o<t[n].length;o++)e.push(t[n][o]);return e}(t);for(e.gCost=0,e.hCost=j(e,n),e.fCost=f(e);c.length>0;){c.sort((function(t,e){return t.fCost<e.fCost?-1:t.fCost>e.fCost?1:t.hCost<e.hCost?-1:t.hCost>e.hCost?1:void 0}));var a=c.shift();if(o.push(a),a.isVisited=!0,a===n)return o;var s=g(a,t);if(1e3===a.gCost)return o;h(a,s,n,e)}}function h(t,e,n,o){for(var c=0;c<e.length;c++){var a=e[c];if(!a.isWall||a===o||a===n){var s=t.gCost+1;s<a.gCost&&(a.gCost=s,a.prevNode=t),a.hCost=j(a,n),a.fCost=f(a)}}}function g(t,e){var n=[],o=t.col,c=t.row;return c>0&&n.push(e[c-1][o]),c<e.length-1&&n.push(e[c+1][o]),o>0&&n.push(e[c][o-1]),o<e[0].length-1&&n.push(e[c][o+1]),n.filter((function(t){return!t.isVisited}))}function f(t){return t.gCost+t.hCost}function j(t,e){return Math.abs(t.col-e.col)+Math.abs(t.row-e.row)}function b(t,e,n){var o=[],c=function(t){for(var e=[],n=0;n<t.length;n++)for(var o=0;o<t[n].length;o++)e.push(t[n][o]);return e}(t);for(e.gCost=0,e.hCost=y(e,n),e.fCost=N(e);c.length>0;){v(c);var a=c.shift();if(1e3===a.gCost)return o;if(o.push(a),a.isVisited=!0,a===n)return o;p(a,t,n,e)}}function v(t){t.sort((function(t,e){return t.hCost-e.hCost}))}function p(t,e,n,o){for(var c=function(t,e){var n=[],o=t.col,c=t.row;c>0&&n.push(e[c-1][o]);c<e.length-1&&n.push(e[c+1][o]);o>0&&n.push(e[c][o-1]);o<e[0].length-1&&n.push(e[c][o+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),a=0;a<c.length;a++){var s=c[a];if(!s.isWall||s===o||s===n){var i=t.gCost+1;i<s.gCost&&(s.gCost=i,s.prevNode=t),s.hCost=y(s,n),s.fCost=N(s)}}}function N(t){return t.gCost+t.hCost}function y(t,e){return Math.abs(t.col-e.col)+Math.abs(t.row-e.row)}function B(t){for(var e=[],n=t;void 0!==n;)e.unshift(n),n=n.prevNode;return e}function x(t,e,n){var o=[],c=[];for(c.push(e),o.push(e);o.length>0;){var a=o[0];if(a.isVisited=!0,a===n)return c.push(a),c;var s=O(a,t,n);0===s?o.shift():(o.unshift(s),c.push(s),s.prevNode=a)}return c}function O(t,e,n){var o=0,c=t.col,a=t.row;return a>0&&!e[a-1][c].isVisited&&!e[a-1][c].isWall?o=e[a-1][c]:c<e[0].length-1&&!e[a][c+1].isVisited&&!e[a][c+1].isWall?o=e[a][c+1]:a<e.length-1&&!e[a+1][c].isVisited&&!e[a+1][c].isWall?o=e[a+1][c]:c>0&&!e[a][c-1].isVisited&&!e[a][c-1].isWall&&(o=e[a][c-1]),o}function E(t,e,n){var o=[],c=[];for(e.status=2,e.distance=1,o.push(e);o.length>0;){var a=o.shift();if(a===n||"Infinity"===a.distance)return c.push(a),c;if(!a.isWall||a===e||a===n){c.push(a),a.status=3;for(var s=I(a,t),i=0;i<s.length;i++)s[i].status=2,s[i].distance=1,s[i].prevNode=a,o.push(s[i])}}return c}function I(t,e){var n=[],o=t.col,c=t.row;return c>0&&n.push(e[c-1][o]),c<e.length-1&&n.push(e[c+1][o]),o>0&&n.push(e[c][o-1]),o<e[0].length-1&&n.push(e[c][o+1]),n.filter((function(t){return 1===t.status}))}n(5);var w,k,C=n(0),S=!1,T=!1,F=!1,W=!1,A=0,V=0,M=function(t){var e=t.row,n=t.col,c=t.isFinish,a=t.isStart,s=t.isWall,i=t.isBomb,r=t.onMouseDown,d=t.onMouseEnter,u=t.onMouseUp,m=t.onMouseLeave,h=Object(o.useState)(s),g=Object(l.a)(h,2),f=g[0],j=g[1],b=Object(o.useState)(a),v=Object(l.a)(b,2),p=v[0],N=v[1],y=Object(o.useState)(c),B=Object(l.a)(y,2),x=B[0],O=B[1],E=Object(o.useState)(i),I=Object(l.a)(E,2),w=I[0],k=I[1];Object(o.useEffect)((function(){k(!(e===A&&n===V&&!Q)&&i)}),[n,e,i,s]);var M=function(){p||x||i||!S||j(!f)},P=function(){!T||x||w||(N(!p),D="node")},L=function(){F&&!p&&O(!x)},z=function(){W&&(k(!w),D="node",A=e,V=n)},D="node";return Object(C.jsx)("div",{className:D,id:"node-".concat(e,"-").concat(n),onMouseDown:function(){r(e,n,X[e][n].isStart,x,w),p?T=!T:x?F=!F:w?W=!W:S=!S,M()},onMouseEnter:function(){d(e,n,X[e][n].isStart,x,w),M(),P(),L(),z()},onMouseLeave:function(){m(e,n),P(),L(),z()},onMouseUp:function(){u(e,n),T=!1,F=!1,W=!1,S=!1}})},P=(n(13),""),L=!1,z=!1,D=!1,G=!1,U=!1,H=15,K=19,R=15,q=55,J="Add a bomb",Q=!1,X=function(t,e,n,o,c,a){for(var s=[],i=0;i<31;i++){for(var l=[],r=0;r<75;r++)l.push(tt(i,r,t,e,n,o,c,a));s.push(l)}return s}(H,K,R,q,w,k);function Y(){document.getElementById("click").classList.remove("click"),document.getElementById("click1").classList.remove("click"),document.getElementById("click2").classList.remove("click"),document.getElementById("click3").classList.remove("click"),document.getElementById("click4").classList.remove("click"),document.getElementById("click5").classList.remove("click"),document.getElementById("click6").classList.remove("click")}function _(){L=!1,X=nt(H,K,R,q,w,k),ot()}function Z(){L=!1;for(var t=0;t<X.length;t++)for(var e=0;e<X[t].length;e++){X[t][e].isWall=!1,X[t][e].isStart||X[t][e].isFinish||X[t][e].isBomb||(document.getElementById("node-".concat(t,"-").concat(e)).className="node")}}var $=function(){var t=Object(o.useState)("Fast"),e=Object(l.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(!0),s=Object(l.a)(a,2),d=s[0],u=s[1],h=Object(o.useState)(""),g=Object(l.a)(h,2),f=g[0],j=g[1],v=Object(o.useState)(1),p=Object(l.a)(v,2),N=p[0],y=p[1];function O(){N<9?y((function(t){return t+1})):document.getElementById("tutorialNine").style.visibility="hidden"}function I(){N>1&&y((function(t){return t-1}))}return Object(o.useEffect)((function(){document.title="Pathfinding Visualizer"}),[]),setTimeout((function(){document.getElementById("node-".concat(H,"-").concat(K)).className="node-start",document.getElementById("node-".concat(R,"-").concat(q)).className="node-finish"})),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:"tutorial-hidden",id:"tutorialNine",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"Enjoy!"}),Object(C.jsx)("h6",{children:"I hope you have just as much fun playing around with this visualization tool as I had building it!"}),Object(C.jsxs)("p",{className:"paragraphTutorial",children:["If you want to see the source code for this application, check out my"," ",Object(C.jsx)("a",{href:"https://github.com/LudwigFritsch",target:"_blank",rel:"noreferrer",children:"github"}),".",Object(C.jsx)("br",{}),"You can checkout the github of the original project made by Cl\xe9ment Mihailescu"," ",Object(C.jsx)("a",{href:"https://github.com/clementmihailescu/Pathfinding-Visualizer",target:"_blank",rel:"noreferrer",children:"here"}),"."]}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialNine").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",onClick:function(){I(),document.getElementById("tutorialNine").className="tutorial-hidden",document.getElementById("tutorialEight").className="tutorial"},children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialNine").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Next"})]}),Object(C.jsxs)("div",{className:"tutorial-hidden",id:"tutorialEight",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"Visualizing and more"}),Object(C.jsx)("h6",{children:"Use the navbar buttons to visualize algorithms and to do other stuff!"}),Object(C.jsx)("p",{className:"paragraphTutorial",children:'You can clear the current path, clear walls and weights, clear the entire board, and adjust the visualization speed, all from the navbar. If you want to access this tutorial again, click on "Pathfinding Visualizer" in the top left corner of your screen.'}),Object(C.jsx)("img",{src:"https://i.ibb.co/sFRv4KG/nav.png",alt:"",className:"imageTutorial imageTutorialNav"}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialEight").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",onClick:function(){I(),document.getElementById("tutorialEight").className="tutorial-hidden",document.getElementById("tutorialSeven").className="tutorial"},children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialEight").className="tutorial-hidden",document.getElementById("tutorialNine").className="tutorial"},children:"Next"})]}),Object(C.jsxs)("div",{className:"tutorial-hidden",id:"tutorialSeven",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"Dragging nodes"}),Object(C.jsx)("h6",{children:"Click and drag the start, bomb, and target nodes to move them."}),Object(C.jsx)("p",{className:"paragraphTutorial",children:"Note that you can drag nodes even after an algorithm has finished running. This will allow you to instantly see different paths."}),Object(C.jsx)("img",{src:"https://s3.gifyu.com/images/dragggg.gif",alt:"",className:"imageTutorial imageTutorialGivSeven"}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialSeven").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",onClick:function(){I(),document.getElementById("tutorialSeven").className="tutorial-hidden",document.getElementById("tutorialSix").className="tutorial"},children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialSeven").className="tutorial-hidden",document.getElementById("tutorialEight").className="tutorial"},children:"Next"})]}),Object(C.jsxs)("div",{className:"tutorial-hidden",id:"tutorialSix",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"Adding a bomb"}),Object(C.jsx)("h6",{children:'Click the "Add Bomb" button.'}),Object(C.jsx)("p",{className:"paragraphTutorial",children:"Adding a bomb will change the course of the chosen algorithm. In other words, the algorithm will first look for the bomb (in an effort to diffuse it) and will then look for the target node. Note that the Bidirectional Swarm Algorithm does not support adding a bomb."}),Object(C.jsx)("img",{src:"https://i.ibb.co/vQPnf0t/bomb.png",alt:"",className:"imageTutorial imageTutorialSix"}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialSix").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",onClick:function(){I(),document.getElementById("tutorialSix").className="tutorial-hidden",document.getElementById("tutorialFive").className="tutorial"},children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialSix").className="tutorial-hidden",document.getElementById("tutorialSeven").className="tutorial"},children:"Next"})]}),Object(C.jsxs)("div",{className:"tutorial-hidden",id:"tutorialFive",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"Adding walls"}),Object(C.jsx)("h6",{children:"Click on the grid to add a wall."}),Object(C.jsx)("p",{className:"paragraphTutorial",children:"Walls are impenetrable, meaning that a path cannot cross through them."}),Object(C.jsx)("img",{src:"https://i.ibb.co/zHnMSkr/addWalls.gif",alt:"",className:"imageTutorial imageTutorialGivFive"}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialFive").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",onClick:function(){I(),document.getElementById("tutorialFive").className="tutorial-hidden",document.getElementById("tutorialFour").className="tutorial"},children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialFive").className="tutorial-hidden",document.getElementById("tutorialSix").className="tutorial"},children:"Next"})]}),Object(C.jsxs)("div",{className:"tutorial-hidden",id:"tutorialFour",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"Meet the algorithms"}),Object(C.jsx)("h6",{children:"Not all algorithms are created equal."}),Object(C.jsxs)("p",{className:"paragraphTutorial",children:[Object(C.jsxs)("div",{children:[Object(C.jsxs)("p",{className:"algorithmTutorial",style:{paddingTop:"5px"},children:[Object(C.jsx)("strong",{children:"Dijkstra's Algorithm "}),"(weighted): the father of pathfinding algorithms, guarantees the shortest path"]}),Object(C.jsx)("p",{children:" "})]}),Object(C.jsx)("div",{children:Object(C.jsxs)("p",{className:"algorithmTutorial",children:[Object(C.jsx)("strong",{children:"A* Search"}),"(weighted): arguably the best pathfinding algorithm, uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm"]})}),Object(C.jsx)("div",{children:Object(C.jsxs)("p",{className:"algorithmTutorial",children:[Object(C.jsx)("strong",{children:"Greedy Best-first Search"}),"(weighted): a faster, more heuristic-heavy version of A*, does not guarantee the shortest path"]})}),Object(C.jsx)("div",{children:Object(C.jsxs)("p",{className:"algorithmTutorial",children:[Object(C.jsx)("strong",{children:"Breath-first Search"}),"(unweighted): a great algorithm, guarantees the shortest path"]})}),Object(C.jsx)("div",{children:Object(C.jsxs)("p",{className:"algorithmTutorial",children:[Object(C.jsx)("strong",{children:"Depth-first Search"}),"(unweighted): a very bad algorithm for pathfinding, does not guarantee the shortest path"]})})]}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialFour").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",onClick:function(){I(),document.getElementById("tutorialFour").className="tutorial-hidden",document.getElementById("tutorialThree").className="tutorial"},children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialFour").className="tutorial-hidden",document.getElementById("tutorialFive").className="tutorial"},children:"Next"})]}),Object(C.jsxs)("div",{className:"tutorial-hidden",id:"tutorialThree",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"Picking an algorithm"}),Object(C.jsx)("h6",{children:'Choose an algorithm from the "Algorithms" drop-down menu.'}),Object(C.jsx)("p",{className:"paragraphTutorial",children:"Note that some algorithms are unweighted, while others are weighted. Unweighted algorithms do not take turns or weight nodes into account, whereas weighted ones do. Additionally, not all algorithms guarantee the shortest path."}),Object(C.jsx)("img",{src:"https://i.ibb.co/f2zTpHQ/algos.png",alt:"",className:"imageTutorial"}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialThree").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",onClick:function(){I(),document.getElementById("tutorialThree").className="tutorial-hidden",document.getElementById("tutorialTwo").className="tutorial"},children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialThree").className="tutorial-hidden",document.getElementById("tutorialFour").className="tutorial"},children:"Next"})]}),Object(C.jsxs)("div",{className:"tutorial-hidden",id:"tutorialTwo",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"What is a pathfinding algorithm?"}),Object(C.jsx)("h6",{children:"At its core, a pathfinding algorithm seeks to find the shortest path between two points. This application visualizes various pathfinding algorithms in action, and more!"}),Object(C.jsx)("p",{className:"paragraphTutorial",children:'All of the algorithms on this application are adapted for a 2D grid, where 90 degree turns have a "cost" of 1 and movements from a node to another have a "cost" of 1.'}),Object(C.jsx)("img",{src:"https://i.ibb.co/dBxK3WN/path.png",alt:"",className:"imageTutorial"}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialTwo").className="tutorial-hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",onClick:function(){I(),document.getElementById("tutorialTwo").className="tutorial-hidden",document.getElementById("tutorialOne").className="tutorial"},children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialTwo").className="tutorial-hidden",document.getElementById("tutorialThree").className="tutorial"},children:"Next"})]}),Object(C.jsxs)("div",{className:"tutorial",id:"tutorialOne",children:[Object(C.jsxs)("div",{className:"tutorialCounter",children:[N,"/9"]}),Object(C.jsx)("h3",{children:"Welcome to Pathfinding Visualizer!"}),Object(C.jsx)("h6",{children:"This short tutorial will walk you through all of the features of this application."}),Object(C.jsx)("p",{className:"paragraphTutorial",children:'If you want to dive right in, feel free to press the "Skip Tutorial" button below. Otherwise, press "Next"!'}),Object(C.jsx)("img",{src:"https://i.ibb.co/Fgx4FgN/c-icon.png",alt:"",className:"imageTutorial"}),Object(C.jsx)("button",{className:"skipButton",onClick:function(){document.getElementById("tutorialOne").style.visibility="hidden",document.getElementById("grid").className="grid",Y()},children:"Skip Tutorial"}),Object(C.jsx)("button",{className:"previousButton",children:"Previous"}),Object(C.jsx)("button",{className:"nextButton",onClick:function(){O(),document.getElementById("tutorialOne").className="tutorial-hidden",document.getElementById("tutorialTwo").className="tutorial"},children:"Next"})]}),Object(C.jsxs)("div",{className:"navBar",id:"navBar",children:[Object(C.jsx)("a",{href:"http://LudwigFritsch.github.io/PathfindingVisualizer",className:"homeButton",children:"PathfindingVisualizer"}),Object(C.jsx)("ul",{className:"menu cf click",id:"click",children:Object(C.jsxs)("li",{children:[Object(C.jsx)("a",{children:"Algorithms \u25bc"}),Object(C.jsxs)("ul",{class:"submenu",id:"submenu",children:[Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){P="Dijkstra\xb4s",j("dijkstra")},children:"Dijkstra`s Algorithm"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){j("aStar"),P="A*"},children:"A* Search"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){j("greedy"),P="Greedy"},children:"Greedy Best First Search"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){j("breadth"),P="BFS"},children:"Breadth-first Search"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){j("depth"),P="DFS"},children:"Depth-first Search"})})]})]})}),Object(C.jsx)("button",{id:"click1",className:"click",onClick:function(){u(!d),function(t){var e=function(t,e,n,o){var c=t.slice(),a=c[e][n],s=Object(i.a)(Object(i.a)({},a),{},{isBomb:o});return c[e][n]=s,w=15,k=37,c}(X,w=15,k=37,t);X=e,J="Add a bomb"===J?"Remove bomb":"Add a bomb",(Q=!Q)||(X=nt(H,K,R,q),ot());document.getElementById("node-".concat(w,"-").concat(k)).className=Q?"node-bomb":"node"}(d)},children:J}),Object(C.jsxs)("button",{id:"click2",className:"visualize click",onClick:function(){""!==f&&(document.getElementById("grid").className="grid-not-clickable",document.getElementById("click").style.pointerEvents="none",document.getElementById("click1").style.pointerEvents="none",document.getElementById("click2").style.pointerEvents="none",document.getElementById("click3").style.pointerEvents="none",document.getElementById("click4").style.pointerEvents="none",document.getElementById("click5").style.pointerEvents="none",document.getElementById("click6").style.pointerEvents="none",function(t,e){var n,o,c,a;X=nt(H,K,R,q),ot(),"Fast"===e?(n=12,o=45):"Average"===e?(n=25,o=50):(n=70,o=70);var s,i=X[H][K],l=X[R][q];try{s=X[w][k]}catch(u){}if(Q){var d=[];"dijkstra"===t?(c=r(X,i,s),d=B(s),ct(),a=r(X,s,l)):"aStar"===t?(c=m(X,i,s),d=B(s),ct(),a=m(X,s,l)):"greedy"===t?(c=b(X,i,s),d=B(s),ct(),a=b(X,s,l)):"depth"===t?(c=x(X,i,s),d=B(s),ct(),a=x(X,s,l)):"breadth"===t&&(c=E(X,i,s),d=B(s),ct(),a=E(X,s,l)),function(t,e,n,o,c,a){var s=t[0];document.getElementById("node-".concat(s.row,"-").concat(s.col)).className="node-visited-start-bomb";for(var i=function(s){s===t.length-1&&setTimeout((function(){!function(t,e,n,o,c){var a=t[0];document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node-visited-start";for(var s=function(a){a===t.length-1&&setTimeout((function(){!function(t,e,n){t.shift(),e.shift();var o=t[0];document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node-shortest-path-start ";for(var c=function(o){var c=t[o];setTimeout((function(){if(o<t.length-1){var a=t[o+1],s=t[o];s.col>a.col?document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node-shortest-path-pre-left":s.col<a.col?document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node-shortest-path-pre-right":s.row<a.row?document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node-shortest-path-pre-down":document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node-shortest-path-pre-up"}if(document.getElementById("node-".concat(c.row,"-").concat(c.col)).className="node-shortest-path",o===t.length-1){var i=e[0];document.getElementById("node-".concat(i.row,"-").concat(i.col)).className="node-shortest-path-bomb";for(var l=function(t){var o=e[t];if(setTimeout((function(){if(t<e.length-1){var n=e[t+1],c=e[t];c.col>n.col?document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node-shortest-path-pre-left":c.col<n.col?document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node-shortest-path-pre-right":c.row<n.row?document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node-shortest-path-pre-down":document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node-shortest-path-pre-up"}document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node-shortest-path",e[t].isStart&&(document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node-shortest-path-start")}),t*n),t===e.length-1){var c=e[t];setTimeout((function(){document.getElementById("node-".concat(c.row,"-").concat(c.col)).className="node-shortest-path-finish",L=!0,document.getElementById("grid").className="grid",document.getElementById("click").style.pointerEvents="all",document.getElementById("click1").style.pointerEvents="all",document.getElementById("click2").style.pointerEvents="all",document.getElementById("click3").style.pointerEvents="all",document.getElementById("click4").style.pointerEvents="all",document.getElementById("click5").style.pointerEvents="all",document.getElementById("click6").style.pointerEvents="all"}),t*n)}},r=1;r<e.length;r++)l(r)}}),o*n)},a=1;a<t.length;a++)c(a)}(o,c,n)}),a*e),a<t.length-1&&setTimeout((function(){var e=t[a+1];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-pre"}),e*a),a===t.length-1?setTimeout((function(){var e=t[a];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-visited-finish"}),e*a):t[a].row!==H||t[a].col!==K?setTimeout((function(){var e=t[a];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-visited"}),e*a):setTimeout((function(){var e=t[a];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-visited-start"}),e*a)},i=1;i<t.length;i++)s(i)}(n,o,c,e,a)}),s*o),s<t.length-1&&setTimeout((function(){var e=t[s+1];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-pre"}),o*s),s===t.length-1?setTimeout((function(){var e=t[s];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="bomb-node-visited"}),o*s):t[s].row!==R||t[s].col!==q?setTimeout((function(){var e=t[s];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-visited-bomb"}),o*s):setTimeout((function(){var e=t[s];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-visited-finish-bomb"}),o*s)},l=1;l<t.length;l++)i(l)}(c,d,a,n,o,B(l))}else{"dijkstra"===t?c=r(X,i,l):"aStar"===t?c=m(X,i,l):"greedy"===t?c=b(X,i,l):"depth"===t?c=x(X,i,l):"breadth"===t&&(c=E(X,i,l)),function(t,e,n,o){var c=t[0];document.getElementById("node-".concat(c.row,"-").concat(c.col)).className="node-visited-start";for(var a=function(c){c<t.length-1&&setTimeout((function(){var e=t[c+1];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-pre"}),n*c),c===t.length-1?setTimeout((function(){var n=t[c];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node-visited-finish",function(t,e){t.shift();var n=t[0];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node-shortest-path-start ";for(var o=function(n){n<t.length-1&&setTimeout((function(){var e=t[n+1],o=t[n];o.col>e.col?document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-shortest-path-pre-left":o.col<e.col?document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-shortest-path-pre-right":o.row<e.row?document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-shortest-path-pre-down":document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-shortest-path-pre-up"}),e*n),n===t.length-1?setTimeout((function(){var e=t[n];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-shortest-path-finish",L=!0,document.getElementById("grid").className="grid",document.getElementById("click").style.pointerEvents="all",document.getElementById("click1").style.pointerEvents="all",document.getElementById("click2").style.pointerEvents="all",document.getElementById("click3").style.pointerEvents="all",document.getElementById("click4").style.pointerEvents="all",document.getElementById("click5").style.pointerEvents="all",document.getElementById("click6").style.pointerEvents="all"}),e*n):setTimeout((function(){var e=t[n];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-shortest-path"}),e*n)},c=1;c<t.length;c++)o(c)}(e,o)}),c*n):setTimeout((function(){var e=t[c];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node-visited"}),n*c)},s=1;s<t.length;s++)a(s)}(c,B(l),n,o)}}(f,n))},children:["Visualize ",P]}),Object(C.jsx)("button",{id:"click3",className:"click",onClick:function(){P="",j(""),_(),Z()},children:"Clear Bord"}),Object(C.jsx)("button",{id:"click4",className:"click",onClick:function(){_(),Z()},children:"Clear walls"}),Object(C.jsx)("button",{id:"click5",className:"click",onClick:_,children:"Clear Path"}),Object(C.jsx)("ul",{id:"click6",className:"menu cf click",children:Object(C.jsxs)("li",{children:[Object(C.jsxs)("a",{children:["Speed: ",n," \u25bc"]}),Object(C.jsxs)("ul",{class:"submenu-speed",children:[Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){c("Fast")},children:"Fast"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){c("Average")},children:"Average"})}),Object(C.jsx)("li",{children:Object(C.jsx)("a",{onClick:function(){c("Slow")},children:"Slow"})})]})]})})]}),Object(C.jsx)("div",{className:"explanationSection",children:Object(C.jsxs)("div",{className:"nodes",children:[Object(C.jsxs)("div",{className:"nodeExplanation",children:[Object(C.jsx)("img",{src:"https://svgshare.com/getbyhash/sha1-yAWHMbXmBhkwTLV77DIPjK7SHn4=",alt:"startNode"}),Object(C.jsx)("p",{className:"node-description",children:" Start Node"})]}),Object(C.jsxs)("div",{className:"nodeExplanation",children:[Object(C.jsx)("img",{src:"https://svgshare.com/getbyhash/sha1-c7hqbypOmeOvdRvpH2Af8e2mbnU=",alt:"startNode"}),Object(C.jsx)("p",{className:"node-description",children:" Target Node"})]}),Object(C.jsxs)("div",{className:"nodeExplanation",children:[Object(C.jsx)("img",{src:"https://svgshare.com/getbyhash/sha1-azrTpZ1HoMGS3EXrju+GximBV64=",alt:"startNode"}),Object(C.jsx)("p",{className:"node-description",children:" Bomb Node"})]}),Object(C.jsxs)("div",{className:"nodeExplanation",children:[Object(C.jsx)("div",{className:"unvisited-node-explanation"}),Object(C.jsx)("p",{children:" Unvisited Node"})]}),Object(C.jsxs)("div",{className:"nodeExplanation",children:[Object(C.jsxs)("div",{className:"visitedNodes",children:[Object(C.jsx)("div",{className:"visited-node-explanation-green"}),Object(C.jsx)("div",{className:"visited-node-explanation-purple"})]}),Object(C.jsx)("p",{children:" Visited Node"})]}),Object(C.jsxs)("div",{className:"nodeExplanation",children:[Object(C.jsx)("div",{className:"shortest-node-explanation"}),Object(C.jsx)("p",{children:" Shortest Node"})]}),Object(C.jsxs)("div",{className:"nodeExplanation",children:[Object(C.jsx)("div",{className:"wall-node-explanation"}),Object(C.jsx)("p",{children:" Wall Node"})]})]})}),Object(C.jsx)("div",{className:"grid-not-clickable",id:"grid",children:X.map((function(t){return t.map((function(t){var e=t.row,n=t.col,o=t.isFinish,c=t.isStart,a=t.isWall,s=t.isBomb;return Object(C.jsx)(M,{id:"node-".concat(e,"-").concat(n),row:e,col:n,isFinish:o,isStart:c,isWall:a,isBomb:s,onMouseDown:function(t,e,n,o,c){!function(t,e,n,o,c){if(n)D=!0;else if(o)G=!0;else if(c)U=!0;else{var a=lt(X,t,e);z=!0,(X=a)[t][e].isWall?document.getElementById("node-".concat(t,"-").concat(e)).className="node-wall":document.getElementById("node-".concat(t,"-").concat(e)).className="node"}}(t,e,n,o,c)},onMouseEnter:function(t,e){!function(t,e){if(D){H=t,K=e;var n=function(t,e,n){var o=t.slice(),c=o[e][n],a=Object(i.a)(Object(i.a)({},c),{},{isStart:!0});return o[e][n]=a,o}(X,t,e);if(X=n,D=!0,document.getElementById("node-".concat(H,"-").concat(K)).className="node-start",L)at(X[H][K])}else if(G){R=t,q=e;var o=function(t,e,n){var o=t.slice(),c=o[e][n],a=Object(i.a)(Object(i.a)({},c),{},{isFinish:!0});return o[e][n]=a,o}(X,t,e);if(X=o,G=!0,document.getElementById("node-".concat(R,"-").concat(q)).className="node-finish",L)at(X[R][q])}else if(z){if(!X[t][e].isStart&&!X[t][e].isFinish&&!X[t][e].isBomb){var c=lt(X,t,e);X=c}!X[t][e].isWall||X[t][e].isStart||X[t][e].isFinish||X[t][e].isBomb?X[t][e].isStart||X[t][e].isFinish||X[t][e].isBomb||(document.getElementById("node-".concat(t,"-").concat(e)).className="node"):document.getElementById("node-".concat(t,"-").concat(e)).className="node-wall"}else if(U){w=t,k=e;var a=function(t,e,n){var o=t.slice(),c=o[e][n],a=Object(i.a)(Object(i.a)({},c),{},{isBomb:!0});return o[e][n]=a,o}(X,t,e);if(X=a,document.getElementById("node-".concat(w,"-").concat(k)).className="node-bomb",L)at(X[w][k])}}(t,e)},onMouseUp:function(t,e){D?D=!1:G?G=!1:U?U=!1:z=!1},onMouseLeave:function(t,e){!function(t,e){if(D){var n=function(t,e,n){var o=t.slice(),c=o[e][n],a=Object(i.a)(Object(i.a)({},c),{},{isStart:!1});return o[e][n]=a,o}(X,t,e);(X=n)[t][e].isStart?document.getElementById("node-".concat(H,"-").concat(K)).className="node-start":X[t][e].isWall?document.getElementById("node-".concat(t,"-").concat(e)).className="node-wall":document.getElementById("node-".concat(t,"-").concat(e)).className="node"}else if(G){var o=function(t,e,n){var o=t.slice(),c=o[e][n],a=Object(i.a)(Object(i.a)({},c),{},{isFinish:!1});return o[e][n]=a,o}(X,t,e);(X=o)[t][e].isFinish?document.getElementById("node-".concat(R,"-").concat(q)).className="node-finish":X[t][e].isWall?document.getElementById("node-".concat(t,"-").concat(e)).className="node-wall":document.getElementById("node-".concat(t,"-").concat(e)).className="node"}else if(U){var c=function(t,e,n){var o=t.slice(),c=o[e][n],a=Object(i.a)(Object(i.a)({},c),{},{isBomb:!1});return o[e][n]=a,o}(X,t,e);(X=c)[t][e].isBomb?document.getElementById("node-".concat(w,"-").concat(k)).className="node-bomb":X[t][e].isWall?document.getElementById("node-".concat(t,"-").concat(e)).className="node-wall":document.getElementById("node-".concat(t,"-").concat(e)).className="node"}}(t,e)}},"node-".concat(e,"-").concat(n))}))}))})]})};function tt(t,e,n,o,c,a,s,i){return{row:t,col:e,isStart:t===n&&e===o,isFinish:t===c&&e===a,isWall:!1,isVisited:!1,distance:"Infinity",prevNode:"none",gCost:1e3,hCost:1e3,fCost:1e3,status:1,isBomb:t===s&&e===i}}function et(t,e,n,o,c,a,s,i,l){return{row:t,col:e,isStart:t===n&&e===o,isFinish:t===c&&e===a,isWall:s,isVisited:!1,distance:"Infinity",prevNode:"none",gCost:1e3,hCost:1e3,fCost:1e3,status:1,isBomb:t===i&&e===l}}function nt(t,e,n,o,c,a){for(var s=[],i=0;i<X.length;i++){for(var l=[],r=0;r<X[i].length;r++){var d=X[i][r];l.push(et(i,r,t,e,n,o,d.isWall,c,a))}s.push(l)}return s}function ot(){for(var t=0;t<X.length;t++)for(var e=0;e<X[t].length;e++){var n=X[t][e],o=document.getElementById("node-".concat(t,"-").concat(e));n.isWall||(o.className="node"),t===H&&e===K&&(o.className="node-start"),t===R&&e===q&&(o.className="node-finish"),t===w&&e===k&&Q&&(o.className="node-bomb")}try{Q&&(document.getElementById("node-".concat(w,"-").concat(k)).className="node-bomb")}catch(c){}}function ct(){for(var t=0;t<X.length;t++)for(var e=0;e<X[t].length;e++){var n=X[t][e];n.isVisited=!1,n.distance="Infinity",n.prevNode="none",n.gCost=1e4,n.hCost=1e4,n.fCost=1e4,n.status=1}}function at(t){if(Q){var e=(X=nt(H,K,R,q))[H][K],n=X[R][q],o=X[w][k];if("Dijkstra\xb4s"===P){var c=r(X,e,o),a=B(o);ct(),st(c,r(X,o,n),a,B(n),t)}else if("DFS"===P){var s=x(X,e,o),i=B(o);ct(),st(s,x(X,o,n),i,B(n))}else if("Greedy"===P){var l=b(X,e,o),d=B(o);ct(),st(l,b(X,o,n),d,B(n))}else if("A*"===P){var u=m(X,e,o),h=B(o);ct(),st(u,m(X,o,n),h,B(n))}else if("BFS"===P){var g=E(X,e,o),f=B(o);ct(),st(g,E(X,o,n),f,B(n))}}else{var j=(X=nt(H,K,R,q))[H][K],v=X[R][q];if("Dijkstra\xb4s"===P)it(r(X,j,v),B(v),t);else if("Greedy"===P){it(b(X,j,v),B(v),t)}else if("A*"===P){it(m(X,j,v),B(v),t)}else if("DFS"===P){it(x(X,j,v),B(v),t)}else if("BFS"===P){it(E(X,j,v),B(v),t)}}}function st(t,e,n,o,c){for(var a=0;a<t.length;a++){var s=t[a];document.getElementById("node-".concat(s.row,"-").concat(s.col)).className="node-afterwards-purple"}for(var i=0;i<e.length;i++){var l=e[i];document.getElementById("node-".concat(l.row,"-").concat(l.col)).className="node-afterwards"}!function(t,e){t.shift();var n=t[0];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node-shortest-path-pre-right";for(var o=1;o<t.length;o++){var c=t[o];document.getElementById("node-".concat(c.row,"-").concat(c.col)).className="shortest-path-afterwards"}e.shift();var a=e[0];document.getElementById("node-".concat(a.row,"-").concat(a.col)).className="node-shortest-path-bomb-after";for(var s=1;s<e.length;s++){var i=e[s];if(document.getElementById("node-".concat(i.row,"-").concat(i.col)).className="shortest-path-afterwards",s===e.length-1){var l=e[s];document.getElementById("node-".concat(l.row,"-").concat(l.col)).className="node-shortest-path-finish-after"}}}(n,o);for(var r=0;r<X.length;r++)for(var d=0;d<X[r].length;d++)n.includes(X[r][d])||o.includes(X[r][d])||t.includes(X[r][d])||e.includes(X[r][d])||X[r][d].isStart||X[r][d].isFinish||X[r][d].isWall||X[r][d].isBomb||(document.getElementById("node-".concat(r,"-").concat(d)).className="node"),!X[r][d].isWall||X[r][d].isFinish||X[r][d].isStart||X[r][d].isBomb||(document.getElementById("node-".concat(r,"-").concat(d)).className="node-wall"),r===w&&d===k&&(document.getElementById("node-".concat(r,"-").concat(d)).className="node-shortest-path-bomb-after")}function it(t,e,n){for(var o=0;o<X.length;o++)for(var c=0;c<X[o].length;c++)e.includes(X[o][c])||t.includes(X[o][c])||X[o][c].isStart||X[o][c].isFinish||X[o][c].isWall||(document.getElementById("node-".concat(o,"-").concat(c)).className="node"),!X[o][c].isWall||X[o][c].isFinish||X[o][c].isBomb||(document.getElementById("node-".concat(o,"-").concat(c)).className="node-wall");for(var a=0;a<t.length;a++){var s=t[a];document.getElementById("node-".concat(s.row,"-").concat(s.col)).className="node-afterwards"}!function(t){t.shift();for(var e=0;e<t.length;e++){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="shortest-path-afterwards"}var o=t[0];document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node-shortest-path-pre-right",o=t[t.length-1],document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node-shortest-path-finish-after"}(e)}function lt(t,e,n){var o=t.slice(),c=o[e][n],a=Object(i.a)(Object(i.a)({},c),{},{isWall:!c.isWall});return o[e][n]=a,o}window.onclick=function(t){if(!t.target.matches(".dropdown-algorithms"))for(var e=document.getElementsByClassName("algorithms-content"),n=0;n<e.length;n++){var o=e[n];o.classList.contains("show")&&o.classList.remove("show")}if(!t.target.matches(".dropdown-animationSpeed"))for(var c=document.getElementsByClassName("animationSpeed-content"),a=0;a<c.length;a++)(o=c[a]).classList.contains("show")&&o.classList.remove("show")};n(14);var rt=function(){return Object(C.jsx)($,{})},dt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),o(t),c(t),a(t),s(t)}))};s.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(rt,{})}),document.getElementById("root")),dt()}],[[15,1,2]]]);
//# sourceMappingURL=main.ed9ecd22.chunk.js.map