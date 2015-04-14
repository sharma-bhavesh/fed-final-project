'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here

    // initialize
    $("#form-add-property").hide();

    $("#btn-add-property").on("click", function() {
    	$(this).hide();
    	$("#form-add-property").show();
    })

    $("#btn-cancel-add-property").on("click", function() {
    	$("#btn-add-property").show();
    	$("#form-add-property").hide();
    })


  });
})(jQuery);
