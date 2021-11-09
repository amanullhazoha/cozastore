import { Link } from 'react-router-dom';
import classes from './css/headerTop.module.scss';

const LISTVALUE = [
    { name: 'Help & FAQs', to: '/shop' },
    { name: 'My Account', to: '/about' },
    { name: 'EN', to: '/' },
    { name: 'USD', to: '/contact' },
];

const HeaderTop = () => (
    <div className={classes.headerTop}>
        <div className={`container ${classes.content}`}>
            <p>Free shipping for standard order over $100</p>
            <ul>
                {LISTVALUE.map((value) => (
                    <li key={value.name}>
                        <Link to={value.to}>{value.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default HeaderTop;
