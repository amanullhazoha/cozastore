import classes from './ast/scss/filter.module.scss';
import ButtonList from './buttonList';
import { Button, Col, Container, Row } from './framwork';

const SORT = [
    'Default',
    'Popularity',
    'Average rating',
    'Newness',
    'Price: Low to High',
    'Price: High to Low',
];

const PRICE = [
    'All',
    '$0.00 - $50.00',
    '$50.00 - $100.00',
    '$100.00 - $150.00',
    '$150.00 - $200.00',
    '$200.00+',
];

const COLOR = ['black', 'blue', 'grey', 'green', 'red', 'white'];

const TAGS = ['Fashion', 'Lifestyle', 'Denim', 'Newness', 'Streetstyle', 'Crafts'];

const Filtering = ({ heading, buttonValue, className }) => (
    <Col size="3" mdSize="6" smSize="12" className={classes.mBottom}>
        <h3>{heading}</h3>
        <ButtonList buttonValue={buttonValue} className={className} />
    </Col>
);

const ColorFiltering = ({ heading, className, buttonValue }) => (
    <Col size="3" mdSize="6" smSize="12" className={classes.mBottom}>
        <h3>{heading}</h3>
        <ul className={className}>
            {buttonValue.map((value) => (
                <li key={value}>
                    <span style={{ background: `${value}` }} />
                    <Button type="button">{value}</Button>
                </li>
            ))}
        </ul>
    </Col>
);

const Filter = ({ isOpen }) => (
    <Container className={classes.filter} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className={classes.content}>
            <Row>
                <Filtering heading="Sort By" buttonValue={SORT} />

                <Filtering heading="Price" buttonValue={PRICE} />

                <ColorFiltering heading="Color" className={classes.color} buttonValue={COLOR} />

                <Filtering heading="Tags" className={classes.tags} buttonValue={TAGS} />
            </Row>
        </div>
    </Container>
);

export default Filter;
