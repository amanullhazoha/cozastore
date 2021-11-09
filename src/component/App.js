import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import productsContext from '../context/products';
import productsData from '../data/products';
import getData from '../hooks/getData';
import Footer from './Footer';
import Header from './Header';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Features from './Pages/Feature';
import Home from './Pages/Home1';
import Shop from './Pages/Shop';

const App = () => {
    const [products, setProducts] = useState([]);
    const [filterValue, setFilterValue] = useState('all product');

    useEffect(() => {
        setProducts(getData('products'));
    }, []);

    localStorage.setItem('products', JSON.stringify(productsData));

    const handelFilter = (value) => {
        const lowerValue = value.toLowerCase();
        setFilterValue(lowerValue);
    };

    const filter = () => {
        if (filterValue === 'women') {
            return products.filter((product) => product.catagory === filterValue);
        }

        if (filterValue === 'men') {
            return products.filter((product) => product.catagory === filterValue);
        }

        if (filterValue === 'bag') {
            return products.filter((product) => product.catagory === filterValue);
        }

        if (filterValue === 'shoes') {
            return products.filter((product) => product.catagory === filterValue);
        }

        if (filterValue === 'watches') {
            return products.filter((product) => product.catagory === filterValue);
        }

        return products;
    };

    console.log(filter());

    return (
        <Router>
            <productsContext.Provider value={{ products: filter(), handelFilter, filterValue }}>
                <Header />

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/shop">
                    <Shop />
                </Route>

                <Route exact path="/features">
                    <Features />
                </Route>
            </productsContext.Provider>

            <Route exact path="/blog">
                <Blog />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/contact">
                <Contact />
            </Route>

            <Footer />
        </Router>
    );
};

export default App;
