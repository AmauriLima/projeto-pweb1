document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const toggle = item.querySelector('.faq-toggle i');
            
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Fecha todos os outros itens
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherToggle = otherItem.querySelector('.faq-toggle i');
                    otherToggle.classList.remove('fa-minus');
                    otherToggle.classList.add('fa-plus');
                });
                
                // Se o item clicado não estava ativo, ativa ele
                if (!isActive) {
                    item.classList.add('active');
                    toggle.classList.remove('fa-plus');
                    toggle.classList.add('fa-minus');
                } else {
                    // Se já estava ativo, fecha ele
                    item.classList.remove('active');
                    toggle.classList.remove('fa-minus');
                    toggle.classList.add('fa-plus');
                }
            });
        });
    }
}); 