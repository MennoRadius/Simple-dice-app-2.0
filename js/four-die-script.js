$(document).ready(function(){

	var die1 = document.getElementById('die1');
	var die2 = document.getElementById('die2');
	var die3 = document.getElementById('die3');
	var die4 = document.getElementById('die4');	
	var total = document.getElementById('total');

	var roll1 = 0;
	var roll2 = 0;
	var roll3 = 0;
	var roll4 = 0;
	var totalEyes = 0;

	die1.innerHTML = "<img src='img/die" + roll1 + ".png'>";
	die2.innerHTML = "<img src='img/die" + roll2 + ".png'>";
	die3.innerHTML = "<img src='img/die" + roll3 + ".png'>";
	die4.innerHTML = "<img src='img/die" + roll4 + ".png'>";

	total.innerHTML = 'Total: ' +totalEyes;

	$('#roll').on('click', function(){
		$('#die1, #die2, #die3, #total').show();

		var roll1 = Math.floor((Math.random() * 6) + 1);
		var roll2 = Math.floor((Math.random() * 6) + 1);
		var roll3 = Math.floor((Math.random() * 6) + 1);
		var roll4 = Math.floor((Math.random() * 6) + 1);
		var totalEyes = roll1+roll2+roll3+roll4;

		die1.innerHTML = "<img src='img/die" + roll1 + ".png'>";
		die2.innerHTML = "<img src='img/die" + roll2 + ".png'>";
		die3.innerHTML = "<img src='img/die" + roll3 + ".png'>";
		die4.innerHTML = "<img src='img/die" + roll4 + ".png'>";
		total.innerHTML = 'Total: ' +totalEyes;

		console.log('Die 1 '+roll1);
		console.log('Die 2 '+roll2);
		console.log('Die 3 '+roll3);
		console.log('Die 4 ' +roll4);
		console.log('Total '+totalEyes);
	});
});