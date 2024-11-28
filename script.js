const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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

const navLinks = document.querySelectorAll('.nav-link');

        // Tambahkan event listener untuk setiap link
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Hapus class active dari semua link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Tambahkan class active ke link yang diklik
                this.classList.add('active');
            });
        });