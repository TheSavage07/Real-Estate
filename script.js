document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('fullscreenModal');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const closeModal = document.querySelector('.close-modal');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    let currentIndex = 0;

    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            currentIndex = parseInt(card.getAttribute('data-index'));
            updateModalImage();
            modal.style.display = 'flex';
        });
    });

    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    
    prevSlide.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateModalImage();
    });

   
    nextSlide.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateModalImage();
    });

   
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                updateModalImage();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % cards.length;
                updateModalImage();
            } else if (e.key === 'Escape') {
                modal.style.display = 'none';
            }
        }
    });

    
    function updateModalImage() {
        const currentCard = cards[currentIndex];
        const imgSrc = currentCard.querySelector('img').src;
        const imgAlt = currentCard.querySelector('img').alt;
        fullscreenImage.src = imgSrc;
        fullscreenImage.alt = imgAlt;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const testimonialWrapper = document.querySelector('.testimonial-wrapper');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    const observer = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                testimonialCards.forEach((card, index) => {
                   
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 150);
                });
                observer.unobserve(testimonialWrapper);
            }
        },
        {
            threshold: 0.2 
        }
    );

    observer.observe(testimonialWrapper);
});

document.addEventListener('DOMContentLoaded', function () {
  const chatButton = document.querySelector('.chat-us');
  const backToTopButton = document.querySelector('.back-to-top');

  
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) { 
      chatButton.classList.add('active');
      backToTopButton.classList.add('active');
    } else {
      chatButton.classList.remove('active');
      backToTopButton.classList.remove('active');
    }
  });

  
  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});