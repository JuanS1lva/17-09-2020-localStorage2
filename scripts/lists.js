const tabla = document.getElementById('tablaUsuario')


const usuariosGuardadosEnStorage = ()=>{
    const usuarioEnStorage = JSON.parse(localStorage.getItem('autos'))
    console.log(usuarioEnStorage)
    for(let i = 0; i<usuarioEnStorage.length; i += 1 ){
        tabla.innerHTML += `
            <tr>
                <th>${i+1}</th>
                <td>${usuarioEnStorage[i].marca}</td>
                <td>${usuarioEnStorage[i].modelName}</td>
                <td>${usuarioEnStorage[i].year}</td>
                <td>${usuarioEnStorage[i].placa}</td>
            <tr>
        `
        // ""
        //  ''
        // ``
        console.log(usuarioEnStorage[i])
    }

}
usuariosGuardadosEnStorage()

document.getElementById('limpiar').addEventListener('click', ()=>{
    localStorage.clear()
    tabla.innerHTML=''
})