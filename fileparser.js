//need to get excel file into a JSON 

const salaries = "https://docs.google.com/spreadsheets/d/19h0WT9Xjf9ncNmJDWpd8fzz7YnB37nemDnxKSO0EE8o/edit#gid=1664289965";
Papa.parse(salaries, {
	download: true,
	complete: function(results) {
		console.log(results);
	}
});