function x(aux) {
  let param;
  try {
    param = JSON.parse(aux || '{}');
  } catch {
    param = {};
  }

  const mensagensPositivas = [
    "1","2","3"
  ];

  const positivas = [
    "Sim, foi tudo certo!", "✅ Sim, foi tudo certo!", "foi tudo certo", "tudo certo", "certo", "Sim", "Certinho",
    "Tudo ok", "correu tudo bem", "foi bom", "tudo bem", "ótimo", "ótima", "certin", "yes", "show", "top",
    "maravilha", "perfeito", "beleza", "tudo beleza", "tudo ótimo", "tudo perfeito", "de boa", "tranquilo",
    "deu bom", "deu tudo certo", "funcionou", "tá certo", "tá tudo certo", "ok", "👍", "👌", "👏", "✅", "sucesso",
    "arrasou", "blz", "foi de boas", "tranqs", "tranquileba", "massa", "está certo", "está tudo certo", "tá funcionando",
    "tá tudo funcionando", "tá beleza", "tá suave"
  ];

  const negativas = [
    "Tive algum problema", "consulta não foi concluída", "consulta", "problema", "bugou", "tá com bug", "deu ruim",
    "não consegui", "não tá indo", "não funcionou", "não rolou", "não foi", "erro", "falha", "❌", "👎", "falhou",
    "sem atendimento", "atendimento deu errado", "médico não apareceu", "sem médico", "não fui atendido", "ninguém apareceu",
    "sem consulta", "cancelaram minha consulta", "tava fechado", "ninguém atendeu", "não consegui atendimento", "consulta deu erro",
    "sem resposta", "sem sucesso", "falhou o atendimento", "problema na consulta", "não foi possível"
  ];

  const naoAtendeu = [
    "não fui atendido(a)", "não fui atendido", "não fui atendida", "não aconteceu",
    "ninguém me atendeu", "não teve atendimento", "não teve consulta", "consulta não aconteceu",
    "consulta não rolou", "consulta não foi realizada", "não apareceu ninguém",
    "não fui chamado", "não me chamaram", "ninguém chamou",
    "ninguém apareceu", "não deu certo a consulta", "não me atenderam", "ninguém disponível",
    "consulta não iniciou", "consulta não começou", "não teve ninguém", "não iniciou o atendimento",
    "não teve ninguém disponível", "não entrou em contato", "não entraram em contato",
    "não houve atendimento", "atendimento não ocorreu", "consulta não foi feita",
    "não fui chamado pra consulta", "consulta foi ignorada", "consulta foi cancelada e não avisaram",
    "fiquei esperando e nada", "esperei e não fui atendido", "esperei e ninguém apareceu"
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

  if (!param || !param.value) {
    return "Não";
  }

    const texto = normalizar(param.value);

    const naoAtendido = naoAtendeu.some(p => texto === normalizar(p));
if (naoAtendido) {
return "naoAtendido";
}

const temNegativa = negativas.some(p => texto === normalizar(p));
if (temNegativa) {
return "negativa";
}


    const temPositiva = positivas.some(p => normalizar(p) === texto);
    if (temPositiva) {
      const msg = mensagensPositivas[Math.floor(Math.random() * mensagensPositivas.length)];
      return msg;
    }

    

  return "Não";
}

console.log(x('{"value":"sim"}'))