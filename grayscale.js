  const productImages = document.querySelectorAll('.product-row img');

  for (let i = 0; i < productImages.length; i++) {
    productImages[i].addEventListener('mouseenter', function() {
      this.style.filter = 'grayscale(100%)';
    });

    productImages[i].addEventListener('mouseleave', function() {
      this.style.filter = 'none';
    });
  }