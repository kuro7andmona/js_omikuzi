 const results = [
    '大大吉.png',
    '大吉.png',
    '中吉.png',
    '吉.png',
    '小吉.png',
    '末吉.png',
    '凶.png',
    '大凶.png'
  ];

  const elem = document.getElementById('push');
  const element = document.getElementById('start');
  const rotateItem = document.getElementById('rotate');
  const target = document.getElementById('#push');

  elem.addEventListener('click', function() {
    if (element != null) {
      tatefuri();
    }
  });

function tatefuri() {
    element.animate(
      [{
        transform: 'translateY(0)'
      }, {
        transform: 'translateY(-30px)'
      }, {
        transform: 'translateY(0)'
      }], {
        duration: 700,
        iterations: 3
      });
    setTimeout(function() {
      kaiten();
    }, 2400);
  }
  
  function kaiten() {
    element.animate(
      [{
        transform: 'rotate(0deg)'
      }, {
        transform: 'rotate(180deg)'
      }], {
        duration: 700,
        easing: 'linear',
        fill: 'forwards'
      });
    setTimeout(function() {
      touka();
      btn();
    }, 1000);
  }