function bajgen(msg,link,judul){var bjcont=document.createElement('div');bjcont.classList.add('baca-juga','parts');document.currentScript.insertAdjacentElement('beforebegin',bjcont);var bjmsg=document.createElement('div');bjmsg.classList.add('baca-juga-ttl');bjmsg.innerHTML=(!msg)?'<u>Baca juga</u>:':`<u>${msg}</u>:`;bjcont.appendChild(bjmsg);link=link.split("|||");judul=judul.split("|||");for(var i=0;i<link.length;i++){var bjisi=document.createElement('span');bjisi.classList.add('baca-juga-isi');bjcont.appendChild(bjisi);var bjlink=document.createElement('a');bjlink.href=link[i];bjlink.innerHTML=judul[i];bjisi.appendChild(bjlink);}}
let athr=[],srcyr=[],srctl=[],srclink=[],srcacs=[],linkrel=[],lcs=[];function refData(name,yrswr,ttl,link,accdt,rel,lic){athr.push(name);if(!yrswr){yrswr='tahun penulisan tidak diketahui';}srcyr.push(yrswr);srctl.push(ttl);if(!link.includes('https://')&&!link.includes('http://')){link=`https://${link}`;}if(!link.endsWith('/')&&(!link.endsWith('.php')&&!link.endsWith('.htm')&&!link.endsWith('.html')&&!link.endsWith('.asp'))&&!link.includes('?')){link=`${link}/`}srclink.push(link);srcacs.push(accdt);if(!rel){rel='nofollow';}linkrel.push(rel);if(!lic){lic='';}lcs.push(lic);}function refPrint(){let an=document.getElementsByClassName('href-ref'),li,co,dat,tgl,bln,thn,dafpus=document.getElementById('daf-pus'),cox=0;for(co=0;co<an.length;co++){if(srclink.includes(srclink[co])&&srclink.indexOf(srclink[co])!=co){continue;}else{dafpus.insertAdjacentHTML('beforeend','<li></li>');}}for(co=0;co<an.length;co++){li=document.querySelectorAll("#daf-pus > li");dat=new Date(srcacs[co]);tgl=dat.getDate();bln=dat.getMonth();bltxt=bulan[bln];thn=dat.getFullYear();jam=dat.getHours();if(jam<10){jam=`0${jam}`;}mnt=dat.getMinutes();if(mnt<10){mnt=`0${mnt}`;}if(srclink.includes(srclink[co])&&srclink.indexOf(srclink[co])!=co){an[co].href=`#ref${srclink.indexOf(srclink[co])+1}`;if(!an[co].innerHTML){an[co].innerHTML=`<span id='point${srclink.indexOf(srclink[co])+1}'></span><sup>[${srclink.indexOf(srclink[co])+1}]</sup>`;}else{an[co].innerHTML=`<span id='point${srclink.indexOf(srclink[co])+1}'></span>${an[co].innerHTML}<sup>[${srclink.indexOf(srclink[co])+1}]</sup>`;}continue;}else{li[cox].innerHTML=`<span id='ref${cox+1}' class='jumpto'></span>${athr[co]}. ${srcyr[co]}. <b>${srctl[co]}</b>. <a href='${srclink[co]}' target='_blank' rel='${linkrel[co]}'>${srclink[co]}</a>. Diakses tanggal <time ttl='${srcacs[co]}' datetime='${srcacs[co]}'>${tgl} ${bltxt} ${thn} pukul ${jam}:${mnt}.</time>`;if(lcs[co]){li[cox].insertAdjacentHTML('beforeend',` Lisensi: ${lcs[co]}`);}an[co].href=`#ref${cox+1}`;if(!an[co].innerHTML){an[co].innerHTML=`<span id='point${cox+1}'></span><sup>[${cox+1}]</sup>`;}else{an[co].innerHTML=`<span id='point${cox+1}'></span>${an[co].innerHTML}<sup>[${cox+1}]</sup>`;}cox++;}}}
function showextvid(btnid,vidid,vidcls,src){var vidmark=document.createElement('div');vidmark.classList.add('videomark');vidmark.id=vidid;document.currentScript.insertAdjacentElement('beforebegin',vidmark);var vidframe=document.createElement('iframe');vidmark.appendChild(vidframe);$(`#${btnid}`).click(function(){$(`#${vidid}`).toggleClass("videocontainer");$(`#${vidid} iframe`).attr("src", src);if(src.includes("youtube")||src.includes("youtu.be")){$(`#${vidid} iframe`).attr("ttl","YouTube video player");$(`#${vidid} iframe`).toggleClass("youtubevid");}else{$(`#${vidid} iframe`).toggleClass(vidcls);}$(`#${vidid} iframe`).attr("frameborder", "0");$(`#${vidid} iframe`).attr("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");$(`#${vidid} iframe`).attr("allowfullscreen");});}
function showImage(imglink,imgalt,imgcapt,imgcls,lazy,flex){let orlink,phlink;(imglink=imglink.split("|||"))[1]?(orlink=imglink[0],phlink=imglink[1]):(orlink=imglink[0],phlink=imglink[0]),flex&&document.write("<div class='imgflex'>"),flex?(lazy?document.write(`<a href='${orlink}'><div class='flexinside'><img alt='${imgalt}' class='${imgcls}' loading='lazy' src='${phlink}'/></div></a>`):document.write(`<a href='${orlink}'><img alt='${imgalt}' class='${imgcls}' src='${phlink}'/></a>`),""!=imgcapt&&document.write(`<div class='imgcaption'>${imgcapt}</div>`)):(1==lazy?document.write(`<a href='${orlink}'><img alt='${imgalt}' class='${imgcls}' loading='lazy' src='${phlink}'/></a>`):document.write(`<a href='${orlink}'><img alt='${imgalt}' class='${imgcls}' src='${phlink}'/></a>`),""!=imgcapt&&document.write(`<div class='imgcaption'>${imgcapt}</div>`)),flex&&document.write("</div>");}
function abbr(abr){
    for(let i=0;i<abbr.length;i++){
        var ket=document.createElement('div');
        ket.classList.add('pjgan');
        var ttl=abr[i].title.split('|||');
        abr[i].id=ttl[0].replace(/\s+/g,'-').toLowerCase();
        console.log(`abr[${i}] = ${abr[i].innerHTML}`);
        console.log(`abr[${i}].id = ${abr[i].id}`);
        abr[i].insertAdjacentElement('afterend',ket);
        abr[i].addEventListener("click",function(){
            ket.classList.toggle("pjganshow");
        });
        var ipjg=document.createElement('b');
        ipjg.classList.add('kpnjngn');
        ipjg.innerHTML=ttl[0];
        ket.appendChild(ipjg);
        abr[i].title=ttl[0];
        if(ttl[1]){var desc=ttl[1];ket.appendChild(desc);}
    }
}
window.onload=function(){
    abbr(document.querySelectorAll('abbr'));
}
