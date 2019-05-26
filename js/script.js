var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    hash: true,
    pageDots: false,
    cellAlign: 'left',
    contain: true

});



var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


var button = document.getElementById('button');
button.addEventListener('click', function () {
    flkty.select(0)
});