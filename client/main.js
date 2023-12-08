const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortuneButton')
const specific = document.querySelector('#specific')
const measurable = document.querySelector('#measurable')
const attainable = document.querySelector('#attainable')
const relevant = document.querySelector('#relevant')
const timeBound = document.querySelector('#time-bound')
const form = document.querySelector('#smart-container')

globalBox = 1

const goalBox = () => {
    let newForm = document.createElement('#smart-container' + globalBox)
    let newEdit = document.createElement('button')
    let newDelete = document.createElement('button')
}

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
}

const createGoal = (goal) =>{
    goalBox()
    h4.textContent = `${goal.name} (${goal.category})`
    // h4.addEventListener('click', () => deleteGoal(goal))
    container.appendChild(h4)
}

const handleSubmit = (event) =>{
    event.preventDefault()
    const body = {
        specific: specific.value,
        measurable: measurable.value,
        attainable: attainable.value,
        relevant: relevant.value,
        time-bound: timeBound.value
    }
    axios
        .post('http://localhost:4000/api/goals', body)
        .then((res) =>{
            // // container.innerHTML = ''
            // console.log(res.data)
            // res.data.forEach(createGoal)
        })
        .catch((err) => {
            console.error(err);
        })
}







complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', handleSubmit)
