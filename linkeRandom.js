function x(aux) {
  let param;
  try {
    param = JSON.parse(aux || '{}');
  } catch {
    param = {};
  }

  const link = [
    "https://drm.is/celular", "https://homol-api.drmais.com.br/r/l8xm1Hp"
  ];

  const positivas = [
    "Sim, foi tudo certo!", "✅ Sim, foi tudo certo!", "foi tudo certo", "tudo certo", "certo", "Sim", "Certinho",
    "Tudo ok", "correu tudo bem", "foi bom", "tudo bem", "ótimo", "ótima", "certin", "yes", "show", "top",
    "maravilha", "perfeito", "beleza", "tudo beleza", "tudo ótimo", "tudo perfeito", "de boa", "tranquilo",
    "deu bom", "deu tudo certo", "funcionou", "tá certo", "tá tudo certo", 'si', "ok", "👍", "👌", "👏", "✅", "sucesso",
    "arrasou", "blz", "foi de boas", "tranqs", "tranquileba", "massa", "está certo", "está tudo certo", "tá funcionando",
    "tá tudo funcionando", "tá beleza", "tá suave", "s", "ss", "sss"
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

  const temPositiva = positivas.some(p => normalizar(p) === texto);
  if (temPositiva) {
    const linke = link[Math.floor(Math.random() * link.length)];
    return linke;
  }

  return "Não";
}


console.log(x('{"value":"sim"}'))