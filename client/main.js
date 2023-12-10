const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortuneButton')
const cardContainer = document.querySelector('#card-container')
const form = document.querySelector('form')

const cardURL = `http://localhost:4000/api/cards`

const cardsCollage = ({ data: cards }) => displayCards(cards)
const errDisplay = err => console.log(err.response.data)

const getCompliment = () => {
    axios
    .get("http://localhost:4000/api/compliment/")
    .then(res => {
            const data = res.data;
            alert(data);
    })
    .catch((err) => {
        console.error(err)
    });
};
const getFortune = () => {
    axios
    .get('http://localhost:4000/api/fortune/')
    .then(res => {
        const data = res.data
        alert(data)
    })
    .catch((err) =>{
        console.error(err)
    })
};

const getAllCards = () => axios.get(cardURL).then(cardsCollage).catch(errDisplay)
const createCard = body => axios.post(cardURL, body).then(cardsCollage).catch(errDisplay)
const deleteCard = id => axios.delete(`${cardURL}/${id}`).then(cardsCollage).catch(errDisplay)
// const editQuote = (id, type) => axios.put(`${cardURL}/${id}`, {type}).then(cardsCollage).catch(errDisplay)

function submitHandler(e) {
    e.preventDefault()

    // let quote = document.querySelector('#quote')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        // quote: quote.value,
        imageURL: imageURL.value
    }

    createCard(bodyObj)

    // quote.value = ''
    imageURL.value = ''
}

function cardPresentation(card) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('envelope')

    cardDiv.innerHTML = `<img alt='Majestic scenery' src=${card.imageURL} class="postcard"/>
    <button onclick="deleteCard(${card.id})">Remove Inspiration</button>
    `

    cardContainer.appendChild(cardDiv)
}

function displayCards(arr) {
    cardContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        cardPresentation(arr[i])
    }
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)

getAllCards()
