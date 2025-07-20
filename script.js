// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'))
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
});

// Contact Us alert & actions
document.addEventListener('DOMContentLoaded', () => {
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      alert('You are joining the WhatsApp group!');
      window.open('https://chat.whatsapp.com/IcgctN4ySl13ftCJtszLr0', '_blank');
    });
  }
  const emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    emailBtn.addEventListener('click', () => {
      window.location.href = 'mailto:tamboobaba@gmail.com';
    });
  }
});
