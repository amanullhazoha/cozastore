import { useState } from 'react';
import Filter from './filter';
import FilterBar from './filterBar';
import ProductView from './productView';

const AddShop = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggler = () => {
        setIsOpen((prevState) => !prevState);
    };

    console.log(isOpen);

    return (
        <>
            <FilterBar toggler={toggler} />
            <Filter isOpen={isOpen} />
            <ProductView />
        </>
    );
};

export default AddShop;
