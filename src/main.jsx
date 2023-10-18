import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const coffeeData = [
  {
    name: "Espresso",
    description: "A strong and concentrated coffee",
    price: 3.5,
    photoName: "coffees/espresso.jpeg",
    soldOut: false,
  },
  {
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.5,
    photoName: "coffees/cappuccino.jpeg",
    soldOut: false,
  },
  {
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 4.0,
    photoName: "coffees/latte.jpeg",
    soldOut: false,
  },
  {
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 4.7,
    photoName: "coffees/mocha.jpeg",
    soldOut: false,
  },
  {
    name: "Cold Brew",
    description: "Chilled coffee brewed slowly over time",
    price: 4.5,
    photoName: "coffees/coldBrew.jpeg",
    soldOut: false,
  },
  {
    name: "Iced Coffee",
    description: "Chilled coffee served with ice",
    price: 3.8,
    photoName: "coffees/icedCoffee.jpeg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 style={style}>CaféBuzz:</h1>
    </header>
  );
}

function Menu() {
  const coffee = coffeeData;
  const numCoffees = coffee.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numCoffees > 0 ? (
        <>
          <p>
            Artisanal Coffee Creations. 6 Exquisite Brews to Savor. Crafted with
            Precision, All-Natural, All Divine
          </p>

          <ul className="pizzas">
            {coffeeData.map((coffee) => (
              <Pizza coffeeObj={coffee} key={coffee.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function Pizza({ coffeeObj }) {
  console.log(coffeeObj);

  return (
    <li className={`pizza ${coffeeObj.soldOut ? "sold-out" : ""}`}>
      <img src={coffeeObj.photoName} alt={coffeeObj.name} />
      <div>
        <h3>{coffeeObj.name}</h3>
        <p>{coffeeObj.description}</p>
        <span>{coffeeObj.soldOut ? "SOLD OUT" : coffeeObj.price + " $"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
