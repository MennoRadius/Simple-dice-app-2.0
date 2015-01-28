$(document).ready(function(){

	var die1 = document.getElementById('die1');
	var total = document.getElementById('total');

	var roll1 = 1;
	var totalEyes = roll1;

	die1.innerHTML = "<img src='img/die" + roll1 + ".png'>";
	total.innerHTML = 'Total: ' +totalEyes;

	$('#roll').on('click', function(){
		$('#die1, #total').show();

		var roll1 = Math.floor((Math.random() * 6) + 1);
		var totalEyes = roll1;

		die1.innerHTML = "<img src='img/die" + roll1 + ".png'>";
		total.innerHTML = 'Total: ' +totalEyes;

		console.log('Die 1 '+roll1);
		console.log('Total '+totalEyes);
	});
});