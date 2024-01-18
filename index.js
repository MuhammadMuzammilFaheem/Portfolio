function toggleNavbar() {
    var navbarList = document.querySelector('.navbar-list');
    navbarList.classList.toggle('active');

}

function closeNavbar() {
    var navbarList = document.querySelector('.navbar-list');
    navbarList.classList.remove('active');
}

function toremove() {
    var navbarList = document.querySelector('.navbar-list');
    navbarList.classList.remove('active');
}


function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Update the onclick event for the "Home" link
document.getElementById('home').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('home-active');
});

// Update the onclick event for the "About Me" link
document.getElementById('aboutme').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('aboutme-active');
});
document.getElementById('skills').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('skills-active');
});
document.getElementById('projects').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('projects-active');
});
document.getElementById('contactme').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('contactme-active');
});


// MODAL

function toggleModal() {
    var modal = document.querySelector('.modal-container');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';

}

function closeModal() {
    var modal = document.querySelector('.modal-container');
    modal.style.display = 'none';
}

function toggleModal2() {
    var modal = document.querySelector('.modal-container2');
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
}

function closesModal() {
    var modal = document.querySelector('.modal-container2');
    modal.style.display = 'none';
}

function showalert() {
    var name = document.getElementById("name ").value;
    alert("Dear" + name + 'Your Email is been delivered , We will connect soon');
}