$(document).ready(function() {

	var questions = [
	//Question 1, index 0
	{
		question: "Who plays baseball on the north side of Chicago?",
		answer: "Chicago Cubs",
		choices: [
			"Chicago White Sox", "Chicago Cubs", "Chicago Bears", "Chicago Bulls"
		]

	},
	//Question 2, index 1
	{
		question: "What stadium do the Chicago Bulls play?",
		answer: "United Center",
		choices: [
			"United Center", "Wrigley Field", "Soldier Field", "Toyota Park"
		]
	},
	//Question 3, index 2
	{
		question: "Who wore #23 for the Chicago Bulls?",
		answer: "Michael Jordan",
		choices: [
			"Michael Jackson","Scottie Pippen","Steve Kerr","Michael Jordan"
		]
	},
	//Question 4, index 3
	{
		question: "Who won six championships in the 90s",
		answer: "Chicago Bulls",
		choices: [
			"Chicago Cubs", "Chicago Bears", "Chicago Bulls", "Chicago Blackhawks"
		]
	},
	//Question 5, index 4
	{
		question: "Who plays third base for the Chicago Cubs?",
		answer: "Kris Bryant",
		choices: [
			"Anthony Rizzo", "Kris Bryant", "Javy Baez",
			"Addison Russell"
		]
	},
	//Question 6, index 5
	{
		question: "What team plays hockey in Chicago?",
		answer: "Blackhawks",
		choices: [
			"Blackhawks", "Cubs", "Bears", "Fire"
		]
	},

];
    var number = 31;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var intervalId;

    $("#show-number").on("click", run);

    function run() {
      $("#questions").empty();
      intervalId = setInterval(decrement, 1000);
      renderQuestions();
    }

    function decrement() {

      number--;

      $("#show-number").html(`<h2>You have ${number} Seconds left!</h2>`);

      if (number === 0) {

        stop();
        alert("Time is up!");
        $("#show-number").html(`<button class='btn-lg btn-primary'>Start</button>`);
  		$("#questions").html(`
  			Correct Answers: ${correct} <br/>
  			Incorrect Answers: ${incorrect} <br/>
  			Unanswered questions: ${unanswered} <br/>`);
		$("#submitTest").empty();
  		number = 31;
      }
    }

    function renderQuestions() {
    	for (var i = 0; i < questions.length; i++) {
    		$("#questions").append(`${questions[i].question} <br/>`);

    			$('#questions').append(`<input type='radio' name='radio_question ${i}' />`);
    			$('#questions').append(`${questions[i].choices[0]}`);

    			$('#questions').append(`<input type='radio' name='radio_question ${i}' />`);
    			$('#questions').append(`${questions[i].choices[1]}`);

    			$('#questions').append(`<input type='radio' name='radio_question ${i}' />`);
    			$('#questions').append(`${questions[i].choices[2]}`);

    			$('#questions').append(`<input type='radio' name='radio_question ${i}' />`);
    			$('#questions').append(`${questions[i].choices[3]}<br/><br/>`);
    			
    			//console.log(questions[i].answer);
    	}

    	$("#submitButtonContainer").html(`
	  		<button id='submitBtn' type="submit" form="myForm" value="Done" class='btn-lg btn-primary'>Done</button>`);
	    }


    $("#submitButtonContainer").on("click", "#submitBtn", function reset() {
    	stop();

    	//check which radio buttons are checked
    	//capture value for selected radio into a variable

    	//check if selected radio is equal to correct answer
		//if correct correct++ else incorrect++ if none unanswered++	

  		$("#show-number").html(`<button class='btn-lg btn-primary'>Start</button>`);
  		$("#questions").html(
  			`Correct Answers: ${correct}<br/>
  			 Incorrect Answers: ${incorrect} <br/>
  			 Unanswered Questions: ${unanswered}`);
  		$("#submitButtonContainer").empty();
  		number = 31;
	});

        	function stop() {
       			clearInterval(intervalId);
    		}

});