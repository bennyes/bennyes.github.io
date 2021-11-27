const theadr=['Nama','Nama Indonesia','Resource Level','Sumber','Cara mendapatkan','Tempat'];
function liGen(cdw){
    for(var j=0;j<cdw.length;j++){
        var li=document.createElement('li');
        ul.appendChild(li);
        var ais=items[i].cr[j];
        ais = ais.replace(/\s+/g, '-').toLowerCase();
        var a=document.createElement('a');
        a.href=`/${ais}`;
        a.innerHTML=cdw[j].charAt(0).toUpperCase() + cdw[j].slice(1);;
        li.appendChild(a);
    }
}
function tableprinting(brg){
    var meattable=document.getElementById('meatstable');
    var tr=document.createElement('tr');
    meattable.appendChild(tr);
    for(var i=0;i<theadr.length;i++){
        var th=document.createElement('th');
        th.innerHTML=theadr[i];
        tr.appendChild(th);
    }
    if(brg=='daging'){
        var bst=0,bfi=3;
    }
    for(var i=bst;i<bfi;bst++){
        tr=document.createElement('tr');
        meattable.appendChild(tr);
        var td=document.createElement('td');
        td.innerHTML=items[i].nama.charAt(0).toUpperCase()+items[i].nama.slice(1);;
        tr.appendChild(td);
        td=document.createElement('td');
        td.innerHTML=items[i].n_id.charAt(0).toUpperCase()+items[i].n_id.slice(1);;
        tr.appendChild(td);
        td=document.createElement('td');
        td.innerHTML=items[i].r_lvl;
        tr.appendChild(td);
        td=document.createElement('td');
        tr.appendChild(td);
        var ul=document.createElement('ul');
        // ul.classList.add('noliststyle');
        td.appendChild(ul);
        liGen(items[i].src);
        td=document.createElement('td');
        tr.appendChild(td);
        ul=document.createElement('ul');
        //ul.classList.add('noliststyle');
        td.appendChild(ul);
        liGen(items[i].cr);
        td=document.createElement('td');
        tr.appendChild(td);
        ul=document.createElement('ul');
        //ul.classList.add('noliststyle');
        td.appendChild(ul);
        liGen(items[i].reg);
    }
}