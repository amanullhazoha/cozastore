import classes from '../ast/scss/about.module.scss';
import Banner from '../Banner';
import { Col, Container, Row } from '../framwork';

const ImgBox = ({ img }) => (
    <Col className={classes.content} size="4" mdSize="12">
        <figure>
            <div className={classes.position}>
                <img src={`../img/${img}`} alt="about" className="img-fluid" />
            </div>
        </figure>
    </Col>
);

const About = () => (
    <>
        <Banner tilte="about" imgName="banner.webp" />

        <div id={classes.mainSection}>
            <Container>
                <Row>
                    <Col className={classes.contentText} size="8" mdSize="12">
                        <h3>Our Story</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                            consequat consequat enim, non auctor massa ultrices non. Morbi sed odio
                            massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius
                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada
                            fames ac turpis egestas. Maecenas gravida justo eu arcu egestas
                            convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim.
                            Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse
                            potenti. Proin ut est diam. Donec condimentum euismod tortor, eget
                            facilisis diam faucibus et. Morbi a tempor elit.
                        </p>

                        <p>
                            Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce
                            eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla
                            turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida.
                            Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales
                            lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque
                            justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis
                            ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula
                            ac ligula.
                        </p>

                        <p>
                            Any questions? Let us know in store at 8th floor, 379 Hudson St, New
                            York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                    </Col>

                    <ImgBox img="about1.webp" />

                    <div style={{ display: 'flex', flexWrap: 'wrap-reverse' }}>
                        <ImgBox img="about2.webp" />

                        <Col className={classes.contentText} size="8" mdSize="12">
                            <h3>Our Mission</h3>

                            <p>
                                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus
                                dignissim risus, sed consectetur erat. Pellentesque habitant morbi
                                tristique senectus et netus et malesuada fames ac turpis egestas.
                                Nullam maximus mauris sit amet odio convallis, in pharetra magna
                                gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae
                                viverra odio. Pellentesque ac velit egestas, luctus arcu non,
                                laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor
                                ante. Ut mauris ligula, volutpat in sodales in, porta non odio.
                                Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla
                                lobortis. Proin at gravida ante. Mauris auctor purus at lacus
                                maximus euismod. Pellentesque vulputate massa ut nisl hendrerit,
                                eget elementum libero iaculis.
                            </p>

                            <div className={classes.qutos}>
                                <p>
                                    Creativity is just connecting things. When you ask creative
                                    people how they did something, they feel a little guilty because
                                    they didn t really do it, they just saw something. It seemed
                                    obvious to them after a while.
                                </p>
                                <p>
                                    <span>- Steve Job’s</span>
                                </p>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    </>
);

export default About;
