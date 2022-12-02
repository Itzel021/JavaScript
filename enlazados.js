//Declaramos los estados con sus respectivos municipios
  
   var COLIMA=["Seleccione su Municipio...",];
   var  CHIAPAS=["Seleccione su Municipio...",];
   var  CHIHUAHUA=["Seleccione su Municipio...",];
   var   CIUDADDEMEXICO=["Seleccione su Municipio...",];
   var   DURANGO=["Seleccione su Municipio...",];
   var   GUANAJUATO=["Seleccione su Municipio...",];
   var   GUERRERO=["Seleccione su Municipio...",];
   var   HIDALGO=["Seleccione su Municipio...",];
   var   JALISCO=["Seleccione su Municipio...",];
   var   MICHOACAN=["Seleccione su Municipio...",];
   var   MORELOS=["Seleccione su Municipio...",];
   var  NAYARIT=["Seleccione su Municipio...",];
   var   NUEVOLEON=["Seleccione su Municipio...",];
   var  OAXACA=["Seleccione su Municipio...",];
   var   PUEBLA=
   ["Seleccione su Municipio...","Acajete","Acatlán","Atlixco",
        "Cohetzala","Cuapiaxtla de Madero","Tlacotepec"];
   var  QUERETARO=["Seleccione su Municipio...",];
   var   QUINTANAROO=["Seleccione su Municipio...",];
   var   SANLUISPOTOSI=["Seleccione su Municipio...",];
   var   SINALOA=["Seleccione su Municipio...",];
   var   SONORA=["Seleccione su Municipio...",];
   
  
   //Agrupamos todos los estados en un mismo Arreglo
    var todosEstados = [
      [],
      AGUASCALIENTES,
      BAJACALIFORNIA,
      BAJACALIFORNIASUR,
      CAMPECHE,
      COAHUILA,
      COLIMA,
      CHIAPAS,
      CHIHUAHUA,
      CIUDADDEMEXICO,
      DURANGO,
      GUANAJUATO,
      GUERRERO,
      HIDALGO,
      JALISCO,
      MICHOACAN,
      MORELOS,
      NAYARIT,
      NUEVOLEON,
      OAXACA,
      PUEBLA,
      QUERETARO,
      QUINTANAROO,
      SANLUISPOTOSI,
      SINALOA,
      SONORA,
      TABASCO,
      TAMAULIPAS,
      TLAXCALA,
      VERACRUZ,
      YUCATAN,
     ZACATECAS
  
    ];
  
    
    function cambia_municipios(){ 
       //tomo el valor del select del estado elegido 
       var estado = document.f1.estados[document.f1.estados.selectedIndex].value 

       //si el estado esta dentro de arreglo, es decir si existe o no 
       if (estado != 0) { 
          //si esta definido, entonces coloco las opciones de los municipios correspondientes. 

          //selecciono el array de municipios adecuado 
          mis_municipios = todosEstados[estado]

          //calculo el numero de municipios, es decir el tamaño del arreglo
          num_municipios = mis_municipios.length 

          //marco el número de municipios en el select 
          document.f1.municipios.length = num_municipios
           
          //para cada municipio del array, la introduzco en el select 
          for(i=0;i<num_municipios;i++){ 
             document.f1.municipios.options[i].value=mis_municipios[i] 
             document.f1.municipios.options[i].text=mis_municipios[i] 
          }	
       }
       else{ 
          //si no había estado seleccionado, elimino los  del select 
          document.f1.municipios.length = 1 
       } 
  }