function gettoldata(f,r,g,m,k){const tol=getjsonfile(`https://bennyes.github.io/biaya/tol/${f}.json`);let type=tol[r]["type"];let t=(type==="tutup")?tol[r][m][k][g]:tol[r][g];return t;}
