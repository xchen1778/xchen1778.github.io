var kickstarter = {
	name: 'Chalk Drawers',
	description: 'Three chalk toys that are designed to draw lines, circles, and dots, reimagining our tools for drawing',
	img1: 'images/chalk1.jpg',
	img2: 'images/chalk2.jpg',
	url:'https://www.kickstarter.com/projects/947573931/chalk-drawers-chalk-toys-that-make-circles-lines-o?ref=discovery',
	pledged: 2993,
	backers: 43,
	pledgeLevels: [{
		name:'$5 Backer',
		price: 5,
		includes: 'Custom Postcard',
		available: true
	},
	{
		name:'$8 Backer',
		price: 8,
		includes: 'Chalk Eraser',
		available: true
	},
	{
		name:'$16 Backer',
		price: 16,
		includes: 'A Chalk Drawer of your Choice',
		available: true
	},
	{
		name:'$20 Backer',
		price: 20,
		includes: 'A Chalk Drawer of your Choice',
		available: true
	},
	{
		name:'$40 Backer',
		price: 40,
		includes: 'The Dot Drawer, The Line Drawer, The Circle Drawer',
		available: true
	},
	{
		name:'$55 Backer',
		price: 55,
		includes: 'The Dot Drawer, The Line Drawer, The Circle Drawer',
		available: true
	},
	{
		name:'$500 Backer',
		price: 500,
		includes: 'A Studio Visit to the New Museum',
		available: true
	},
	{
		name:'$1000 Backer',
		price: 1000,
		includes: '100 Chalk Drawers of Choice',
		available: true		
	}],
	expirationDate: '9:57 AM (EDT) October 12, 2018',
	timeLeft: function (){
		var second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24;

		var timer;

		var end = new Date('10/12/18 9:57 AM'),
			now = new Date();

		var distance = end - now;

		var days = Math.floor(distance / day),
			hours = Math.floor((distance % day) / hour),
			minutes = Math.floor((distance % hour) / minute),
			seconds = Math.floor((distance % minute) / second);
		return (days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds");
	}
};

document.getElementById("name").textContent = kickstarter.name;
document.getElementById("description").textContent = kickstarter.description;
document.getElementsByTagName("img")[0].setAttribute("src",kickstarter.img2);
document.getElementsByTagName("img")[1].setAttribute("src",kickstarter.img1);
document.getElementsByTagName("a")[0].setAttribute("href",kickstarter.url);
document.getElementById("pledge").textContent = "$" + kickstarter.pledged;
document.getElementById("backer").textContent = kickstarter.backers;
document.getElementById("expiration").textContent = kickstarter.expirationDate;
document.getElementById("timeleft").textContent = kickstarter.timeLeft();

for(var i = 0; i < kickstarter.pledgeLevels.length; i++) {
	document.getElementsByClassName("pledgename")[i].textContent = kickstarter.pledgeLevels[i].name;
	document.getElementsByClassName("pledgeprice")[i].textContent = "$" + kickstarter.pledgeLevels[i].price;
	document.getElementsByClassName("pledgeinclude")[i].textContent = kickstarter.pledgeLevels[i].includes;
}






