document.getElementById("btnLogin").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    // Reseta a mensagem de erro ao clicar
    mensagemErro.style.display = "none";

    // Verifica se todos os campos estão preenchidos
    if (!email || !senha) {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        mensagemErro.style.display = "block";
        return;
    }

    // Validação do email: Verifica se o email contém '@gmail.com' e um nome de usuário antes
    if (!email.includes("@gmail.com") || email.indexOf("@gmail.com") === 0) {
        mensagemErro.textContent = "Por favor, insira um email válido com '@gmail.com' e um nome de usuário antes.";
        mensagemErro.style.display = "block";
        return;
    }

    // Validação da senha: Verifica se a senha tem no máximo 8 caracteres
    if (senha.length > 8) {
        mensagemErro.textContent = "A senha deve ter no máximo 8 caracteres.";
        mensagemErro.style.display = "block";
        return;
    }

    // Se todas as validações passarem
    mensagemErro.style.display = "none";
    alert("Login realizado com sucesso!");

    // Redireciona para a página de acesso
    window.location.href = "/balconista";
});

// Função para alternar a visibilidade da senha
function toggleSenhaVisibility(id) {
    const senhaInput = document.getElementById(id);
    const tipo = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = tipo;
}
