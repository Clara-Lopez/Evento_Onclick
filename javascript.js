document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function() {
        if (loginBtn.textContent === 'Iniciar sesión') {
            loginBtn.textContent = 'Cerrar sesión';
        } else {
            loginBtn.textContent = 'Iniciar sesión';
        }
    });

    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            alert('A los ninjas les gustó');
        });
    });

    const addDefinitionBtn = document.querySelector('.add-definition-btn');
    addDefinitionBtn.addEventListener('click', function() {
        addDefinitionBtn.remove();
    });
});
