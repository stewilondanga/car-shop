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

		 var state_code = $(this).val();

		 $('.region').each(function() {

   if ($(this).text() != state_code) {

		 $(this).closest("tr").hide();
     }

	 });
  });

	$('th').click(function() {
	   var table =  $(this).parents('table').eq(0);
	   var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
	   this.asc = !this.asc;
	   if (!this.asc) {
	     rows = rows.reverse();
	   }
	   for (var i = 0; i < rows.length; i++) {
	     table.append(rows[i]);
	   }
	 })

	 function comparer(index) {
	    return function(a, b) {

				var valA = getCellValue(a, index), valB = getCellValue(b, index);
     return $.isNumeric(valA) && $.isNumeric(valB) ?  valA - valB  : valA.localeCompare(valB) ;
   }
 }

 function getCellValue(row, index) {
   return $(row).children('td').eq(index).html();
 }

 // Get user input to search for string
$(".input").keyup(function () {
      var data = this.value.toUpperCase().split(" ");
      var jo = $("#stuff").find("tr");
      if (this.value == "") {
          jo.show();
          return;
      }
      jo.hide();

			jo.filter(function (i, v) {
		           var $t = $(this);
		           for (var d = 0; d < data.length; ++d) {
		               if ($t.text().toUpperCase().indexOf(data[d]) > -1) {
		                   return true;
		               }
		           }
		           return false;
		       })
		       .show();
		   }).focus(function () {
		       this.value = "";
		       $(this).css({
		           "color": "black"
		       });
		       $(this).unbind('focus');
		   }).css({
		       "color": "#C0C0C0"
		   });

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
