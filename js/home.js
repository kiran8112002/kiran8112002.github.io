const srHome = ScrollReveal();

srHome.reveal('.home__intro', { origin: 'left', distance: '40px', duration: 800, delay: 100 });
srHome.reveal('.home__clock', { origin: 'bottom', distance: '20px', duration: 800, delay: 200 });
srHome.reveal('.home__social-icon', { interval: 100, duration: 800, delay: 300 });
srHome.reveal('.home__img', { origin: 'right', distance: '40px', duration: 900, delay: 200 });

const techIcons = document.querySelectorAll('.home__tech-icon');
const iconSlots = [
    { top: '2%', left: '-6%' },
    { top: '4%', left: '90%' },
    { top: '30%', left: '-14%' },
    { top: '30%', left: '98%' },
    { top: '58%', left: '-10%' },
    { top: '58%', left: '96%' },
    { top: '82%', left: '84%' },
    { top: '98%', left: '38%' }
];

let iconOffset = 0;
function placeTechIcons() {
    techIcons.forEach((icon, i) => {
        const slot = iconSlots[(i + iconOffset) % iconSlots.length];
        icon.style.top = slot.top;
        icon.style.left = slot.left;
    });
}
placeTechIcons();
setInterval(() => {
    iconOffset = (iconOffset + 1) % iconSlots.length;
    placeTechIcons();
}, 5000);
