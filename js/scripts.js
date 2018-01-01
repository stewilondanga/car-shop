// Put states into array
var state_array = [];

 $(document).ready(function() {

	 $('.region').each(function() {
     var a = $(this).text();
     if ($.inArray(a, state_array) == -1) {
       state_array.push(a);
     }
   });
   state_array.sort();
 });

 // Put states into select list
  $(document).ready(function() {
    var option = '';

		for (var i = 0; i < state_array.length; i++) {
     option += '<option value="' + state_array[i] + '">' + state_array[i] + '</option>';
   }

	 $('.state_select').append(option);

	  });

		// Clear selection
 $('.btn-clear').click(function() {
   $('#events tr').show();
 });

 // Filter table based on user input
  $('.state_select').change(function() {

		 $('#events tr').show();

		 

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
