
let estudiantes=[];

crearEstudiantes=function(){
    let estudianteNuevo;
    let nombreEstudiante=recuperarTexto("txtNombre");
    let cursoEstudiante=recuperarTexto("txtCurso");
    let matriculaEstudiante=recuperarTexto("txtMatricula");
    estudianteNuevo={
        nombre:nombreEstudiante,
        curso:cursoEstudiante,
        matricula:matriculaEstudiante
    }
    return estudianteNuevo;
}
agregarEstudiante=function(){
    let estNuevo=crearEstudiantes();
    estudiantes.push(estNuevo);
    console.log(estudiantes);
}
refrescarEstudiante=function(){
    let cmpTabla=document.getElementById("tablaEstudiantes");
    let contenidoTabla="<table id=\"contenidoTabla\"><tr>"
    +"<th>NOMBRE</th>"
    +"<th>CURSO</th>"
    +"<th>MATRICULA</th>"
    +"</tr>";
    let elementoEstudiante;
    for(let i=0;i<estudiantes.length;i++){
        elementoEstudiante=estudiantes[i];
        contenidoTabla+=
        "<tr><td>"+elementoEstudiante.nombre+"</td>"
        +"<td>"+elementoEstudiante.curso+"</td>"
        +"<td>"+elementoEstudiante.matricula+"</td>"
        +"</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
buscarEstudiante=function(){
    let buscar = recuperarTexto("txtBuscar");
    let encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {
        let estudiante = estudiantes[i];
        if (estudiante.matricula == buscar) {
            encontrado = true;
            break;    
        }
    }

    if (encontrado) {
        alert("Estudiante encontrado");
    } else {
        alert("Estudiante no encontrado");
    }
}
volver=function(){
    window.location.assign ("index.html");
}
eliminarEstudiante=function(){
    let matriculaAEliminar = recuperarTexto("txtEliminar");
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].matricula === matriculaAEliminar) {
            estudiantes.splice(i, 1);
            console.log("Estudiante eliminado. Lista actualizada:", estudiantes);
            refrescarEstudiante();
        }
    }
}

