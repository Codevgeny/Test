
function myFirstApp() {
	name = prompt("Как тебя зовут?");

	alert("Привет " + name + ", меня зовут Евгений и это моя первая программа!");

	checkAge();

	function showSkills() {

		let skills =["Мои навыки:", "HTML", "CSS","JavaScript"];

		for (let i = 0; i < skills.length; i++) {
			document.write(skills[i] + "<br>");

		}
	}
		showSkills();

		function checkAge() {
			age = prompt("Сколько тебе лет?");

			if (age >= 18) {
				alert("Добро пожаловать на сайт!");
			} else {
				alert("Прости,но ещё рановато!");
				checkAge();
			}
}
		function calcPow(num) {
			console.log(num*num)
		}
		calcPow(4);
		
}


myFirstApp();