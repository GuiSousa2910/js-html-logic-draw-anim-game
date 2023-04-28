
function desenhaQuadrado(x , y, cor){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    pincel.fillStyle = cor;
    pincel.fillRect(x ,y,50,50);
    pincel.fillStroke = 'black';
    pincel.strokeRect(x ,y,50,50);
}

var x = 0;
while(x < 600){;
    desenhaQuadrado(x, 0, 'blue');
    desenhaQuadrado(x, 50, 'red');
    desenhaQuadrado(x, 100, 'green');
    x = x + 50;
}
