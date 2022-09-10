window.onload = () =>{
    const name = document.getElementById("name")
    const predictBtn = document.getElementById("predictBtn")
    const gender = document.getElementById("gender")
    const age = document.getElementById("age")
    const nationality = document.getElementById("nationality")

    predictBtn.addEventListener("click", () => {
        let input = name.value
        // gender API fetch
        fetch(`https://api.genderize.io?name=${input}`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                gender.textContent = data.gender
            })
        
        // age API fetch
        fetch(`https://api.agify.io/?name=${input}`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                age.textContent = data.age
            })
    })
}