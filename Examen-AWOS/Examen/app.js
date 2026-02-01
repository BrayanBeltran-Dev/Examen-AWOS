const inputNav = document.getElementById("inputNav")
const btnSearch = document.getElementById("btnSearch")
const contentData = document.getElementById("contentData")

const ontenerBusqueda = async () => {
    contentData.innerHTML = ""
    const id = inputNav.value

     if (id === "") {
        contentData.innerHTML = "<p>Ingresa un ID valido</p>"
        return
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(response)
    if(!response.ok){
    contentData.innerHTML = "<p>No se encontro</p>"
    return
}
    const data = await response.json()
    console.log(data)
    
        const nombre = data.name
        const imagen = data.sprites.front_default
        const divX = document.createElement("div")
        divX.classList.add("col-md-4")
        divX.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="${imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${nombre}</p>
  </div>
</div>`

        contentData.appendChild(divX)
}

btnSearch.addEventListener("click", ontenerBusqueda)