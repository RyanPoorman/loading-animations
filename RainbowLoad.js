    var wrapperEl;
    var numberOfEls = 90;
    var duration = 1000;
    var delay = duration / numberOfEls;

    function loadRaindbow() {
    	wrapperEl = document.getElementById("rainbowLoad");
    	for (var i = 0; i < numberOfEls; i++) createEl(i);
    }
 

    function createEl(i) {
      let el = document.createElement('div');
      const rotate = (360 / numberOfEls) * i;
      const translateY = -50;
      const hue = Math.round(360 / numberOfEls * i);
      el.classList.add('el');
      el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
      el.style.animation = "pulse_animation 0.1s 2";
      el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
      wrapperEl.appendChild(el);
    };

    