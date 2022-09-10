window.onload = () =>{
    const name = document.getElementById("name")
    const predictBtn = document.getElementById("predictBtn")
    const gender = document.getElementById("gender")
    const age = document.getElementById("age")
    const nationality = document.getElementById("nationality")
    const image = document.getElementById("imageHolder")

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(result => result.json())
        .then(data => {
            image.innerHTML = `<img src="${data.message}" alt="random dog" />`
        })
    
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

        // nationality API fetch
        fetch(`https://api.nationalize.io/?name=${input}`)
            .then(result => result.json())
            .then(data => {
                console.log(data)
                let nationalties = []

                if (data.country.length == 0){
                    nationality.innerHTML = "No predicted nationalities"
                }

                else{
                // getting all possible nationalities
                    for(let i = 0 ; i < data.country.length ; i++){
                        nationalties.push(data.country[i].country_id)
                    }
                
                    nationality.innerHTML = nationalties.join(" - ")
                }
            })
    })
}