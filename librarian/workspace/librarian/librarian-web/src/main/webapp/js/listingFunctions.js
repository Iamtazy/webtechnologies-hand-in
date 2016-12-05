function listAuthors() {
		$.getJSON('authors', function(data){
			var html = $('<h1>Authors</h1>');
			var table = $('<table></table');
			var headerRow = $('<th>ID</th><th>Name</th><th>Nationality</th><th>Birthdate</th>');
			$(table).append(headerRow);
			$.each(data,function(key, value) {
				var bdate = (new Date(value['birthDate']).toLocaleDateString());
				var row = $('<tr></tr>')
				var idCell = $('<td>'+value['authorID']+'</td>');
				var nameCell = $('<td>'+value['name']+'</td>');
				var nationalityCell = $('<td>'+value['nationality']+'</td>');
				var birthdateCell = $('<td>'+bdate+'</td>');
				$(row).append(idCell);
				$(row).append(nameCell);
				$(row).append(nationalityCell);
				$(row).append(birthdateCell);
				$(table).append(row);
			});
			$(html).append(table);
			$('#mainContent').html(html);
		})}

function listBooks() {
		$.getJSON('books', function(data){
			var html = $('<h1>Books</h1>');
			var table = $('<table></table');
			var headerRow = $('<th>ID</th><th>Title</th><th>Genres</th><th>Authors</th>');
			$(table).append(headerRow);
			$.each(data,function(key, value) {
				var row = $('<tr></tr>')
				var idCell = $('<td>'+value['bookId']+'</td>');
				var titleCell = $('<td>'+value['title']+'</td>');
				var genresCell = $('<td>'+value['genres']+'</td>');
				var authorString = JSON.stringify(value['authors']);
				var authorsCell = $('<td>'+authorString+'</td>');
				$(row).append(idCell);
				$(row).append(titleCell);
				$(row).append(genresCell);
				$(row).append(authorsCell);
				$(table).append(row);
			});
			$(html).append(table);
			$('#mainContent').html(html);
	})}