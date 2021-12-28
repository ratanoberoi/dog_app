const fetchAllBreeds = async () =>
  fetch("https://dog.ceo/api/breeds/list/all").then((resp) => resp.json());

export default fetchAllBreeds;
