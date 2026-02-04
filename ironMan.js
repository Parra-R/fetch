/*
Buscando a Iron Man 📝 Enunciado 
Crea una función asíncrona llamada obtenerVengador.
Dentro de un bloque try, haz un fetch a la URL de Iron Man: https://akabab.github.io/superhero-api/api/id/346.json.
Convierte la respuesta a JSON.
Imprime en consola: "Nombre Real: [fullName]" y su inteligencia (intelligence) que está dentro de powerstats.
En el catch, imprime: "Error al contactar con la base de datos de Avengers".
Si quieres seleccionar tu propio super heroe, puedes revisar → https://akabab.github.io/superhero-api/api/glossary.html
*/

// async function obtenerVengador(id){
//     try {
//         const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`
        
//         const respuesta = await fetch(url);
//         const data = await respuesta.json();
        
//         console.log(`Nombre Real: ${data.biography.fullName}, su inteligencia es de ${data.powerstats.intelligence}`)
//     } catch (error) {
//         console.error("Error al contactar con la base de datos de Avengers")
//     }
// }

// obtenerVengador(70)


const obtenerVengador = async (id) => {
    try {
        const url = `https://akabab.github.io/superhero-api/api/id/${id}.json`
        
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        
        console.log(`Nombre Real: ${data.biography.fullName}, su inteligencia es de ${data.powerstats.intelligence}`)  
    } catch (error) {
        console.error("Error al contactar con la base de datos de Avengers")
    }
}

obtenerVengador(24)