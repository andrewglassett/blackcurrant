(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min',
      fitvid: '/js/vendor/fitvids',
      modal: '/js/vendor/modal.min',
      particle: '/js/vendor/jquery.particleground.min',
      modernizr: '/js/vendor/modernizr.custom',
      classie: '/js/vendor/classie'
    },
    shim: {
      fitvid: {
        deps: ['jquery']
      },
      modal: {
        deps: ['jquery']
      },
      particle: {
        deps: ['jquery']
      },
      modernizr: {
        dep: ['jquery']
      },
      classie: {
        dep: ['jquery']
      }
    }
  });

  require(['jquery', 'fitvid', 'modal', 'particle', 'modernizr', 'classie'], function($) {
    $("#home").particleground;
    ({
      dotColor: "#000000",
      lineColor: "#000000"
    });
    $('.video, #modal').fitVids();
    $('#play-video').on('click', function() {
      return $('#modal').slideUp();
    });
    $("#modal").on($.modal.BEFORE_CLOSE, function() {
      var iframe;
      iframe = $('iframe#video');
      iframe.remove();
      return $('.fluid-width-video-wrapper').append(iframe);
    });
    return $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        return $.modal.close();
      }
    });
  });

}).call(this);
