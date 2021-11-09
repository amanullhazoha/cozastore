import { Link } from 'react-router-dom';
import { Button, Col, Row } from '../framwork';
import classes from './css/footerTop.module.scss';

const FooterTop = () => (
    <div className={classes.footerTop}>
        <Row>
            <Col className={classes.content} size="3" mdSize="6" smSize="12">
                <h3>CATEGORIES</h3>
                <ul>
                    <li>
                        <Link to="/shop">Women</Link>
                    </li>
                    <li>
                        <Link to="/shop">Men</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shoes</Link>
                    </li>
                    <li>
                        <Link to="/shop">Watches</Link>
                    </li>
                </ul>
            </Col>

            <Col className={classes.content} size="3" mdSize="6" smSize="12">
                <h3>HELP</h3>
                <ul>
                    <li>
                        <Link to="/contact">Track Order</Link>
                    </li>
                    <li>
                        <Link to="/contact">Returns</Link>
                    </li>
                    <li>
                        <Link to="/contact">Shipping</Link>
                    </li>
                    <li>
                        <Link to="/contact">FAQs</Link>
                    </li>
                </ul>
            </Col>

            <Col className={classes.content} size="3" mdSize="6" smSize="12">
                <h3>GET IN TOUCH</h3>
                <p>
                    Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY
                    10018 or call us on (+1) 96 716 6879
                </p>
                <div className={classes.socailIcon}>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                                <i className="fab fa-pinterest-p" />
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>

            <Col className={classes.content} size="3" mdSize="6" smSize="12">
                <h3>NEWSLETTER</h3>
                <form>
                    <input type="email" placeholder="email@example.com" />
                    <div className={classes.borderStyle} />
                    <Button type="submit">SUBSCRIBE</Button>
                </form>
            </Col>
        </Row>
    </div>
);

export default FooterTop;
