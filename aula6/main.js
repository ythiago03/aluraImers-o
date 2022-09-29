                // <tr class="player">
                //     <td>
                //         <img src="${url}" alt="Player Image">
                //     </td>
                //     <td class="teste">
                //         <img src="${url}" alt="Player Image">
                //         <span>${name}</span>
                //     </td>
                //     <td>${win}</td>
                //     <td>${draw}</td>
                //     <td>${defeat}</td>
                //     <td>${points}</td>
                //     <td><button>Vitória</button></td>
                //     <td><button>Empate</button></td>
                //     <td><button>Derrota</button></td>
                // </tr>

const table = document.querySelector('#table')

const players = [
    {
        name: 'Rafaella',
        url: 'https://avatars.githubusercontent.com/u/54322854?v=4',
        win: 0,
        draw: 0,
        defeat: 0,
        points: 0,
    },
    {
        name: 'Paulo',
        url: 'https://pbs.twimg.com/profile_images/930602367887822850/2v0lXfIR_400x400.jpg',
        win: 0,
        draw: 0,
        defeat: 0,
        points: 0,
    },
    {
        name: 'Guilherme',
        url: 'https://imersao.dev/assets/img/imersoes/dev-2021/instrutor-guilherme.1647533645.jpeg',
        win: 0,
        draw: 0,
        defeat: 0,
        points: 0,
    }
]

// Contar pontos

const calcPoints = () => {
    for(let i = 0; i < players.length; i++){
        players[i].points = (players[i].win * 3) + players[i].draw
    }
    renderPlayers()
}

// Renderizar jogadores

const renderPlayers = () => {
    table.innerHTML = ''
    players.forEach(({name, url, win, draw, defeat, points}, i) => {
        table.innerHTML +=  `
        <tr class="player">
                <td>
                    <img src="${url}" alt="Player Image">
                </td>

                <td class="teste">
                    <span>${name}</span>
                </td>

                <td class="winValue">${win}</td>
                <td class="drawValue">${draw}</td>
                <td class="defeatValue">${defeat}</td>
                <td>${points}</td>

                <td><button onclick="addWin(${i})" class="win">Vitória</button></td>
                <td><button onclick="addDraw(${i})" class="draw">Empate</button></td>
                <td><button onclick="addDefeat(${i})" class="defeat">Derrota</button></td>
            </tr>
        ` 
    })
    
}

renderPlayers()

const btnAdd = document.querySelector('#add')
const nameP = document.querySelector('#name')
const urlP = document.querySelector('#url')

//Renderizar jogador do input

const renderInput = () => {
    if(nameP.value == ''){
        alert('[ERROR] Insira o nome do player!')
        return
    }
    if(urlP.value == ''){
        players.push(
            {
                name: `${nameP.value}`,
                url: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
                win: 0,
                draw: 0,
                defeat: 0,
                points: 0,
            }
            )
            renderPlayers()
            urlP.value = ''
            nameP.value = ''
            return
    }
    players.push(
        {
            name: `${nameP.value}`,
            url: `${urlP.value}`,
            win: 0,
            draw: 0,
            defeat: 0,
            points: 0,
        }
        )
        renderPlayers()
}

btnAdd.addEventListener('click', renderInput)

//Adiciodar vitória

function addWin(index) {
    for(let i = 0; i < players.length; i++){
        if(players[i] != players[index]){
            players[i].defeat++
        }
    }
    players[index].win++
    calcPoints()
    renderPlayers()
}

//Adiciodar empate

function addDraw() {
    players.forEach((e, i) => {
        players[i].draw++
    })
    calcPoints()
    renderPlayers()
}

//Adiciodar derrota

function addDefeat(index) {
    for(let i = 0; i < players.length; i++){
        if(players[i] != players[index]){
            players[i].win++
        }
    }
    players[index].defeat++
    calcPoints()
    renderPlayers()
}
















// // Remover jogador

// // const btnRemove = document.querySelector('#remove')

// // const removePlayer = () => {
// //     if(nameP.value == ''){
// //         alert('fds')
// //     }
// //     for(let i; i < players.length; i++){
       
// //     }
// //     renderPlayers()
// // }

// // btnRemove.addEventListener('click', removePlayer)

// // Adiciodar vitória

// const win = document.querySelectorAll('.win')
// const winValue = document.querySelectorAll('.winValue')

// const addWin = (i) => {
//     players[i].win++
//     winValue[i].innerHTML = players[i].win
// }

// for(let i = 0; i < win.length; i++){
//     win[i].addEventListener('click', () => {
//             addWin(i)
//     })
// }