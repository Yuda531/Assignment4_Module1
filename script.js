var default_content = "";

$(document).ready(function () {

	checkURL();
	$('ul li a').click(function (e) {
		checkURL(this.hash);
	});

	//filling in the default content
	default_content = $('#pageContent').html();


	setInterval("checkURL()", 250);

});

var lasturl = "";

function checkURL(hash) {
	if (!hash) hash = window.location.hash;

	if (hash != lasturl) {
		lasturl = hash;
		// FIX - if we've used the history buttons to return to the homepage,
		// fill the pageContent with the default_content
		if (hash == "")
			$('#pageContent').html(default_content);

		else {
			if (hash == "#products")
				loadProducts();
			else
				loadPage(hash);
		}
	}
}


function loadPage(url) {
	url = url.replace('#page', '');

	$('#loading').css('visibility', 'visible');

	$.ajax({
		type: "GET",
		url: "load_page.php",
		data: 'page=' + url,
		dataType: "html",
		success: function (msg) {

			if (parseInt(msg) != 0) {
				$('#pageContent').html(msg);
				$('#loading').css('visibility', 'hidden');
			}
		}

	});

}


// Products in Here
function loadProducts() {
	$('#loading').css('visibility', 'visible');
	var jsonURL = "products.json";

		$('#currencyId').change(function(){

			$('#currencyId option:selected').each(function(){

				let asepSupriyadi = $(this).text();

				$.getJSON(jsonURL, function (json) {
				
					let imgList = "<ul class=\"products\">";
					if(asepSupriyadi === "IDR"){
						$.each(json.products, function (){
							imgList += '<li><img src= "' + this.imgPath + '"><h3>' + this.name + '</h3><h3>' + (this.price*this.IDRrate) + '</h3></li>';
						});
					} else if (asepSupriyadi === "SGD"){
						$.each(json.products, function (){
							imgList += '<li><img src= "' + this.imgPath + '"><h3>' + this.name + '</h3><h3>' + `${(this.price*this.SGDrate).toFixed(2)}` + '</h3></li>';
						});
					} else if (asepSupriyadi === "YEN"){
						$.each(json.products, function (){
							imgList += '<li><img src= "' + this.imgPath + '"><h3>' + this.name + '</h3><h3>' + `${(this.price*this.YENrate).toFixed(2)}` + '</h3></li>';
						})
					} else if (asepSupriyadi === "Select The Currency"){
						$.each(json.products, function (){
							imgList += '<li><img src= "' + this.imgPath + '"><h3>' + this.name + '</h3></li>';
						})
					}
					imgList += '</ul>'
					$('#pageContent').html(imgList);
					$('#loading').css('visibility', 'hidden');
				});
			});
		
		});









	$.getJSON(jsonURL, function (json) {
		var imgList = "<ul class=\"products\">";
		$.each(json.products, function () {
			imgList += '<li><img src= "' + this.imgPath + '"><h3>' + this.name + '</h3></li>';
		});
		imgList += '</ul>'
		$('#pageContent').html(imgList);
		$('#loading').css('visibility', 'hidden');
	});
}



$(document).ready(function () {

	$('#navigation li a:eq(0)').click(function () {
		$.ajax({
			type: "GET",
			url: "pages/page_1.html",
			success: function (result) {
				$("#pageContent").html(result);
				$("#loading").css('visibility', 'hidden');
			}
		});
	})
})
$(document).ready(function () {

	$('#navigation li a:eq(1)').click(function () {
		$.ajax({
			type: "GET",
			url: "pages/page_2.html",
			success: function (result) {
				$("#pageContent").html(result);
				$("#loading").css('visibility', 'hidden');
			}
		});
	})
})
$(document).ready(function () {

	$('#navigation li a:eq(2)').click(function () {
		$.ajax({
			type: "GET",
			url: "pages/page_3.html",
			success: function (result) {
				$("#pageContent").html(result);
				$("#loading").css('visibility', 'hidden');
			}
		});
	})
})
$(document).ready(function () {

	$('#navigation li a:eq(3)').click(function () {
		$.ajax({
			type: "GET",
			url: "pages/page_4.html",
			success: function (result) {
				$("#pageContent").html(result);
				$("#loading").css('visibility', 'hidden');
			}
		});
	})
})