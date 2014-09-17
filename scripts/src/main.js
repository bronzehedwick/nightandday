(function() {
  'use strict';

  var sun = document.getElementById('sun');

  document.addEventListener('mousemove', function(e) {
    var top = e.clientY - 100,
        left = e.clientX - 100;
    sun.setAttribute('style', 'left:' + left + 'px;top:' + top + 'px');
  }, false);

  sun.addEventListener('click', function(e) {
    sun.className = 'sun clicked';
  }, false);

})();
