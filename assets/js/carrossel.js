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

const imgs = [
            '../../img/aparmegiana-batata.jpeg',
            '../../img/aparmegiana-panela.jpeg',
            '../../img/assado-maionese.jpeg',
            '../../img/carreteiro-ovo.jpeg',
            '../../img/feijoada.jpeg',
            '../../img/frango-aparmegiana.jpeg',
            '../../img/frango-cane-panela.jpeg',
            '../../img/frango-carne-molho.jpeg',
            '../../img/frango-panqueca.jpeg',
            '../../img/frango-rancombole.jpeg',
            '../../img/guisado-bobo.jpeg',
            '../../img/guisado.jpeg',
            '../../img/lasanha-aparmegiana.jpeg'
        ];

const gallery = document.getElementById('gallery');

        imgs.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Imagem da galeria';
            img.className = 'gallery-item';
            img.onclick = () => {
                
                const modal = document.createElement('dialog');
                const imgModal = document.createElement('img');
                const closeButton = document.createElement('button');
                closeButton.textContent = 'X';
                modal.appendChild(closeButton);

                imgModal.src = src;
                imgModal.alt = 'Imagem do modal';
                modal.appendChild(imgModal);
                document.body.appendChild(modal);
                modal.showModal();
                closeButton.onclick = () => {
                    modal.close();
                };
            }
            gallery.appendChild(img);
        });