$(document).ready(function(){
    
    
	 $(function(){
	     chainAnim('.img-circle , .img-rounded ',100,'1');
	});

	function chainAnim(e,s,o) {
        var $fade = $(e);
        var code = function() {console.log('Done.');};
        $fade.each(function( i ){
            $(this).delay(i * s).fadeTo(s,o,code);
        });
	} 
	$('.img-rounded , .img-circle').hover(function() {
	  $(this).css({opacity:.8});
	}).mouseleave( function () {
	  $(this).css({opacity:1 });
	});

    $('#board').typewrite({
        actions: [{type: 'BOARD '},]
    });
     $('#joinus').typewrite({
        actions: [{type: 'JOIN US '},]
    });
     $('#partners').typewrite({
        actions: [{type: 'PARTNERS '},]
    });
       
});