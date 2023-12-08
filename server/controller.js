let goals = []
globalID = 1

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
    createGoal: (req, res) =>{
        req.body.id = globalID
        goals.push(req.body)
        globalID++
        res.status(200).send(goals)
    }
}
