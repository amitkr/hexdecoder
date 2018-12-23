(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},17:function(e,t,a){e.exports=a(48)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var l=a(0),c=a.n(l),n=a(8),r=a.n(n),s=(a(23),a(10)),m=(a(25),a(27),a(1)),o=a.n(m);var i=function(e){return c.a.createElement("div",{className:"Input__flex"},c.a.createElement("span",{className:"Input__label"},"#"),c.a.createElement("input",{value:e.hex,spellCheck:!1,type:"text",onChange:function(t){var a=t.target.value.slice(0,6).replace(/[^0-9A-Fa-f]+/,"");e.setHsl(o.a.hex.hsl(a)),e.setHex(a)},className:"Input__field"}))},h=a(2),E=a(3),u=a(5),p=a(4),d=a(6),f=(a(31),function(e){function t(){var e,a;Object(h.a)(this,t);for(var l=arguments.length,c=new Array(l),n=0;n<l;n++)c[n]=arguments[n];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).calculateBarValue=function(e){return 101-Math.floor(e/255*100)},a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=document.getElementById("Bar-r"),t=document.getElementById("Bar-g"),a=document.getElementById("Bar-b"),l=this.calculateBarValue(this.props.rgb[0]),n=this.calculateBarValue(this.props.rgb[1]),r=this.calculateBarValue(this.props.rgb[2]);return e&&e.style.setProperty("grid-row-start",l),t&&t.style.setProperty("grid-row-start",n),a&&a.style.setProperty("grid-row-start",r),c.a.createElement("div",{className:"BarChart"},c.a.createElement("div",{id:"Bar-r"}),c.a.createElement("div",{id:"Bar-g"}),c.a.createElement("div",{id:"Bar-b"}))}}]),t}(c.a.Component));a(33);var k=function(e){var t=e.hsl[0],a={transform:"rotate(".concat(t-90,"deg) translateX(6em) ")},l=function(t){return function(){e.setHsl([t,e.hsl[1],e.hsl[2]]),console.log(e.hsl,o.a.hsl.hex(60,0,0)),e.setHex(o.a.hsl.hex(e.hsl[0],e.hsl[1],e.hsl[2]))}};return c.a.createElement("ul",{className:"hslwheel"},c.a.createElement("div",{className:"needle",style:a}),c.a.createElement("li",{className:"red",onClick:l(0)},c.a.createElement("span",null,"Red")),c.a.createElement("li",{className:"orange",onClick:l(30)},c.a.createElement("span",null,"Orange")),c.a.createElement("li",{className:"yellow",onClick:l(60)},c.a.createElement("span",null,"Yellow")),c.a.createElement("li",{className:"chartreuse",onClick:l(90)},c.a.createElement("span",null,"Chart-reuse")),c.a.createElement("li",{className:"green",onClick:l(120)},c.a.createElement("span",null,"Green")),c.a.createElement("li",{className:"springgreen",onClick:l(150)},c.a.createElement("span",null,"Spring Green")),c.a.createElement("li",{className:"cyan",onClick:l(180)},c.a.createElement("span",null,"Cyan")),c.a.createElement("li",{className:"azure",onClick:l(210)},c.a.createElement("span",null,"Azure")),c.a.createElement("li",{className:"blue",onClick:l(240)},c.a.createElement("span",null,"Blue")),c.a.createElement("li",{className:"purple",onClick:l(270)},c.a.createElement("span",null,"Purple")),c.a.createElement("li",{className:"magenta",onClick:l(300)},c.a.createElement("span",null,"Magenta")),c.a.createElement("li",{className:"rose",onClick:l(330)},c.a.createElement("span",null,"Rose")))};a(13);var M=function(e){var t=e.hsl[0],a=e.hsl[1],l=e.hsl[2],n="hsl("+t+","+a+"%,"+l+"%)";return c.a.createElement("div",{className:"LightnessAndSaturation"},c.a.createElement("span",null,"Lightness: "),c.a.createElement("input",{type:"range",min:"0",max:"100",value:e.hsl[2],onChange:function(l){e.setHsl([t,a,l.target.value]);var c=o.a.hsl.hex(t,a,l.target.value);e.setHex(c)},step:"1",className:"slider"}),c.a.createElement("svg",{height:"60",width:"60"},c.a.createElement("circle",{cx:"30",cy:"30",r:"30",fill:n})),c.a.createElement("div",null,l<33.33?"Dark":l<66.66?"Middle":"Light"),c.a.createElement("span",null,"Saturation: "),c.a.createElement("input",{type:"range",min:"0",max:"100",value:e.hsl[1],onChange:function(c){var n=o.a.hsl.hex(t,a,c.target.value);e.setHex(n),e.setHsl([t,c.target.value,l])},step:"1",className:"slider"}),c.a.createElement("svg",{height:"60",width:"60"},c.a.createElement("circle",{cx:"30",cy:"30",r:"30",fill:n})),c.a.createElement("div",null,a<25?"Grey":a<50?"Muted":a<75?"Washed":"Saturated"))};var C=a(9),F=a.n(C),g=(a(46),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}});F.a.setAppElement("#root");var z=function(e){function t(e){var a;return Object(h.a)(this,t),console.log("constructor"),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).closeModal=function(){a.setState({modalIsOpen:!1})},a.state={modalIsOpen:!0},a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return"6A756C"!==this.props.hex.toUpperCase()?null:c.a.createElement("div",null,c.a.createElement(F.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,style:g,contentLabel:"Example Modal"},c.a.createElement("h2",null,"Ho Ho Ho!"),c.a.createElement("p",null,"Du fant julenissen!"),c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"106.452 75.459 1707.096 1210.082"},c.a.createElement("path",{fill:"#F8CB60",stroke:"#F8CB60",strokeWidth:".394",d:"M1367.68 936.89c.65-2.39 1.77-4.71 4.15-5.78.43.01 1.29.02 1.72.03-1.87 2.01-3.79 3.96-5.87 5.75z"}),c.a.createElement("g",{strokeWidth:".394"},c.a.createElement("path",{fill:"#010101",stroke:"#010101",d:"M964.04 217.05c13.17-6.66 29.01-7.78 43-3.03 13.81 4.59 25.66 14.77 32.17 27.8 7.44 14.43 8.02 32.17 1.68 47.11 40.46 13.07 75.16 42.71 94.69 80.45 10.38 19.87 16.7 41.9 18.15 64.28 7.15.04 14.31.05 21.47-.01-.05 15.44.03 30.89-.03 46.34-.2 3.84 1.54 7.4 2.16 11.13 1.06 4.81 1.73 9.68 2.37 14.56 10.24.67 20.53 5.71 26.16 14.51 4.6 7.02 5.14 16.42 1.28 23.89-6.04 11.8-19.97 17.57-32.77 16.88-6.29 20.49-17.29 39.45-31.53 55.44 7.27 11.77 13.85 23.99 19.17 36.77.44 1.75 2.27 2.34 3.67 3.17 59.86 32.2 119.62 64.57 179.5 96.74-2.12 3.18-4.17 6.4-6.31 9.56 15.41 4.22 29.05 14.97 36.09 29.41 8.07 15.83 7.25 35.71-1.92 50.9-6.83 11.52-17.91 20.41-30.59 24.69 5.97 11.73 11.63 23.63 17.55 35.39 16.13 2.28 32.26 4.69 48.39 7-11.62 11.48-23.4 22.81-35.07 34.24 2.85 16.05 5.47 32.15 8.35 48.2-14.52-7.51-28.95-15.18-43.42-22.77-14.45 7.63-28.9 15.26-43.4 22.79 2.87-16.07 5.63-32.17 8.29-48.28-11.69-11.41-23.37-22.84-35.1-34.21 16.21-2.24 32.4-4.65 48.59-7.05 5.32-11.03 10.95-21.92 16.15-33-18.94 3.63-39.69-3-52.81-17.18-.95 1.27-1.78 2.62-2.66 3.93-31.02-27.23-62.18-54.3-93.24-81.47-1.46 44.29-12.91 88.49-34.75 127.16-11.31 20.07-25.53 38.52-42.29 54.35.16 26.65.1 53.3.03 79.95 24.41-.71 49.06 1.89 72.5 8.9 13.98 4.33 27.81 10.22 39.14 19.68 7.71 6.46 14.24 15.35 14.98 25.68.84 9.31-3.44 18.32-9.63 25.05-8.83 9.5-20.51 15.83-32.45 20.58-23.68 9.24-49.23 12.77-74.54 13.22-29.36.21-59.37-3.39-86.34-15.61-9.49-4.52-19.29-9.43-25.98-17.82-10.75-12.83-13.77-30.06-14.58-46.3-.77-21.67 2.68-43.16 4.19-64.72-3.47.03-6.93.04-10.38.04 2.03 26.14 6.57 52.47 2.92 78.67-2.23 15.78-9.17 31.87-22.74 41.08-15.97 10.46-34.34 16.82-53 20.47-22.94 4.38-46.49 5.13-69.72 3.18-22.23-2.11-44.53-6.78-64.68-16.66-8.72-4.42-17.12-9.91-23.51-17.4-5.11-6.02-8.79-13.66-8.56-21.69-.18-9.01 4.54-17.35 10.62-23.68 11.85-11.97 27.75-18.84 43.59-23.79 23.36-6.93 47.93-9.7 72.26-8.8.02-26.79.03-53.58-.01-80.36-28.94-27.03-49.67-62.12-62.26-99.5-8.76-26.31-13.76-53.92-14.47-81.65-31.17 27.09-62.27 54.27-93.36 81.45-.85-1.3-1.68-2.59-2.51-3.87-10.64 11.31-26.01 17.86-41.51 18.08-14.66.37-29.44-4.82-40.45-14.55-11.57-10.01-18.81-25.06-18.67-40.43-.25-14.43 5.99-28.68 16.32-38.68 6.98-6.92 15.79-11.93 25.24-14.57-2.02-3.21-4.1-6.37-6.24-9.5 60.76-32.93 121.64-65.64 182.45-98.47 5.52-13.3 12.23-26.1 19.89-38.29-14.24-16.01-25.26-34.98-31.56-55.48-8.93.37-18.19-2-25.2-7.7-5.82-4.63-9.98-11.66-10.07-19.21-.38-6.98 2.75-13.81 7.67-18.67 5.93-5.89 14.15-9.14 22.42-9.72.43-8.04 2.73-15.8 4.27-23.63.01-16.11.11-32.23-.05-48.34 7.2-.02 14.41.04 21.63-.01 2.34-36.91 18-72.7 43.1-99.81 18.89-20.61 43.14-36.18 69.65-45.02-4.66-11.28-5.67-24.06-2.48-35.87 3.94-15.42 14.84-28.85 29.09-35.92m15.93 4.89c-14.82 2.9-27.78 13.66-33.46 27.64-4.88 11.57-4.6 25.06.51 36.51 27.41-7.22 56.82-7.42 84.18.07 9.33-19.22 2.5-44.27-14.99-56.4-10.28-7.53-23.78-10.44-36.24-7.82m-14.07 70.25c-35.43 5.33-68.8 23.4-92.54 50.24-22.55 25-36.21 57.6-38.97 91.11 41.2.27 82.4.04 123.6.12 61.92-.03 123.83.05 185.75-.04-.59-13.97-3.95-27.73-8.64-40.86-14.39-40.18-46.21-73.67-85.6-90.09-26.19-11.13-55.48-14.79-83.6-10.48M812.99 443.55c.05 10.22.05 20.44 0 30.67 117.45-.06 234.91-.04 352.36-.02-.03-10.22-.04-20.45 0-30.68-117.46.05-234.91-.01-352.36.03m.07 40.56c-5.08 17.4-6.61 35.87-4.03 53.84 4.14 30.71 20.02 59.18 42.21 80.55 4.42-8.08 11.86-13.96 19.59-18.7 12.12-7.23 25.54-11.98 39.13-15.6 15.76-4.14 31.92-6.68 48.15-8.1-2.84-6.04-.53-13.35 4.42-17.53 9.07-7.89 21.95-9.73 33.54-8.34 8.33 1.21 17.12 4.29 22.4 11.22 3.25 4.12 3.82 9.85 1.86 14.68 13.98 1.2 27.91 3.24 41.58 6.45 15.54 3.68 30.97 8.66 44.84 16.74 8.09 4.8 15.78 10.9 20.49 19.2 23.48-22.93 40.33-53.83 42.69-86.87.82-7.39.81-14.9.03-22.29-.44-8.6-2.28-17.17-4.78-25.41-41.03.33-82.08.05-123.11.14-76.34.01-152.68-.03-229.01.02m-32.25 41.54c-3 4.56-2.96 10.88.12 15.39 4.41 6.72 12.68 9.91 20.48 10.08-2.73-11.61-3.8-23.59-3.41-35.5-6.72.92-13.49 4.16-17.19 10.03m399.55-10.05c.32 11.93-.59 23.95-3.41 35.57 7.02-.28 14.29-2.7 19-8.12 3.55-3.96 5.07-9.91 2.89-14.9-3.01-7.4-10.91-11.5-18.48-12.55M969.7 561.72c-3.43 2.15-6.81 5.91-5.76 10.28 1.36 4.32 5.44 7.07 9.4 8.83 10.18 4.24 22.15 4.19 32.27-.25 4.01-1.92 8.29-4.98 9.05-9.7.23-4.09-3.06-7.31-6.24-9.35-4.17-2.47-8.97-4.13-13.79-4.41-3.43-.52-6.94-.56-10.37-.04-5.1.23-10.21 1.95-14.56 4.64M908.01 595c-13.96 4.14-27.96 9.39-39.52 18.48-5.78 4.78-11.56 11.46-10.74 19.49 1.02 8.09 7.48 14.02 13.71 18.6 11.65 8.09 25.16 13.07 38.75 16.83-10.17 20.2-14.94 43.13-12.79 65.7 1.88 21.67 9.79 42.95 23.31 60.08 11.73 14.94 27.91 26.66 46.3 31.83 18.84 5.45 39.61 3.61 57.27-4.88 17.73-8.36 32.25-22.75 41.95-39.67 19.7-34.11 20.1-78.15 1.84-112.94 11.65-3.41 23.25-7.41 33.73-13.64 5.53-3.3 10.84-7.24 14.78-12.4 2.99-3.95 4.92-9.05 3.83-14.04-1.45-6.79-6.69-11.89-11.93-16.05-9.43-7.03-20.41-11.65-31.51-15.36-21.22-6.87-43.44-10.23-65.64-11.68-13.51 7.38-30.77 7.24-44.34.08-19.91 1.1-39.79 4.13-59 9.57m-80.63 57.58c-12.27 27.58-19.81 57.24-22.3 87.31-1.16 8.32-.55 16.76-1.35 25.12.89 8.44.09 17.01 1.51 25.41 1.14 16.84 4.46 33.49 8.82 49.79 10.2 36.17 27.72 70.74 53.42 98.38 24.99 27.59 58.47 48.27 95.42 54.67 13.84 2.53 28.04 1.6 42.04 1.39 38.25-3.56 73.73-23.18 100.52-50.2 27.33-27.61 46.5-62.64 57.55-99.73 6.96-24.26 11.32-49.42 10.91-74.7-.14-11.02.33-22.09-.8-33.06-3.95-39.73-16.13-78.94-37.29-112.93-1.78 1.76-3.9 3.27-5.24 5.39-.2 3.4-.06 6.89-1.31 10.13-3.43 9.84-11.7 17.02-20.25 22.48-8.44 5.29-17.64 9.28-27.06 12.49 4.13 11.49 7.65 23.34 8.55 35.59 1.12 7.89 1.37 15.98.21 23.89-2.48 36.86-22.36 73.25-54.66 92.12-21.44 12.88-48.21 15.97-72.22 9.29-10.85-3.18-21.08-8.36-30.21-15.01-30.24-22.23-47.11-60.18-46.33-97.37-.34-16.53 3.04-33.04 9.28-48.32-15.33-5.69-31.26-12.43-42-25.29-4.77-5.79-7.18-13.24-6.97-20.72-1.61-1.56-3.26-3.08-4.89-4.61-6.14 8.9-10.78 18.73-15.35 28.49M648.07 756.31c.07 1 .37 1.92.91 2.76 18.04 27.53 36.02 55.09 54.07 82.61 28.55-24.66 56.85-49.6 85.33-74.34 1.98-1.87 4.53-3.36 5.83-5.81.14-18.64 2.19-37.23 5.79-55.52 2.32-12.52 6.38-24.61 9.83-36.83-53.99 28.92-107.79 58.17-161.76 87.13m520.18-87.17c7.22 20.99 12.24 42.78 14.31 64.9 1.48 9.39 1.07 18.95 1.85 28.42 30.25 26.43 60.66 52.65 90.7 79.32 18.78-28.2 37.27-56.62 55.72-85.02-20.35-11.39-41.08-22.1-61.5-33.36-33.77-17.95-67.22-36.5-101.08-54.26M618.34 787.37c-7.07 8.1-10.95 18.89-10.58 29.64.27 13.16 7.15 25.77 17.53 33.73 11.33 8.85 26.66 12.28 40.7 9.28 10.35-2.2 20.3-7.57 26.94-15.92-16.11-24.14-31.73-48.62-47.84-72.76-10.24 2.52-19.97 7.85-26.75 16.03m714.7-15.87c-15.82 24.25-31.63 48.5-47.6 72.65 3.97 4.89 9.18 8.72 14.79 11.58 17.02 8.82 39.1 6.6 53.85-5.71 12.57-10.01 19.14-27.16 15.7-42.96-3.49-17.91-18.96-32.28-36.74-35.56m-3.11 125.32c-2.57 4.77-4.76 9.74-7.27 14.54-11.66 1.67-23.3 3.47-34.97 5.02 8.45 8.19 16.91 16.37 25.35 24.58-1.97 11.62-4.03 23.23-5.96 34.87 5.24-3 10.71-5.6 15.99-8.54 5.18-2.35 10.1-5.24 15.16-7.84 10.21 5.2 20.19 10.86 30.52 15.84.12-.14.37-.4.49-.53-1.59-11.28-3.82-22.45-5.61-33.69 1.34-1.39 2.88-2.63 4.05-4.18 2.08-1.79 4-3.74 5.87-5.75 5.17-4.74 10.41-9.72 15.21-14.92-11.67-1.45-23.28-3.31-34.91-4.97-5.08-10.57-10.36-21.04-15.54-31.55-2.88 5.66-5.89 11.28-8.38 17.12m-323.58 107.69c-1.12.2-3.08.06-2.89 1.75-1.73 27.5-7.39 55.4-1.67 82.79 2.64 11.49 8.62 22.86 18.85 29.28 19.9 12.51 43.21 18.52 66.41 20.94 25.98 2.55 52.45 1.63 77.96-4.16 16.37-3.87 32.81-9.46 46.28-19.84 6.55-5.05 12.42-12.11 13.22-20.64.67-7.73-3.84-14.79-9.14-20-11.64-10.74-26.71-16.8-41.72-21.17-24.51-6.92-50.19-8.57-75.54-7.37-.51-27.05.08-54.12-.31-81.17-26.01 21.3-57.8 36.2-91.45 39.59m-125.91-39.36c.02 26.88-.15 53.75.08 80.63-4.82.59-9.67-.15-14.5-.06-20.18-.08-40.47 2.02-59.96 7.41-12.87 3.58-25.66 8.41-36.61 16.22-7.14 5.31-14.42 12.28-15.45 21.6-1.03 7.55 3.08 14.66 8.17 19.9 6.32 6.33 14.12 10.99 22.19 14.76 15.44 6.86 32.04 10.74 48.73 13.04 25.43 3.03 51.38 2.73 76.56-2.12 16.51-3.29 32.76-8.75 47.15-17.62 6.55-4.04 11.96-9.93 15.22-16.92 5.12-10.18 6.49-21.71 7.01-32.95.65-21.46-2.85-42.73-4.16-64.1-30.41-2.93-59.76-14.51-84.4-32.5-3.44-2.31-6.33-5.38-10.03-7.29z"}),c.a.createElement("path",{fill:"#FFF",stroke:"#FFF",d:"M979.97 221.94c12.46-2.62 25.96.29 36.24 7.82 17.49 12.13 24.32 37.18 14.99 56.4-27.36-7.49-56.77-7.29-84.18-.07-5.11-11.45-5.39-24.94-.51-36.51 5.68-13.98 18.64-24.74 33.46-27.64z"}),c.a.createElement("path",{fill:"#BC0033",stroke:"#BC0033",d:"M965.9 292.19c28.12-4.31 57.41-.65 83.6 10.48 39.39 16.42 71.21 49.91 85.6 90.09 4.69 13.13 8.05 26.89 8.64 40.86-61.92.09-123.83.01-185.75.04-41.2-.08-82.4.15-123.6-.12 2.76-33.51 16.42-66.11 38.97-91.11 23.74-26.84 57.11-44.91 92.54-50.24z"}),c.a.createElement("path",{fill:"#FFF",stroke:"#FFF",d:"M812.99 443.55c117.45-.04 234.9.02 352.36-.03-.04 10.23-.03 20.46 0 30.68-117.45-.02-234.91-.04-352.36.02.05-10.23.05-20.45 0-30.67z"}),c.a.createElement("path",{fill:"#FED8CB",stroke:"#FED8CB",d:"M813.06 484.11c76.33-.05 152.67-.01 229.01-.02 41.03-.09 82.08.19 123.11-.14 2.5 8.24 4.34 16.81 4.78 25.41-1.44 4.73-.86 9.69-.99 14.56-.12 2.61.29 5.2.96 7.73-2.36 33.04-19.21 63.94-42.69 86.87-4.71-8.3-12.4-14.4-20.49-19.2-13.87-8.08-29.3-13.06-44.84-16.74-13.67-3.21-27.6-5.25-41.58-6.45 1.96-4.83 1.39-10.56-1.86-14.68-5.28-6.93-14.07-10.01-22.4-11.22-11.59-1.39-24.47.45-33.54 8.34-4.95 4.18-7.26 11.49-4.42 17.53-16.23 1.42-32.39 3.96-48.15 8.1-13.59 3.62-27.01 8.37-39.13 15.6-7.73 4.74-15.17 10.62-19.59 18.7-22.19-21.37-38.07-49.84-42.21-80.55-2.58-17.97-1.05-36.44 4.03-53.84m106.42 17.65c-4.22 2.82-5.23 8.4-5.43 13.14-.07 5.07.55 10.87 4.43 14.56 2.38 2.22 6.32 1.9 8.43-.54 3.29-3.74 3.86-9.02 3.92-13.79-.29-4.23-.96-8.85-3.91-12.11-1.81-2.08-5.07-2.78-7.44-1.26m134.72-.55c-3.92 1.51-5.52 5.93-6.2 9.74-.63 5.53-.68 11.62 2.35 16.52 1.49 2.45 4.68 4.41 7.56 3.15 3.21-1.22 4.8-4.67 5.63-7.79 1.29-5.87 1.22-12.38-1.58-17.81-1.39-2.76-4.63-4.94-7.76-3.81m-203.9 26.16c-9.64 2.29-16.99 11.75-16.66 21.68-.28 10.19 7.42 19.79 17.39 21.83 10.56 2.7 22.37-3.73 26-13.96 3.11-8.3.84-18.25-5.69-24.25-5.46-5.26-13.74-7.34-21.04-5.3m266.05.09c-9.74 2.55-17.17 12.43-16.26 22.58.04 10.07 8.06 19.15 17.87 20.98 10.53 2.39 22.07-4.18 25.52-14.38 2.71-7.42 1.14-16.2-4.05-22.15-5.47-6.53-14.9-9.48-23.08-7.03z"}),c.a.createElement("path",{fill:"#010101",stroke:"#010101",d:"M919.48 501.76c2.37-1.52 5.63-.82 7.44 1.26 2.95 3.26 3.62 7.88 3.91 12.11-.06 4.77-.63 10.05-3.92 13.79-2.11 2.44-6.05 2.76-8.43.54-3.88-3.69-4.5-9.49-4.43-14.56.2-4.74 1.21-10.32 5.43-13.14z"}),c.a.createElement("path",{fill:"#010102",stroke:"#010102",d:"M1054.2 501.21c3.13-1.13 6.37 1.05 7.76 3.81 2.8 5.43 2.87 11.94 1.58 17.81-.83 3.12-2.42 6.57-5.63 7.79-2.88 1.26-6.07-.7-7.56-3.15-3.03-4.9-2.98-10.99-2.35-16.52.68-3.81 2.28-8.23 6.2-9.74z"}),c.a.createElement("path",{fill:"#FFF4E9",stroke:"#FFF4E9",d:"M1168.97 523.92c.13-4.87-.45-9.83.99-14.56.78 7.39.79 14.9-.03 22.29-.67-2.53-1.08-5.12-.96-7.73z"}),c.a.createElement("path",{fill:"#FED8CB",stroke:"#FED8CB",d:"M780.81 525.65c3.7-5.87 10.47-9.11 17.19-10.03-.39 11.91.68 23.89 3.41 35.5-7.8-.17-16.07-3.36-20.48-10.08-3.08-4.51-3.12-10.83-.12-15.39z"}),c.a.createElement("path",{fill:"#FDD8CB",stroke:"#FDD8CB",d:"M1180.36 515.6c7.57 1.05 15.47 5.15 18.48 12.55 2.18 4.99.66 10.94-2.89 14.9-4.71 5.42-11.98 7.84-19 8.12 2.82-11.62 3.73-23.64 3.41-35.57z"}),c.a.createElement("path",{fill:"#F982A2",stroke:"#F982A2",d:"M850.3 527.37c7.3-2.04 15.58.04 21.04 5.3 6.53 6 8.8 15.95 5.69 24.25-3.63 10.23-15.44 16.66-26 13.96-9.97-2.04-17.67-11.64-17.39-21.83-.33-9.93 7.02-19.39 16.66-21.68zM1116.35 527.46c8.18-2.45 17.61.5 23.08 7.03 5.19 5.95 6.76 14.73 4.05 22.15-3.45 10.2-14.99 16.77-25.52 14.38-9.81-1.83-17.83-10.91-17.87-20.98-.91-10.15 6.52-20.03 16.26-22.58z"}),c.a.createElement("path",{fill:"#FED8CB",stroke:"#FED8CB",d:"M969.7 561.72c4.35-2.69 9.46-4.41 14.56-4.64 3.36 1.37 6.96 1.08 10.37.04 4.82.28 9.62 1.94 13.79 4.41 3.18 2.04 6.47 5.26 6.24 9.35-.76 4.72-5.04 7.78-9.05 9.7-10.12 4.44-22.09 4.49-32.27.25-3.96-1.76-8.04-4.51-9.4-8.83-1.05-4.37 2.33-8.13 5.76-10.28z"}),c.a.createElement("path",{fill:"#FFF2E9",stroke:"#FFF2E9",d:"M984.26 557.08c3.43-.52 6.94-.48 10.37.04-3.41 1.04-7.01 1.33-10.37-.04z"}),c.a.createElement("path",{fill:"#FFF",stroke:"#FFF",d:"M908.01 595c19.21-5.44 39.09-8.47 59-9.57 13.57 7.16 30.83 7.3 44.34-.08 22.2 1.45 44.42 4.81 65.64 11.68 11.1 3.71 22.08 8.33 31.51 15.36 5.24 4.16 10.48 9.26 11.93 16.05 1.09 4.99-.84 10.09-3.83 14.04-3.94 5.16-9.25 9.1-14.78 12.4-10.48 6.23-22.08 10.23-33.73 13.64 18.26 34.79 17.86 78.83-1.84 112.94-9.7 16.92-24.22 31.31-41.95 39.67-17.66 8.49-38.43 10.33-57.27 4.88-18.39-5.17-34.57-16.89-46.3-31.83-13.52-17.13-21.43-38.41-23.31-60.08-2.15-22.57 2.62-45.5 12.79-65.7-13.59-3.76-27.1-8.74-38.75-16.83-6.23-4.58-12.69-10.51-13.71-18.6-.82-8.03 4.96-14.71 10.74-19.49 11.56-9.09 25.56-14.34 39.52-18.48m56.91 25.7c.83 7.41 4.24 14.76 10.59 18.99 8.89 6.39 22.1 5.51 29.98-2.13 4.79-4.29 7.37-10.57 7.81-16.91h-6.51c-.58 4.13-1.91 8.29-4.94 11.3-5.04 5.52-13.8 7.14-20.43 3.65-5.62-2.77-9.38-8.7-9.73-14.93-2.27.01-4.53 0-6.77.03z"}),c.a.createElement("path",{fill:"#010101",stroke:"#010101",d:"M964.92 620.7c2.24-.03 4.5-.02 6.77-.03.35 6.23 4.11 12.16 9.73 14.93 6.63 3.49 15.39 1.87 20.43-3.65 3.03-3.01 4.36-7.17 4.94-11.3h6.51c-.44 6.34-3.02 12.62-7.81 16.91-7.88 7.64-21.09 8.52-29.98 2.13-6.35-4.23-9.76-11.58-10.59-18.99z"}),c.a.createElement("path",{fill:"#BC0033",stroke:"#BC0033",d:"M827.38 652.58c4.57-9.76 9.21-19.59 15.35-28.49 1.63 1.53 3.28 3.05 4.89 4.61-.21 7.48 2.2 14.93 6.97 20.72 10.74 12.86 26.67 19.6 42 25.29-6.24 15.28-9.62 31.79-9.28 48.32-.78 37.19 16.09 75.14 46.33 97.37 9.13 6.65 19.36 11.83 30.21 15.01 24.01 6.68 50.78 3.59 72.22-9.29 32.3-18.87 52.18-55.26 54.66-92.12 1.16-7.91.91-16-.21-23.89-.9-12.25-4.42-24.1-8.55-35.59 9.42-3.21 18.62-7.2 27.06-12.49 8.55-5.46 16.82-12.64 20.25-22.48 1.25-3.24 1.11-6.73 1.31-10.13 1.34-2.12 3.46-3.63 5.24-5.39 21.16 33.99 33.34 73.2 37.29 112.93 1.13 10.97.66 22.04.8 33.06.41 25.28-3.95 50.44-10.91 74.7-11.05 37.09-30.22 72.12-57.55 99.73-26.79 27.02-62.27 46.64-100.52 50.2-14 .21-28.2 1.14-42.04-1.39-36.95-6.4-70.43-27.08-95.42-54.67-25.7-27.64-43.22-62.21-53.42-98.38-4.36-16.3-7.68-32.95-8.82-49.79-1.42-8.4-.62-16.97-1.51-25.41.8-8.36.19-16.8 1.35-25.12 2.49-30.07 10.03-59.73 22.3-87.31m157.9 209.95c-4.11 1.61-6.88 6.04-6.69 10.42.62 5.1 4.85 10.07 10.36 9.65 6.17.6 11.6-5.63 10.63-11.63-.43-6.64-8.27-11.15-14.3-8.44m.74 30.17c-4.46 1.34-7.39 5.77-7.43 10.33.19 4.52 3.58 8.64 7.9 9.89 6.17 2.12 13.43-3.48 13.13-9.95.6-6.92-7.17-12.42-13.6-10.27m1.07 30.27c-3.6.96-6.87 3.64-7.97 7.28-2.19 6.17 3.16 13.89 9.87 13.42 6.06.6 11.54-5.69 10.59-11.62-.3-5.94-6.88-10.38-12.49-9.08zM648.07 756.31c53.97-28.96 107.77-58.21 161.76-87.13-3.45 12.22-7.51 24.31-9.83 36.83-3.6 18.29-5.65 36.88-5.79 55.52-1.3 2.45-3.85 3.94-5.83 5.81-28.48 24.74-56.78 49.68-85.33 74.34-18.05-27.52-36.03-55.08-54.07-82.61-.54-.84-.84-1.76-.91-2.76zM1168.25 669.14c33.86 17.76 67.31 36.31 101.08 54.26 20.42 11.26 41.15 21.97 61.5 33.36-18.45 28.4-36.94 56.82-55.72 85.02-30.04-26.67-60.45-52.89-90.7-79.32-.78-9.47-.37-19.03-1.85-28.42-2.07-22.12-7.09-43.91-14.31-64.9z"}),c.a.createElement("path",{fill:"#1D6E33",stroke:"#1D6E33",d:"M618.34 787.37c6.78-8.18 16.51-13.51 26.75-16.03 16.11 24.14 31.73 48.62 47.84 72.76-6.64 8.35-16.59 13.72-26.94 15.92-14.04 3-29.37-.43-40.7-9.28-10.38-7.96-17.26-20.57-17.53-33.73-.37-10.75 3.51-21.54 10.58-29.64zM1333.04 771.5c17.78 3.28 33.25 17.65 36.74 35.56 3.44 15.8-3.13 32.95-15.7 42.96-14.75 12.31-36.83 14.53-53.85 5.71-5.61-2.86-10.82-6.69-14.79-11.58 15.97-24.15 31.78-48.4 47.6-72.65z"}),c.a.createElement("path",{fill:"#010000",stroke:"#010000",d:"M985.28 862.53c6.03-2.71 13.87 1.8 14.3 8.44.97 6-4.46 12.23-10.63 11.63-5.51.42-9.74-4.55-10.36-9.65-.19-4.38 2.58-8.81 6.69-10.42z"}),c.a.createElement("path",{fill:"#FDBF2C",stroke:"#FDBF2C",d:"M1329.93 896.82c2.49-5.84 5.5-11.46 8.38-17.12 5.18 10.51 10.46 20.98 15.54 31.55 11.63 1.66 23.24 3.52 34.91 4.97-4.8 5.2-10.04 10.18-15.21 14.92-.43-.01-1.29-.02-1.72-.03-2.38 1.07-3.5 3.39-4.15 5.78-1.17 1.55-2.71 2.79-4.05 4.18 1.79 11.24 4.02 22.41 5.61 33.69l-.5.03.01.5c-10.33-4.98-20.31-10.64-30.52-15.84-5.06 2.6-9.98 5.49-15.16 7.84-5.21 1.67-9.54 5.2-14.77 6.79-.58-5.24 1.8-10.06 2.08-15.2.3-4.05 1.87-7.88 2.06-11.95-.01-2.3 1.51-4.81.42-6.95-7.71-8.01-16.51-14.97-23.81-23.37 11.14-1.09 22.14-3.34 33.25-4.63 3.25-4.6 5.74-9.84 7.63-15.16z"}),c.a.createElement("path",{fill:"#020000",stroke:"#020000",d:"M986.02 892.7c6.43-2.15 14.2 3.35 13.6 10.27.3 6.47-6.96 12.07-13.13 9.95-4.32-1.25-7.71-5.37-7.9-9.89.04-4.56 2.97-8.99 7.43-10.33z"}),c.a.createElement("path",{fill:"#FED8CB",stroke:"#FED8CB",d:"M1322.66 911.36c2.51-4.8 4.7-9.77 7.27-14.54-1.89 5.32-4.38 10.56-7.63 15.16-11.11 1.29-22.11 3.54-33.25 4.63 7.3 8.4 16.1 15.36 23.81 23.37 1.09 2.14-.43 4.65-.42 6.95-.19 4.07-1.76 7.9-2.06 11.95-.28 5.14-2.66 9.96-2.08 15.2 5.23-1.59 9.56-5.12 14.77-6.79-5.28 2.94-10.75 5.54-15.99 8.54 1.93-11.64 3.99-23.25 5.96-34.87-8.44-8.21-16.9-16.39-25.35-24.58 11.67-1.55 23.31-3.35 34.97-5.02z"}),c.a.createElement("path",{fill:"#010000",stroke:"#010000",d:"M987.09 922.97c5.61-1.3 12.19 3.14 12.49 9.08.95 5.93-4.53 12.22-10.59 11.62-6.71.47-12.06-7.25-9.87-13.42 1.1-3.64 4.37-6.32 7.97-7.28z"}),c.a.createElement("path",{fill:"#3E2A09",stroke:"#3E2A09",d:"M1006.35 1004.51c33.65-3.39 65.44-18.29 91.45-39.59.39 27.05-.2 54.12.31 81.17 25.35-1.2 51.03.45 75.54 7.37 15.01 4.37 30.08 10.43 41.72 21.17 5.3 5.21 9.81 12.27 9.14 20-.8 8.53-6.67 15.59-13.22 20.64-13.47 10.38-29.91 15.97-46.28 19.84-25.51 5.79-51.98 6.71-77.96 4.16-23.2-2.42-46.51-8.43-66.41-20.94-10.23-6.42-16.21-17.79-18.85-29.28-5.72-27.39-.06-55.29 1.67-82.79-.19-1.69 1.77-1.55 2.89-1.75zM880.44 965.15c3.7 1.91 6.59 4.98 10.03 7.29 24.64 17.99 53.99 29.57 84.4 32.5 1.31 21.37 4.81 42.64 4.16 64.1-.52 11.24-1.89 22.77-7.01 32.95-3.26 6.99-8.67 12.88-15.22 16.92-14.39 8.87-30.64 14.33-47.15 17.62-25.18 4.85-51.13 5.15-76.56 2.12-16.69-2.3-33.29-6.18-48.73-13.04-8.07-3.77-15.87-8.43-22.19-14.76-5.09-5.24-9.2-12.35-8.17-19.9 1.03-9.32 8.31-16.29 15.45-21.6 10.95-7.81 23.74-12.64 36.61-16.22 19.49-5.39 39.78-7.49 59.96-7.41 4.83-.09 9.68.65 14.5.06-.23-26.88-.06-53.75-.08-80.63z"})),c.a.createElement("path",{fill:"#FFF2B3",stroke:"#FFF2B3",strokeWidth:".394",d:"M1368.74 974.79l.5-.03c-.12.13-.37.39-.49.53l-.01-.5z"}),c.a.createElement("g",{strokeWidth:".394"},c.a.createElement("path",{fill:"#010100",stroke:"#010100",d:"M267.41 724.97c41.48-60.05 83.15-119.97 124.57-180.05 19.2 27.98 38.57 55.86 57.94 83.73 9.9-3.38 21.3-2.35 30.29 3.08 9.18 5.33 15.68 14.94 17.29 25.43 1.73 10.2-1.33 20.97-7.89 28.93 8.96 12.95 17.98 25.87 26.88 38.87-17.23-.05-34.46.1-51.68-.08 27.95 40 55.55 80.25 83.43 120.31-17.55-.12-35.09-.04-52.64-.05 7.27 10.6 14.64 21.12 21.93 31.71 10.41-6.44 24.15-7 35.06-1.45 13.33 6.44 21.66 21.71 19.76 36.42-.97 9.57-6.08 18.53-13.61 24.49 14.29 20.73 28.61 41.45 43.02 62.1-62.31-.08-124.62.08-186.93-.07.07 8.55.02 17.1.03 25.65 25.61.02 51.22 0 76.83.01-11.42 41.9-22.75 83.83-34.16 125.74l-.4.39c-42.05.07-84.11-.02-126.16.04-1.48-.25-3.33.52-4.57-.43-11.38-41.91-22.77-83.83-34.14-125.74h76.91c.01-8.54-.07-17.08.04-25.61-62.36.01-124.71.02-187.07 0 35.53-51 70.85-102.16 106.18-153.29-17.54.11-35.08-.06-52.61.08 27.85-40.05 55.45-80.29 83.41-120.28-17.24.14-34.47.01-51.71.07m20.78-12.67c-.62.9-1.22 1.8-1.81 2.73 16.44-.07 32.9.32 49.33-.19.69.19 1.38.41 2.07.63-5.53 7.32-10.48 15.06-15.81 22.52-22.38 32.49-44.99 64.82-67.29 97.35 17.5-.07 35-.04 52.5-.02-35.32 51.08-70.72 102.1-106.02 153.19 127.2.06 254.41.04 381.61.01-10.83-15.76-21.78-31.42-32.58-47.2-10.82 4.21-23.63 3.38-33.38-3.11-12.29-7.62-18.97-23.15-15.93-37.31 1.18-6.69 4.51-12.81 8.98-17.88-11.18-15.79-22.06-31.79-33.07-47.69 17.51-.04 35.02-.05 52.53 0-27.71-39.98-55.26-80.08-83.15-119.94.52-.15 1.57-.43 2.1-.57 16.42.56 32.89.11 49.33.23-.32-.47-.96-1.4-1.28-1.87-4.7-6.79-9.27-13.68-14.17-20.32-8.72 5.85-19.97 7.68-30.09 4.88-9.6-2.59-17.94-9.39-22.48-18.23-4.75-9.27-5.38-20.72-1.3-30.35 2.51-6.52 7.27-11.83 12.69-16.11-16.49-23.4-32.57-47.09-48.99-70.54-34.68 49.88-69.18 99.87-103.79 149.79m168.05-76.02c-11.96 2.33-21.45 13.5-21.61 25.71-.59 11.22 6.76 22.22 17.23 26.18 7.35 2.98 15.95 2.38 22.87-1.47 10.75-5.61 16.59-19 13.28-30.7-3.27-13.57-18.11-22.91-31.77-19.72m74.91 244.88c-12.44 2.21-22.41 14.14-21.83 26.85-.48 14.51 13.04 27.88 27.62 26.77 15.32.43 28.48-14.66 26.48-29.77-1.19-15.36-17.2-27.36-32.27-23.85M379.32 998.19l.1.39c-1.16 8.38-.2 16.97-.48 25.44 8.7.14 17.41.13 26.11.02-.22-8.59.55-17.25-.39-25.78-8.44.18-16.91.35-25.34-.07m-73.86 35.51c.14.83.4 2.5.54 3.33 6.43 23.22 12.6 46.51 18.95 69.74 3.29 11.19 5.78 22.62 9.45 33.68 38.56-.25 77.12.14 115.68-.19 2.8-12.02 6.43-23.84 9.52-35.79 6.39-23.41 12.61-46.86 19.15-70.22-2.53-.78-5.18-.53-7.77-.52-55.17-.02-110.35.02-165.52-.03z"}),c.a.createElement("path",{fill:"#1D6E33",stroke:"#1D6E33",d:"M288.19 712.3c34.61-49.92 69.11-99.91 103.79-149.79 16.42 23.45 32.5 47.14 48.99 70.54-5.42 4.28-10.18 9.59-12.69 16.11-4.08 9.63-3.45 21.08 1.3 30.35 4.54 8.84 12.88 15.64 22.48 18.23 10.12 2.8 21.37.97 30.09-4.88 4.9 6.64 9.47 13.53 14.17 20.32-9.4 1.26-18.91.22-28.36.56-6.56.34-13.31-.93-19.69 1.08-.53.14-1.58.42-2.1.57 27.89 39.86 55.44 79.96 83.15 119.94-17.51-.05-35.02-.04-52.53 0 11.01 15.9 21.89 31.9 33.07 47.69-4.47 5.07-7.8 11.19-8.98 17.88-3.04 14.16 3.64 29.69 15.93 37.31 9.75 6.49 22.56 7.32 33.38 3.11 10.8 15.78 21.75 31.44 32.58 47.2-127.2.03-254.41.05-381.61-.01 35.3-51.09 70.7-102.11 106.02-153.19-17.5-.02-35-.05-52.5.02 22.3-32.53 44.91-64.86 67.29-97.35 5.33-7.46 10.28-15.2 15.81-22.52-.69-.22-1.38-.44-2.07-.63-4.71-1.71-9.78-1.07-14.67-1.13-8.02.09-16.05-.2-24.06.11-3 .05-6.23.35-8.79-1.52m52.25 37.34c-14.42 2.21-26.89 14-29.52 28.41-3.58 15.62 4.91 32.88 19.37 39.7 14.32 7.36 33.23 3.55 43.53-8.84 9.07-10.26 11.28-25.84 5.62-38.27-6.31-14.75-23.19-23.95-39-21z"}),c.a.createElement("path",{fill:"#FDBF2C",stroke:"#FDBF2C",d:"M456.24 636.28c13.66-3.19 28.5 6.15 31.77 19.72 3.31 11.7-2.53 25.09-13.28 30.7-6.92 3.85-15.52 4.45-22.87 1.47-10.47-3.96-17.82-14.96-17.23-26.18.16-12.21 9.65-23.38 21.61-25.71z"}),c.a.createElement("path",{fill:"#376443",stroke:"#376443",d:"M286.38 715.03c.59-.93 1.19-1.83 1.81-2.73 2.56 1.87 5.79 1.57 8.79 1.52 8.01-.31 16.04-.02 24.06-.11 4.89.06 9.96-.58 14.67 1.13-16.43.51-32.89.12-49.33.19z"}),c.a.createElement("path",{fill:"#386544",stroke:"#386544",d:"M467.96 713.74c9.45-.34 18.96.7 28.36-.56.32.47.96 1.4 1.28 1.87-16.44-.12-32.91.33-49.33-.23 6.38-2.01 13.13-.74 19.69-1.08z"}),c.a.createElement("path",{fill:"#010101",stroke:"#010101",d:"M340.44 749.64c15.81-2.95 32.69 6.25 39 21 5.66 12.43 3.45 28.01-5.62 38.27-10.3 12.39-29.21 16.2-43.53 8.84-14.46-6.82-22.95-24.08-19.37-39.7 2.63-14.41 15.1-26.2 29.52-28.41m.56 9.03c-12.18 2.28-22.1 13.81-21.66 26.34-.88 15.15 13.59 28.89 28.68 27.42 15.81-.44 28.69-16.98 24.94-32.42-2.47-14.26-17.8-24.55-31.96-21.34z"}),c.a.createElement("path",{fill:"#BC0033",stroke:"#BC0033",d:"M341 758.67c14.16-3.21 29.49 7.08 31.96 21.34 3.75 15.44-9.13 31.98-24.94 32.42-15.09 1.47-29.56-12.27-28.68-27.42-.44-12.53 9.48-24.06 21.66-26.34z"}),c.a.createElement("path",{fill:"#1C3671",stroke:"#1C3671",d:"M531.15 881.16c15.07-3.51 31.08 8.49 32.27 23.85 2 15.11-11.16 30.2-26.48 29.77-14.58 1.11-28.1-12.26-27.62-26.77-.58-12.71 9.39-24.64 21.83-26.85z"}),c.a.createElement("path",{fill:"#8B4801",stroke:"#8B4801",d:"M379.32 998.19c8.43.42 16.9.25 25.34.07-1.44 3.06-1.09 6.48-1.05 9.77.11 4.91.07 9.84-.03 14.76-7.7 0-15.44.94-23.1-.11-.8-8.02.83-16.24-1.06-24.1l-.1-.39z"}),c.a.createElement("path",{fill:"#754E24",stroke:"#754E24",d:"M379.42 998.58c1.89 7.86.26 16.08 1.06 24.1 7.66 1.05 15.4.11 23.1.11.1-4.92.14-9.85.03-14.76-.04-3.29-.39-6.71 1.05-9.77.94 8.53.17 17.19.39 25.78-8.7.11-17.41.12-26.11-.02.28-8.47-.68-17.06.48-25.44z"}),c.a.createElement("path",{fill:"#BC0033",stroke:"#BC0033",d:"M305.46 1033.7c55.17.05 110.35.01 165.52.03 2.59-.01 5.24-.26 7.77.52-6.54 23.36-12.76 46.81-19.15 70.22-3.09 11.95-6.72 23.77-9.52 35.79-38.56.33-77.12-.06-115.68.19-3.67-11.06-6.16-22.49-9.45-33.68-6.35-23.23-12.52-46.52-18.95-69.74-.14-.83-.4-2.5-.54-3.33z"})),c.a.createElement("g",{strokeWidth:".394"},c.a.createElement("path",{fill:"#000102",stroke:"#000102",d:"M1471.45 938.53c25.49-22.08 51.12-44.04 76.76-65.95 8.89 26.62 17.81 53.24 26.8 79.83 6.32-.1 12.65-.03 18.98-.03 8.91-26.6 17.87-53.19 26.76-79.79 25.66 21.89 51.23 43.89 76.77 65.93-11.77 5.87-23.4 12.01-35.11 18-3.11 1.83-6.67 2.89-9.48 5.18 24.1-.24 48.2-.03 72.31-.11-.11 23.76-.02 47.51-.05 71.27 4.18.01 8.37.01 12.57 0-.16 12.31-.05 24.63-.06 36.95-4.18 0-8.36 0-12.53-.02.06 23.76-.02 47.52.04 71.28-40.72-.07-81.45-.05-122.17-.01-.03 3.03-.03 6.07.01 9.12-12.35-.05-24.7-.03-37.05-.01-.02-3.07-.03-6.14 0-9.2-40.71.17-81.42-.03-122.13.1.09-23.75-.02-47.51.06-71.27-4.22-.01-8.43.06-12.64-.04.05-12.29.13-24.59-.03-36.88 4.21-.03 8.43 0 12.66-.03-.05-23.77.02-47.54-.03-71.3 24.11.15 48.22-.06 72.33.1-14.78-7.94-29.81-15.49-44.77-23.12m59.73-38.38c-13.85 12.21-28.12 23.92-41.94 36.16 15.93 8.58 32.17 16.6 48.22 24.95 9.43.76 19.03.03 28.53.39.28-2.35.05-4.73-.71-6.95-7.18-21.59-14.51-43.12-21.66-64.71-4.55 2.86-8.19 6.91-12.44 10.16m94.19-10.21c-7.27 21.79-14.6 43.56-21.9 65.34-.83 2.02-.76 4.21-.28 6.32 9.4-.24 18.89.41 28.24-.35 16.16-8.22 32.34-16.44 48.34-24.97-11.8-10.2-23.72-20.28-35.5-30.51-6.39-5.17-12.25-11-18.9-15.83m-49.34 72.31c-.36 23.49-.24 47.01-.03 70.5 5.68.02 11.36-.04 17.05 0 .53-6.88.02-13.79.19-20.68-.14-16.58.26-33.19-.16-49.76-5.69-.04-11.37.02-17.05-.06m-122.4 9.27c.04 20.36.17 40.72-.05 61.07 37.49.32 74.99.07 112.49.12-.04-20.43.18-40.87-.11-61.29-37.44.12-74.89-.1-112.33.1m149.63-.1c-.21 14.18.03 28.38-.06 42.57.2 6.25-.59 12.49.03 18.73 37.39-.05 74.8.16 112.19-.11-.08-20.36 0-40.72-.03-61.07-37.38-.24-74.75.01-112.13-.12m-162.07 71.41c.21 5.67.11 11.34.1 17.01 48.57-.04 97.13.13 145.69-.01 6.67-.16 13.34.64 20.01.01 40.26-.03 80.51.06 120.77-.04-.01-5.69-.02-11.38.04-17.06-70.6-.29-141.21-.04-211.81-.12-24.93.14-49.89-.29-74.8.21m12.49 26.86c0 20.52-.02 41.05 0 61.58 37.47-.01 74.94.01 112.41-.01.02-20.52-.02-41.03.03-61.55-37.48 0-74.96.06-112.44-.02m122.21.08c-.1 23.51-.02 47.02-.04 70.54 5.8.01 11.61.15 17.42-.14-.08-23.45.02-46.9-.06-70.34-5.78-.19-11.56-.12-17.32-.06m27.03.02c-.22 18.42 0 36.85-.12 55.28.01 2.1-.22 4.32.72 6.3 37.28-.24 74.56 0 111.84-.1.11-20.51.05-41.02.04-61.52-37.49-.02-74.99-.12-112.48.04z"}),c.a.createElement("path",{fill:"#1C3671",stroke:"#1C3671",d:"M1531.18 900.15c4.25-3.25 7.89-7.3 12.44-10.16 7.15 21.59 14.48 43.12 21.66 64.71.76 2.22.99 4.6.71 6.95-9.5-.36-19.1.37-28.53-.39-16.05-8.35-32.29-16.37-48.22-24.95 13.82-12.24 28.09-23.95 41.94-36.16zM1625.37 889.94c6.65 4.83 12.51 10.66 18.9 15.83 11.78 10.23 23.7 20.31 35.5 30.51-16 8.53-32.18 16.75-48.34 24.97-9.35.76-18.84.11-28.24.35-.48-2.11-.55-4.3.28-6.32 7.3-21.78 14.63-43.55 21.9-65.34zM1576.03 962.25c5.68.08 11.36.02 17.05.06.42 16.57.02 33.18.16 49.76-.17 6.89.34 13.8-.19 20.68-5.69-.04-11.37.02-17.05 0-.21-23.49-.33-47.01.03-70.5z"}),c.a.createElement("path",{fill:"#047DB6",stroke:"#047DB6",d:"M1453.63 971.52c37.44-.2 74.89.02 112.33-.1.29 20.42.07 40.86.11 61.29-37.5-.05-75 .2-112.49-.12.22-20.35.09-40.71.05-61.07zM1603.26 971.42c37.38.13 74.75-.12 112.13.12.03 20.35-.05 40.71.03 61.07-37.39.27-74.8.06-112.19.11-.62-6.24.17-12.48-.03-18.73.09-14.19-.15-28.39.06-42.57z"}),c.a.createElement("path",{fill:"#1C3671",stroke:"#1C3671",d:"M1441.19 1042.83c24.91-.5 49.87-.07 74.8-.21 70.6.08 141.21-.17 211.81.12-.06 5.68-.05 11.37-.04 17.06-40.26.1-80.51.01-120.77.04-6.67.63-13.34-.17-20.01-.01-48.56.14-97.12-.03-145.69.01.01-5.67.11-11.34-.1-17.01z"}),c.a.createElement("path",{fill:"#267CA8",stroke:"#267CA8",d:"M1453.68 1069.69c37.48.08 74.96.02 112.44.02-.05 20.52-.01 41.03-.03 61.55-37.47.02-74.94 0-112.41.01-.02-20.53 0-41.06 0-61.58m1.48 1.5c-.64 9.93-.07 19.89-.23 29.84.19 9.53-.31 19.1.32 28.6 36.53.11 73.05-.03 109.58.03.18-19.54.48-39.09-.08-58.62-26.55-.29-53.14-.09-79.71-.12-9.96.21-19.94-.42-29.88.27z"}),c.a.createElement("path",{fill:"#1C3671",stroke:"#1C3671",d:"M1575.89 1069.77c5.76-.06 11.54-.13 17.32.06.08 23.44-.02 46.89.06 70.34-5.81.29-11.62.15-17.42.14.02-23.52-.06-47.03.04-70.54z"}),c.a.createElement("path",{fill:"#2678A1",stroke:"#2678A1",d:"M1602.92 1069.79c37.49-.16 74.99-.06 112.48-.04.01 20.5.07 41.01-.04 61.52-37.28.1-74.56-.14-111.84.1-.94-1.98-.71-4.2-.72-6.3.12-18.43-.1-36.86.12-55.28m1.55 1.72c-.14 19.31-.26 38.65.08 57.96 34.81.58 69.65-.02 104.47.28 1.97.03 5.32.27 4.98-2.72-.48-18.62.07-37.26-.27-55.89-5.56-.73-11.16-.29-16.73-.36-28 .06-56 .06-84 .02-2.87-.02-5.84-.52-8.53.71z"}),c.a.createElement("path",{fill:"#047DB6",stroke:"#047DB6",d:"M1455.16 1071.19c9.94-.69 19.92-.06 29.88-.27 26.57.03 53.16-.17 79.71.12.56 19.53.26 39.08.08 58.62-36.53-.06-73.05.08-109.58-.03-.63-9.5-.13-19.07-.32-28.6.16-9.95-.41-19.91.23-29.84zM1604.47 1071.51c2.69-1.23 5.66-.73 8.53-.71 28 .04 56 .04 84-.02 5.57.07 11.17-.37 16.73.36.34 18.63-.21 37.27.27 55.89.34 2.99-3.01 2.75-4.98 2.72-34.82-.3-69.66.3-104.47-.28-.34-19.31-.22-38.65-.08-57.96z"}))),c.a.createElement("p",null,"For visste du at #6A756C decodes til 'jul' i ASCII ?"),c.a.createElement("div",null," "),c.a.createElement("button",{className:"Modal__button",onClick:this.closeModal},"Jeje, whatever, ta meg tilbake til app'en a!")))}}]),t}(c.a.Component);var v=function(){var e=Object(l.useState)([0,50,50]),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(""),m=Object(s.a)(r,2),h=m[0],E=m[1],u=o.a.hsl.rgb(a),p=function(e){var t="";return e&&6===e.length&&(t=(t=e.charAt(0)+e.charAt(2)+e.charAt(4)).toUpperCase()),t}(h);return c.a.createElement("div",{className:"App"},c.a.createElement(z,{hex:h}),c.a.createElement("div",{className:"oneline"},c.a.createElement(i,{hex:h,setHex:E,setHsl:n}),c.a.createElement("div",null,c.a.createElement("p",null,"hue: ",a[0]," saturation: ",a[1]," lightness: ",a[2]),c.a.createElement("p",null,"shorthand: #",p))),c.a.createElement("div",{className:"oneline"},c.a.createElement(f,{rgb:u}),c.a.createElement(k,{hsl:a,setHsl:n,setHex:E})),c.a.createElement(M,{hsl:a,setHex:E,setHsl:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.f7cdc8a2.chunk.js.map