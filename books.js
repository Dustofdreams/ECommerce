function renderBooks() {
  const booksWrapper = document.querySelector('.books');

  const books = getBooks();

  const booksHtml = books.map((book) => {
    return `<div class="book">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
      ${book.title}
    </div>
    <div class="book__ratings">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half-alt"></i>
    </div>
    <div class="book__price">
      <span class="book__price--normal">$${book.originalPrice}</span> $${book.salePrice}
    </div>
  </div>`
  } )

  booksWrapper.innerHTML = booksHtml;

}

setTimeout(() => {
  renderBooks();
})


// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Praise for 8",
      url: "assets/store/8.jpg",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "1984",
      url: "assets/Store/1984.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Animal Farm",
      url: "assets/Store/animal_farm.jpg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "Chance",
      url: "assets/Store/chance.jpg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Beowulf",
      url: "assets/Store/beowulf.jpg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "Cool It",
      url: "assets/Store/cool_it.jpg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Disguise",
      url: "assets/Store/disguise.jpg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "Happiness",
      url: "assets/Store/happiness.jpg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "Superdove",
      url: "assets/Store/superdove.jpg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "The King",
      url: "assets/Store/the_king.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
    },
    {
      id: 11,
      title: "Pragmatism",
      url: "assets/Store/pragmatism.jpg",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
    },
  ];
}
