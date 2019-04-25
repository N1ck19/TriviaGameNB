var panel = $("#quiz-area");

// The above code shows jQuery in action. instead of using getElementById and lots of typing, 
// we can shorten it here to just the id name (with a hashtag, of course) within parentheses and a dollar sign at the beginning.
var countStartNumber = 30;

var questions = [

	{
		question: "What was the best-selling gaming console of this decade (and still is)?",
		answers: ["Nintendo Gamecube", "Sony Playstation 2", "XBOX", "Nintendo Wii"],
		correctAnswer: "Sony Playstation 2",
		image: "assets\PossibleDrearyGentoopenguin-size_restricted.gif"
	},

	{
		question: "In what year was YouTube launched?"
		answers: ["2003", "2001", "2005", "2006"],
		correctAnswer: "2005",
		image: "assets\yt.gif"
	}

];

// Variable to hold out setInterval
var timer;

var game {

	questions: questions,
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,

	countdown: function() {
		game.counter--;
		$("#counter-number").html(game.counter);
		if (game.counter === 0) {
			console.log("Time's up!");
			game.timeUp();

		}
	},

	loadQuestion: function() {
		// function and milliseconds are two very important parameters when it comes to setInterval.
		timer = setInterval(game.countdown, 1000);
		//"function" parameter represents what you want the interval to be. In this case, the above function in the game object.
		//"milliseconds" is how much time is given, but in milliseconds. 1 second = 1000 milliseconds.
		panel.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
		for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
			panel.append("<button class='answer-button' id='button' data name= ''" +
				questions[this.currentQuestion].answers[i] + "'>" +
				questions[this.currentQuestion].answers[i] + "</button>");
		}
	},

	nextQuestion: function() {
		game.counter = countStartNumber;
		$("#counter-number").html(game.counter);
		game.currentQuestion++;
		game.loadQuestion;
	},

	timeUp: function() {
		clearInterval(timer);
		$("#counter-number").html(game.counter);
		panel.html("<h2>Out of Time!</h2>");
		panel.append("<h3>The Correct Answer Was: " + questions[this.currentQuestion].correctAnswer);
		panel.append("<img src=''" + questions[this.currentQuestion].image);

		if (game.currentQuestion === questions.length - 1) {
			setTimeout(game.results, 3 * 1000);
		}
		else {
			setTimeout(game.nextQuestion, 3 * 1000);
		}

	},

	results: function() {
		clearInterval(timer);

		panel.html("<h2>All done, here's how you did!</h2>");

		$("#counter-number").html(game.counter);

		panel.append("<h3>Correct Answers: " + game.correct + "</h3>");
		panel.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
		panel.append("<h3>Unanswered: " + (questions.length - (game.correct + game.incorrect)) + "</h3>");
		panel.append("<br><button id='start-over'>Start Over?</button>");
		
	},

	clicked: function(e) {

		clearInterval(timer);

		if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer);
		{
			this.answeredCorrectly();
		}
		else
		{
			this.answeredIncorrectly();
		}
	},

	answeredIncorrectly: function() {

		game.incorrect++;
		clearInterval(timer);
		panel.html("<h2>Nope!</h2>")
		panel.append("<h3>The correct answer was: " + questions[game.currentQuestion].correctAnswer + "</h3>");
		panel.append("<img src='" + questions[game.currentQuestion].image + "'/>");

		if (game.currentQuestion === questions.length - 1) {
			setTimeout(game.results, 3 * 1000);
		}
		else {
			setTimeout(game.nextQuestion, 3 * 1000);
		}
	},

	reset: function() {

		this.currentQuestion = 0;
		this.counter = countStartNumber;
		this.correct = 0;
		this.incorrect = 0;
		this.loadQuestion();
	}
};
