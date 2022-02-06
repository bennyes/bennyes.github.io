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
function gd(){
    var itm=new XMLHttpRequest();
    itm.open("GET","https://bennyes.github.io/script/item.json",false);itm.send();
    return JSON.parse(itm.responseText);
}
function tableformat(k,tableID,i,tr){
    tr=document.createElement('tr');
    tableID.appendChild(tr);
    var td=document.createElement('td');
    td.innerHTML=k[i].nama.charAt(0).toUpperCase()+k[i].nama.slice(1);
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=k[i].n_id.charAt(0).toUpperCase()+k[i].n_id.slice(1);
    tr.appendChild(td);
    td=document.createElement('td');
    td.innerHTML=k[i].r_lvl;
    tr.appendChild(td);
    td=document.createElement('td');
    tr.appendChild(td);
    var ul=document.createElement('ul');
    ul.classList.add('nomarginbottom');
    td.appendChild(ul);
    liGen(k[i].src,ul,i);
    td=document.createElement('td');
    tr.appendChild(td);
    ul=document.createElement('ul');
    ul.classList.add('nomarginbottom');
    td.appendChild(ul);
    liGen(k[i].cr,ul,i);
    td=document.createElement('td');
    tr.appendChild(td);
    ul=document.createElement('ul');
    ul.classList.add('nomarginbottom');
    td.appendChild(ul);
    liGen(k[i].reg,ul,i);
    td=document.createElement('td');
    tr.appendChild(td);
    if(!k[i].ket&&!k[i].ssn&&!k[i].wh){
        td.innerHTML='-';
        console.log('-');
    }else{
        ul=document.createElement('ul');
        ul.classList.add('nomarginbottom');
        td.appendChild(ul);
        if(k[i].ket){liGen(k[i].ket,ul,i,'keterangan');}
        if(k[i].ssn){liGen(k[i].ssn,ul,i,'musim');}
        if(k[i].wh){liGen(k[i].wh,ul,i,'cuaca');}
    }
}
function tableprinting(brg,ord){
    const itm=gd();var q=document.getElementById('qry').value.toLowerCase(),tableID=document.getElementById('meatstable'),bst,bfi,tr=document.createElement('tr');
    tableID.innerHTML='';tableID.appendChild(tr);
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
    for(var i=0;i<itm.rsr.length;i++){
        if(itm.rsr[i].id>=bst&&itm.rsr[i].id<=bfi){
            if(!q){tableformat(itm.rsr,tableID,i,tr);}
            else if(q){
                q=(q=='greac'||q=='greace')?'grease':(q=='fertilis'||q=='fertilise'||q=='fertiliser')?q='fertilizer':q;
                if(itm.rsr[i].nama.toLowerCase().includes(q)||itm.rsr[i].n_id.includes(q)||itm.rsr[i].catg.find(x=>{
                    if(x.toLowerCase().includes(q)&&!x.toLowerCase().includes('non '+q)){
                      return true;
                    }else{return false;}
                })||itm.rsr[i].r_lvl==q||itm.rsr[i].src.find(x=>{
                    if(x.toLowerCase().includes(q)){
                      return true;
                    }else{return false;}
                })||itm.rsr[i].cr.find(x=>{
                    if(x.toLowerCase().includes(q)){
                      return true;
                    }else{return false;}
                })||itm.rsr[i].reg.find(x=>{
                    if(x.toLowerCase().replace(/[^a-zA-Z0-9]/, " ").includes(q)){
                      return true;
                    }else{return false;}
                })||itm.rsr[i].ket.find(x=>{
                    if(x.toLowerCase().includes(q)){
                      return true;
                    }else{return false;}
                })||itm.rsr[i].ssn.find(x=>{
                    if(x.toLowerCase().includes(q)){
                      return true;
                    }else{return false;}
                })||itm.rsr[i].wh.find(x=>{
                    if(x.toLowerCase().includes(q)){
                      return true;
                    }else{return false;}
                })){tableformat(itm.rsr,tableID,i,tr);}
            }
        }  
    }
}