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

/*---------------------
BreadCrumbs.js
------------------------- */

{/* <nav class="breadcrumb-container" role="navigation" aria-label="You are here:">
	<ol class="cui breadcrumb">
		<li><a href="{{ URL }}">{{ Page title 1 }}</a></li>
		<li><a href="{{ URL }}">{{ Page title 2 }}</a></li>
		<li><a href="{{ URL }}">{{ Page title 3 }}</a></li>
		<li><a href="{{ URL }}">{{ Page title 4 }}</a></li>
		<li><a href="{{ URL }}">{{ Page title 5 }}</a></li>

		<li class="active"><a href="{{ URL }}">{{ Current page title }}</a></li>
	</ol>
	<span class="bg-overlay" aria-hidden="true"></span>
</nav> */}