import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './ast/scss/carousel.module.scss';
import { Button, Container } from './framwork';

const CAROUSEL = [
    { heading1: 'Men Collection 2021', heading2: 'New Arrivals', bgImg: 'headerBg1.webp' },
    { heading1: 'Men -Secson', heading2: 'JACKETS & COATS ', bgImg: 'headerBg2.webp' },
    { heading1: 'Women Collection 2021 ', heading2: ' NEW SEASON', bgImg: 'headerBg3i.webp' },
    { heading1: 'Men ', heading2: ' Arrivals', bgImg: 'headerBg4.webp' },
];

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState({ heading1: null, heading2: null, bgImg: null });

    useEffect(() => {
        if (index === CAROUSEL.length - 1) {
            setIndex(0);
        }
    }, [index]);

    const update = () => setIndex((prevState) => prevState + 1);

    useEffect(() => {
        const autoPlay = setInterval(update, 5000);

        return () => {
            clearInterval(autoPlay);
        };
    }, []);

    const carousel = useCallback(() => CAROUSEL.at(index), [index]);

    useEffect(() => {
        setValue(carousel());
    }, [carousel]);

    const handelDecrement = () => {
        if (index === 0) {
            setIndex(CAROUSEL.length - 1);
        }
        setIndex((prevState) => prevState - 1);
    };

    const handelIncrement = () => {
        if (index === CAROUSEL.length) {
            setIndex(0);
        }
        setIndex((prevState) => prevState + 1);
    };

    console.log(index);

    return (
        <section id={classes.carousel}>
            <div className={classes.bgImg} style={{ backgroundImage: `url(img/${value.bgImg})` }}>
                <Container className={classes.position}>
                    <div className={classes.content}>
                        <h2>{value.heading1}</h2>
                        <h1>{value.heading2}</h1>
                        <Link to="/shop">
                            <Button type="button">shop now</Button>
                        </Link>
                    </div>
                    <div className={classes.arrowBtn}>
                        <Button
                            type="button"
                            className={classes.leftArrow}
                            onClick={handelDecrement}
                        >
                            <i className="fas fa-caret-left" />
                        </Button>
                        <Button
                            type="button"
                            className={classes.rightArrow}
                            onClick={handelIncrement}
                        >
                            <i className="fas fa-caret-right" />
                        </Button>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Carousel;
