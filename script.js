const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function validateForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const Email = document.getElementById('Email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && Email && phone && message) {
        alert('Pesan Anda Berhasil Dikirim');
        event.target.reset();
    }

    return false; 
}

let mybutton = document.getElementById("myBtn");
// Saat menggulir ke bawah 20 piksel dari atas dokumen, tampilkan tombolnya
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Tambahkan fungsi ini untuk mengatur scroll ke atas
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

// Animasi Typing Effect
const text = "Junior Front-End Developer";
const spanElement = document.querySelector('.text-animation span');
let index = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeWriter() {
    if (!isDeleting && index < text.length) {
        // Mengetik huruf
        spanElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else if (!isDeleting && index === text.length) {
        // Jeda sebelum menghapus
        isDeleting = true;
        setTimeout(typeWriter, 2000); // Tunggu 2 detik sebelum menghapus
    } else if (isDeleting && index > 0) {
        // Menghapus huruf
        spanElement.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(typeWriter, 100); // Kecepatan menghapus lebih cepat
    } else if (isDeleting && index === 0) {
        // Mulai lagi dari awal
        isDeleting = false;
        setTimeout(typeWriter, 500); // Jeda sebelum mulai mengetik lagi
    }
}

// Mulai animasi setelah halaman dimuat
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Animasi Scroll untuk Section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

// Fungsi untuk menangani scroll
function handleScroll() {
    // Efek sticky header
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Animasi untuk section yang terlihat
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        // Jika section terlihat di viewport
        if (sectionTop < windowHeight * 0.8 && sectionBottom > 0) {
            section.classList.add('visible');
            
            // Animasi untuk elemen skill-item
            if (section.id === 'skil') {
                const skillItems = section.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });
            }
            
            // Animasi untuk galeri-box
            if (section.id === 'galeri') {
                const galeriBoxes = section.querySelectorAll('.galeri-box');
                galeriBoxes.forEach((box, index) => {
                    setTimeout(() => {
                        box.classList.add('visible');
                    }, index * 150);
                });
            }
            
            // Animasi untuk form input
            if (section.id === 'contact') {
                const inputs = section.querySelectorAll('input, textarea');
                inputs.forEach((input, index) => {
                    setTimeout(() => {
                        input.classList.add('visible');
                    }, index * 200);
                });
            }
        }
    });
    
    // Navbar aktif berdasarkan section yang sedang dilihat
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// Event listener untuk scroll
window.addEventListener('scroll', handleScroll);

// Jalankan sekali saat halaman dimuat untuk menampilkan section yang sudah terlihat
window.addEventListener('load', handleScroll);