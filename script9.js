$(document).ready(function() {
	$('.moveIcon').hover(function() {
		$(this).css('font-size', '25px'),
		$(this).css('padding', '3.5px');
	}, function() {
		$(this).css('font-size', '20px'), 
		$(this).css('padding', '10px');
	});
});
function loadRepos() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        let myObj, i, x = '';
        myObj = JSON.parse(this.responseText);
        for (i in myObj) x += '<li><a href=' +myObj[i].html_url + '>' + myObj[i].name + '</li>';
        document.getElementById('list').innerHTML = x;

      }
    };
    xhttp.open("GET", "https://api.github.com/users/callanbr/repos", true);
    xhttp.send();
  }