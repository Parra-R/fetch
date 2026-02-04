/*
📝 Enunciado
Crea una función llamada searchPost(id).
Dentro del try, concatena el id recibido en la URL de la API: https://jsonplaceholder.typicode.com/posts/ID.
Usa Template Literals para construir la URL.
Si la petición es exitosa, imprime el título del post en mayúsculas.
Si ocurre un error (por ejemplo, si el ID no existe o no hay internet), el catch debe imprimir: "El post no pudo ser hallado".
Subelo a GitHub
*/

// async function searchPost(id) {
//     try {
//         const url = `https://jsonplaceholder.typicode.com/posts/${id}`
//         const res = await fetch(url)

//         const post = await res.json()
//         console.log(post.title)
//     } catch (error) {
//         console.error("El post no pudo ser hallado")
//     }
// }

// searchPost(70)


const searchPost = async (id) =>{
    try {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const res = await fetch(url)

        const post = await res.json()
        console.log(post.title)

    } catch (error) {
        console.error("El post no pudo ser hallado")

    }
}

searchPost(70)