$('#collapse-navbar').on('shown.bs.collapse', function() {
  $('.banner').css('transform', 'translate(-50%, 10%)');
});

$('#collapse-navbar').on('hidden.bs.collapse', function() {
  $('.banner').css('transform', 'translate(-50%, -50%)');
});