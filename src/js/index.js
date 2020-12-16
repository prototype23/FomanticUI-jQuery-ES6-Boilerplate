import '../sass/global.scss';
import '../sass/index/index.scss';

// import jquery from 'jquery';
// Expose jQuery globally so other plugins using global var can work!
// window.$ = window.jQuery = jquery;

$(document).ready(function () {
  $('body')
    .toast({
      title: 'Awesome',
      message: 'Js works',
      class: 'purple',
      className: {
        toast: 'ui message'
      },
      closeIcon: true,
      minDisplayTime: 0,
      showProgress: 'bottom'
    });

  $('.test-animation')
    .transition('bounce');

  $('.page-loader').removeClass('active');
});
