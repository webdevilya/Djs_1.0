window.addEventListener('DOMContentLoaded', function() {

	let popup_btn = document.getElementById('popup-btn'),
			male = document.getElementById('male'),
			female = document.getElementById('female'),
			hair = document.getElementById('person-hair'),
			clothes = document.getElementById('person-clothes'),
			skin = document.getElementById('person-skin'),
			name = document.getElementById('name'),
			age = document.getElementById('age'),
			select = document.getElementById('select'),
			bio = document.getElementById('bio'),
			readyBtn = document.getElementById('ready'),
			resetBtn = document.getElementById('reset'),
			votingBtn = document.getElementById('voting'),
			crimeBtn = document.getElementById('crime'),
			textSex = document.createTextNode('Пол:'),
			textViews = document.createTextNode('Полит. взгляды:'),
			textBio = document.createTextNode('Биография'),	
			custom = document.querySelector('.custom'),
			custom_info = document.querySelector('.custom-info'),
			custom_char = document.querySelector('.custom-char'),
			custom_style = document.querySelector('.custom-style'),
			main = document.querySelector('.main'),
			overlay = document.querySelector('.overlay'),
			main_cards = document.getElementsByClassName('main-cards')[0],
			progress_bars = document.getElementsByClassName('progress-bar'),
			main_cards_items = document.getElementsByClassName('main-cards-item'),
			result_counts = document.getElementsByClassName('result-count'),			
			main_cards_item = document.createElement('div'),
			candidate_block = document.createElement('div'),
			photo = document.createElement('div'),
			result = document.createElement('div'),			
 			result_count = document.createElement('div'),
			progress = document.createElement('div'),
 			progress_bar = document.createElement('div'),
			nameDiv = document.createElement('div'),
			ageDiv = document.createElement('div'),
			sexDiv = document.createElement('div'),
			viewsDiv = document.createElement('div'),
			bioDiv = document.createElement('div'),
			win = [];



			popup_btn.addEventListener('click', () => {
				overlay.style.cssText = 'display: none;';
				main.style.cssText = 'display: none;';
				custom.style.cssText = 'display: flex;';
				custom_info.style.cssText = 'display: block;';
				custom_char.style.cssText = 'display: block;';
				custom_style.style.cssText = 'display: block;';
			});

			sexDiv.textContent = male.value;
			viewsDiv.textContent = select.value;

	bio.addEventListener('change', () => {
		bioDiv.textContent = bio.value;
	});		

	select.addEventListener('change', () => {
		viewsDiv.textContent = select.value;
	});		

	age.addEventListener('change', () => {				
		ageDiv.textContent = age.value;
	});	
	
	name.addEventListener('change', () => {
		nameDiv.textContent = name.value;
	});		

	male.addEventListener('change', () => {
			if (male.checked) {
				sexDiv.textContent = male.value;
			}
			let n = 1;
			skin.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/skin/skin-' + n + '.png) center no-repeat; background-size: cover';
			hair.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/hair/construct/hair-' + n + '.png) center no-repeat; background-size: cover';
			clothes.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/clothes/construct/clothes-' + n + '.png) center no-repeat; background-size: cover';
			reset(n);
			});	
	
	female.addEventListener('change', () => {
		if (female.checked) {
				sexDiv.textContent = female.value;
			}
			let n = 4;
			skin.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/skin/skin-' + n + '.png) center no-repeat; background-size: cover';
			hair.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/hair/construct/hair-' + n + '.png) center no-repeat; background-size: cover';
			clothes.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/clothes/construct/clothes-' + n + '.png) center no-repeat; background-size: cover';
			reset(n);
			});	
	
	function reset(n) {
			skins = document.getElementsByClassName('skin-color'),
			hairs = document.getElementsByClassName('hair-style'),
			clothe = document.getElementsByClassName('clothes-style');
			for (let i = 0; i < skins.length; i++) {
				skins[i].style.display = 'none';
			}
			skins[0].style.display = 'block';			
	}

	function sliderSkin () {
		let sliderIndex = 1,				
				slides = document.getElementsByClassName('skin-color'),				
				prev = document.getElementsByClassName('flaticon-left-arrow')[0],
				next = document.getElementsByClassName('flaticon-right-arrow')[0];
			showSlides(sliderIndex);
			function showSlides(n) {
				let nSkin = 0;
				if (male.checked){
				 nSkin = 0;				
				} else if (female.checked) {
					 nSkin = 3;
					}
				if (n > slides.length) {
					sliderIndex = 1;
				}
				if (n < 1) {
					sliderIndex = slides.length;
				}
				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';	
				}	
				slides[sliderIndex - 1].style.display = 'block';
				skin.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/skin/skin-' + (sliderIndex + nSkin) + '.png) center no-repeat; background-size: cover';				
			}
			function plusSlides (n) {
				showSlides(sliderIndex += n);
			}		
			prev.addEventListener('click', function () {
				plusSlides(-1);
			});	
			next.addEventListener('click', function () {
				plusSlides(1);
			});				
	}
	
	function sliderHair () {
		let sliderIndex = 1,				
				slides = document.getElementsByClassName('hair-style'),				
				prev = document.getElementsByClassName('flaticon-left-arrow')[1],
				next = document.getElementsByClassName('flaticon-right-arrow')[1];
			showSlides(sliderIndex);
			function showSlides(n) {
				let nSkin = 0;
				if (male.checked){
				 nSkin = 0;				
				} else if (female.checked) {
					 nSkin = 3;
					}
				if (n > slides.length - 3) {
					sliderIndex = 1;
				}
				if (n < 1) {
					sliderIndex = slides.length;
				}
				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';		
				}	
				slides[sliderIndex - 1 + nSkin].style.display = 'block';
				hair.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/hair/construct/hair-' + (sliderIndex + nSkin) + '.png) center no-repeat; background-size: cover';			
			}		
			function plusSlides (n) {
				showSlides(sliderIndex += n);
			}		
			prev.addEventListener('click', function () {
				plusSlides(-1);
			});	
			next.addEventListener('click', function () {
				plusSlides(1);
			});			
	}
	
	function sliderClothes () {
		let sliderIndex = 1,				
				slides = document.getElementsByClassName('clothes-style'),				
				prev = document.getElementsByClassName('flaticon-left-arrow')[2],
				next = document.getElementsByClassName('flaticon-right-arrow')[2];
			showSlides(sliderIndex);
			function showSlides(n) {
				let nSkin = 0;
				if (male.checked){
				 nSkin = 0;				
				} else if (female.checked) {
					 nSkin = 3;
					}
				if (n > slides.length - 3) {
					sliderIndex = 1;
				}
				if (n < 1) {
					sliderIndex = slides.length;
				}
				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';	
				}	
				slides[sliderIndex - 1 + nSkin].style.display = 'block';
				clothes.style.cssText = 'position: absolute; margin-top: 30px; left: 50%; transform: translate(-50%); width: 180px; height: 450px; background: url(../img/clothes/construct/clothes-' + (sliderIndex + nSkin) + '.png) center no-repeat; background-size: cover';			
			}		
			function plusSlides (n) {
				showSlides(sliderIndex += n);
			}		
			prev.addEventListener('click', function () {
				plusSlides(-1);
			});	
			next.addEventListener('click', function () {
				plusSlides(1);
			});		
	}


		sliderSkin();
		sliderHair();
		sliderClothes();

	function voting(n) {
		let b = n,		 								
		 		a = randomInteger(1, result_counts.length);	
		 a = a - 1;
		 progress_bars[0].classList.remove('progress-bar-1');	
		 progress_bars[1].classList.remove('progress-bar-2');		
  	 for (let i = 0; i < result_counts.length; i++) {
  	 	main_cards_items[i].classList.remove('main-cards-item-active');
  	 	 if ((i+1) == result_counts.length) {
  	 	 	result_counts[a].textContent = b + '%';
  	 	 	progress_bars[a].style.height = b + '%';
  	 	 	win[a] = b;	  	 	 	
  	 	 } else {
  	 	 	let z = randomInteger(0, b);
  	 	 	result_counts[a].textContent = z+ '%';
  	 	 	progress_bars[a].style.height = z + '%'; 
  	 	 	win[a] = z;	
  	 	 	b = b - z;
  	 	 	a++;
	  	 	  if ((a + 1) > result_counts.length){
	  	 	  	a = 0;
	  	 	  }  	 	   	  	  	 	  	
	  	 	}

  	 }
	}

	function createCard () {
			
			main_cards.appendChild(main_cards_item);	
					main_cards_item.classList.add("main-cards-item", "main-cards-item-new");
					
					main_cards_item.appendChild(candidate_block);
					candidate_block.classList.add('candidate-block');

						candidate_block.appendChild(photo);
						photo.classList.add('photo');

						candidate_block.appendChild(result);
						result.classList.add('result');
							
							result.appendChild(result_count);
							result_count.classList.add('result-count');
			
							result.appendChild(progress);
							progress.classList.add('progress');
								
								progress.appendChild(progress_bar);
								progress_bar.classList.add('progress-bar', 'progress-bar-3');

					main_cards_item.appendChild(nameDiv);
					nameDiv.classList.add('name');

					main_cards_item.appendChild(ageDiv);
					ageDiv.classList.add('age');
				
					main_cards_item.appendChild(textSex);
					main_cards_item.appendChild(sexDiv);
					sexDiv.classList.add('sex');
					
					main_cards_item.appendChild(textViews);	
					main_cards_item.appendChild(viewsDiv);
					viewsDiv.classList.add('views');
					
					main_cards_item.appendChild(textBio);
					main_cards_item.appendChild(bioDiv);
					bioDiv.classList.add('bio');
	}
  function winCalc(n) {
  	 	let a = 0,
  	 			b = 0;
  	 			win[2] = win[2] + n;
  	 	for (let i = 0; i < win.length; i++){
  	 		if (a < win[i]) {
  	 			a = win[i];
  	 			b = i;
  	 		}
  	 	}  	 
  	 	main_cards_items[b].classList.add('main-cards-item-active');
  	 }
	
	readyBtn.addEventListener('click', () => {
		createCard();
		main.style.cssText = 'display: block;';
		custom.style.cssText = 'display: none;';
		sexDiv.textContent = male.value;
		viewsDiv.textContent = select.value;
		for (i = 0; i < result_counts.length; i++) {
			main_cards_items[i].classList.remove('main-cards-item-active');
			result_counts[i].textContent = '0%'; 
			progress_bars[i].style.height = '0%';
		}
	});

	function resetCard () {
		main_cards_item.removeChild(candidate_block);
		main_cards_item.removeChild(textSex);
		main_cards_item.removeChild(textViews);
		main_cards_item.removeChild(textBio);
	}

	function randomInteger(min, max) {
	    var rand = min - 0.5 + Math.random() * (max - min + 1);
	    rand = Math.round(rand);
	    return rand;
  }

  function crimeVoting(n) {

  	result_counts[2].textContent = (win[2] + n) + '%';
  	progress_bars[2].style.height = (win[2] + n) + '%';
  }

	resetBtn.addEventListener('click', () => {	
		resetCard();
		main.style.cssText = 'display: none;';
		custom.style.cssText = 'display: flex;';
	});

	votingBtn.addEventListener('click', () => {
		
		voting(100);
  	winCalc(0);  	
	}); 


	crimeBtn.addEventListener('click', () => {
		voting(75);
		crimeVoting(25);
		winCalc(25);
	});
	


});


