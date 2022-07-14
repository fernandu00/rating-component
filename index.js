
let ratings = document.querySelectorAll('.item')

// ratings.forEach(function(btn) {
//     btn.addEventListener('click', function() {
//         console.log(btn.innerHTML)
//     })
// })


ratings.forEach((btn) => {
    btn.addEventListener('click', () => {
        // btn.style.backgroundColor = "#fff"
        let value = btn.innerHTML
        newValue = document.getElementById('rating')
        newValue.innerHTML = `You selected ${value} of 5`
    })
})







function change(){
    const card1 = document.querySelector('.grid-container')

    const card2 = document.querySelector('.grid-container2')

    card1.style.display ="none"
    card2.classList.remove('hide')



}





// const submit = document.querySelector('.submit')

// submit.addEventListener('click', (event) => {
//     change()})