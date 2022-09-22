/*
	WEB 303 Assignment 1 - jQuery
	Hetkumar Atulbhai patel
*/
$(document).ready(function(){
	let sal_pay = $('#salary');
	let per = $('#per');
	$('#salary').keyup(function(){
		cal();

	}
	);
	$('#per').keyup(function(){
		cal();
	}
	);
	function cal(){
		let cal_1 = $('#salary').val() * $('#per').val() / 100;
		let print = cal_1.toFixed(2);
		$('#amt').text('$'+ print);
	}
}
);

