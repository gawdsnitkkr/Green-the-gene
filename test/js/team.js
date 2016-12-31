$('#asia').click(function(){
    $('#northamerica').hide(200);
 	$('#southamerica').hide(200);
 	$('footer').hide(200);
 	$('#africa').hide(200);
 	$('#europe').hide(200);
 	$('#title').hide(200, function() {
 		$('#members').show(400);
 	});
});
$('#close').click(function(){
	$('#northamerica').show(200);
 	$('#southamerica').show(200);
 	$('footer').show(200);
 	$('#africa').show(200);
 	$('#europe').show(200);
 	$('#asia').show(200);
 	$('#members').hide(200, function() {
 		$('#title').show(400);
 	});
});
$('#northamerica').click(function(){
    $('#asia').hide(200);
 	$('#title').hide(200, function() {
 		$('#members').show(400);
 	});
 	$('#southamerica').hide(200);
 	$('#africa').hide(200);
 	$('#europe').hide(200);
 	$('footer').hide(200);
});  
$('#southamerica').click(function(){
    $('#northamerica').hide(200);
 	$('#asia').hide(200);
 	$('footer').hide(200);
 	$('#title').hide(200, function() {
 		$('#members').show(400);
 	});
 	$('#africa').hide(200);
 	$('#europe').hide(200);
 	
}); 
$('#africa').click(function(){
    $('#northamerica').hide(200);
 	$('#southamerica').hide(200);
 	$('#asia').hide(200);
 	$('#title').hide(200, function() {
 		$('#members').show(400);
 	});
 	$('footer').hide(200);
 	$('#europe').hide(200);
}); 
$('#europe').click(function(){
    $('#northamerica').hide(200);
 	$('#southamerica').hide(200);
 	$('#africa').hide(200);
 	$('#title').hide(200, function() {
 		$('#members').show(400);
 	});
 	$('footer').hide(200);
 	$('#asia').hide(200);
 });
