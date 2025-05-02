let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

const container = document.querySelector('.container')

pronouns.forEach(pronoun => {
  adjs.forEach((adj) => {
    nouns.forEach((noun) => {
      const p = document.createElement('p');
      p.innerHTML = (`www.${pronoun}${adj}${noun}.com`)     
      container.appendChild(p)
    })
  })
});