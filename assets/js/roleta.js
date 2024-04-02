function girar() {
  var box = document.getElementById('box');
  var girarDegrees = Math.floor(Math.random() * 360) + 1800; 
  box.style.transition = 'all ease-in-out 5s';
  box.style.transform = 'rotate(' + girarDegrees + 'deg)';
  
  setTimeout(function() {
    var resultado = obterResultado(girarDegrees);
    alert('Você ganhou: ' + resultado);
    resetarRoleta();
  }, 5500); 
}

function obterResultado(girarDegrees) {
  var numSetores = 5;
  var grausPorSetor = 360 / numSetores;
  var offset = 90; 
  var indiceSetor = Math.floor(((girarDegrees + offset) % 360) / grausPorSetor);
  var premios = ["10% de desconto", "Coringa", "Headset Gaming", "iPad Mini", "Camera sport action", "Drone mini"];
  
  return premios[indiceSetor];
}

function resetarRoleta() {
  var box = document.getElementById('box');
  box.style.transition = 'none';
  box.style.transform = 'rotate(90deg)';
}
