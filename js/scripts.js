window.onload = function () {

  // Vide | Видео на фоне
  $('#welcomeVideo').vide({
    mp4: 'video/main_bg_x264.mp4',
  });

  const videoBox = $('#VideoBox').vide({
    mp4: 'video/box_bg_x264.mp4',
  });

  // JQueryInputmask | Маска для поля ввода телефона
  $('.js-mask-tel').inputmask({
    mask: '7 999 999 99 99',
    placeholder: '',
    showMaskOnHover: false
  });

}