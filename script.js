let delay = -0.3
function createCard (date, day, games) {
    delay += 0.3
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>
            ${date}
            <span>${day}</span>
        </h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}


function createGame(p1, hour, p2) {
    return `
    <li>
        <img src="./assets/icon-${p1}.svg" alt="Bandeira do ${p1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${p2}.svg" alt="Bandeira do ${p2}">
    </li>
    `
}

document.querySelector('#cards').innerHTML =
    createCard(
        '24/11', 
        'quinta', 
        createGame('uruguai','13:00','southkorea') +
        createGame('portugal', '16:00', 'ghana') +
        createGame('brazil', '19:00', 'serbia')
    ) +
    createCard(
        '28/11', 
        'segunda', 
        createGame('cameroon','10:00','serbia') +
        createGame('switzerland', '16:00', 'brazil') +
        createGame('portugal', '19:00', 'uruguai')
    )
