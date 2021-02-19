let domainNameGenerator = () => {
  
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoones'];
  let ext = ['com', 'net', 'us', 'io', 'es'];

  let rdm1 = Math.floor((Math.random() * pronoun.length) );
  let rdm2 = Math.floor((Math.random() * adj.length) );
  let rdm3 = Math.floor((Math.random() * noun.length) );
  let rdm4 = Math.floor((Math.random() * ext.length) );
  
  hack = noun[rdm3]

  for (let a = ext.length -1; a >= 0; a--) {
    // console.log(ext[a]);
    // console.log(hack);
    let flag = 0
    for (let b = ext[a].length -1; b >= 0; b--) {
      // console.log(ext[a][b]);
      // console.log(hack[hack.length-(ext[a].length-b)]);
      if (ext[a][b] == hack[hack.length-(ext[a].length-b)]) {
        flag++;
      } else {
        flag=0;
      }
      if (flag == ext[a].length) {
        return pronoun[rdm1] + adj[rdm2] + hack.slice(0,hack.length-ext[a].length) + "." + ext[a];
      }
    }    
  }

  return pronoun[rdm1] + adj[rdm2] + hack + "." + ext[rdm4];
}

console.log(domainNameGenerator())