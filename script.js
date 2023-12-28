 // 回転率を上げたいものを増やして書く。２回なら２倍、３回なら３倍。
 //運勢の配列を作る。
 const results = [
    'daidaikiti.png',
    'daikiti.png',
    'tyuukiti.png',
    'tyuukiti.png',
    'kiti.png',
    'kiti.png',
    'syoukiti.png',
    'syoukiti.png',
    'suekiti.png',
    'kyou.png',
    'kyou.png',
    'daikyou.png'
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
// 縦に振る動き
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
      // タイマー機能
    setTimeout(function() {
      kaiten();
    }, 2400);
  }

// 縦に振った後、横に回転する動き
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
// 結果の画面に映るさい、ボタンをフェードアウト
  function btn() {
    target.animate(
      [{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 500,
        fill: 'forwards'
      });
    setTimeout(function() {
      target.remove();
    }, 500);
  }

  function touka() {
    element.animate(
      [{
        opacity: 1
      }, {
        opacity: 0
      }], {
        duration: 500,
        fill: 'forwards'
      });
    setTimeout(function() {
      element.remove();
      fortuneAnime();
    }, 500);
  }

  // ランダムに結果を出す。
  function fortuneAnime() {
    const key = Math.floor(Math.random() * results.length);
    const fortune = document.getElementById("fortune");
    fortune.src = "img/" + results[key];
    fortune.animate(
      [{
        transform: 'translateY(0) scale(1)'
      }, {
        transform: 'translateY(-30px)'
      }, {
        transform: 'scale(1)'
      }, {
        transform: 'scale(1.1)'
      }, {
        transform: 'translateY(0) scale(1)'
      }], {
        duration: 1000,
        fill: 'forwards'
      });
  }
