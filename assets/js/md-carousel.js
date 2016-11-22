$(document).on('click', '.carousel-control-box a.left', function(){
    var $this = $(this);
    $(this).addClass('clicked');
      setTimeout(function(){
        $this.removeClass('clicked');
    }, 250);

});
$(document).on('click', '.carousel-control-box a.right', function(){
    var $this = $(this);
    $this.addClass('clicked');
    setTimeout(function(){
        $this.removeClass('clicked');
    }, 250);

});
