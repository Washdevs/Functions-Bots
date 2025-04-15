function run(dtUltInteracao) {
  
    let dt1 = new Date('1/1/2020');
    const dt2 = new Date();
    if (dtUltInteracao) {
      dt1 = new Date(dtUltInteracao);
    }
    const diferenca = Math.round(((dt2 - dt1) / 1000) / 60);
  
    return diferenca;
  }

  console.log(run("4/15/2025, 8:57:20 AM"));
  