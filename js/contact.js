const srContact = ScrollReveal();

srContact.reveal('.contact__subtitle', { origin: 'top', distance: '20px', duration: 700 });
srContact.reveal('.contact__status', { origin: 'top', distance: '20px', duration: 700, delay: 100 });
srContact.reveal('.contact__card', { origin: 'bottom', distance: '30px', duration: 700, interval: 120, delay: 150 });
srContact.reveal('.contact__fly-zone', { origin: 'bottom', distance: '20px', duration: 700, delay: 250 });

/*===== COPY EMAIL TO CLIPBOARD =====*/
const emailCard = document.getElementById('contact-email');
const toast = document.getElementById('contact-toast');
let toastTimeout;

if (emailCard && toast) {
    emailCard.addEventListener('click', (e) => {
        const email = emailCard.dataset.email;
        if (navigator.clipboard) {
            e.preventDefault();
            navigator.clipboard.writeText(email).then(() => {
                window.location.href = `mailto:${email}`;
            });
        }

        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 2200);
    });
}
