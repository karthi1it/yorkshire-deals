document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        document.getElementById('header-top').classList.add('sticky-header');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('header-top').classList.remove('sticky-header');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 