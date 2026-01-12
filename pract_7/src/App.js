// import './App.css';
// import { HeaderComponent, ItemsComponent } from './components'

// function App() {
//   return (
//     <>
//       <HeaderComponent />
//       <ItemsComponent />
//     </>
//   );
// }

// export default App;
import React from 'react';
import './App.css';

function App() {
  const products = [
    { id: 1, name: "Arne Jacobsen Egg Chair blue", price: 199, oldPrice: 220, img: "/imgs/fotcaa1.avif", sale: true },
    { id: 2, name: "Attractive round chair", price: 60, img: "/imgs/fotcaa2.avif" },
    { id: 3, name: "Avenue Six Roundabout", price: 78, img: "/imgs/fotcaa3.avif" },
    { id: 4, name: "CAMILLA Armchair", price: 469, img: "/imgs/fotcaa4.avif" },
    { id: 5, name: "Le Corbusier Armchair", price: 399, oldPrice: 400, img: "/imgs/fotcaa5.avif", sale: true },
    { id: 6, name: "Le Corbusier LC7 Chair", price: 420, img: "/imgs/fotcaa6.avif" },
    { id: 7, name: "Mesa Modern Round Table", price: 265, img: "/imgs/fotcaa7.avif" },
    { id: 8, name: "Miss K Table Lamp", price: 170, img: "/imgs/fotcaa8.avif" },
    { id: 9, name: "Modern Contemporary Storage", price: 320, oldPrice: 400, img: "/imgs/fotcaa9.avif", sale: true },
    { id: 10, name: "Modern Cardboard Chair", price: 265, img: "/imgs/fotcaa10.avif" },
    { id: 11, name: "Oksana Dining Table", price: 199, img: "/imgs/fotcaa11.avif" },
    { id: 12, name: "PK20 Easy Chair", price: 60, img: "/imgs/fotcaa12.avif" },
  ];

  return (
    <div className="container">
      <header className="header">
        <div className="header__auth">
          <span>Log in</span>
          <span>Create an account</span>
          <span>Check out</span>
        </div>
        <div className="header__main">
          <div className="logo">
            <h1 className="logo__text">Furniture<span className="logo__bold">Store</span></h1>
            <p className="logo__sub">The biggest choice on the web</p>
          </div>
          <div className="header__right">
            <div className="cart">
              <span className="cart__icon">🛒</span>
              My cart: 0 item(s) — $0.00
            </div>
            <div className="search">
              <input type="text" className="search__input" placeholder="Search store..." />
              <button className="search__button">🔍</button>
            </div>
          </div>
        </div>
      </header>

      <main className="catalog">
        <h2 className="catalog__title">Featured Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-card__img-holder">
                {p.sale && <div className="product-card__sale">SALE</div>}
                <img src={p.img} alt={p.name} className="product-card__img" />
              </div>
              <h3 className="product-card__title">{p.name}</h3>
              <div className="product-card__prices">
                <span className="product-card__price">${p.price.toFixed(2)}</span>
                {p.oldPrice && <span className="product-card__old">${p.oldPrice.toFixed(2)}</span>}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;