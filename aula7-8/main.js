// gerar as cartas
// guardar as cartas geradas
// verificar se são iguais
// pegar o atribudo da carta escolhida


/* `
    <h1 class="cardTitle">${name}</h1>
    <div class="cardImg">
        <img src="${url}" alt="Card Image">
    </div>

    <div class="attSpans">
        <span>${att} Ataque</span>
        <span>${deff} Defesa</span>
        <span>${jujt} Jujutsu</span>
    </div>

    <div class="cardDesc">
        ${desc}
    </div>

    <div class="atributos">
        <input type="radio" name="att" id="att" value="Ataque">
        <label for="att">Ataque</label>

        <input type="radio" name="att" id="deff" value="defesa">
        <label for="deff">Defesa</label>

        <input type="radio" name="att" id="mag" value="magia">
        <label for="mag">Jujutsu</label>
    </div> `
*/

const cards = [
    {
        name: 'Gojou Satoru',
        url: 'https://sm.ign.com/ign_br/screenshot/default/gojo-1_g7ub.jpg',
        desc: 'Satoru Gojo is one of the main protagonists of the Jujutsu Kaisen series. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world.',
        ability:{
            att: 80,
            deff: 60,
            jujut: 120,
        }
    },
    {
        name: 'Yuji Itadori',
        url: 'https://nerdhits.com.br/wp-content/uploads/2022/04/yuji-itadori-jujutsu-kaisen-1200x900.jpg',
        desc: 'Yuji Itadori is the main protagonist of the Jujutsu Kaisen series. He is the son of Jin Itadori and grandson of Wasuke Itadori who was living a normal life until he encountered Megumi and ate one of Sukuna`s fingers.',
        ability:{
            att: 70,
            deff: 40,
            jujut: 50,
        }
    },
    {
        name: 'Megumi Fushiguro',
        url: 'https://staticg.sportskeeda.com/editor/2022/02/3b43b-16438708115932-1920.jpg',
        desc: 'Megumi Fushiguro is the deuteragonist of the Jujutsu Kaisen series. He is a grade 2 jujutsu sorcerer and first-year student at Tokyo Jujutsu High alongside Yuji Itadori and Nobara Kugisaki.',
        ability:{
            att: 30,
            deff: 25,
            jujut: 70,
        }
    },
    {
        name: 'Nobara Kugisaki',
        url: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/8/84/Nobara%27s_Straw_Doll_%28Anime%29.png',
        desc: 'Nobara Kugisaki is the tritagonist of the Jujutsu Kaisen series. She is a first-year student and grade 3 jujutsu sorcerer at Tokyo Jujutsu High studying under Satoru Gojo alongside Yuji and Megumi.',
        ability:{
            att: 29,
            deff: 20,
            jujut: 19,
        }
    },
    {
        name: 'Maki Zenin',
        url: 'https://pbs.twimg.com/media/FDUMNrwVQAQe_gP.jpg',
        desc: 'She is currently a second-year at Tokyo Jujutsu High. Daughter of Ogi Zenin and the elder twin sister of Mai Zenin, Maki was born in the Zenin Family.',
        ability:{
            att: 43,
            deff: 32,
            jujut: 0,
        }
    },
    {
        name: 'Ryomen Sukuna',
        url: 'https://www.anime-internet.com/content/images/2021/10/Sukuna-1.jpg',
        desc: 'Ryomen Sukuna, more often called just Sukuna, is a mighty cursed spirit known as the undisputed King of Curses. He serves as one of the primary antagonists of the Jujutsu Kaisen series.',
        ability:{
            att: 75,
            deff: 59,
            jujut: 119,
        }
    },
    {
        name: 'Yuta Okkotsu',
        url: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/yuta-okkotsu-jujutsu-kaisen-0.jpg',
        desc: 'He was initially a special grade cursed human haunted by his late childhood friend, Rika Orimoto. Satoru Gojo mentored Yuta and enrolled him at Tokyo Jujutsu High.',
        ability:{
            att: 59,
            deff: 60,
            jujut: 99,
        }
    },
    {
        name: 'Toge Inumaki',
        url: 'https://criticalhits.com.br/wp-content/uploads/2021/05/toge-inumaki-fala-amaldicoada-jujutsu-kaisen.jpg',
        desc: 'He is a descendant of the Inumaki clan and its cursed speech , which he`s developed his own unique speech pattern for in order to avoid cursing others.',
        ability:{
            att: 29,
            deff: 30,
            jujut: 79,
        }
    },
    {
        name: 'Panda',
        url: 'https://ovicio.com.br/wp-content/uploads/2021/09/20210917-jujutsu-kaisen-panda.jpg',
        desc: 'Panda is not actually a panda, he`s an Abrupt Mutated Cursed Corpse created by Masamichi Yaga. He attends Jujutsu High as a second-year student along with Maki, Toge, and Yuta.',
        ability:{
            att: 46,
            deff: 57,
            jujut: 55,
        }
    },
    {
        name: 'Aoi Todo',
        url: 'https://quotetheanime.com/wp-content/uploads/2021/09/Aoi-Todo.jpg',
        desc: ' He is a third-year student at Kyoto Jujutsu High School and a grade 1 jujutsu sorcerer. He was mentored by Yuki Tsukumo in his youth and considers Yuji Itadori his best friend.',
        ability:{
            att: 75,
            deff: 63,
            jujut: 69,
        }
    }
]

let mCardNumber = Math.round(Math.random() * cards.length)
let pCardNumber = Math.round(Math.random() * cards.length)
const playerCard = document.querySelector('.cardPlayer')
const machineCard = document.querySelector('.card')
const btnRandom = document.querySelector('#random')
const btnPlay = document.querySelector('#play')

const renderCards = (iPlayer, iMachine) => {
    playerCard.innerHTML =  `
    <h1 class="cardTitle">${cards[iPlayer].name}</h1>
    <div class="cardImg">
        <img src="${cards[iPlayer].url}" alt="Card Image">
    </div>

    <div class="attSpans">
        <span>${cards[iPlayer].ability.att} Ataque</span>
        <span>${cards[iPlayer].ability.deff} Defesa</span>
        <span>${cards[iPlayer].ability.jujut} Jujutsu</span>
    </div>

    <div class="cardDesc">
        ${cards[iPlayer].desc}
    </div>

    <div class="atributos">
        <input type="radio" name="att" id="att" value="ataque">
        <label for="att">Ataque</label>

        <input type="radio" name="att" id="deff" value="defesa">
        <label for="deff">Defesa</label>

        <input type="radio" name="att" id="mag" value="jujutsu">
        <label for="mag">Jujutsu</label>
    </div> `
    playerCard.classList.remove('closed')
    btnRandom.setAttribute('disabled', true)
    btnPlay.removeAttribute('disabled')

    machineCard.innerHTML =  `
    <h1 class="cardTitle">${cards[iMachine].name}</h1>
    <div class="cardImg">
        <img src="${cards[iMachine].url}" alt="Card Image">
    </div>

    <div class="attSpans">
        <span>${cards[iMachine].ability.att} Ataque</span>
        <span>${cards[iMachine].ability.deff} Defesa</span>
        <span>${cards[iMachine].ability.jujut} Jujutsu</span>
    </div>

    <div class="cardDesc">
        ${cards[iMachine].desc}
    </div>
`
}

const randomCards = () => {
   while(mCardNumber == pCardNumber){
    pCardNumber = Math.floor(Math.random() * cards.length)
   }
   renderCards(pCardNumber, mCardNumber)
}

const res = document.querySelector('.res')

const playGame = (atributo) => {
    const cardPlayer = cards[pCardNumber]
    const cardMachine = cards[mCardNumber]
    machineCard.classList.remove('closed')
    btnPlay.setAttribute('disabled', true)
    switch(atributo){
        case 'ataque':
            if(cardPlayer.ability.att > cardMachine.ability.att){
                res.innerHTML = `Parabéns, você ganhou!`
                return
            }
            res.innerHTML = `Infelizmente você perdeu.`
        break;

        case 'defesa':
            if(cardPlayer.ability.deff > cardMachine.ability.deff){
                res.innerHTML = `Parabéns, você ganhou!`
                return
            }
            res.innerHTML = `Infelizmente você perdeu.`
        break;

        case 'jujutsu':
            if(cardPlayer.ability.jujut > cardMachine.ability.jujut){
                res.innerHTML = `Parabéns, você ganhou!`
                return
            }
            res.innerHTML = `Infelizmente você perdeu.`
        break;

        default:
            if(cardPlayer.ability.att > cardMachine.ability.att){
                res.innerHTML = `Parabéns, você ganhou!`
                return
            }
            res.innerHTML = `Infelizmente você perdeu.`
        break;
    }
}

const getAtt = () => {
    const atributo = document.querySelectorAll('input')
    for(let i = 0; i < atributo.length; i++){
        if(atributo[i].checked){
            playGame(atributo[i].value)
        }
    }
}

btnRandom.addEventListener('click', randomCards)
btnPlay.addEventListener('click', getAtt)