import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal';
import AuxWrapper from '../../hoc/AuxWrapper/AuxWrapper';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
    salad: 0.5
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                bacon: 0,
                cheese: 0,
                meat: 0,
                salad: 0
            },
            totalPrice: 4, purchasable: false,
            purchased: false
        };
    }

    addIngredientHandler = type => {
        this.setState((prevState, props) => {
            const newIngredients = {...prevState.ingredients};
            const prevValue = newIngredients[type];
            const newTotalPrice = prevState.totalPrice + INGREDIENT_PRICES[type];
            newIngredients[type] = prevValue + 1;

            return {ingredients: newIngredients, totalPrice: newTotalPrice};
        }, this.makeBurgerPurchasable); // Callback function must be a reference
    }

    removeIngredientHandler = type => {
        this.setState((prevState, props) => {
            const newIngredients = {...prevState.ingredients};
            const prevValue = newIngredients[type];

            if(prevValue <= 0)
                return;

            const newTotalPrice = prevState.totalPrice - INGREDIENT_PRICES[type];
            newIngredients[type] = prevValue - 1;

            return {ingredients: newIngredients, totalPrice: newTotalPrice};
        }, this.makeBurgerPurchasable); // Callback function must be a reference
    }

    purchaseHandler = () => {
        this.setState({purchased: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({purchased: false});
    }

    continuePurchaseHandler = () => {
        alert('Purchasing burger!');
    }

    disableAddRemoveButtons = () => {
        const disabled = {...this.state.ingredients};

        for(let key in disabled)
            disabled[key] = disabled[key] <= 0;

        return disabled;
    };

    makeBurgerPurchasable = () => {
        let sum = 0;
        const ingredients = {...this.state.ingredients};        

        for(let key in ingredients)
            sum += ingredients[key];

        this.setState({purchasable: sum > 0});
    }

    render() {
        return (
          <AuxWrapper>
              <Modal show={this.state.purchased} 
                close={this.cancelPurchaseHandler}>
                  <OrderSummary ingredients={this.state.ingredients}
                    purchaseCanceled={this.cancelPurchaseHandler}
                    purchaseContinued={this.continuePurchaseHandler}
                    totalPrice={this.state.totalPrice}/>
              </Modal>
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabledAddRemove={this.disableAddRemoveButtons()}
                totalPrice={this.state.totalPrice}
                purchasable={this.state.purchasable}
                purchased={this.purchaseHandler}/>
          </AuxWrapper>  
        );
    }
}

export default BurgerBuilder;