(function() {
  'use strict';

  // Setup variables.
  var sun = document.getElementById('sun'),
      hillBg = document.getElementById('hill-background'),
      hillFg = document.getElementById('hill-foreground'),
      sky = document.getElementById('sky');

  // Mouse move event listener.
  document.addEventListener('mousemove', function(e) {
    var top = e.clientY - 100,
        left = e.clientX - 100,
        aboveTheHills;

    // Stick the sun to the cursor.
    sun.setAttribute('style', 'left:' + left + 'px;top:' + top + 'px');

    // Detect night.
    aboveTheHills = window.innerHeight - hillBg.clientHeight + (sun.clientHeight / 2);
    if (e.clientY > aboveTheHills) {
      // It's night.
      sky.className = 'sky night';
      hillBg.className = 'hill-background night';
      hillFg.className = 'hill-foreground night';
    }
    else {
      // It's day.
      sky.className = 'sky';
      hillBg.className = 'hill-background';
      hillFg.className = 'hill-foreground';
    }
  }, false);
})();
