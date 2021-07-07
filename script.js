var iniciar = 0;
var inCaseStop = 0;

//StartintPoint eixos X e Y
var spX = 0;
var spY = 0;

//DestinyPoint eixos X e Y
var dtX = 0;
var dtY = 0;

//stopSt eixos X e Y
var sTopX = 0;
var sTopY = 0;

var startingPoint = 0;
var homeSt = ""
var destinyPoint = 0
var destinySt = ""
var stopSt = 0
var stopStr = ""


//o que será mostrado caso só tenham 2 destinos A e B
function apenasDois(){
  if (dtY + spY > dtX + spX){
  if (spY >= dtY){
    let resultado = ('Você saiu de: ' + 'N-' + homeSt + ' chegou em: ' + 'S-' + destinySt)  
    document.getElementById("out").innerHTML= resultado;
   } else {
     let resultado = ('Você saiu de: ' + 'S-' + homeSt + ' chegou em: ' + 'N-' + destinySt)
     document.getElementById("out").innerHTML= resultado;
   }

}
}
 

//função do btn começar
function start(){
 iniciar = parseInt(prompt('Deseja iniciar o código? \nDigite 1-SIM ou 2-NÃO'))
  
 if (iniciar == 1){
 //recebendo o n° da rua de partida 
    startingPoint = parseInt(prompt("Informe o número da rua de partida: "))
  
  switch(startingPoint){
  case 1:
    spX = 0;
    spY = 0;
    homeSt = ('R1-'+'('+spX+','+spY+')');
  break;
  case 2:
    spX = 0;
    spY = 20;
    homeSt = ('R2-'+'('+spX+','+spY+')');
  break;
  case 3:
    spX = 0;
    spY = 50;
    homeSt = ('R3-'+'('+spX+','+spY+')');
  break;
  case 4:
    spX = 0;
    spY = 80;
    homeSt = ('R4-'+'('+spX+','+spY+')');
  break;
  case 5:
    spX = 0;
    spY = 0;
    homeSt = ('R5-'+'('+spX+','+spY+')');
  break;
  case 6:
    spX = 15;
    spY = 0;
    homeSt = ('R6-'+'('+spX+','+spY+')');
  break;
  case 7:
    spX = 30;
    spY = 0;
    homeSt = ('R7-'+'('+spX+','+spY+')');
  break;
  case 8:
    spX = 45;
    spY = 0;
    homeSt = ('R8-'+'('+spX+','+spY+')');
  break;
  case 9:
    spX = 50;
    spY = 0;
    homeSt = ('R9-'+'('+spX+','+spY+')');
  break;
  default:
      
    //caso não seja nenhum dos casos acima, imprime no html
    document.getElementById("out").innerHTML="Desculpe, não encontrei.";
    iniciar = 0
    startingPoint = 0  
}
  
   
   
//se o n° da rua de partida existir (estiver dentro das opções de 1 à 9, recebe o n° de destino   
  if (startingPoint >= 1 && startingPoint < 10){
  
    destinyPoint = parseInt(prompt("Informe o número da rua de Destino: "))
  
    
  switch(destinyPoint){
  case 1:
    dtX = 0;
    dtY = 0;
    destinySt = ('R1-'+'('+dtX+','+dtY+')');
  break;
  case 2:
    dtX = 0;
    dtY = 20;
    destinySt = ('R2-'+'('+dtX+','+dtY+')');
  break;
  case 3:
    dtX = 0;
    dtY = 50;
    destinySt = ('R3-'+'('+dtX+','+dtY+')');
  break;
  case 4:
    dtX = 0;
    dtY = 80;
    destinySt = ('R4-'+'('+dtX+','+dtY+')');
  break;
  case 5:
    dtX = 0;
    dtY = 0;
    destinySt = ('R5-'+'('+dtX+','+dtY+')');
  break;
  case 6:
    dtX = 15;
    dtY = 0;
    destinySt = ('R6-'+'('+dtX+','+dtY+')');
  break;
  case 7:
    dtX = 30;
    dtY = 0;
    destinySt = ('R7-'+'('+dtX+','+dtY+')');
  break;
  case 8:
    dtX = 45;
    dtY = 0;
    destinySt = ('R8-'+'('+dtX+','+dtY+')');
  break;
  case 9:
    dtX = 50;
    dtY = 0;
    destinySt = ('R9-'+'('+dtX+','+dtY+')');
  break;
  default:
    //caso não seja nenhum dos casos acima, imprime no html
    document.getElementById("out").innerHTML= "Desculpe, não encontrei.";
      
    iniciar = 0
    destinyPoint = 0
  } 
   
  
    
//se tiver alguma parada:  
function temParada(){
  
  if (startingPoint >= 1 && startingPoint < 10 && destinyPoint >= 1 && destinyPoint < 10 ){
  
    inCaseStop = parseInt(prompt("Terá alguma parada no caminho? \nDigite 1-SIM ou 2-NÃO: "))
  
 if (inCaseStop == 1){
   
   stopSt = parseInt(prompt("Qual o número da rua de parada? "))
   
   switch(stopSt){
  case 1:
    sTopX = 0;
    sTopY = 0;
    stopStr = ('R1-'+'('+sTopX+','+sTopY+')');
  break;
  case 2:
    sTopX = 0;
    sTopY = 20;
    stopStr = ('R2-'+'('+sTopX+','+sTopY+')');
  break;
  case 3:
    sTopX = 0;
    sTopY = 50;
    stopStr = ('R3-'+'('+sTopX+','+sTopY+')');
  break;
  case 4:
    sTopX = 0;
    sTopY = 80;
    stopStr = ('R4-'+'('+sTopX+','+sTopY+')');
  break;
  case 5:
    sTopX = 0;
    sTopY = 0;
    stopStr = ('R5-'+'('+sTopX+','+sTopY+')');
  break;
  case 6:
    sTopX = 15;
    sTopY = 0;
    stopStr = ('R6-'+'('+sTopX+','+sTopY+')');
  break;
  case 7:
    sTopX = 30;
    sTopY = 0;
    stopStr = ('R7-'+'('+sTopX+','+sTopY+')');
  break;
  case 8:
    sTopX = 45;
    sTopY = 0;
    stopStr = ('R8-'+'('+sTopX+','+sTopY+')');
  break;
  case 9:
    sTopX = 50;
    sTopY = 0;
    stopStr = ('R9-'+'('+sTopX+','+sTopY+')');
  break;
  default:
    //console.log('Desculpe, não encontrei.')
    document.getElementById("out").innerHTML="Desculpe, não encontrei.";
    iniciar = 0
    stopSt = 0
   
    }  
  
   
//resultado se houver parada
//início, parada, destino:     
//i>p>d ou i<p<d ou i<p>d ou i>p<d
      if (dtX + spX + sTopX > dtY + spY + sTopX && inCaseStop == 1){
   
        //definindo Leste Oeste
        if (spX >= sTopX && sTopX >= dtX){
     let resultado = ('Você saiu de: ' + 'L-' + homeSt + ' parou em: ' + 'O-' + stopStr + ' e chegou em: '+ 'O-' + destinySt)  
     document.getElementById("out").innerHTML= resultado;
   }    
        else if (spX <= sTopX && sTopX <= dtX) {  
      let resultado = ('Você saiu de: ' + 'O-' + homeSt + ' parou em: ' + 'L-' + stopStr + ' e chegou em: '+ 'L-' + destinySt)
      document.getElementById("out").innerHTML= resultado;    
          
   }    else if (spX >= sTopX && sTopX <= dtX){
     let resultado = ('Você saiu de: ' + 'L-' + homeSt + ' parou em: ' + 'O-' + stopStr + ' e chegou em: '+ 'L-' + destinySt)
     document.getElementById("out").innerHTML= resultado;
     
   }    else if(spX <= sTopX && sTopX >= dtX){
     let resultado = ('Você saiu de: ' + 'O-' + homeSt + ' parou em: ' + 'L-' + stopStr + ' e chegou em: '+ 'O-' + destinySt)
     document.getElementById("out").innerHTML= resultado;
     
   } 
                
       
}     else if (dtY + spY + sTopY> dtX + spX + sTopX && inCaseStop == 1){
  
        //definindo Norte Sul
        if (spY >= sTopY && sTopY >= dtY){
     let resultado = ('Você saiu de: ' + 'N-' + homeSt + ' parou em: ' + 'S-' + stopStr + ' e chegou em: '+ 'S-' + destinySt)  
     document.getElementById("out").innerHTML= resultado;
     
   }    else if (spY <= sTopY && sTopY <= dtY) {  
     let resultado = ('Você saiu de: ' + 'S-' + homeSt + ' parou em: ' + 'N-' + stopStr + ' e chegou em: '+ 'N-' + destinySt)
     document.getElementById("out").innerHTML= resultado;
     
   }    else if (spY >= sTopY && sTopY <= dtY){
     let resultado = ('Você saiu de: ' + 'N-' + homeSt + ' parou em: ' + 'S-' + stopStr + ' e chegou em: '+ 'N-' + destinySt)
     document.getElementById("out").innerHTML= resultado;
     
   }    else if(spY <= sTopY && sTopY >= dtY){
     let resultado = ('Você saiu de: ' + 'S-' + homeSt + ' parou em: ' + 'N-' + stopStr + ' e chegou em: '+ 'S-' + destinySt)
     document.getElementById("out").innerHTML= resultado;
     
   }
  
} 
   
} else if (inCaseStop == 2){apenasDois()}
  else {
//alert('Resposta inválida. \nDigite 1-SIM ou 2-NÃO:')
document.getElementById("out").innerHTML="Resposta inválida. \nDigite 1-SIM ou 2-NÃO";
temParada()
}

}
  
}
temParada()

}
} else {
  //alert ('Resposta inválida. \nCaso queira iniciar, clique em\n "Começar?" e em seguida digite 1')
  document.getElementById("out").innerHTML="Resposta inválida. \nCaso queira iniciar, clique em\n 'Começar?'' e em seguida digite 1";
}

}
/*function no(){
 alert('Tudo bem. :/')
}*/
//console.log(inCaseStop)