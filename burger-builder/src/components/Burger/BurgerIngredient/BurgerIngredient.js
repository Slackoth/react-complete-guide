import PropTypes from 'prop-types';
import React, {Component} from 'react';
import BurgerIngStyle from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    constructor(props) {
        super(props);
    }

    getIngredient = () => {
        let ingredient = null;

        switch (this.props.type) {
            case 'bread-bottom':
                ingredient = <div className={BurgerIngStyle.BreadBottom}></div>;
                break;
            
            case 'bread-top':
                ingredient = (
                    <div className={BurgerIngStyle.BreadTop}>
                        <div className={BurgerIngStyle.Seeds1}></div>
                        <div className={BurgerIngStyle.Seeds2}></div>
                    </div>
                );
                break;
            
            case 'meat':
                ingredient = <div className={BurgerIngStyle.Meat}></div>;
                break;
    
            case 'cheese':
                ingredient = <div className={BurgerIngStyle.Cheese}></div>;
                break;
    
            case 'salad':
                ingredient = <div className={BurgerIngStyle.salad}></div>;
                break;
    
            case 'bacon':
                ingredient = <div className={BurgerIngStyle.Bacon}></div>;
                break;
        
            default:
                break;
        }

        return ingredient;
    }

    render() {
        return this.getIngredient();
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;