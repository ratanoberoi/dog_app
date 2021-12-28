const fetchImages = async (breed: string) =>
  fetch(`https://dog.ceo/api/breed/${breed}/images`).then((resp) =>
    resp.json()
  );

export default fetchImages;
