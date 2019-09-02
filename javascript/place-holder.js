$(function () {
  $(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("input").focus();
    });
    
  /*$(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("textarea").focus();
    });*/
    
  $(".field-wrapper input").on("keyup", function () {
    var value = $.trim($(this).val());
    
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
    }
  });
  
  //$("#accountNumber").addClass("hasValue")    
  
  /*$(".field-wrapper textarea").on("keyup", function () {
    var value = $.trim($(this).val());
    
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
    }
  });*/

});

$(function () {
  $(".field-wrapper .field-placeholder").on("click", function () {
    $(this).closest(".field-wrapper").find("textarea").focus();
    });
    
  $(".field-wrapper textarea").on("keyup", function () {
    var value = $.trim($(this).val());
    
    if (value) {
      $(this).closest(".field-wrapper").addClass("hasValue");
    } else {
      $(this).closest(".field-wrapper").removeClass("hasValue");
    }
  });

});