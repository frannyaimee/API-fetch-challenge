function callBeer(url){
	fetch(url)
	.then(function (data){
		return data.json();
	})
	.then(data => {
		console.log(data);

		var beerOutput = document.getElementById('beerOutput');

		for (let i = 0 ; i < data.length ; i++){
			// beerOutput.innerHTML += `
			// <div class="card m-4 mx-auto" style="width: 500px;">	
			// 	<div class="card-body">
			// 		<img width="50%" src="${data[i].image_url}" />
			// 		<h4 class="card-title">${data[i].name}</h4>

			// 		<p class="card-text">${data[i].tagline}</p>
			// 		<button class="btn btn-primary collapsible">Details</button>
			// 		<div class="content" >
			// 			<p class="card-text">${data[i].description}</p>
			// 		</div>
			// 	</div>
			// </div>
			// `;
			let card = document.createElement('div');
      		card.classList.add(`card`); //  Create the elements we need
			let title = document.createElement('h3');
			card.classList.add(`card-title`);
			let tag = document.createElement('h4');
			let p = document.createElement('p');
			let img = document.createElement('img');
			let wrapper = document.createElement('div');
			p.classList.add('hidden');
			title.innerText = `${data[i].name}`; // Make the HTML of our span to be the first and last name of our Beer
			tag.innerText = `${data[i].tagline}`;
			p.innerText = `${data[i].description}`;
			img.src = `${data[i].image_url}`;
			beerOutput.appendChild(card);
			card.appendChild(wrapper);
			wrapper.appendChild(img);
			card.appendChild(title);
			card.appendChild(tag);
			card.appendChild(p);

			card.addEventListener("click",showMore);
			function showMore(event){
				console.log(event.currentTarget)
				event.currentTarget.lastChild.classList.toggle("hidden");

			};   
		}

	})
}

		callBeer('https://api.punkapi.com/v2/beers?page=2&per_page=80');
		var randomButton = document.getElementById('random');
		randomButton.addEventListener('click',function(){
			beerOutput.innerHTML = '';
			callBeer('https://api.punkapi.com/v2/beers/random');

		})
		var reloadButton = document.getElementById('reload');

		reloadButton.addEventListener('click', function(){
			beerOutput.innerHTML = '';
			callBeer('https://api.punkapi.com/v2/beers?page=2&per_page=80');
		});


// var coll = document.querySelectorAll(".collapsible");
// coll.forEach((coll) => console.log(coll))
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//   	console.log('hello world');
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }


