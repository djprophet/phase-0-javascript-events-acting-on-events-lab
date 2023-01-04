function moveDodgerLeft() {
    var dodger = document.getElementById('dodger');
    var left = parseInt(dodger.style.left);
    dodger.style.left = (left - 10) + 'px';
  }
  
  function moveDodgerRight() {
    var dodger = document.getElementById('dodger');
    var left = parseInt(dodger.style.left);
    dodger.style.left = (left + 10) + 'px';
  }