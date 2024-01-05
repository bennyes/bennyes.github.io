function cssloader(csslink,rel='stylesheet',crossorigin=false){
  let css=document.createElement('link');
  css.rel=rel;
  css.href=csslink;
  if(crossorigin){
    css.setAttribute("crossorigin", "crossorigin");
  }
  document.head.appendChild(css);
}
function load_head(pagetype='home'){
  cssloader('https://fonts.googleapis.com','preconnect');
  cssloader('https://fonts.gstatic.com','preconnect');
  cssloader('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
}
