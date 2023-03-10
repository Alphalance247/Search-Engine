// fecthAPI("nigeria");

const input = document.querySelector("#input__form");
const submit = document.querySelector(".btn");
const parentEl = document.querySelector(".country__data__real");
const spinner = document.querySelector(".spinner");

submit.addEventListener("click", function (e) {
  e.preventDefault();

  const value2 = input.value;

  const fecthAPI = async function (input) {
    try {
      const mark = `
      <div class="spinner"> 
      <p>Waiting for data....</p>
      </div>
  `;

      parentEl.innerHTML = "";
      parentEl.insertAdjacentHTML("afterbegin", mark);

      const res = await fetch(`https://restcountries.com/v3.1/name/${input}`);

      const data = await res.json();

      const [country__data] = data;

      console.log(data);

      const currency = Object.values(country__data.currencies);
      const [dat__currency] = currency;

      const language = Object.keys(country__data.languages);

      const html = `
    <div class="country__data">
        <div class="countrydata__state">
        
            <div class="country__icon">
              <h1 class="country__name">COUNTRYNAME: ${
                country__data.name.official
              }</h1>
            </div>
            <hr />
            <div class="country__icon">
              <h1 class="continent">CONTINENT: ${
                country__data.continents[0]
              }</h1>
            </div>
            <hr />
            <div class="country__icon">
              <h1 class="country__row">
              POPULATION:  <span>👫</span>${(
                country__data.population / 1000000
              ).toFixed(1)} M people
              </h1>
            </div>
            <hr />
            <div class="country__icon">
              <h1 class="language">OFFICIAL LANGUAGE: ${language[0]}</h1>
            </div>
            <hr />
            <div class="country__icon">
              <h1 class="long__lat">LAT&LNG: [${country__data.latlng}]</h1>
            </div>
            <hr />
            <div class="country__icon">
              <h1 class="time__zone">TIME-ZONE: ${
                country__data.timezones[0]
              }</h1>
            </div>
            <hr />
            <div class="country__icon">
              <h1 class="currencies">CURRENCY-NAME: ${dat__currency.name}</h1>
            </div>
          
          
          
        </div>

        <div class="country__img">
          <img src="${
            country__data.flags.png
          }" alt="country__flag" class="image" />
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.294420466!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1678262655311!5m2!1sen!2sus"
          ></iframe>
        </div>

  </div>

        
    `;

      parentEl.insertAdjacentHTML("afterbegin", html);
    } catch (err) {
      console.error(err, "country not found");
    }
  };

  fecthAPI(value2);

  input.value = "";
  parentEl.innerHTML = "";
});
