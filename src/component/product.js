import productsContext from '../context/products';
import classes from './ast/scss/product.module.scss';
import { Button, Col } from './framwork';

const Product = () => (
    <productsContext.Consumer>
        {({ products }) =>
            products.map((product) => (
                <Col size="3" mdSize="6" smSize="12" className key={product.id}>
                    <div className={classes.content}>
                        <figure>
                            <img
                                src={`./img/${product.thumbnil}`}
                                alt="product"
                                className="img-fluid"
                            />
                            <figcaption>
                                <Button type="button">Quick Veiw</Button>
                            </figcaption>
                        </figure>
                        <div className={classes.productTitle}>
                            <p>{product.name}</p>
                            <i className="far fa-heart" />
                        </div>
                        <div className={classes.price}>
                            <p>{product.price}</p>
                        </div>
                    </div>
                </Col>
            ))
        }
    </productsContext.Consumer>
);

export default Product;
