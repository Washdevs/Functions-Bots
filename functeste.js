function x(aux) {
    let param;
    try {
      param = JSON.parse(aux || "{}");
    } catch {
      param = {};
    }
  
    const positivas = [
      "Sim, foi tudo certo!",
      "✅ Sim, foi tudo certo!",
      "foi tudo certo",
      "tudo certo",
      "certo",
      "Sim",
      "Certinho",
      "Tudo ok",
      "correu tudo bem",
      "foi bom",
      "tudo bem",
      "ótimo",
      "ótima",
      "certin",
      "yes",
      "show",
      "top",
      "maravilha",
      "perfeito",
      "beleza",
      "tudo beleza",
      "tudo ótimo",
      "tudo perfeito",
      "de boa",
      "tranquilo",
      "deu bom",
      "deu tudo certo",
      "funcionou",
      "tá certo",
      "tá tudo certo",
      "ok",
      "👍",
      "👌",
      "👏",
      "✅",
      "sucesso",
      "arrasou",
      "blz",
      "foi de boas",
      "tranqs",
      "tranquileba",
      "massa",
      "está certo",
      "está tudo certo",
      "tá funcionando",
      "tá tudo funcionando",
      "tá beleza",
      "tá suave"
    ];
  
    const mensagensPositivas = [
      "Que ótimo! 😊 Se puder nos ajudar, avalie nossa equipe aqui no Google ou na loja de aplicativos. Sua opinião faz toda a diferença para continuarmos melhorando! https://drm.is/celular ",
      "Consulta concluída com sucesso! ✅ Agora, se você gostou do atendimento, temos um pedido especial 🙏 ✨ Avalie a gente no Google – sua opinião ajuda a manter a qualidade do projeto, reforça nosso compromisso com um atendimento de excelência e nos motiva a seguir em frente! 👉 Clique https://drm.is/celular  para avaliar É rapidinho, faz toda a diferença pra gente 💙 Contamos com seu apoio! 🙌 ",
      "🎉 Uhuul! Que bom que deu tudo certo na sua consulta! Agora a gente vai ser bem sincero com você… 😅 Se você puder tirar 1 minutinho pra deixar uma avaliação sobre seu atendimento, isso vai ajudar demais nosso projeto a continuar firme, com qualidade e carinho pra todo mundo! 💙 💬 Sua opinião vale ouro – e o Google ama saber quando a gente tá acertando 💪 É rapidinho, e olha… a gente vai ficar igual criança quando ganha presente! 🎁🥹 👉 Clique https://drm.is/celular e deixe sua avaliação no Google (E se quiser deixar um elogio caprichado, prometemos mostrar pro time inteiro com orgulho! 😍) Contamos com seu apoio pra seguir fazendo a diferença. Valeu demais! 🚀"
    ];
  
    function normalizar(texto) {
      return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ")
        .trim();
    }
  
    const texto = normalizar(aux);
  
    if (positivas.some(p => texto.includes(normalizar(p)))) {
      const msg = mensagensPositivas[Math.floor(Math.random() * mensagensPositivas.length)];
      return msg;
    }
  
    if (negativas.some(p => texto.includes(normalizar(p)))) {
      return mensagemNegativa;
    }
  
    if (typeof param.value === "string" && param.value.trim() !== "") {
      return param.value;
    }
  
    return "Não";
  }
  
  console.log(x("sim"));