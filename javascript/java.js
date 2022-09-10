window.onload = () =>{
    const name = document.getElementById("name")
    const predictBtn = document.getElementById("predictBtn")
    const gender = document.getElementById("gender")
    const age = document.getElementById("age")
    const nationality = document.getElementById("nationality")

    predictBtn.addEventListener("click", () => {
        let input = name.value
        fetch("https://api.genderize.io?name=rio")
            .then(result => result.json())
            .then(data => {
                console.log(data)
                gender.textContent = data.gender
            })
    })
}