// Napisz funkcję fetchCountries(name) która tworzy żądanie HTTP na nazwa źródła i przekazuje obietnicę z tablicą krajów - wynikiem żądania. Przenieś ją do oddzielnego pliku fetchCountries.js i utwórz eksport nazwany.


const fetchCountries = name => {
  console.log(name);
  return (
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`)
      //wymienic link
      .then(response => {
        console.log('fetchCountries response', response);
        if (!response.ok) {
          throw new Error('fetchCountries response error', response.status);
        }
        return response.json();
      })
      .then(data => console.log('ok in fetchCountries in second then: ', data))
      .catch(error => console.log('Error 404?: ', error))
  );
}

export { fetchCountries };