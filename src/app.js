let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];

const container = document.querySelector('.domain-list')
const button = document.querySelector('#generateDomainBtn')

/* pronouns.forEach(pronoun => {
  adjs.forEach((adj) => {
    nouns.forEach((noun) => {
      const p = document.createElement('p');
      p.innerHTML = (`www.${pronoun}${adj}${noun}.com`)     
      container.appendChild(p)
    })
  })
}); */

function generateDomain() {
  let output = ''

  pronouns.forEach(pronoun => {
    adjs.forEach((adj) => {
      nouns.forEach((noun) => {
      output += (`<p>www.${pronoun}${adj}${noun}.com</p>`)
    })
  })
});
  return output
}

function showDomain(){
  container.innerHTML = "<div>"+generateDomain()+"</div>"
}

console.log(button);

button.addEventListener('click', showDomain)