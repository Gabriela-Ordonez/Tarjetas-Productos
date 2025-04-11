const main = document.getElementsByTagName("main").item(0);
const URLmain = "https://fakestoreapi.com/products/";
const cardsContainer = document.getElementById("cards-container");

function getData(){
    fetch(URLmain)
    .then((response)=>{
        console.log(response);
        response.json().then((res)=>{
            // console.log(res.length);
            // console.log(res[0].title);
            createCards(res);
        });
    })
    .catch((err)=>{
        main.insertAdjacentHTML("beforeend",
            `<div class="alert alert-danger" role="alert">
                ${err.message}
            </div>`
        )
    });

}//getData

getData();

function createCards(prods) {
    let cardsHTML = '';
    prods.forEach(prod => {
      const cardHTML = `
        <div id="${prod.id}" class="card p-2" style="width: 18rem;">
          <div class="ratio ratio-1x1">
            <img src="${prod.image}" class="card-img-top" alt="${prod.title}" style="object-fit: contain;">
          </div>
          <div class="card-body">
            <h5 class="card-title">${prod.title}</h5>
            <p class="card-text text-truncate">${prod.description}</p>
            <a href="#" class="btn btn-primary">Ver más</a>
          </div>
        </div>`;
      cardsContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
}//createCards
