let aulas = [];

crearAula=function(){
    let numAulta=recuperarTexto("txtNumeroAula");
    let horario=recuperarTexto("txtHorario");
    let capMaxima = recuperarTexto("txtCapacidadMaxima");
    let aula = {}
    aula.numaula = numAulta;
    aula.horario = horario;
    aula.capacidadMaxima = capMaxima;
    return aula;
}

agregarAula=function(){
    let aula = crearAula();
    let elemtentoAula= aulas.push(aula);
    console.log("Aulas: "+elemtentoAula);

}

refrescarAula=function(){
    let cmptabla=document.getElementById("tablaAula");
    let tabla= "<table> <tr>"+ "<th>Numero Aula </th> "+ "<th>Horario </th> "+"<th>Capacidad Maxima </th> "+"</tr>" 
    let elmentoTabla;
    for(let i=0; i<aulas.length; i++){
        elmentoTabla=aulas[i];
        tabla+="<tr>"+ "<td>"+elmentoTabla.numaula +"</td> "+ "<td>"+elmentoTabla.horario+" </td> "+"<td>"+elmentoTabla.capacidadMaxima+" </td> "+"</tr>"

    }
    tabla+="</table>"
    cmptabla.innerHTML=tabla;
}

buscar=function(numeroAula){
    
    let aulaEncontrada = null;
    let elemtentoAula;
    for(let i = 0; i< aulas.length; i++){
        elemtentoAula=aulas[i];
        if(elemtentoAula.numaula== numeroAula){
            aulaEncontrada=elemtentoAula;
            break;
        }

    }
    return aulaEncontrada
}

buscarAula=function(){
    let numeroAula=recuperarTexto("txtBuscar");
    let aulaEncontrada = buscar(numeroAula);
    if(aulaEncontrada!= null){
        alert("Aula Encontrada")

    }else{
        alert("Aula No Encontrada")
    }
}

eliminar=function(){
    let eliminar= recuperarTexto("txtBuscar");
    let elementoAula;
    for(let i=0; i<aulas.length; i++){
        elementoAula= aulas[i];
        if(elementoAula.numaula==eliminar){
            aulas.splice(i);
            refrescarAula();
            break;

        }

    }
}