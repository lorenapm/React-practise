//async: convierte una fc en una promesa.
//el manejo de la respuesta/error se hace con try/catch

const getImage = async () => {
  try {
    const apiKey = "Y3rb91ZuaXTn48d38wkbb3WQheS6uufO";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del error
  }
};
getImage();
