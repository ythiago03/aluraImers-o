// `<div class="banner">
//     <div class="description">
//         <span class="name" >${}</span>
//         <p>${}</p>
//     </div>
//     <img class="movieBanner" src="${}" alt="Movie Banner">
// </div>`

const btns = document.querySelectorAll('.btn')
const movieName = document.querySelector('.movieName')
const movieDesc = document.querySelector('.movieDesc')
const movieUrl = document.querySelector('.movieUrl')

const moviesElements = [
    {
        name: 'World War Z',
        summary: 'Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81BglVnsU+L.jpg',
    },{
        name: 'Interestelar',
        summary: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
        url: 'https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w',
    }
    ,{
        name: 'Spider Man no way home',
        summary: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
        url: 'https://images-na.ssl-images-amazon.com/images/I/91THlJb4lvL.jpg',
    },{
        name: 'The Black Phone',
        summary: 'After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer"s previous victims.',
        url: 'https://br.web.img3.acsta.net/pictures/22/06/23/21/10/1998178.jpg',
    }
]

const animesElements = [
    {
        name: 'RE:Zero',
        summary: 'Natsuki Subaru, um adolescente comum, conhece uma linda garota de cabelos prateados vinda de outro mundo. Subaru quer ficar ao lado dela, mas o fardo que ela carrega é maior do que Subaru pode imaginar. Eles enfrentam o feroz ataque de monstros, traições, violência irracional... e, por fim, a morte. Subaru promete derrotar qualquer inimigo, qualquer destino, tudo para protegê-la. E assim, o pobre garoto sem poder algum obtém o "Retorno da Morte", uma habilidade única que permite ao usuário voltar no tempo ao morrer. Usando esse poder, o passado é perdido e as memórias são reescritas.',
        url: 'https://img1.ak.crunchyroll.com/i/spire3/291c6c3b60857afabe46899f848079a41610403802_main.jpg',
    },{
        name: '86 Eighty Six',
        summary: 'The Republic of San Magnolia is at war with its neighboring country, the Empire of Giad. Both sides use unmanned drones to conduct a "war without casualties". The story follows Lena as she commands a squad of drones called the 86.',
        url: 'https://img1.ak.crunchyroll.com/i/spire1/e912a5b800502bb400e7dfa454f521431633316826_main.jpg',
    },{
        name: 'Attack on Titan',
        summary: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
        url: 'https://img1.ak.crunchyroll.com/i/spire3/dac363972d628a7009e04fdeb9d7104a1641869274_main.jpg',
    },{
        name: 'Mushoku Tensei',
        summary: 'A 34-year-old Japanese NEET is run over by a speeding truck and dies. Before he knows it, he is reborn as Rudeus Greyrat, and begins a new life full of adventure.',
        url: 'https://img1.ak.crunchyroll.com/i/spire3/212cb538c4eab2eb07938e20711379fd1644555132_main.jpg',
    }
]

const movies = document.querySelector('.movie')
const animes = document.querySelector('.anime')

//========= RENDER DEFAUlT ELEMENTS

const renderElements = () => {
    movies.innerHTML = ''
    animes.innerHTML = ''
        moviesElements.forEach(({ name, summary, url}) => {
            movies.innerHTML += `
            <div class="banner">
                    <div class="description">
                        <span class="name">${name}</span>
                        <p>${summary}</p>
                    </div>
                    <img class="movieBanner" src="${url}" alt="MovieBanner">
                </div>
                `});//foreach

        for(let i = 0; i < animesElements.length; i++){
            animes.innerHTML +=  
            `
             <div class="banner">
                 <div class="description">
                     <span class="name" >${animesElements[i].name}</span>
                     <p>${animesElements[i].summary}</p>
                 </div>
                 <img class="movieBanner" src="${animesElements[i].url}" alt="Movie Banner" >
             </div>
             `
        }//loop for  

}

renderElements()

//========= RENDER INPUT ELEMENTS 

const renderInputElements = (i) => {
    if(!movieUrl.value.endsWith('jpg') && !movieUrl.value.endsWith('png')){
        alert('[ERROR] Por favor insira um link válido.')
                    movieName.value = ''
                    movieDesc.value = ''
                    movieUrl.value = ''
                    return;
    }
    if(movieUrl.value == '' || movieDesc.value == '' || movieName.value == '' ){
        alert('[ERROR] Por favor digite em todos os campos.')
                    return;
    }
    switch(i){
        case 0://Render movie
            for(let i = 0; i < moviesElements.length; i++){
                if( movieUrl.value == moviesElements[i].url){
                    alert('[ERROR] Este filme já está adicionado no cartaz.')
                    movieName.value = ''
                    movieDesc.value = ''
                    movieUrl.value = ''
                    return;
                }
            }
            moviesElements.push(
                {
                    name: `${movieName.value}` ,
                    summary: `${movieDesc.value}`,
                    url: `${movieUrl.value}`,
                }
                )
                renderElements()
                movieName.value = ''
                movieDesc.value = ''
                movieUrl.value = ''
        break;

        case 1://Render anime
            for(let i = 0; i < animesElements.length; i++){
                if(movieUrl.value == animesElements[i].url){
                    alert('[ERROR] Este anime já está adicionado no cartaz.')
                    movieName.value = ''
                    movieDesc.value = ''
                    movieUrl.value = ''
                    return;
                }
            }
            animesElements.push(
                {
                    name: `${movieName.value}` ,
                    summary: `${movieDesc.value}`,
                    url: `${movieUrl.value}`,
                }
                )
                renderElements()
                movieName.value = ''
                movieDesc.value = ''
                movieUrl.value = ''
        break;

        default:
            
        break;
    }
    
}

for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', () => {
        renderInputElements(i)
    })
}

const btnRemove = document.querySelectorAll('.remove')

const removeLast = (i) => {//Remove last movie or anime
    switch(i){
        case 0:
            if(moviesElements == ''){
                alert('[ERROR] Não existem mais filmes para serem removidos.')
                return;
            }
            moviesElements.pop()
        break;
        case 1:
            if(animesElements == ''){
                alert('[ERROR] Não existem mais animes para serem removidos.')
                return;
            }
            animesElements.pop()
        break;
        default:

        break;
    }
    renderElements()
}

for(let i = 0; i < btnRemove.length; i++){
    btnRemove[i].addEventListener('click', () => {
        removeLast(i)
    })
}

