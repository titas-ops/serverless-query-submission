const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navigation?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
  dateInput.min = localToday;

  const bookingForm = document.getElementById('booking-form');
  bookingForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    document.getElementById('form-message').textContent =
      'Thank you! Your appointment request has been recorded successfully. Please check your email for confirmation.';
    form.reset();
    dateInput.min = localToday;
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();