
/*  || SCROLL TO HEROS AND ENEMY 
 */
// Get buttons
const hero = document.getElementById('hero');
const nemesis = document.getElementById('nemesis');

// Get destinations
const batmanCinéma = document.getElementById('batman-cinéma');
const batmanAdversaires = document.getElementById('batman-adversaires');

// Functions scroll
hero.addEventListener('click', ()=> {
  window.scrollTo({
    top: batmanCinéma.offsetTop,
    behavior: 'smooth'
  });
})

nemesis.addEventListener('click', ()=>{
  window.scrollTo({
    top: batmanAdversaires.offsetTop,
    behavior: 'smooth'
  })
})