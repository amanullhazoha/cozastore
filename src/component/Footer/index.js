import { Link } from 'react-router-dom';
import classes from './css/footer.module.scss';
import FooterTop from './footerTop';

const Footer = () => (
    <footer>
        <div className="container">
            <FooterTop />

            <div className={classes.footerBottom}>
                <div className={classes.paymentMethod}>
                    <Link to="/about">
                        <img src="./img/paypal.webp" alt="payment" />
                    </Link>
                    <Link to="/about">
                        <img src="./img/visa.webp" alt="payment" />
                    </Link>
                    <Link to="/about">
                        <img src="./img/mastercard.webp" alt="payment" />
                    </Link>
                    <Link to="/about">
                        <img src="./img/card.webp" alt="payment" />
                    </Link>
                    <Link to="/about">
                        <img src="./img/discoverd.webp" alt="payment" />
                    </Link>
                </div>
                <p>
                    Copyright ©2021 All rights reserved | This template is made with{' '}
                    <span>&#9825;</span> by <Link to="/">Colorlib</Link>
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
