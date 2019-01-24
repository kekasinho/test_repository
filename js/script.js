window.onload = function () {

	// Всплывающее поле поиска
	const iconSearch = document.querySelector('.icons__search');
	const body = document.querySelector('body');

	iconSearch.addEventListener('click', function (event) {
		event.stopPropagation();
		this.classList.add('icons__search--active');
	});
	body.addEventListener('click', function (event) {
		iconSearch.classList.remove('icons__search--active');
	})

	const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      	animationTime = 300,
      	framesCount = 20;

    // Плавный скроллинг
	anchors.forEach(function(item) {
  		// каждому якорю присваиваем обработчик события
  		item.addEventListener('click', function(e) {

    		// убираем стандартное поведение
    		e.preventDefault();
    
    		// для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    		let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
    		// запускаем интервал, в котором
    		let scroller = setInterval(function() {

      			// считаем на сколько скроллить за 1 такт
      			let scrollBy = coordY / framesCount;
      
      			// если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      			// и дно страницы не достигнуто
      			if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        
        		// то скроллим на к-во пикселей, которое соответствует одному такту
        		window.scrollBy(0, scrollBy);
      			} else {

        			// иначе добираемся до элемента и выходим из интервала
        			window.scrollTo(0, coordY);
        			clearInterval(scroller);
      			}
    		// время интервала равняется частному от времени анимации и к-ва кадров
    		}, animationTime / framesCount);
  		});
	});

};

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: true,
    navText: [],
    responsive:{
        0:{
            items:1,
            dots: true,
            nav: false
        },
        480:{
            items:2,
            dots: true,
            nav: false
        },
        1000:{
            items:3,
            dots: true,
            nav: false
        }
    }
})
})