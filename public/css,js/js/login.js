document.getElementById("btnLogin").addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagemErro = document.getElementById("mensagemErro");

    // Reseta a mensagem de erro ao clicar
    mensagemErro.style.display = "none";

    // Validação do formulário
    if (!email || !senha) {
        mensagemErro.textContent = "Por favor, preencha todos os campos.";
        mensagemErro.style.display = "block";
        return;
    }

    if (!email.includes("@gmail.com") || email.indexOf("@gmail.com") === 0) {
        mensagemErro.textContent = "Por favor, insira um email válido com '@gmail.com' e um nome de usuário antes.";
        mensagemErro.style.display = "block";
        return;
    }

    if (senha.length > 8) {
        mensagemErro.textContent = "A senha deve ter no máximo 8 caracteres.";
        mensagemErro.style.display = "block";
        return;
    }

    // Faz a requisição de login
    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                mensagemErro.textContent = data.erro;
                mensagemErro.style.display = "block";
            } else {
                alert("Login realizado com sucesso!");
                window.location.href = "/balconista"; // Redireciona para a página de acesso
            }
        })
        .catch(() => {
            mensagemErro.textContent = "Erro na requisição. Tente novamente mais tarde.";
            mensagemErro.style.display = "block";
        });
});

// Função para alternar a visibilidade da senha
function toggleSenhaVisibility(eyeSenha) {
    const senhaInput = document.getElementById(eyeSenha);
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
}
