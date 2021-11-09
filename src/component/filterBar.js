import productsContext from '../context/products';
import classes from './ast/scss/filterBar.module.scss';
import ButtonList from './buttonList';
import { Button } from './framwork';

const FILTERVALUE = ['All Products', 'Women', 'Men', 'Bag', 'Shoes', 'Watches'];

const FilterBar = ({ toggler }) => (
    <productsContext.Consumer>
        {({ handelFilter, filterValue }) => (
            <div className={classes.filterBar}>
                <ButtonList
                    buttonValue={FILTERVALUE}
                    handelFilter={handelFilter}
                    isActive={filterValue}
                    active={classes.active}
                />

                <div className={classes.search}>
                    <Button type="button" className={classes.searchBtn} onClick={toggler}>
                        <i className="fas fa-filter" />
                        Filter
                    </Button>
                    <Button type="button" className={classes.inputSearch}>
                        <i className="fas fa-search" />
                        Search
                    </Button>
                </div>
            </div>
        )}
    </productsContext.Consumer>
);

export default FilterBar;
