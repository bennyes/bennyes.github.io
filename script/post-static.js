function bajgen(msg,link,judul){var bjcont=document.createElement('div');bjcont.classList.add('baca-juga','parts');document.currentScript.insertAdjacentElement('beforebegin',bjcont);var bjmsg=document.createElement('div');bjmsg.classList.add('baca-juga-ttl');bjmsg.innerHTML=(!msg)?'<u>Baca juga</u>:':`<u>${msg}</u>:`;bjcont.appendChild(bjmsg);link=link.split("|||");judul=judul.split("|||");for(var i=0;i<link.length;i++){var bjisi=document.createElement('span');bjisi.classList.add('baca-juga-isi');bjcont.appendChild(bjisi);var bjlink=document.createElement('a');bjlink.href=link[i];bjlink.innerHTML=judul[i];bjisi.appendChild(bjlink);}}
let athr=[],srcyr=[],srctl=[],srclink=[],srcacs=[],linkrel=[],lcs=[];function refData(name,yrswr,ttl,link,accdt,rel,lic){athr.push(name);if(!yrswr){yrswr='tahun penulisan tidak diketahui';}srcyr.push(yrswr);srctl.push(ttl);

if(!link.includes('https://')&&!link.includes('http://')&&!link.includes('ISBN')){link=`https://${link}`;}
if(!link.endsWith('/')&&(!link.endsWith('.php')&&!link.endsWith('.htm')&&!link.endsWith('.html')&&!link.endsWith('.asp')&&!link.includes('ISBN'))&&!link.includes('?')){link=`${link}/`}srclink.push(link);srcacs.push(accdt);if(!rel){rel='nofollow';}linkrel.push(rel);if(!lic){lic='';}lcs.push(lic);}function refPrint(){let an=document.getElementsByClassName('href-ref'),li,co,dat,tgl,bln,thn,dafpus=document.getElementById('daf-pus'),cox=0;for(co=0;co<an.length;co++){if(srclink.includes(srclink[co])&&srclink.indexOf(srclink[co])!=co){continue;}else{dafpus.insertAdjacentHTML('beforeend','<li></li>');}}for(co=0;co<an.length;co++){li=document.querySelectorAll("#daf-pus > li");dat=new Date(srcacs[co]);tgl=dat.getDate();bln=dat.getMonth();bltxt=bulan[bln];thn=dat.getFullYear();jam=dat.getHours();if(jam<10){jam=`0${jam}`;}mnt=dat.getMinutes();if(mnt<10){mnt=`0${mnt}`;}if(srclink.includes(srclink[co])&&srclink.indexOf(srclink[co])!=co){an[co].href=`#ref${srclink.indexOf(srclink[co])+1}`;if(!an[co].innerHTML){an[co].innerHTML=`<span id='point${srclink.indexOf(srclink[co])+1}'></span><sup>[${srclink.indexOf(srclink[co])+1}]</sup>`;}else{an[co].innerHTML=`<span id='point${srclink.indexOf(srclink[co])+1}'></span>${an[co].innerHTML}<sup>[${srclink.indexOf(srclink[co])+1}]</sup>`;}continue;}else{if(srclink[co].includes('ISBN')){var isbnlk=srclink[co].split(' ');li[cox].innerHTML=`<span id='ref${cox+1}' class='jumpto'></span>${athr[co]}. ${srcyr[co]}. <b>${srctl[co]}</b>. <a href='https://isbnsearch.org/isbn/${isbnlk[1]}' target='_blank' rel='${linkrel[co]}'>${srclink[co]}</a>. Diakses tanggal <time title='${srcacs[co]}' datetime='${srcacs[co]}'>${tgl} ${bltxt} ${thn} pukul ${jam}:${mnt}.</time>`;}else{li[cox].innerHTML=`<span id='ref${cox+1}' class='jumpto'></span>${athr[co]}. ${srcyr[co]}. <b>${srctl[co]}</b>. <a href='${srclink[co]}' target='_blank' rel='${linkrel[co]}'>${srclink[co]}</a>. Diakses tanggal <time title='${srcacs[co]}' datetime='${srcacs[co]}'>${tgl} ${bltxt} ${thn} pukul ${jam}:${mnt}.</time>`;}if(lcs[co]){li[cox].insertAdjacentHTML('beforeend',` Lisensi: ${lcs[co]}`);}an[co].href=`#ref${cox+1}`;if(!an[co].innerHTML){an[co].innerHTML=`<span id='point${cox+1}'></span><sup>[${cox+1}]</sup>`;}else{an[co].innerHTML=`<span id='point${cox+1}'></span>${an[co].innerHTML}<sup>[${cox+1}]</sup>`;}cox++;}}}
function showextvid(btnid,vidid,vidcls,src){var vidmark=document.createElement('div');vidmark.classList.add('videomark');vidmark.id=vidid;document.currentScript.insertAdjacentElement('beforebegin',vidmark);var vidframe=document.createElement('iframe');vidmark.appendChild(vidframe);$(`#${btnid}`).click(function(){$(`#${vidid}`).toggleClass("videocontainer");$(`#${vidid} iframe`).attr("src", src);if(src.includes("youtube")||src.includes("youtu.be")){$(`#${vidid} iframe`).attr("ttl","YouTube video player");$(`#${vidid} iframe`).toggleClass("youtubevid");}else{$(`#${vidid} iframe`).toggleClass(vidcls);}$(`#${vidid} iframe`).attr("frameborder", "0");$(`#${vidid} iframe`).attr("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");$(`#${vidid} iframe`).attr("allowfullscreen");});}
function showImage(imglink,imgalt,imgcapt,imgcls,lazy,flex){let orlink,phlink;(imglink=imglink.split("|||"))[1]?(orlink=imglink[0],phlink=imglink[1]):(orlink=imglink[0],phlink=imglink[0]),flex&&document.write("<div class='imgflex'>"),flex?(lazy?document.write(`<a href='${orlink}'><div class='flexinside'><img alt='${imgalt}' class='${imgcls}' loading='lazy' src='${phlink}'/></div></a>`):document.write(`<a href='${orlink}'><img alt='${imgalt}' class='${imgcls}' src='${phlink}'/></a>`),""!=imgcapt&&document.write(`<div class='imgcaption'>${imgcapt}</div>`)):(1==lazy?document.write(`<a href='${orlink}'><img alt='${imgalt}' class='${imgcls}' loading='lazy' src='${phlink}'/></a>`):document.write(`<a href='${orlink}'><img alt='${imgalt}' class='${imgcls}' src='${phlink}'/></a>`),""!=imgcapt&&document.write(`<div class='imgcaption'>${imgcapt}</div>`)),flex&&document.write("</div>");}
var ordtg;function fillbcbs(bldt){var bcbs=document.getElementById('bcbs');var pttl=document.getElementsByClassName('post-title')[0];var pos=bldt.feed.entry;var hlink=document.createElement('a');hlink.innerHTML='Home';hlink.href='/';bcbs.appendChild(hlink);for(var i=0;i<pos.length;i++){if(pos[i].title.$t==pttl.innerHTML){var pcat=pos[i].category;for(var j=0;j<pcat.length;j++){var gg=document.createElement('span');gg.classList.add('gg');gg.innerHTML='&#187;';bcbs.appendChild(gg);var clink=document.createElement('a');if(!ordtg){clink.innerHTML=pcat[j].term;}else{clink.innerHTML=pcat[ordtg[j]].term;}clink.href=`https://www.bennyes.my.id/search/label/${clink.innerHTML}`;bcbs.appendChild(clink);}gg=document.createElement('span');gg.classList.add('gg');gg.innerHTML='&#187;';bcbs.appendChild(gg);var pts=document.createElement('span');pts.innerHTML=`<b>${pos[i].title.$t}</b>`;bcbs.appendChild(pts);}}}
function dais(){
    var dft=document.getElementById('daftar-isi');
    dft.classList.add('daftar-isi','parts');
    var top=document.createElement('b');
    top.classList.add('dittl');
    top.innerHTML='Daftar isi';
    dft.appendChild(top);
    var ol=document.createElement('ol');
    dft.appendChild(ol);
    var parts=document.getElementsByClassName('parts')
    for(var h=0;h<parts.length;h++){
        var h2=parts[h].querySelectorAll('h2');
        if(h2){
            for(var i=0;i<h2.length;i++){
                console.log(h2[i].innerText);
                if(h2[i].innerText.includes('Sumber informasi')||h2[i].innerText.includes('Daftar pustaka')||h2[i].innerText.includes('Referensi')){break;}
                var li=document.createElement('li');
                ol.appendChild(li);
                var jump=document.createElement('span');
                jump.classList.add('jumpto');
                jump.id=h2[i].innerText.replace(/\s/g,'-').toLowerCase();
                h2[i].insertAdjacentElement('beforebegin',jump);
                var lia=document.createElement('a');
                lia.href=`#${jump.id}`;
                lia.innerHTML=h2[i].innerHTML;
                li.appendChild(lia);
                var parts2=parts[i].getElementsByClassName('parts');
                var ol2=document.createElement('ol');
                li.appendChild(ol2);
                for(var j=0;j<parts2.length;j++){
                    var h3=parts2[j].querySelectorAll('h3');
                    console.log(h3);
                    if(h3){
                        for (var k=0;k<h3.length;k++){
                            var li2=document.createElement('li');
                            ol2.appendChild(li2);
                            var jump2=document.createElement('span');
                            jump2.classList.add('jumpto');
                            jump2.id=h3[k].innerText.replace(/\s/g,'-').toLowerCase();
                            h3[k].insertAdjacentElement('beforebegin',jump);
                            var lia2=document.createElement('a');
                            lia2.href=`#${jump.id}`;
                            lia2.innerHTML=h3[k].innerHTML;
                            li2.appendChild(lia2);
                        }
                    }
                }
            }
        }
    }
}