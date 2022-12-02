//Declaramos un arreglo 
var EstadosMexico={};

//Contiene todos los Estados
EstadosMexico["Estados"]=["AGUASCALIENTES","BAJA CALIFORNIA","BAJA CALIFORNIA SUR",
"CAMPECHE","COAHUILA","PUEBLA", "VERACRUZ", "OAXACA"];

//Estados con sus respectivos municipios
EstadosMexico["AGUASCALIENTES"]= 
  ["Seleccione su Municipio...","Aguascalientes","Asientos","Calvillo","Cosío","Jesús María",
  "Pabellón de Arteaga","Rincón de Romos","San José de Gracia","Tepezalá","El Llano", "San Francisco de los Romo"];
EstadosMexico["BAJACALIFORNIA"]= 
  [ "Seleccione su Municipio...","Ensenada", "Mexicali", "Playas del Rosarito",   "Tecate",   "Tijuana"];
EstadosMexico["BAJACALIFORNIASUR"] =
  ["Seleccione su Municipio...","Comondu","Mulege","La Paz", "Los Cabos", "Loreto"];
EstadosMexico["CAMPECHE"] = 
  ["Seleccione su Municipio...","Calkiní","Campeche", "Carmen","Champotón","Hecelchakán","Hopelchén",
   "Palizada","Tenabo","Escárcega","Calakmul","Candelaria","Seybaplaya"];
EstadosMexico["COAHUILA"]=
    ["Seleccione su Municipio...","Abasolo","Acuña","Allende"];
EstadosMexico["PUEBLA"]=["Seleccione su Municipio...","Acajete","Acatlán","Atlixco",
"Cohetzala","Cuapiaxtla de Madero","Tlacotepec de Benito Juárez", "Tehuacan", "San Martin", "Cholula"];
EstadosMexico["VERACRUZ"]=["Seleccione su Municipio...","Acajete", "Acatlan", "Comapa", "Cotaxtla"
,"Fortín","Córdoba","Boca del Río","Isla"];
EstadosMexico["OAXACA"]=["Seleccione su Municipio...","Huamantla", "Apizaco", "Calpulalpan", "Zacatelco"];



function myOnload() {//Funcion para cargar los Estados

    var ListaEstados=document.getElementById("estado");//Obtenemos la lista de estados

    //Guardamos en la variable estadoSelec el estado seleccionado por el usuario
    var estadoSelec=EstadosMexico["Estados"];

    if (estadoSelec) {
        var i;
        for ( i = 0; i < estadoSelec.length; i++) {
            //Se van creando option de acuerdo al tamaño del Array EstadosMexico
            var nuevoEstado= new Option(estadoSelec[i], estadoSelec[i]); 

            ListaEstados.options.add(nuevoEstado);//Se le asigna el valor al option
        }
    }
}


function cargarMunicipios() {//Función para cargar los municipios

    var ListaEstados=document.getElementById("estado");

    var ListMunicipios=document.getElementById("municipio");

    var municipio =ListaEstados.options[ListaEstados.selectedIndex].value;

    while(ListMunicipios.options.length){
        ListMunicipios.remove(0);
    }
    console.log(municipio);

    //Obtenemos los municipios
    var opc=EstadosMexico[municipio];

    if (opc) {
        var i;
        for ( i = 0; i < opc.length; i++) { //Se crean los option de acuerdo al tamaño del Array
            var nuevoMunicipio = new Option(opc[i], i); 

            ListMunicipios.options.add(nuevoMunicipio);//Se le asigna el valor 
            
        } 
    }
}