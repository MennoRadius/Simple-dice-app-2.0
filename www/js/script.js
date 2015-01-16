$(document).ready(function(){

	var die1 = document.getElementById('die1');
	var die2 = document.getElementById('die2');
	var total = document.getElementById('total');
	var comment = document.getElementById('comment');

	var roll1 = 1;
	var roll2 = 1;
	var totalEyes = roll1+roll2;

	die1.innerHTML = "<img src='img/die" + roll1 + ".png'>";
	die2.innerHTML = "<img src='img/die" + roll2 + ".png'>";
	total.innerHTML = 'Total: ' +totalEyes;

	$('#comment').hide();

	$('#roll').on('click', function(){
		$('#die1, #die2, #total').show();

		var roll1 = Math.floor((Math.random() * 6) + 1);
		var roll2 = Math.floor((Math.random() * 6) + 1);
		var totalEyes = roll1+roll2;

		die1.innerHTML = "<img src='img/die" + roll1 + ".png'>";
		die2.innerHTML = "<img src='img/die" + roll2 + ".png'>";
		total.innerHTML = 'Total: ' +totalEyes;

		if(roll1 == 1 && roll2 == 1){
			$('#comment').show();
			comment.innerHTML = "Snake eye's!";
		}else if(roll1 == roll2){
			$('#comment').show();
			comment.innerHTML = "I'm seeing double O_O";
		}else{
			$('#comment').hide();
		}

		console.log('Die 1 '+roll1);
		console.log('Die 2 '+roll2);
		console.log('Total '+totalEyes);
	});

});