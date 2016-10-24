require.config
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min'
    fitvid: '/js/vendor/fitvids'
    modal: '/js/vendor/modal.min'
    particle: '/js/vendor/jquery.particleground.min'
    modernizr: '/js/vendor/modernizr.custom'
    classie: '/js/vendor/classie'


  shim:
    fitvid:
      deps: ['jquery']
    modal:
      deps: ['jquery']
    particle:
      deps: ['jquery']
    modernizr:
      dep:  ['jquery']
    classie:
      dep:  ['jquery']

require ['jquery', 'fitvid', 'modal', 'particle','modernizr','classie'], ($) ->


  $("#home").particleground
  dotColor: "#000000"
  lineColor: "#000000"

  $('.video, #modal').fitVids()

  #open modal
  $('#play-video').on 'click', -> $('#modal').slideUp()

  #remove and reinsert video on close
  $("#modal").on $.modal.BEFORE_CLOSE, ->
    iframe = $('iframe#video')
    iframe.remove()
    $('.fluid-width-video-wrapper').append(iframe)

  #close modal with esc key
  $(document).keyup (e) -> $.modal.close() if e.keyCode is 27
