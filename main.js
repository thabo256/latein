const filename = 'data/Latein6.csv';

fetch(filename)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Get the text content
  })
  .then((text) => {
    // Do something with the text content

    Papa.parse(text, {
      header: true,
      complete: (result) => {
        console.log(result);
      },
    });
  })
  .catch((error) => console.error('Error fetching file:', error));
