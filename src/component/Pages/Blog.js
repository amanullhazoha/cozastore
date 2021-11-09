import classes from '../ast/scss/blog.module.scss';
import Banner from '../Banner';
import ButtonList from '../buttonList';
import { Col, Container, Row } from '../framwork';

const BUTTONVALUE = ['Fashion', 'Lifestyle', 'Denim', 'Streetstyle', 'Crafts'];

const Blog = () => (
    <>
        <Banner tilte="Blog" imgName="blogBanner.webp" />

        <div id={classes.mainSection}>
            <Container>
                <Row>
                    <Col size="9" mdSize="12" className>
                        <div className={classes.content}>
                            <a href="-">
                                <figure>
                                    <img src="./img/blog1.webp" alt="blog" className="img-fluid" />

                                    <figcaption>
                                        <p>22</p>
                                        <span>Jan 2018</span>
                                    </figcaption>
                                </figure>
                            </a>

                            <a href="-">
                                <h2>The Great Big List of Men’s Gifts for the Holidays</h2>
                            </a>

                            <p>
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
                                sapien eu varius
                            </p>

                            <div className={classes.author}>
                                <ul>
                                    <li>By Admin</li>
                                    <li>StreetStyle, Fashion, Couple</li>
                                    <li>8 Comments</li>
                                </ul>

                                <a href="-">
                                    <button type="button">
                                        CONTINUE READING
                                        <i className="fas fa-long-arrow-alt-right" />
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className={classes.content}>
                            <a href="-">
                                <figure>
                                    <img src="../img/blog2.webp" alt="blog" className="img-fluid" />

                                    <figcaption>
                                        <p>22</p>
                                        <span>Jan 2018</span>
                                    </figcaption>
                                </figure>
                            </a>
                            <a href="-">
                                <h2>The Great Big List of Men’s Gifts for the Holidays</h2>
                            </a>

                            <p>
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
                                sapien eu varius
                            </p>

                            <div className={classes.author}>
                                <ul>
                                    <li>By Admin</li>
                                    <li>StreetStyle, Fashion, Couple</li>
                                    <li>8 Comments</li>
                                </ul>

                                <a href="-">
                                    <button type="button">
                                        CONTINUE READING
                                        <i className="fas fa-long-arrow-alt-right" />
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className={classes.content}>
                            <a href="-">
                                <figure>
                                    <img src="../img/blog3.webp" alt="blog" className="img-fluid" />

                                    <figcaption>
                                        <p>22</p>
                                        <span>Jan 2018</span>
                                    </figcaption>
                                </figure>
                            </a>
                            <a href="-">
                                <h2>The Great Big List of Men’s Gifts for the Holidays</h2>
                            </a>

                            <p>
                                Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae
                                sapien eu varius
                            </p>

                            <div className={classes.author}>
                                <ul>
                                    <li>By Admin</li>
                                    <li>StreetStyle, Fashion, Couple</li>
                                    <li>8 Comments</li>
                                </ul>

                                <a href="-">
                                    <button type="button">
                                        CONTINUE READING
                                        <i className="fas fa-long-arrow-alt-right" />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col size="3" mdSize="12" className>
                        <div className={classes.contentAside}>
                            <input type="text" placeholder="Search" />

                            <div className={classes.content}>
                                <h3>Categories</h3>
                                <ul className={classes.catagorie}>
                                    <a href="-">
                                        <li>Fashion</li>
                                    </a>
                                    <a href="-">
                                        <li>Beauty</li>
                                    </a>
                                    <a href="-">
                                        <li>Street Style</li>
                                    </a>
                                    <a href="-">
                                        <li>Life Style</li>
                                    </a>
                                    <a href="-">
                                        <li>DIY & Crafts</li>
                                    </a>
                                </ul>
                            </div>

                            <div className={classes.content}>
                                <h3>Featured Products</h3>
                                <ul className={classes.featured}>
                                    <li>
                                        <img
                                            src="../img/featured1.webp"
                                            className="img-fluid"
                                            alt="products"
                                        />

                                        <div className={classes.title}>
                                            <p>White Shirt With Pleat Detail Back</p>
                                            <span>$19.00</span>
                                        </div>
                                    </li>

                                    <li>
                                        <img
                                            src="../img/featured2.webp"
                                            className="img-fluid"
                                            alt="products"
                                        />

                                        <div className={classes.title}>
                                            <p>White Shirt With Pleat Detail Back</p>
                                            <span>$19.00</span>
                                        </div>
                                    </li>

                                    <li>
                                        <img
                                            src="../img/featured3.webp"
                                            className="img-fluid"
                                            alt="products"
                                        />

                                        <div className={classes.title}>
                                            <p>White Shirt With Pleat Detail Back</p>
                                            <span>$19.00</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className={classes.content}>
                                <h3>Archive</h3>
                                <ul className={classes.archive}>
                                    <li>
                                        <span>July 2018</span>
                                        <span>(9)</span>
                                    </li>

                                    <li>
                                        <span>June 2018</span>
                                        <span>(39)</span>
                                    </li>

                                    <li>
                                        <span>May 2018</span>
                                        <span>(29)</span>
                                    </li>

                                    <li>
                                        <span>April 2018</span>
                                        <span>(35)</span>
                                    </li>

                                    <li>
                                        <span>march 2018</span>
                                        <span>(27)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className={classes.content}>
                                <h3>Tags</h3>

                                <ButtonList buttonValue={BUTTONVALUE} className={classes.tags} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
);

export default Blog;
