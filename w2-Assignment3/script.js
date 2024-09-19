let events = [];

fetch("https://run.mocky.io/v3/cc2a23ed-67af-453a-89e7-a48bf18405f3")
  .then((res) => res.json())

  .then((data) => {
    console.log(data);
    const container = document.getElementById("container");
    events = data;
    displayEvents(events);
  });

function displayEvents(events) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  events.forEach((event) => {
    const card = document.createElement("div");
    card.className = "main";
    container.appendChild(card);

    const img = document.createElement("img");
    img.src = event.imageUrl;
    card.appendChild(img);

    const info = document.createElement("div");
    info.className = "info";
    card.appendChild(info);

    const title = document.createElement("h3");
    title.textContent = event.title;
    info.appendChild(title);

    const date = document.createElement("p");
    date.textContent = event.date;
    info.appendChild(date);

    const company = document.createElement("p");
    company.textContent = event.company;
    info.appendChild(company);

    const price = document.createElement("p");
    price.textContent = `Ksh ${event.price}`;
    info.appendChild(price);

    const button = document.createElement("button");
    button.textContent = "Buy Now";
    info.appendChild(button);
  });
}

document.getElementById("priceFilter").addEventListener("change", filterEvents);

function filterEvents() {
  const price = document.getElementById("priceFilter").value;

  console.log("Selected price filter:", price);

  let filteredOutput = events;

  if (price === "low") {
    filteredOutput = events.filter((event) => event.price <= 25);
  } else if (price === "high") {
    filteredOutput = events.filter((event) => event.price > 25);
  } else {
    filteredOutput = events;
  }
  displayEvents(filteredOutput);
}
