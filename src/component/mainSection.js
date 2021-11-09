import AddShop from './addShop';
import classes from './ast/scss/mainSection.module.scss';
import { Container } from './framwork';
import Services from './services';

const MainSection = () => (
    <main id={classes.mainSection}>
        <Services />
        <section id={classes.products}>
            <Container>
                <h1>PRODUCT OVERVIEW</h1>
                <AddShop />
            </Container>
        </section>
    </main>
);

export default MainSection;
