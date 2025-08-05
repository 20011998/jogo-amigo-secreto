# Amigo Secreto

![Banner do Projeto](assets/amigo-secreto.png)

Este é um projeto simples de um jogo de Amigo Secreto, desenvolvido para praticar conceitos de HTML, CSS e JavaScript. Ele permite adicionar uma lista de amigos e sortear aleatoriamente um deles. desenvolvido com as aulas no incrível G9 da Alura e Oracle!

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para a estrutura da página.
* **CSS3:** Para a estilização e layout.
* **JavaScript:** Para a lógica do jogo (adicionar amigos, sortear, etc.).

---

## 📦 Instalação

Como este é um projeto de front-end puro, sem dependências de servidor ou pacotes externos, a instalação é muito simples.

1.  Clone este repositório para o seu computador:
    ```bash
    git clone [https://github.com/20011998/jogo-amigo-secreto.git](https://github.com/20011998/jogo-amigo-secreto.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd jogo-amigo-secreto
    ```

---

## ⚙️ Como Executar o Projeto

Para executar o projeto, você só precisa de um navegador web.

1.  Abra a pasta do projeto no seu computador.
2.  Dê um clique duplo no arquivo `index.html`.
3.  O projeto será aberto no seu navegador padrão.

Você também pode usar a extensão "Live Server" do VS Code para executar o projeto em um servidor local e ter a recarga automática da página a cada mudança.

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Se você encontrar um bug ou tiver uma sugestão de melhoria, sinta-se à vontade para abrir uma *issue* ou um *pull request*.

---

## ⚠️ Possíveis Problemas e Soluções

### Problema: O botão "Sortear Amigo" não funciona.

* **Causa:** É provável que você esteja tentando sortear com menos de dois amigos na lista. A lógica do jogo exige no mínimo dois participantes para que o sorteio seja válido.
* **Solução:** Adicione pelo menos dois amigos na lista antes de clicar no botão "Sortear amigo".

### Problema: O nome do amigo sorteado não aparece na tela.

* **Causa:** Verifique se o `id` do elemento de resultado no seu `index.html` corresponde ao `id` que você está usando no seu código JavaScript (`app.js`).
* **Solução:** Certifique-se de que o ID `resultado` no HTML esteja escrito exatamente como no JavaScript (`document.getElementById('resultado')`).

---

## 👨‍💻 Autor

Feito com ❤️ por [20011998](https://github.com/20011998)
