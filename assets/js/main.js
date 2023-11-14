/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// main.js

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.getElementById('theme-switch');
    const lightMode = document.getElementById('light-mode');
    const darkMode = document.getElementById('dark-mode');
    const githubIcon = document.querySelector('.github'); // Replace with the actual class of your GitHub icon
    const linkedinIcon = document.querySelector('.linkedin'); // Replace with the actual class of your LinkedIn icon
    const body = document.body;
  
    // Function to update icon visibility and toggle effect
    function updateIconVisibility(isDarkTheme) {
      if (isDarkTheme) {
        lightMode.style.display = 'none';
        darkMode.style.display = 'inline-block';
        darkMode.classList.add('active');
        lightMode.classList.remove('active');
      } else {
        darkMode.style.display = 'none';
        lightMode.style.display = 'inline-block';
        lightMode.classList.add('active');
        darkMode.classList.remove('active');
      }
    }
  
    // Check the user's preference from previous sessions
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-theme');
      updateIconVisibility(true);
    } else {
      updateIconVisibility(false);
    }
  
    // Toggle theme on icon click
    themeSwitch.addEventListener('click', function () {
      if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'light');
        body.classList.remove('dark-theme');
      } else {
        localStorage.setItem('theme', 'dark');
        body.classList.add('dark-theme');
      }
  
      // Update icon visibility and toggle effect after theme switch
      updateIconVisibility(body.classList.contains('dark-theme'));
  
      // Change GitHub icon color to white when dark theme is active
      if (body.classList.contains('dark-theme')) {
        githubIcon.style.color = 'white';
        linkedinIcon.style.color = 'white';
      } else {
        githubIcon.style.color = ''; // Reset color to default (black or as specified in CSS)
        linkedinIcon.style.color = ''; // Reset color to default (blue or as specified in CSS)
      }
    });
  
    // Add hover effect for GitHub icon when dark theme is active
    githubIcon.addEventListener('mouseenter', function () {
      if (body.classList.contains('dark-theme')) {
        githubIcon.style.color = 'gray'; // Change color on hover (adjust as needed)
      }
    });
  
    githubIcon.addEventListener('mouseleave', function () {
      if (body.classList.contains('dark-theme')) {
        githubIcon.style.color = 'white'; // Reset color on mouse leave
      }
    });
  
    // Add hover effect for LinkedIn icon when dark theme is active
    linkedinIcon.addEventListener('mouseenter', function () {
      if (body.classList.contains('dark-theme')) {
        linkedinIcon.style.color = 'gray'; // Change color on hover (adjust as needed)
      }
    });
  
    linkedinIcon.addEventListener('mouseleave', function () {
      if (body.classList.contains('dark-theme')) {
        linkedinIcon.style.color = 'white'; // Reset color on mouse leave
      }
    });
  });

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
