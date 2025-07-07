function mostrarSenha() {
    const senhaInput = document.getElementById('senha');
    const btnSenha = document.getElementById('btn-senha');
    
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        btnSenha.classList.remove('bi-eye-fill');
        btnSenha.classList.add('bi-eye-slash-fill');
    } else {
        senhaInput.type = 'password';
        btnSenha.classList.remove('bi-eye-slash-fill');
        btnSenha.classList.add('bi-eye-fill');
    }
}