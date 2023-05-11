const generateBtn = document.getElementById('generate-btn');
const randomImage = document.getElementById('random-image');

const images = [
	'https://s.yimg.com/uu/api/res/1.2/ZAH8ISUNNd1xEYIx8WCY7w--~B/Zmk9ZmlsbDtoPTQ3OTt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/96731802bb2e11248ac6039b4cf3272e/206260049/danmachi.jpg.cf.jpg',
	'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/danmachi-hestia.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmn880qyfG9XOQp2Li_71PjCspoHD-JhPiA&usqp=CAU',
	'https://play-lh.googleusercontent.com/jIELukOqQeOmDqcVyBGIEhKGkXHqkMoJUZwjUy3333jCK2fjSasi4vYinAv-Oun0mQ',
	'https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/danmachi.jpg'
];

generateBtn.addEventListener('click', () => {
	const randomIndex = Math.floor(Math.random() * images.length);
	randomImage.src = images[randomIndex];
});

const form = document.querySelector('form');
const resultContainer = document.getElementById('result-container');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const inputLetter = document.getElementById('input-letter').value.toLowerCase();

	if (inputLetter.match(/[aeiou]/)) {
		resultContainer.innerText = `${inputLetter} is a vowel.`;
	} else if (inputLetter.match(/[b-df-hj-np-tv-z]/)) {
		resultContainer.innerText = `${inputLetter} is a consonant.`;
	} else {
		resultContainer.innerText = `${inputLetter} is not a letter.`;
	}
});