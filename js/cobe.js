/*---------------------
Read On - Read Less Buttons
------------------------- */

$(document).ready(function() {
  $("#read-on-btn").click(function() {
    var elem = $("#read-on-btn").text();
    if (elem == "Read On") {
      //Stuff to do when btn is in the read on state
      $("#read-on-btn").text("Read Less");
      $("#text").show();
    } else {
      //Stuff to do when btn is in the read less state
      $("#read-on-btn").text("Read On");
      $("#text").hide();
    }
  });
});

  
        /*---------------------
      		price-slider active
      		------------------------- */
          $(document).ready(function() {
            $("#color_mode").on("change", function () {
                colorModePreview(this);
            })
        });
        
        function colorModePreview(ele) {
            if($(ele).prop("checked") == true){
                $('body').addClass('dark-preview');
                $('body').removeClass('white-preview');
            }
            else if($(ele).prop("checked") == false){
                $('body').addClass('white-preview');
                $('body').removeClass('dark-preview');
            }
        }
