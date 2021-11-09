import classes from './ast/scss/banner.module.scss';

const Banner = ({ imgName, tilte }) => (
    <section id={classes.banner} style={{ backgroundImage: `url(../img/${imgName})` }}>
        <h1>{tilte}</h1>
    </section>
);

export default Banner;
