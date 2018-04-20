function slider () {
	//slider
	
	let sliderIndex = 1,
			slides = document.getElementsByClassName('skin-color'),
			prev = document.getElementsByClassName('.flaticon-left-arrow')[0],
			next = document.getElementsByClassName('.flaticon-right-arrow')[0],
			
			showSlides(sliderIndex);

			function showSlides(n) {

				if (n > slides.length) {
					sliderIndex = 1;
				};
				if (n < 1) {
					sliderIndex = slides.length;
				};

				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				};				

				slides[sliderIndex - 1].style.display = 'block';
				
			}	

			function plusSlides (n) {
				showSlides(sliderIndex += n)
			}

			function currentSlide(n) {
				showSlides(sliderIndex = n)
			}

			prev.addEventListener('click', function () {
				plusSlides(-1);
			});	

			next.addEventListener('click', function () {
				plusSlides(1);
			});	
			
}

module.exports = slider;