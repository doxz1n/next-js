async function tempo(request, response) {
  const dataDinamica = new Date();

  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  response.json({
    data: dataDinamica.toGMTString(),
  });
}

export default tempo;
