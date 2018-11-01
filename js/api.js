$(function(){
	$('#airQuality').on('click',function(e){
		e.preventDefault();

		var url = 'https://data.cityofnewyork.us/resource/ah89-62h9.json';

		$.ajax({
			type:'GET',
			url: url,
			beforeSend: function(){
				$('#air').after('<h1 id="load" class="animated fadeIn">LOADING</h1>');
			},
			complete: function(){
				$('#load').remove();
			},
			success: function(data){
				console.log(data);
			},
			error: function(){
				console.log("There was an error.");
			}
		});
	});




	$('#articleSearch').on('click',function(e){
		$('p.article').remove();

		var searchTerm = $('#articleTerm').val();

		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

		url += '?' + $.param({'api-key': "bf608acddf1c499b968605f99334254d",'q': searchTerm});

		$.ajax({
			type:'GET',
			url: url,
			beforeSend: function(){
				$('#articleSearch').after('<h1 id="load" class="animated fadeIn">LOADING</h1>');
			},
			complete: function(){
				$('#load').remove();
			},
			success: function(data){
					$.each(data.response.docs,function(e){
					var article = '<p class="article animated fadeIn"><a href="' + this.web_url + '" target="_blank">&#9758; ' + this.headline.main + '</a></p>';
					$('#articleSearch').after(article);
				});
			},
			error: function(){
				console.log("There was an error.");
			}
		});
	});















	$('#gifSearch').on('click',function(e){
		$('p.list').remove();

		var searchTerm = $('#gifTerm').val();

		var url = 'https://api.giphy.com/v1/gifs/search?api_key=7lPEQ3ScgAzr4Fllk1pFhytNdh3acwvt&q='+ searchTerm + '&limit=5&offset=0&rating=G&lang=en';

		$.ajax({
			type:'GET',
			url: url,
			beforeSend: function(){
				$('#container').append('<h1 id="load" class="animated fadeIn">LOADING</h1>');
			},
			complete: function(){
				$('#load').remove();
			},
			success: function(data){
				$.each(data.data, function(e){
					var pic = '<p class="list animated fadeIn"><a href="' + this.embed_url + '" target="_blank">&#9758; ' + this.title + '</a></p>';
					$('#container').append(pic);
				});
			},
			error: function(){
				console.log("There was an error.");
			}
		});
	});








});