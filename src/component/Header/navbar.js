import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './css/navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggler = () => {
        console.log('clicked');
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={classes.navFixed}>
            <nav style={{ height: isOpen && '303px' }}>
                <div className={`container ${classes.content}`}>
                    <div className={classes.leftSection}>
                        <div className={classes.logo}>
                            <NavLink to="/">
                                <h1>
                                    coza <span>store</span>
                                </h1>
                            </NavLink>
                        </div>

                        <ul className={classes.navLink} style={{ display: isOpen && 'block' }}>
                            <NavLink to="/" activeStyle={{ color: 'red' }}>
                                <li>Home</li>
                            </NavLink>
                            <NavLink to="/shop" activeClassName={classes.select}>
                                <li>Shop</li>
                            </NavLink>
                            <NavLink to="/features" activeClassName={classes.select}>
                                <li>Features</li>
                            </NavLink>
                            <NavLink to="/blog" activeClassName={classes.select}>
                                <li>Blog</li>
                            </NavLink>
                            <NavLink to="/about" activeClassName={classes.select}>
                                <li>About</li>
                            </NavLink>
                            <NavLink to="/contact" activeClassName={classes.select}>
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                    </div>

                    <ul className={classes.navIcon}>
                        <li>
                            <i className="fas fa-sign-in-alt" />
                        </li>
                        <li>
                            <i className="fas fa-shopping-cart" />
                            <p>2</p>
                        </li>
                        <li>
                            <i className="far fa-heart" />
                            <p>0</p>
                        </li>
                        <button type="button" className={classes.active} onClick={toggler}>
                            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} />
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
