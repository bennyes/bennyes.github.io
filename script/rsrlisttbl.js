const theadr=['Nama','Nama Indonesia','Resource Level','Sumber','Cara mendapatkan','Tempat','Keterangan'];
function liGen(cdw,ul){
    for(var j=0;j<cdw.length;j++){
        var li=document.createElement('li');
        ul.appendChild(li);
        var ais=cdw[j].replace(/\s+/g, '-').toLowerCase();
        var a=document.createElement('a');
        a.href=`/${ais}`;
        a.innerHTML=cdw[j].charAt(0).toUpperCase() + cdw[j].slice(1);;
        li.appendChild(a);
    }
}
function tableprinting(brg){
    var meattable=document.getElementById('meatstable'),bst,bfi;
    var tr=document.createElement('tr');
    meattable.appendChild(tr);
    for(var i=0;i<theadr.length;i++){
        var th=document.createElement('th');
        th.innerHTML=theadr[i];
        tr.appendChild(th);
    }
    switch(brg){
        case 'daging':bst=1,bfi=4;break;
        case 'ikan':bst=11,bfi=13;break;
        case 'sayur':bst=91,bfi=102;break;
    }
    for(var i=0;i<rsr.length;i++){
        if(rsr[i].id>=bst&&rsr[i].id<=bfi){
            tr=document.createElement('tr');
            meattable.appendChild(tr);
            var td=document.createElement('td');
            td.innerHTML=rsr[i].nama.charAt(0).toUpperCase()+rsr[i].nama.slice(1);;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=rsr[i].n_id.charAt(0).toUpperCase()+rsr[i].n_id.slice(1);;
            tr.appendChild(td);
            td=document.createElement('td');
            td.innerHTML=rsr[i].r_lvl;
            tr.appendChild(td);
            td=document.createElement('td');
            tr.appendChild(td);
            var ul=document.createElement('ul');
            td.appendChild(ul);
            liGen(rsr[i].src,ul);
            td=document.createElement('td');
            tr.appendChild(td);
            ul=document.createElement('ul');
            td.appendChild(ul);
            liGen(rsr[i].cr,ul);
            td=document.createElement('td');
            tr.appendChild(td);
            ul=document.createElement('ul');
            td.appendChild(ul);
            liGen(rsr[i].reg,ul);
            td=document.createElement('td');
            tr.appendChild(td);
            if(rsr[i].ket||rsr[i].ssn||rsr[i].wh){
                ul=document.createElement('ul');
                td.appendChild(ul);
                if(rsr[i].ket){liGen(rsr[i].ket,ul);}
                if(rsr[i].ssn){liGen(rsr[i].ssn,ul);}
                if(rsr[i].wh){liGen(rsr[i].wh,ul);}
            }
            else{td.innerHTML='-';}
        }
    }
}