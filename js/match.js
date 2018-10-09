var move = 0;
var timer;
var memory_array = ['images/banana.png','images/banana.png','images/cherry.png','images/cherry.png','images/strawberry.png','images/strawberry.png','images/grapes.png','images/grapes.png','images/pear.png','images/pear.png','images/orange.png','images/orange.png'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

function initialBoard() {
	for (var i = 0; i < memory_array.length; i++) {
		document.getElementById('memory_board').innerHTML += '<div style="cursor:default"></div>';
	}
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while(currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function countdown(start_time) {
	var time = document.getElementById("time");
	time.classList.add("animated");
	time.classList.add("pulse");
	time.classList.add("infinite");
	time.innerHTML = 'Time: <span class="number">' + 0 + '</span> mins <span class="number">' + 0 + '</span> secs';
	var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	var now = new Date();
	var distance = now - start_time;
	var minutes = Math.floor((distance % hour) / minute),
		seconds = Math.floor((distance % minute) / second);
	time.innerHTML = 'Time: <span class="number">' + minutes + '</span> mins <span class="number">' + seconds + '</span> secs';
}

function start() {
	move = 0;
	document.getElementById("move").textContent = move;
	clearInterval(timer);
	newBoard();
	var start = new Date();
	timer = setInterval(function() {countdown(start);},1000);
};

function newBoard() {
	tiles_flipped = 0;
	var output = '';
	shuffle(memory_array);

	for(var i = 0; i < memory_array.length; i++) {
		output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + memory_array[i] + '\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile,val) {
	if(tile.innerHTML == "" && memory_values.length < 2) {
		tile.innerHTML = '<img class="animated pulse" src="'+ val + '">';

		if(memory_values.length == 0) {
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		}

		else if(memory_values.length == 1) {
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			move += 1;
			document.getElementById("move").textContent = move;

			if(memory_values[0] == memory_values[1]) {
				document.getElementById(memory_tile_ids[0]).style.background = "#7CC27E";
				tile.style.background = "#7CC27E";
				tiles_flipped += 2;
				memory_values = [];
				memory_tile_ids = [];

				if(tiles_flipped === memory_array.length) {
					clearInterval(timer);
					setTimeout(popUp, 500);
					document.getElementById("time").classList.remove("pulse");
					document.getElementById("button").classList.add("pulse");
				}
			}

			else {
				document.getElementById(memory_tile_ids[0]).style.background = "#E36262";
				tile.style.background = "#E36262";
				setTimeout(flip2Back, 900);
			}
		}
	}
}

function flip2Back() {
	var tile_1 = document.getElementById(memory_tile_ids[0]);
	var tile_2 = document.getElementById(memory_tile_ids[1]);
	tile_1.style.background = '#57B0EE';
	tile_1.innerHTML = "";
	tile_2.style.background = '#57B0EE';
	tile_2.innerHTML = "";
	memory_values = [];
	memory_tile_ids = [];
}


function popUp(){
	swal({
  		title: "Mission Complete!",
  		icon: "success",
  		button: "Awesome",
	});
}


initialBoard();
document.getElementById("button").addEventListener("click", function() {
	start();
	document.getElementById("button").classList.remove("pulse");
	document.getElementById("button").innerHTML = '<img id="start" src="images/again.png" class="animated jello">';
});








