// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');
        //console.log(groupHeader)

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        //Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');


        // Toggle visibility of body
        groupBody.classList.toggle('open');

        // Remove class open -> closses other groups if another is opened
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
          if (otherGroup !== group) {
            const otherGroupBody = otherGroup.querySelector('.faq-group-body');
            const otherIcon = otherGroup.querySelector('.faq-group-header i');
            otherGroupBody.classList.remove('open');
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');
            }
        });
    });
});

//Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active')
    );
})

document.getElementById('card-matti').addEventListener('click', () => {
    window.location.href = "mailto:matti@example.com?subject=Tere Matti&body=Juu eiku nääs...";
});
document.getElementById('card-kalevi').addEventListener('click', () => {
    window.location.href = "mailto:kalevi@example.com?subject=Tere Kale! &body=Hei Kalevi, asia kunnossa!";
});
document.getElementById('card-seppo').addEventListener('click', () => {
    window.location.href = "mailto:seppo@example.com?subject=Hei Seppo&body=60 metriä lentää vaikka ilman vauhtia.";
});
