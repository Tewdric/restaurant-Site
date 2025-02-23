let currentIndex = 0;
        const images = document.querySelectorAll('.carrossel-cardapio img');
        
        function showSlide(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        }
        
        setInterval(nextSlide, 2000); // Troca automática a cada 3 segundos