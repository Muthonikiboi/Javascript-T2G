let eventes = [];

fetch("https://run.mocky.io/v3/cc2a23ed-67af-453a-89e7-a48bf18405f3")
.then((res)=>{
  return res.json();
})
.then((data)=>{
  const container = document.getElementById("container");

  data.forEach(event =>{
    const card =document.createElement("div");
    card.className = "main";
    container.appendChild(card);

      // Create the image element
      const img = document.createElement('img');
      img.src = event.imageUrl;
      card.appendChild(img);

      const info = document.createElement('div');
      info.className = "info";
      card.appendChild(info);

      // Create the title element
      const title = document.createElement('h3');
      title.textContent = event.title;
      info.appendChild(title);

      // Create the date element
      const date = document.createElement('p');
      date.textContent = event.date;
      info.appendChild(date);

      // Create the company and price element
      const company = document.createElement('p');
      company.textContent = event.company;
      info.appendChild(company);

      const price = document.createElement('p');
      price.textContent = (`Ksh ${event.price}`);
      info.appendChild(price);

      // Create the button
      const button = document.createElement('button');
      button.textContent = 'Buy Now';
      info.appendChild(button);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

  document.getElementById('priceFilter').addEventListener('click',filtered)

  const filtered =()=>{
    const price = document.getElementById('priceFilter').value;

    let filtredOutput= events;

    if(price === 'low'){
      filtredOutput = events.filter(event => event.price <= 50)
    }else if(price === 'high'){
      filtredOutput = events.filter(event => event.price > 50)
    }

    const container = document.getElementById("container");
    container.innerHTML = "";
    filtredOutput.forEach(event =>{
      const card = document.createElement("div");
      card.className = "main";
      container.appendChild(card);

      // Create the image element
      const img = document.createElement('img');
      img.src = event.imageUrl;
      card.appendChild(img);

      const info = document.createElement('div');
      info.className = "info";
      card.appendChild(info);

      // Create the title element
      const title = document.createElement('h3');
      title.textContent = event.title;
      info.appendChild(title);

      // Create the date element
      const date = document.createElement('p');
      date.textContent = event.date;
      info.appendChild(date);

      // Create the company and price element
      const company = document.createElement('p');
      company.textContent = event.company;
      info.appendChild(company);

      const price = document.createElement('p');
      price.textContent = (`Ksh ${event.price}`);
      info.appendChild(price);

      // Create the button
      const button = document.createElement('button');
      button.textContent = 'Buy Now';
      info.appendChild(button);
    });
  }