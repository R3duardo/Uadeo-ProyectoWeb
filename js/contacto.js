document.addEventListener('DOMContentLoaded', function() {

    const submitBtn = document.getElementById('submit-btn');
    const simForm = document.getElementById('simulatedForm');
    const realForm = document.getElementById('realForm');
    const messageElement = document.getElementById('form-message');
    
    submitBtn.addEventListener('click', function() {
        if (!simForm.checkValidity()) {
            simForm.reportValidity();
            return;
        }
        
        messageElement.textContent = "Enviando formulario...";
        messageElement.className = "form-message sending";
        
        transferirDatosFormulario();
        
        setTimeout(function() {
            window.location.href = 'gracias.html';
        }, 800);
        
        setTimeout(function() {
            realForm.submit();
        }, 500);
    });
    
    function transferirDatosFormulario() {
        document.getElementById('real-clientNumber').value = document.getElementById('clientNumber').value;
        document.getElementById('real-fullName').value = document.getElementById('fullName').value;
        document.getElementById('real-birthDate').value = document.getElementById('birthDate').value;
        
        const genderValue = document.querySelector('input[name="gender"]:checked').value;
        document.getElementById('real-gender').value = genderValue;
        
        document.getElementById('real-maritalStatus').value = document.getElementById('maritalStatus').value;
        document.getElementById('real-email').value = document.getElementById('email').value;
        document.getElementById('real-comments').value = document.getElementById('comments').value;
    }
}); 