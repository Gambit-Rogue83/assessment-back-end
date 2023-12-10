let cards = []
let globalID = 1

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ['“Welcome” is a powerful word.', 'You can see a lot just by looking.', 'You have the power to write your own fortune.', 'Resting well is as important as working hard.', 'If you continually give, you will continually have.', 'Never spit in the wind.']

        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];

        res.status(200).send(randomFortune);
    },
    getCards: (req, res) => {
        res.status(200).send(cards)
    },
    deleteCard: (req, res) => {
        let index = cards.findIndex(elem => elem.id === +req.params.id)
        cards.splice(index, 1)
        res.status(200).send(cards)
    },
    createCard: (req, res) => {
        const {imageURL} = req.body

        let newCard = {
            id: globalID,
            imageURL
        }
        cards.push(newCard)
        globalID++
        res.status(200).send(cards)
    }
    // editQuote: (req, res) => {
    //     const {type} = req.body
    //  
    //     }
    // }
}
