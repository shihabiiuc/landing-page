document.addEventListener('DOMContentLoaded', function() {
  const hamburgers = document.querySelectorAll('.hamburger')
  const mobileNavs = document.getElementsByClassName('nav-links')[0]
  const openMobileNavAnimation = document.querySelectorAll('.nav-links ul')[0]
  

  for (var i = 0; i < hamburgers.length; i++) {
    hamburgers[i].addEventListener('click', function() {
      this.classList.toggle('active')
      mobileNavs.classList.toggle('active')

      // adding animate.css classes
      var animateMobileNav = function(e, c1, c2, c3) {
        openMobileNavAnimation.classList.toggle(c1)
        openMobileNavAnimation.classList.toggle(c2)
        openMobileNavAnimation.classList.toggle(c3)
      }
      animateMobileNav(openMobileNavAnimation,'animate__animated', 'animate__fadeIn', 'animate__slow')
    })
  }
})