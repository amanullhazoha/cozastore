import { Button } from './framwork';

const ButtonList = ({ className, buttonValue, handelFilter, isActive, active }) => (
    <ul className={className}>
        {buttonValue.map((value) => (
            <li key={value}>
                <Button
                    type="button"
                    className={isActive === value.toLowerCase() && active}
                    onClick={() => handelFilter(value)}
                >
                    {value}
                </Button>
            </li>
        ))}
    </ul>
);

export default ButtonList;
