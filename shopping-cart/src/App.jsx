import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 15000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
      id: 2,
      name: "Laptop",
      price: 50000,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="container">

      <h1>🛒 Online Shopping Cart</h1>

      <h2>Products</h2>

      <input
        className="search"
        type="text"
        placeholder="🔍 Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {products
          .filter((product) =>
            product.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((product) => (
            <div className="product" key={product.id}>

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p className="price">
                ₹{product.price}
              </p>

              <button onClick={() => addToCart(product)}>
                Add to Cart
              </button>

            </div>
          ))}
      </div>

      <div className="cart">

        <h2>🛒 Cart Items: {totalItems}</h2>

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>

            <p>
              <b>{item.name}</b> - ₹{item.price}
            </p>

            <button onClick={() => decreaseQuantity(item.id)}>
              -
            </button>

            <span>{item.quantity}</span>

            <button onClick={() => increaseQuantity(item.id)}>
              +
            </button>

            <button
              className="remove"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>

          </div>
        ))}

        <h2>Total Price: ₹{totalPrice}</h2>

      </div>

    </div>
  );
}

export default App;















/*import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App */
