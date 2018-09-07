var firstWord = ['teacher', 'professor', 'school custodian', 'guidance counselor', 'school bus driver'], 
	secondWord = ['lovely', 'terrible', 'wonderful', 'horrific'],
	thirdWord = ['garden', 'graveyard', 'beach', 'landfill', 'park'],
	fourthWord = ['food', 'garbage', 'dead animals', 'cookware'],
	fifthWord = ['cakes', 'garbage bags', 'dead pigeons', 'pots'],
	sixthWord = ['fruits', 'used tissues', 'dead rats', 'spoons'],
	seventhWord = ['snacks', 'banana skin', 'cockroaches', 'forks'],
	eighthWord = ['board games', 'bats', 'balls'],
	ninthWord = ['picnic baskets', 'blankets', 'voodoo dolls'],
	tenthWord = ['books', 'homework', 'textbooks'],
	eleventhWord = ['great fun', 'a terrible time', 'a boring day'];

var randomFirstWord = Math.floor( Math.random() * firstWord.length),
	randomSecondWord = Math.floor( Math.random() * secondWord.length),
	randomThirdWord = Math.floor( Math.random() * thirdWord.length),
	randomFourthWord = Math.floor( Math.random() * fourthWord.length),
	randomFifthWord = Math.floor( Math.random() * fifthWord.length),
	randomSixthWord = Math.floor( Math.random() * sixthWord.length),
	randomSeventhWord = Math.floor( Math.random() * seventhWord.length),
	randomEighthWord = Math.floor( Math.random() * eighthWord.length),
	randomNinthWord = Math.floor( Math.random() * ninthWord.length),
	randomTenthWord = Math.floor( Math.random() * tenthWord.length),
	randomEleventhWord = Math.floor( Math.random() * eleventhWord.length);

window.onload = function () {
	var first = document.getElementById('first-word');
	first.textContent = firstWord[randomFirstWord];
	var second = document.getElementById('second-word');
	second.textContent = secondWord[randomSecondWord];
	var third = document.getElementById('third-word');
	third.textContent = thirdWord[randomThirdWord];
	var fourth = document.getElementById('fourth-word');
	fourth.textContent = fourthWord[randomFourthWord];
	var fifth = document.getElementById('fifth-word');
	fifth.textContent = fifthWord[randomFifthWord];
	var sixth = document.getElementById('sixth-word');
	sixth.textContent = sixthWord[randomSixthWord];
	var seventh = document.getElementById('seventh-word');
	seventh.textContent = seventhWord[randomSeventhWord];
	var eighth = document.getElementById('eighth-word');
	eighth.textContent = eighthWord[randomEighthWord];
	var ninth = document.getElementById('ninth-word');
	ninth.textContent = ninthWord[randomNinthWord];
	var tenth = document.getElementById('tenth-word');
	tenth.textContent = tenthWord[randomTenthWord];
	var eleventh = document.getElementById('eleventh-word');
	eleventh.textContent = eleventhWord[randomEleventhWord];
};




