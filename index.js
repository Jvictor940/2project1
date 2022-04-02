let fa1 = document.getElementById('name')
let fa2 = document.getElementById('name2')
let fa3 = document.getElementById('name3')
let btn1 = document.getElementById('btn1')
let form = document.getElementById('form')
let playerReviewBox = document.getElementById('review-box')
let fName = document.getElementById('fName')
let lName = document.getElementById('lName')
let results = document.getElementById('results-name')


// let search_term = document.getElementById('')
// let search_btn = document.getElementById('')


const request = async () => {
    let req = await fetch('https://api.sportsdata.io/v3/nfl/scores/json/Players/LAR?key=44977e11a12344959466ee0a9c990bb5')
    let res = await req.json()
    console.log(res)
    fa1.innerHTML = res[0].Name
    fa2.innerHTML = res[3].Name
    fa3.innerHTML = res[50].Name
    
    btn1.addEventListener('click', (e) => {
        e.preventDefault()
        alert('clicked')
    })
  
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(e.target.fname.value)
        console.log(e.target.lname.value)
        let player = `${fname} ${lname}`
        results.innerHTML = player.Name

    })
    // playerReviewBox.addEventListener('')


}
request()











// const getPlayersData = async (term) => {
//     form.classList.remove('show')
//     form.classList.add('hidden')
        
//     const url = `https://api.sportsdata.io/v3/nfl/scores/json/Players/LAR?key=44977e11a12344959466ee0a9c990bb5${term}`
//     const response = await fetch(url)

//     if(response.status == 404 || response.statusText == 'Not Found'){
//         form.classList.add('show')
//         form.classList.remove('hidden')
//         return
//     }

//     const players = await response.json()

//     search_btn.addEventListener('click', () => {
//         getPlayersData(search_term.value)
//     })
// }
