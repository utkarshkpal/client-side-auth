http.get('http://nodejs.org/dist/index.json', (res) => {

  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {

      const parsedData = JSON.parse(rawData);
      console.log(parsedData);

  });
})
