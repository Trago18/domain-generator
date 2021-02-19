let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoones'];
let ext = ['com', 'net']; // , 'us', 'io', 'es'




for (let a = 0; a < pronoun.length; a++) {
  // console.log(pronoun[a]);
  for (let b = 0; b < adj.length; b++) {
    // console.log(adj[b]);
    for (let c = 0; c < noun.length; c++) {
      // console.log(noun[c]);
      for (let d = 0; d < ext.length; d++) {
       console.log(pronoun[a] + adj[b] + noun[c] + '.' + ext[d]);
      }
    }
  }
}




/*
for (let a = ext.length - 1; a >= 0; a--) {
  // console.log(ext[a]);
  // console.log(hack);
  let flag = 0;
  for (let b = ext[a].length - 1; b >= 0; b--) {
    // console.log(ext[a][b]);
    // console.log(hack[hack.length-(ext[a].length-b)]);
    if (ext[a][b] == hack[hack.length - (ext[a].length - b)]) {
      flag++;
    } else {
      flag = 0;
    }
    if (flag == ext[a].length) {
      return pronoun[rdm1] + adj[rdm2] + hack.slice(0, hack.length - ext[a].length) + "." + ext[a];
    }
  }
}
*/
