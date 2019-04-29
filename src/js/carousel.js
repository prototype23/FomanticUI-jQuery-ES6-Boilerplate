import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
let carouselCycle = 0;
let autoplayTimeout = 10000;
let cycleTimeHandle;

const initCarousel = () => {
  console.log('Initializing carousel..');

  $('.owl-carousel')
    .owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: autoplayTimeout,
      autoplayHoverPause: false,
      onTranslated: function(e) {

        if (e && e.page && e.page.count) {
          console.log('page', e.page.index, 'of', e.page.count - 1, 'carouselCycle', carouselCycle);
        }

        if (e && e.page && e.page.count && e.page.index >= e.page.count - 1) {
          clearTimeout(cycleTimeHandle);

          cycleTimeHandle = setTimeout(function() {
            carouselCycle ++;
            $('.screen').trigger('carousel-cycle', [{cycle: carouselCycle}]);
          }, autoplayTimeout - 100);
        }
      }
    });
};

const destroyCarousel = () => {
  let numberOfDynamicSlides = $('.owl-stage > .owl-item:not(.cloned) .slide--dynamic').length;
  let numberOfSlides = $('.owl-stage > .owl-item:not(.cloned)').length - numberOfDynamicSlides;

  console.log('numberOfDynamicSlides', numberOfDynamicSlides);

  for (var i = 1; i <= numberOfDynamicSlides; i++) {
    if (i > 100) break; // Fail safe for bad data
    // Remove our dynamic content.
    console.log && console.log('Removing dynamic slide #', numberOfSlides);
    $('.owl-carousel').trigger('remove.owl.carousel', [numberOfSlides]);
  }

  // Destroy carousel.
  $('.owl-carousel').trigger('destroy.owl.carousel');
};

/**
 * Appends new slide to the carousel. You have to do this on dynamic content because carousel clones everything on init.
 *
 * @param {object} options
 * @param {number} options.slideIndex The slide index to replace.
 * @param {string} options.html       The html string to insert.
 */
const appendSlide = (options) => {
  console.log && console.log('Adding a carousel slide index.');

  $('.owl-carousel')
    .trigger('add.owl.carousel', [$(options.html)])
    .trigger('refresh.owl.carousel');
};

/**
 * We expose a mini api for the user.
 * `init` - Inits the carousel.
 * `destroy` - Destroys the carousel.
 */
const miniApi = {
  init: initCarousel,
  destroy: destroyCarousel,
  appendSlide: appendSlide
};

export default miniApi;
