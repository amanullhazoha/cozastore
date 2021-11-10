import classes from '../ast/scss/freatures.module.scss';
import { Button, Col, Container, Row } from '../framwork';

const TableRow = () => (
    <tr>
        <td>
            <div className={classes.productDesign}>
                <img src="img/product1.webp" alt="product" className="img-fluid" />
                <p>Fresh Strawberries</p>
            </div>
        </td>

        <td>$36.00</td>
        <td>
            <div className={classes.countingBtn}>
                <Button type="button">-</Button>
                <p>1</p>
                <Button type="button">+</Button>
            </div>
        </td>

        <td>$36.00</td>
    </tr>
);

const Features = () => (
    <>
        <section id={classes.track}>
            <Container>
                <div>
                    <a href="../index.html">Home</a>
                    <i className="fas fa-chevron-right" />
                    <span>Shoping Cart</span>
                </div>
            </Container>
        </section>

        <main id={classes.mainSection}>
            <Container>
                <Row>
                    <Col className={classes.tableContent} size="8" lgSize="12">
                        <table>
                            <thead>
                                <tr>
                                    <td>product</td>
                                    <td>price</td>
                                    <td>quantity</td>
                                    <td>total</td>
                                </tr>
                            </thead>

                            <tbody>
                                <TableRow />
                                <TableRow />
                            </tbody>
                            <thead className={classes.couponeCode}>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Coupon Code" />
                                    </td>

                                    <td colSpan="3">
                                        <table>
                                            <tr>
                                                <td>
                                                    <Button type="button">Apply Coupon</Button>
                                                </td>

                                                <td>
                                                    <Button type="button">update Cart</Button>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </Col>

                    <Col className size="4" lgSize="12">
                        <div className={classes.content}>
                            <h3>CART TOTALS</h3>
                            <div className={classes.price}>
                                <p className={classes.textBold}>Subtotal:</p>
                                <span>$79.53</span>
                            </div>

                            <div className={classes.shipping}>
                                <p className={classes.textBold}>Shipping:</p>
                                <div className={classes.address}>
                                    <p>
                                        There are no shipping methods available. Please double check
                                        your address, or contact us if you need any help.
                                    </p>
                                    <span>CALCULATE SHIPPING</span>
                                    <form>
                                        <select>
                                            <option>Select a Country</option>
                                            <option value="Select a Country">USA</option>
                                            <option value="Select a Country">UK</option>
                                            <option value="Select a Country">BN</option>
                                        </select>
                                        <input type="text" placeholder="state/country" />
                                        <input type="text" placeholder="postcode/zip" />
                                        <Button type="submit">update totals</Button>
                                    </form>
                                </div>
                            </div>

                            <div className={classes.checkOut}>
                                <div className={classes.total}>
                                    <p className={classes.textBold}>total:</p>
                                    <span>$79.53</span>
                                </div>
                                <Button type="button">PROCEED TO CHECKOUT</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    </>
);

export default Features;
