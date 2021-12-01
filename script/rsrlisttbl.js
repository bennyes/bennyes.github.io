const theadr=['Nama','Nama Indonesia','Resource Level','Sumber','Cara mendapatkan','Tempat','Keterangan'];
function liGen(cdw,ul,i,ket){
    for(var j=0;j<cdw.length;j++){
        if(cdw[j]){
            var li=document.createElement('li');
            ul.appendChild(li);
            var a=document.createElement('span');
            a.innerHTML=(ket)?ket+': '+cdw[j].charAt(0).toUpperCase()+cdw[j].slice(1):cdw[j].charAt(0).toUpperCase()+cdw[j].slice(1);
            li.appendChild(a);
        }
    }
}
function tableformat(tableID,i,tr){
    tr=document.createElement('tr');
    tableID.appendChild(tr);
    var td=document.createElement('td');
    td.innerHTML=rsr[i].nama.charAt(0).toUpperCase()+rsr[i].nama.slice(1);
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=rsr[i].n_id.charAt(0).toUpperCase()+rsr[i].n_id.slice(1);
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=rsr[i].r_lvl;
    tr.appendChild(td);
    td=document.createElement('td');
    tr.appendChild(td);
    var ul=document.createElement('ul');
    ul.classList.add('nomarginbottom');
    td.appendChild(ul);
    liGen(rsr[i].src,ul,i);
    td=document.createElement('td');
    tr.appendChild(td);
    ul=document.createElement('ul');
    ul.classList.add('nomarginbottom');
    td.appendChild(ul);
    liGen(rsr[i].cr,ul,i);
    td=document.createElement('td');
    tr.appendChild(td);
    ul=document.createElement('ul');
    ul.classList.add('nomarginbottom');
    td.appendChild(ul);
    liGen(rsr[i].reg,ul,i);
    td=document.createElement('td');
    tr.appendChild(td);
    if(!rsr[i].ket&&!rsr[i].ssn&&!rsr[i].wh){
        td.innerHTML='-';
        console.log('-');
    }else{
        ul=document.createElement('ul');
        ul.classList.add('nomarginbottom');
        td.appendChild(ul);
        if(rsr[i].ket){liGen(rsr[i].ket,ul,i,'keterangan');}
        if(rsr[i].ssn){liGen(rsr[i].ssn,ul,i,'musim');}
        if(rsr[i].wh){liGen(rsr[i].wh,ul,i,'cuaca');}
    }
}
function tableprinting(brg,ord){
    var qry=document.getElementById('qry').value.toLowerCase();
    var tableID=document.getElementById('meatstable'),bst,bfi,what,tr=document.createElement('tr');
    tableID.innerHTML='';
    tableID.appendChild(tr);
    for(var i=0;i<theadr.length;i++){
        var th=document.createElement('th');
        th.innerHTML=theadr[i];
        tr.appendChild(th);
    }
    switch(brg){
        case'daging':bst=1,bfi=100;break;
        case'ikan':bst=101,bfi=200;break;
        case'hewanil':bst=201,bfi=300;break;
        case'hnonp':bst=301,bfi=400;break;
        case'allh':bst=1,bfi=400;break;
        case'fruit':bst=401,bfi=500;break;
        case'vegs':bst=501,bfi=600;break;
        case'nnp':bst=601,bfi=700;break;
        case'bibit':bst=701,bfi=800;break;
        case'kebun':bst=801,bfi=900;break;
        case'alln':bst=401,bfi=900;break;
        case'pangan':bst=901,bfi=1000;break;
        case'toolsg':bst=1001,bfi=1100;break;
        case'mine':bst=1101,bfi=1200;break;
        case'mineman':bst=1201,bfi=1300;break;
        case'batu':bst=1101,bfi=1300;break;
        case'minetool':bst=1301,bfi=1400;break;
        case'bagf':bst=1401,bfi=1500;break;
        case'spec':bst=ord,bfi=ord;break;
        default:bst=1,bfi=1500;
    }
    for(var i=0;i<rsr.length;i++){
        if(rsr[i].id>=bst&&rsr[i].id<=bfi){
            if(!qry){tableformat(tableID,i,tr);}
            else if(qry){
                qry=(qry=='greac'||qry=='greace')?'grease':qry;
                if(rsr[i].nama.toLowerCase().includes(qry)||rsr[i].n_id.includes(qry)||rsr[i].catg.find(x=>{
                    if(x.toLowerCase().includes(qry)&&!x.toLowerCase().includes('non '+qry)){
                      return true;
                    }else{return false;}
                })||rsr[i].r_lvl==qry||rsr[i].src.find(x=>{
                    if(x.toLowerCase().includes(qry)){
                      return true;
                    }else{return false;}
                })||rsr[i].cr.find(x=>{
                    if(x.toLowerCase().includes(qry)){
                      return true;
                    }else{return false;}
                })||rsr[i].reg.find(x=>{
                    if(x.toLowerCase().replace(/[^a-zA-Z0-9]/, " ").includes(qry)){
                      return true;
                    }else{return false;}
                })||rsr[i].ket.find(x=>{
                    if(x.toLowerCase().includes(qry)){
                      return true;
                    }else{return false;}
                })||rsr[i].ssn.find(x=>{
                    if(x.toLowerCase().includes(qry)){
                      return true;
                    }else{return false;}
                })||rsr[i].wh.find(x=>{
                    if(x.toLowerCase().includes(qry)){
                      return true;
                    }else{return false;}
                })){tableformat(tableID,i,tr);}
            }
        }  
    }
}