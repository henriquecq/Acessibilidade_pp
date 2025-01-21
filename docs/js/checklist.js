document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log(`Checkbox ${this.id} está agora ${this.checked ? 'marcado' : 'desmarcado'}`);
        });
    });
});
