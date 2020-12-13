import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from "react-router-dom";
import HomeComponent from './components/HomeComponent/home.component'
import ProductDetailComponent from './components/ProductDetailComponent/product_detail.component'
import CartComponent from "./components/CartComponent/cart.component";
import './App.css'

function App() {
  const [isDisplaySidebar, setIsDisplaySidebar] = useState(false);

  let openSidebar = () => {
    let sidebar = document.querySelector('.sidebar');
    let sidebarBtn = document.querySelector('.sidebar-btn')
    if(!isDisplaySidebar)
        {
            sidebar.classList.add('open');
            sidebarBtn.classList.add('sidebar-open');
            setIsDisplaySidebar(true)
        }
    else {
            sidebar.classList.remove('open');
            sidebarBtn.classList.remove('sidebar-open');
            setIsDisplaySidebar(false)
    }
  }

  return (
    <Router>
    <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openSidebar} className="sidebar-btn">☰</button>
            <Link to="/">Amazona</Link>
          </div>
          <div className="header-links">
            <a href="#">Sign in</a>
            <a href="#">Cart</a>
          </div>
        </header>

        <aside className="sidebar"><br /><br />
          <center>
            <h3>Shopping Categories</h3>
          </center>
          <ul>
            <li><a href="#">Shirts</a></li>
            <li><a href="#">Pants</a></li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
          <Route path="/" component={HomeComponent} exact={true}></Route>
          <Route path="/cart/:productId?" component={CartComponent}></Route>
          <Route path="/products/:id" component={ProductDetailComponent} exact={true}></Route>
            
          </div>
        </main>
        <footer className="footer">
          All right reserved
        </footer>
      </div>
    </Router>
  );
}

export default App;
