function cssloader(csslink,rel='stylesheet',crossorigin=false){
  let css=document.createElement('link');
  css.rel=rel;
  css.href=csslink;
  if(crossorigin){
    css.crossOrigin=crossorigin;
  }
  document.head.appendChild(css);
}
function scriptloader(link,async){
  
}
function load_nav(navlocation){
  let target=document.getElementById(navlocation);
  const navs=[
    {
      text:'Top',
      link:'#top'
    },
    {
      text:'YouTube',
      link:'#youtube'
    }
  ];let i=0;navscounts=navs.length;
  for(i;i<navscounts;i++){
    let text=navs[i].text;
    let link=navs[i].link;
    let navmenu=document.createElement('a');
    navmenu.textContent=text;
    navmenu.href=link;
    target.appendChild(navmenu);
  }
}
function load_header(){
  const logosrc='';
  let header=document.getElementById('header');
  let logo=document.createElement('img');
  logo.src=logosrc;
  header.appendChild(logo);
  let nav=document.createElement('nav');
  nav.id='topmenu';
  header.appendChild(nav);
  load_nav('topmenu');
}
function load_head(pagetype='home'){
  cssloader('https://fonts.googleapis.com','preconnect');
  cssloader('https://fonts.gstatic.com','preconnect','crossorigin');
  cssloader('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  cssloader(`/styles/main.css`);
  cssloader(`/styles/${pagetype}.css`);
}
