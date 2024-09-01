
function aa(a) {
  unu = 0;
  doi = 0;
for(let i = 0; i<a.length; i++ ) {
  if(a[i] === '-') unu++
  if(a[i] === '.') doi++
}

if(unu >= doi) return false
else return true
}


console.log(aa('di-con......--'))