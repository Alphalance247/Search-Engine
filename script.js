const getRequest = async function (query) {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyA_sUs7ZfeoLy31HX3iHUFaetPOJCbEiSY&cx=d7aff7dce5bda40e0&q=${query}
    `
  );

  const data = await res.json();

  console.log(data);
};

getRequest("how many countries do we have in the world");
