function gettoldata(f,r,m,k){
    const tol=getjsonfile(`https://bennyes.github.io/biaya/tol/${f}.json`);
    //const tol=getjsonfile(`tolbanten.json`);
    let tarif=tol[r][m][k];
    return tarif;
}