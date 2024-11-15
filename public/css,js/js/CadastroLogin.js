document.getElementById("btnCadastrar").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const senhaConfirm = document.getElementById("senhaConfirm").value;
    const mensagemErro = document.getElementById("mensagemErro");

    // Reseta a mensagem de erro ao clicar
    mensagemErro.style.display = "none";

    // Verifica se todos os campos estão preenchidos
    if (!email || !senha || !senhaConfirm) {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        mensagemErro.style.display = "block";
        return;
    }

    // Validação do email: Verifica se o email contém '@gmail.com' e um nome de usuário antes
    if (!email.includes("@gmail.com") || email.indexOf("@gmail.com") === 0) {
        mensagemErro.textContent = "Por favor, insira um email válido";
        mensagemErro.style.display = "block";
        return;
    }

    // Validação da senha: Verifica se a senha tem no máximo 8 caracteres
    if (senha.length > 8) {
        mensagemErro.textContent = "A senha deve ter no máximo 8 caracteres.";
        mensagemErro.style.display = "block";
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== senhaConfirm) {
        mensagemErro.textContent = "As senhas não coincidem. Tente novamente.";
        mensagemErro.style.display = "block";
        return;
    }

    // Se todas as validações passarem
    mensagemErro.style.display = "none";

    // Redireciona para a página de login

    window.location.href = "/views/login.html";
});

// Funcionalidade para alternar a visibilidade da senha
document.getElementById("eyeSenha").addEventListener("click", function() {
    const senhaInput = document.getElementById("senha");
    if (senhaInput.type === "password") {
        senhaInput.type = "text"; // Mostra a senha
    } else {
        senhaInput.type = "password"; // Oculta a senha
    }
});

document.getElementById("eyeSenhaConfirm").addEventListener("click", function() {
    const senhaConfirmInput = document.getElementById("senhaConfirm");
    if (senhaConfirmInput.type === "password") {
        senhaConfirmInput.type = "text"; // Mostra a senha
    } else {
        senhaConfirmInput.type = "password"; // Oculta a senha
    }
});

// Restringe a quantidade de caracteres para a senha e confirmação da senha
document.getElementById("senha").addEventListener("input", function(event) {
    if (event.target.value.length > 8) {
        event.target.value = event.target.value.slice(0, 8); // Limita para 8 caracteres
    }
});

document.getElementById("senhaConfirm").addEventListener("input", function(event) {
    if (event.target.value.length > 8) {
        event.target.value = event.target.value.slice(0, 8); // Limita para 8 caracteres
    }
});
