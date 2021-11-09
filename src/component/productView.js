import classes from './ast/scss/productView.module.scss';
import { Button, Row } from './framwork';
import Product from './product';

const ProductView = () => (
    <div className={classes.productView}>
        <Row>
            <Product />
        </Row>

        <div className={classes.paginationBtn}>
            <Button type="button">Load More</Button>
        </div>
    </div>
);

export default ProductView;
