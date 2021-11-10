import { Link } from 'react-router-dom';
import classes from './ast/scss/services.module.scss';
import { Col, Container, Row } from './framwork';

const DATA = [
    { heading: 'Women', tilte: 'Spring 2021', img: 'services1.webp' },
    { heading: 'Men', tilte: 'Spring 2021', img: 'services2.webp' },
    { heading: 'Accessories', tilte: 'New Trend', img: 'services3.webp' },
];

const Services = () => (
    <section id={classes.services}>
        <Container>
            <Row>
                {DATA.map((data) => (
                    <Col
                        className={classes.content}
                        size="4"
                        mdSize="6"
                        smSize="12"
                        key={data.heading}
                    >
                        <a href="-">
                            <figure>
                                <div className={classes.overly} />
                                <img src={`img/${data.img}`} alt="services" className="img-fluid" />
                                <figcaption>
                                    <div className={classes.top}>
                                        <h3>{data.heading}</h3>
                                        <p>{data.tilte}</p>
                                    </div>

                                    <div className={classes.bottom}>
                                        <Link to="/shop">Shop Now</Link>
                                        <div className={classes.border} />
                                    </div>
                                </figcaption>
                            </figure>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
);

export default Services;
