var players = {};
var mainScene;

function onYouTubeIframeAPIReady() {
  $('#container').css('height', window.innerHeight)
  // init controller
  var controller = new ScrollMagic.Controller();

  var wipeAnimation = new TimelineMax()
    .fromTo('section#chapitre-1a', 8, { y: '100%' }, { y: '0%'}) // From bottom
    .fromTo('section#chapitre-1b', 10, { y: '100%' }, { y: '-100%'}) // From bottom
    .fromTo('section#chapitre-2', 8, { y: '100%' }, { y: '0%'}) // From right
    .fromTo('section#chapitre-2a', 10, { y: '100%' }, { y: '-100%'}) // From right
    .fromTo('section#chapitre-2b', 8, { y: '100%' }, { y: '0%'}) // From right
    .fromTo('section#chapitre-2bb', 10, { y: '100%' }, { y: '-100%'}) // From right
    .fromTo('section#chapitre-2c', 8, { y: '100%' }, { y: '0%'}) // From right
    .fromTo('section#chapitre-2cc', 10, { y: '100%' }, { y: '-100%'}) // From right
    .fromTo('section#chapitre-2d', 8, { y: '100%' }, { y: '0%'}) // From right
    .fromTo('section#chapitre-2dd', 10, { y: '100%' }, { y: '-100%'}) // From right
    .fromTo('section#chapitre-21', 8, { y: '100%' }, { y: '0%'}) // From right
    .fromTo('section#chapitre-2aa', 10, { y: '100%' }, { y: '-100%'}) // From right
    .fromTo('section#chapitre-3', 8, { y: '100%' }, { y: '0%'})// From right
    .fromTo('section#chapitre-3b', 10, { y: '100%' }, { y: '-100%'})// From right
    .fromTo('section#chapitre-5', 8, { y: '100%' }, { y: '0%'})// From right
    .fromTo('section#chapitre-5b', 10, { y: '100%' }, { y: '-100%'})// From right
    .fromTo('section#chapitre-max', 8, { y: '100%' }, { y: '0%'})// From right
    .fromTo('section#chapitre-maxb', 10, { y: '100%' }, { y: '-100%'})// From right
    .fromTo('section#chapitre-story', 8, { y: '100%' }, { y: '0%'})// From right
    .fromTo('section#chapitre-storyb', 10, { y: '100%' }, { y: '-100%'})// From right
    .fromTo('section#chapitre-barode', 8, { y: '100%' }, { y: '0%'})// From right

  // create a scene
  mainScene = new ScrollMagic.Scene({
      triggerElement: '#container',
      triggerHook: 'onLeave',
      duration: ($('section').length - 1) * 100 + '%'  // = nombre de slides * 100 (pour un scroll naturel)
    })
    .setPin('#container')
    .setTween(wipeAnimation)
    .on("update", scrollScene)
    .addTo(controller); 
}

function scrollScene() {
  const progress = mainScene.progress()
}

function isMobile()  {
  var ua = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)
}
