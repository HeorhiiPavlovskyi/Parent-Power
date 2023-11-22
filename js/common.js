$(function() {

$(".db-block").click(function(){
  $(".dst-search").addClass("d-block");
});

     $('#map').vectorMap({
    map: 'us_lcc',
    backgroundColor: 'transparent',
    regionStyle: {
      initial: {
        fill: '#0e2241',
        stroke: '#fff',
        "stroke-width": 1,
      },
      hover: {
        fill: '#b92631',
        "fill-opacity": 1,
      },
    },
   
    });

$('#search').on('click', function() {
  $(this).addClass('active');
  });

  $('#search-closed').on('click', function() {
  $('#search').removeClass('active');
  });

$('#state-btn').on('click', function() {
  $(".search-district-input").addClass('show');
  });

$('#search-address').on('click', function() {
  $('.search-address, .search-img').addClass('active');
  });

  $('.address-closed').on('click', function() {
  $('#search-address, .search-img').removeClass('active');
  });

$('.sign-form').on('click', function() {
  $('.sign-form, .sign-submit').addClass('active');
  });

  $('.get').on('click', function() {
  $('.sign-form, .sign-submit').removeClass('active');
  });

 })

