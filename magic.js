$(document).ready(function () {
  $('.tk').each(function () {
    var amount = $('.lq').attr('data-amount');
    var quantity = amount;
    $(this)
      .find('.lq')
      .animate({ height: parseInt(amount) + '%' }, 1000, function () {});
    $('.ring').css({ height: 100 - amount + 10 + '%' });
    $('.text').text(quantity + '%');
  });
  $('.text').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.text() },
      {
        duration: 1000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter) + '%');
        },
      }
    );
  });
});
