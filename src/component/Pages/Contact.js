import { useState } from 'react';
import classes from '../ast/scss/contact.module.scss';
import Banner from '../Banner';
import { Button, Col, Container, Form, Input, Row } from '../framwork';

const Group = ({ heading, parh, icon }) => (
    <div className={classes.group}>
        <i className={`fas ${icon}`} />
        <div>
            <h3>{heading}</h3>
            <p>{parh}</p>
        </div>
    </div>
);

const Contact = () => {
    const [send, setSend] = useState({
        email: '',
        massage: '',
    });

    const handelChange = (e) => {
        setSend({
            ...send,
            [e.target.name]: e.target.value,
        });
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        const items = () => {
            const fildValu = localStorage.getItem('send');
            return fildValu === null ? [] : JSON.parse(fildValu);
        };

        const pushItem = items();
        pushItem.push(send);

        localStorage.setItem('send', JSON.stringify(pushItem));

        console.log(JSON.parse(localStorage.getItem('send')));
        setSend({ email: '', massage: '' });
    };

    return (
        <>
            <Banner imgName="banner.webp" tilte="contact" />

            <div id={classes.mainSection}>
                <Container>
                    <Col className={classes.content} size="12">
                        <Row>
                            <Col className={classes.form} size="6" mdSize="12">
                                <h2>Send Us A Message</h2>
                                <Form handelSubmit={handelSubmit}>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={send.email}
                                        onChange={handelChange}
                                        placeholder="Yout Email Address"
                                    />
                                    <textarea
                                        name="massage"
                                        value={send.massage}
                                        onChange={handelChange}
                                        placeholder="How Can We Help?"
                                    />
                                    <Button type="submit">SUBMIT</Button>
                                </Form>
                            </Col>

                            <Col className={classes.contact} size="6" mdSize="12">
                                <Group
                                    heading="Address"
                                    icon="fa-map-marker-alt"
                                    parh="Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                                    US"
                                />

                                <Group
                                    heading="Lets Talk"
                                    icon="fa-map-marker-alt"
                                    parh="+1 800 1236879"
                                />

                                <Group
                                    heading="Sale Support"
                                    icon="fa-map-marker-alt"
                                    parh="contact@example.com"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>

            <section id={classes.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239271334!2d90.27923787208863!3d23.780887456058103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1633529657686!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                    allowFullScreen=""
                    loading="lazy"
                    title="hi"
                />
            </section>
        </>
    );
};

export default Contact;
