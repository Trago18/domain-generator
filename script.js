let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoones'];
let ext = ['com', 'es']; // "net", 'us', 'io'

for (let a = 0; a < pronoun.length; a++) {
  // console.log(pronoun[a]);
  for (let b = 0; b < adj.length; b++) {
    // console.log(adj[b]);
    for (let c = 0; c < noun.length; c++) {
      // console.log(noun[c]);
      for (let d = 0; d < ext.length; d++) {
        // console.log(ext[d]);
        let flag = 0;
        for (let e = ext[d].length - 1; e >= 0; e--) {
          // console.log(ext[d][e]);
          // console.log(noun[c][noun[c].length - (ext[d].length - e)]);
          if (ext[d][e] == noun[c][noun[c].length - (ext[d].length - e)]) {
            flag++;
          } else {
            flag = 0;
          }
        }
        if (flag == ext[d].length) {
          console.log(pronoun[a] + adj[b] + noun[c].slice(0, noun[c].length - ext[d].length) + '.' + ext[d]);
        }
        else {
          console.log(pronoun[a] + adj[b] + noun[c] + '.' + ext[d]);
        }
      }
    }
  }
}
