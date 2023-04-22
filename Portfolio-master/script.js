
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};






let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        } 
    });

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    reset: true,
    distance: '10px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'})
ScrollReveal().reveal('.home-content h1,  .about-img', {origin: 'left'})
ScrollReveal().reveal('.home-content p,  .about-content', {origin: 'right'})


const typed = new Typed('.multiple-text', {
    strings: ['Front End Developer', 'Thanks You ^_^'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// const logo = new Typed('.logoo', {
//     strings: ['Eldorbek'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });


// function sendMail(){
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone : document.getElementById("phone no").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };
// const serviceID = "service_37n53vy";
// const templatesID = "template_w54kskq"


// const name =  document.getElementById("name");
// const email =  document.getElementById("email");
// const phone =  document.getElementById("phone");
// const emaill =  document.getElementById("emaill");
// const message = document.getElementById("message");
// const submit = document.getElementsByClassName("form-contact")[0];

// submit.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log("Keldi");


//     Email.send({
//         SecureToken : "f2a20d11-cef7-45ac-81a3-c0987a366345",
//         To : 'dori37523@gmail.com',
//         From : "dori37523@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body "
//     }).then(
//       message => alert(message)
//     );
// })




// const name = document.getElementById('name');
// const name = document.getElementById('name');
// const name = document.getElementById('name');
// const name = document.getElementById('name');
// const name = document.getElementById('name');
