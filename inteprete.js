function x(aux) {
  let param;
  try {
    param = JSON.parse(aux || "{}");
  } catch {
    param = {};
  }

  const Google = [
    "google",
    "Google",
    "GOOGLE",
    "gogle",
    "goglee",
    "gugle",
    "gooogle",
    "googl",
    "googel",
    "gogole",
    "goggle"
  ];
  const Insta = [
    "instagram",
    "Instagram",
    "INSTAGRAM",
    "insta",
    "Insta",
    "INSTA",
    "igram",
    "insta gram",
    "instagrm",
    "instaram",
    "instagarm",
    "instargram",
    "instagr.am"
  ];
  const Tv = ["tv", "TV", "Tv", "televisão", "Televisão", "TELEVISÃO", "t.v.", "T.V.", "televisao"];
  const Indica = ["indicação", "Indicação", "INDICAÇÃO", "indica", "Indica", "indicacao", "indicaçao", "indicacão"];
  const Recomenda = [
    "recomendação",
    "Recomendação",
    "recomenda",
    "recomendacão",
    "recomendacao",
    "recomendaçao",
    "recomendação"
  ];
  const jaCliente = [
    ,
    "já sou cliente",
    "Já sou cliente",
    "JÁ SOU CLIENTE",
    "sou cliente",
    "cliente",
    "Cliente",
    "ja sou cliente",
    "jaCliente",
    "jacliente",
    "JaCliente"
  ];

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

  if (Google.some((palavra) => textoNormalizado.includes(palavra))) return "Google";
  if (Insta.some((palavra) => textoNormalizado.includes(palavra))) return "Instagram";
  if (Tv.some((palavra) => textoNormalizado.includes(palavra))) return "TV";
  if (Indica.some((palavra) => textoNormalizado.includes(palavra))) return "Indicação";
  if (Recomenda.some((palavra) => textoNormalizado.includes(palavra))) return "Recomendação";
  if (jaCliente.some((palavra) => textoNormalizado.includes(palavra))) return "Já Cliente";

  if (typeof param.value === "string" && param.value.trim() !== "") {
    return param.value;
  }

  return "Não";
}

console.log(x("Vim pelo gooogle"));
