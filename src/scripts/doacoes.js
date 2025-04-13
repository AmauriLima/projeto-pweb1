document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade das abas de doação
    const tabButtons = document.querySelectorAll('.donation-tabs .tab-btn');
    const tabContents = document.querySelectorAll('.donation-content .tab-content');
    
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons and content
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Funcionalidade dos botões de valor de doação
    const valueButtons = document.querySelectorAll('.value-btn');
    
    if (valueButtons.length > 0) {
        valueButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons in the same container
                const parentContainer = this.closest('.values-grid');
                const siblingButtons = parentContainer.querySelectorAll('.value-btn');
                siblingButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // If it's the custom value button, show input field
                if (this.classList.contains('custom-value')) {
                    // Check if custom input already exists
                    let customInput = parentContainer.nextElementSibling;
                    
                    if (!customInput || !customInput.classList.contains('custom-value-input')) {
                        // Create custom input field
                        customInput = document.createElement('div');
                        customInput.classList.add('custom-value-input');
                        customInput.innerHTML = `
                            <div class="form-group">
                                <label for="custom-amount">Valor personalizado (R$)</label>
                                <input type="number" id="custom-amount" min="1" step="0.01" required>
                            </div>
                        `;
                        parentContainer.parentNode.insertBefore(customInput, parentContainer.nextSibling);
                    }
                    
                    customInput.style.display = 'block';
                } else {
                    // Hide custom input if it exists
                    const customInput = parentContainer.nextElementSibling;
                    if (customInput && customInput.classList.contains('custom-value-input')) {
                        customInput.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // Funcionalidade do FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', function() {
                // Toggle active class on clicked item
                item.classList.toggle('active');
                
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        });
    }
    
    // Validação de formulários de doação
    const donationForms = document.querySelectorAll('.donor-form');
    
    if (donationForms.length > 0) {
        donationForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic form validation
                let isValid = true;
                const requiredFields = form.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                    } else {
                        field.classList.remove('error');
                    }
                });
                
                // Check if a donation value is selected
                const valueButtons = form.closest('.donation-form').querySelectorAll('.value-btn.active');
                if (valueButtons.length === 0) {
                    isValid = false;
                    alert('Por favor, selecione um valor para doação.');
                }
                
                if (isValid) {
                    // Simulate form submission
                    alert('Obrigado pela sua doação! Em um ambiente real, este formulário seria enviado para processamento.');
                    form.reset();
                    
                    // Reset value buttons
                    const allValueButtons = form.closest('.donation-form').querySelectorAll('.value-btn');
                    allValueButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Hide custom input if it exists
                    const customInput = form.closest('.donation-form').querySelector('.custom-value-input');
                    if (customInput) {
                        customInput.style.display = 'none';
                    }
                }
            });
        });
    }
    
    // Máscara para CPF
    const cpfInputs = document.querySelectorAll('input[name="cpf"]');
    
    if (cpfInputs.length > 0) {
        cpfInputs.forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 11) {
                    value = value.slice(0, 11);
                }
                
                if (value.length > 9) {
                    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
                } else if (value.length > 6) {
                    value = value.replace(/^(\d{3})(\d{3})(\d{3}).*/, '$1.$2.$3');
                } else if (value.length > 3) {
                    value = value.replace(/^(\d{3})(\d{3}).*/, '$1.$2');
                }
                
                e.target.value = value;
            });
        });
    }
    
    // Máscara para telefone
    const phoneInputs = document.querySelectorAll('input[name="phone"]');
    
    if (phoneInputs.length > 0) {
        phoneInputs.forEach(input => {
            input.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 11) {
                    value = value.slice(0, 11);
                }
                
                if (value.length > 10) {
                    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
                } else if (value.length > 6) {
                    value = value.replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1) $2-$3');
                } else if (value.length > 1) {
                    value = value.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
                }
                
                e.target.value = value;
            });
        });
    }
}); 