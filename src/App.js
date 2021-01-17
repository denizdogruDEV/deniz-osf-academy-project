import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/homePage/homePage";
import Services from "./pages/servicesPage/servicesPage";
import ProductDetail from "./pages/productDetailPage/productDetailPage";
import NotFound from "./pages/notFoundPage/notFoundPage";
import Release from "./pages/releasePage/releasePage";
import Navbar from "./components/headerComponent/navigationBar"
import Footer from "./components/footerComponent/footerComponent"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/productdetail" component={ProductDetail} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/release" component={Release} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
