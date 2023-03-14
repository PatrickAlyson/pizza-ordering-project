import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order" element={<Order pizza={pizza} />} />
          <Route
            path="base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route
            path="toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
