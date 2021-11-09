/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */

export const Container = ({ className, children, ...rest }) => (
    <div className={`container ${className}`} {...rest}>
        {children}
    </div>
);

export const Row = ({ className, children }) => (
    <div className={`row ${className}`}>{children}</div>
);

export const Col = (props) => {
    const { lgSize, mdSize, smSize, size, className, children } = props;

    let names = '';

    if (size) {
        names = `col-${size}`;
    }

    if (lgSize) {
        names = `${names} col-lg-${lgSize}`;
    }

    if (mdSize) {
        names = `${names} col-md-${mdSize}`;
    }
    if (smSize) {
        names = `${names} col-sm-${smSize}`;
    }
    if (className) {
        names = `${names} ${className}`;
    } else names = 'col';

    return <div className={names}>{children}</div>;
};

export const Button = ({ children, type, className, onClick, ...rest }) => (
    <button type={type} className={className} onClick={onClick} {...rest}>
        {children}
    </button>
);

export const Form = ({ children, handelSubmit, ...rest }) => (
    <form onSubmit={handelSubmit} {...rest}>
        {children}
    </form>
);

export const Input = ({ type, name, value, onChange, ...rest }) => (
    <input type={type} name={name} value={value} onChange={onChange} {...rest} />
);
