onmessage = function(evt) {
  var canvas = evt.data.canvas;
  var ctx = canvas.getContext("2d");

  function render() {
    ctx.fillStyle = '#64b5f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ebcb68';
    ctx.fillRect(0, 440, canvas.width, canvas.height);
    ctx.fillStyle = '#e9d8af';
    ctx.fillRect(0, 450, canvas.width, canvas.height);
    ctx.fillStyle = '#c9b08e';
    ctx.fillRect(0, 480, canvas.width, canvas.height);
    ctx.fillStyle = '#e9d8af';
    ctx.fillRect(0, 510, canvas.width, canvas.height);
    ctx.fillStyle = '#ebcb68';
    ctx.fillRect(0, 550, canvas.width, canvas.height);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
};
