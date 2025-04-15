function x(aux, digitado) {
    const mensagens = [
      "Que ótimo! 😊 Se puder nos ajudar, avalie nossa equipe aqui no Google ou na loja de aplicativos. Sua opinião faz toda a diferença para continuarmos melhorando! https://drm.is/celular ",
      "Consulta concluída com sucesso! ✅ Agora, se você gostou do atendimento, temos um pedido especial 🙏 ✨ Avalie a gente no Google – sua opinião ajuda a manter a qualidade do projeto, reforça nosso compromisso com um atendimento de excelência e nos motiva a seguir em frente! 👉 Clique https://drm.is/celular  para avaliar É rapidinho, faz toda a diferença pra gente 💙 Contamos com seu apoio! 🙌 ",
      "🎉 Uhuul! Que bom que deu tudo certo na sua consulta! Agora a gente vai ser bem sincero com você… 😅 Se você puder tirar 1 minutinho pra deixar uma avaliação sobre seu atendimento, isso vai ajudar demais nosso projeto a continuar firme, com qualidade e carinho pra todo mundo! 💙 💬 Sua opinião vale ouro – e o Google ama saber quando a gente tá acertando 💪 É rapidinho, e olha… a gente vai ficar igual criança quando ganha presente! 🎁🥹 👉 Clique https://drm.is/celular e deixe sua avaliação no Google (E se quiser deixar um elogio caprichado, prometemos mostrar pro time inteiro com orgulho! 😍) Contamos com seu apoio pra seguir fazendo a diferença. Valeu demais! 🚀"
    ];
  
    const indiceAleatorio = Math.floor(Math.random() * mensagens.length);
    return mensagens[indiceAleatorio];
  }
console.log(x());
