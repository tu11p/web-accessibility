$('.slide-prev').click(function(){
  $('.slide-next').focus();
  $('.slide-prev').css('display','none');
  $('.slide-second').attr('aria-hidden', 'true');
  $('.slide-second').attr('tabindex', '-1');
})
$('.slide-next').click(function(){
  $('.slide-prev').focus();
  $('.slide-next').css('display','none');
  $('.slide-first').attr('aria-hidden', 'true');
  $('.slide-first').attr('tabindex', '-1');
})