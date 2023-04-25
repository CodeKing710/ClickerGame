//Initialize game components
let game = document.getElementById('game');
const width = height = 750;
let currentText = 'CLICK ME!';

(() => {
  game.addEventListener('mousedown', function(e) {
    if(
      e.pageX > width/2-100 &&
      e.pageX < width/2+300 &&
      e.pageY > height/2-100 &&
      e.pageY < height/2+300
    ) {
      game.fillStyle = '#787878';
      game.fillText(currentText, width/2, height/2);
      game.fillStyle = '#000';
      game.fillText('CLICKED!', width/2, height/2);
    }
  });
  game = game.getContext('2d');
  game.fillStyle = '#000';
  game.strokeStyle = '#000';
  game.lineWidth = 3;
  // game.beginPath();
  // game.arc(width/2, height/2, 200, 0, 2*Math.PI);
  // game.closePath();
  // game.stroke();
  game.strokeRect(width/2-200, height/2-200, 400, 400);
  game.font = '30px sans-serif';
  game.textAlign = 'center';
  game.textBaseline = 'middle';
  game.fillText(currentText, width/2, height/2);
})();
