function Graph(){
    var canvas = document.querySelector('#plot');
    var canvasCtx = canvas.getContext("2d");
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    this.plot(buffer, offset){
      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
      canvasCtx.beginPath();
      var len = Math.min(buffer.length - offset, WIDTH);
      for(var i=0; i < len; i++) {
        var d = dataArray[i+offset];
        var y = HEIGHT - d - (HEIGHT/2 - 128);
        canvasCtx.lineTo(i, y);
      }
      canvasCtx.lineWidth = 1;
      canvasCtx.strokeStyle = 'rgb(0, 0, 200)';
      canvasCtx.stroke();
    }
}

