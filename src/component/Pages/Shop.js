import AddShop from '../addShop';
import classes from '../ast/scss/shop.module.scss';
import { Container } from '../framwork';

const Shop = () => (
    <section id={classes.products}>
        <Container>
            <AddShop />
        </Container>
    </section>
);

export default Shop;
