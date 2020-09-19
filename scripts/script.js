const formRegistro = document.getElementById('formRegistro')

let listaDeUsuario = [];


formRegistro.addEventListener('submit', (e)=>{
    e.preventDefault()
    const inputMarca = document.getElementById('brand').value
    const inputName = document.getElementById('name').value
    let inputModel;
    if(document.getElementById('model').value == ""){
      inputModel="-"
    }
    else{
      inputModel = document.getElementById('model').value
    }
    let inputId;
    if(document.getElementById('id').value == ""){
      inputId="-"
    }
    else{
      inputId = document.getElementById('id').value
    }
    const usuario = {
        marca: inputMarca,
        modelName: inputName,
        year: inputModel,
        placa: inputId
    }
    guardarEnStorage(usuario)
})

const guardarEnStorage =  (usuario)=>{
    if(localStorage.getItem('autos') == null){
            listaDeUsuario.push(usuario)
            const usuariosString = JSON.stringify(listaDeUsuario)
            localStorage.setItem('autos', usuariosString)
    }else{
        listaEnStorage = JSON.parse(localStorage.getItem("autos"))
        listaEnStorage.push(usuario)
        const usuariosString = JSON.stringify(listaEnStorage)
        localStorage.setItem('autos', usuariosString)
    }
}