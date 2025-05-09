function x(aux) {
  let param;
  try {
    param = JSON.parse(aux || "{}");
  } catch {
    param = {};
  }

  const Positiva = [ "Sim, foi tudo certo!",
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
      "Yes",
      "show",
      "Show",
      "top",
      "Top",
      "maravilha",
      "Maravilha",
      "perfeito",
      "Perfeito",
      "beleza",
      "Beleza",
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
      "OK",
      "Ok",
      "👍",
      "👌",
      "👏",
      "✅",
      "sucesso",
      "Sucesso",
      "arrasou",
      "blz",
      "Blz",
      "foi de boas",
      "tranqs",
      "tranquileba",
      "massa",
      "está certo",
      "está tudo certo",
      "tá funcionando",
      "tá tudo funcionando",
      "tá beleza",
      "tá suave" ];

  const Negativa1 = [ "Tive algum problema",
      "consulta não foi concluída",
      "consulta",
      "problema",
      "bugou",
      "tá com bug",
      "tá com problema",
      "deu problema",
      "não consegui",
      "não tá indo",
      "não está funcionando",
      "não rolou",
      "deu ruim aqui",
      "não foi",
      "não tá certo",
      "não foi concluída",
      "falha na consulta",
      "não retornou nada",
      "não apareceu nada",
      "🤷",
      "❌",
      "😞",
      "😕",
      "👎",
      "pior que não",
      "infelizmente não",
      "negativo",
      "sem sucesso",
      "sem resultado",
      "sem resposta",
      "deu ruim mesmo",
      "nopes",
      "nope",
      "no",
      "not ok",
      "not working",
      "fail",
      "erro no sistema" ];

  const Negativa2 = ["não",
      "n",
      "nao",
      "não deu certo",
      "não funcionou",
      "deu errado",
      "falhou",
      "erro",
      "deu ruim",
      "nada feito",
      "nada aconteceu",
      "não atendeu",
      "sem atendimento",
      "atendimento deu errado",
      "atendimento não aconteceu",
      "não houve um atendimento",
      "medico não apareceu",
      "médico não atendeu",
      "sem médico",
      "não teve atendimento",
      "não rolou atendimento",
      "o médico faltou",
      "médico faltou",
      "não fui atendido",
      "não fui atendida",
      "ninguém me atendeu",
      "ninguém apareceu",
      "não compareceu",
      "não teve médico",
      "não estava lá",
      "cheguei e não tinha médico",
      "não teve consulta",
      "sem consulta",
      "não houve consulta",
      "consulta não aconteceu",
      "consulta cancelada",
      "cancelaram minha consulta",
      "tava fechado",
      "ninguém atendeu",
      "não consegui atendimento",
      "fiquei esperando e nada",
      "esperei e ninguém me atendeu",
      "não consegui ser atendido",
      "deu erro no atendimento",
      "consulta deu erro",
      "consulta falhou",
      "falhou o atendimento",
      "não consegui consultar",
      "o médico não estava",
      "faltou médico",
      "faltou o atendimento",
      "não deu pra ser atendido",
      "não fui consultado",
      "ninguém disponível",
      "sem profissional",
      "sem suporte médico",
      "sem assistência",
      "consulta não realizada",
      "consulta deu problema",
      "sem sucesso no atendimento",
      "problema na consulta",
      "problema no atendimento",
      "não foi possível" ];
 
  function normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  const textoNormalizado = normalizarTexto(aux);
  const palavras = textoNormalizado.split(" ");

  if (Positiva.some((palavra) => textoNormalizado.includes(palavra))) return "Google";
  if (Negativa1.some((palavra) => textoNormalizado.includes(palavra))) return "Instagram";
  if (Negativa2.some((palavra) => textoNormalizado.includes(palavra))) return "TV";

  if (typeof param.value === "string" && param.value.trim() !== "") {
    return param.value;
  }

  return "Não";
}
