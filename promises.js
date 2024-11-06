// CALLBACK HELL

// getArticle(20, (user)=>{
//     console.log('Estos los articulos', user)
//     getUserData(userName, (name)=>{
//         console.log(name)
//     getAddress(name, (address)=>{
//         console.log(adress)
//         //...y sigue el mismo patron
//     })   
//     })
// })


// const myPromise = new Promise((resolve, reject)=>{
//     const randomNumber = Math.random()
//     console.log(randomNumber)
//     if(randomNumber > 10){
//         resolve('La promesa se ha resuelto porque el numero es mayor a 10')
//     }else{
//         reject('La promesa se ha rechazado porque el numero es menor a 0.5')
//     }
// })

// myPromise
// .then(data=>console.log(data))
// .catch(error=>console.log(error))


const fetchUrlPromise = (url) => {
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(response=>{
            if(response.ok){
                return response.json()
            }else{
              throw new Error('La solicitud no respondio con ok')  
            }
        })
        .then(data=>resolve(data))
        .catch(error=>reject(error))
    })
}

fetchUrlPromise('https://pokeapi.co/api/v2/pokemon?limit=150')
.then(pokemones=>console.log(pokemones))
.catch(error=>console.log(error))