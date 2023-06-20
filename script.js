//CONTROLADOR STOCK
//ARTICULOS
let articulos = [
    {nombre: "remeras", id: 1, categoria: "indumentaria",stock: 25},
    {nombre: "pantalones", id: 2, categoria: "indumentaria",stock: 13},
    {nombre: "medias", id: 3, categoria: "indumentaria",stock: 6,},
    {nombre: "camperas", id: 4, categoria: "abrigo",stock: 5},
    {nombre: "cintos", id: 5, categoria: "acsesorio",stock: 0},
    {nombre: "calsados", id: 6, categoria:"zapateria",stock: 80},

]
//FUNCIONES GRL
function listar(arrayL) {
    let lista = "NOMBRE - CATEGORIA - ID -\n"
    arrayL.forEach(articulo => {
      lista = lista + articulo.nombre + " - " +  articulo.categoria + " - "  + articulo.id + " - " + "\n"
    })
    return lista
  }
function avisoStock(articulo){
    if((articulo.stock === 0)) {
        return ("- NO TENES MAS STOCK!")
} else if (articulo.stock > 0 && articulo.stock <= 15) {
    return ("- TE QUEDAN POCAS UNIDADES!"+ " "+ articulo.stock)
} else if (articulo.stock > 16 && articulo.stock < 50) {
    return ("- BUENA CANTIDAD!" + " "+ articulo.stock)
} else {
    return ("- ok, VERDE!")
}
}
function controlStock(arrCont) {
    let control = "NOMBRE - STOCK - ADVERTENCIA\n"
    arrCont.forEach((articulo) => {
        control = control + articulo.nombre + " - " + articulo.stock + avisoStock(articulo) + "\n"
    }
    )
    return control
}


function op3(){
    let busqId
    let articulosBuscados
    do {
    busqId = Number(prompt("Escriba ID del articulo"))
    if (articulosBuscados = articulos.find(articulo => articulo.id === busqId)) {alert  (articulosBuscados.nombre)}
    else{alert("ID INVALIDA")}
    
    } while (busqId === "")
}
//MENSAJE
let msj = "-----MACOWENS-----\nBienvenido\n1 - Ver Articulos\n2 - Control Stock\n3 - Por id\n0 - SALIR"
let opcion
function vista(){
do {
    opcion = Number(prompt(msj))
    if(opcion === 1){
        alert( listar(articulos))
    }else if(opcion === 2){
        alert( controlStock(articulos))
    }else if(opcion === 3){
        op3()
    }
} while (opcion !== 0)
}
vista()