function submitInsert() {
	var JSONObject = {"authorID":$("#id").val(), "name":$("#name").val(), "nationality":$("#nationality").val(), "birthDate":$("#bdate").val()};   
	$.ajax({
	  url: "author/insert",
	  type: "POST",
	  data: JSON.stringify(JSONObject),
	  contentType:'application/json',
	  error: function () {
		        alert("An error has occured! Please check the fields again!");
		    },
	  success: function () {
		        alert("Insert was successful!");
		        window.location="authorPage";
		    }
	})} /* .done(function() {
				alert( "Insert was successful!" );
				window.location="authorPage";
			})
			.fail(function() {
  				function(xhr, status, error) {
	  			var err = eval("(" + xhr.responseText + ")");
	  			alert(err.Message);
				//alert( "An error has occured! Please check the fields again!" );
			}); */

function submitUpdate() {
	var JSONObject = {"authorID":$("#id").val(), "name":$("#name").val(), "nationality":$("#nationality").val(), "birthDate":$("#bdate").val()};   
	$.ajax({
	  url: "author/update",
	  type: "POST",
	  data: JSON.stringify(JSONObject),
	  contentType:'application/json',
	  error: function () {
		        alert("An error has occured! Please check the fields again!");
		    },
	  success: function () {
		        alert("Update was successful!");
		        window.location="authorPage";
	  }})}