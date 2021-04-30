import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
import AuxWrapper from '../../../hoc/AuxWrapper/AuxWrapper';

class OrderSummary extends Component {
    listIngredients = ingredients => {
        return Object.keys(ingredients).map(key => {
            return <li key={key}>
                <span style={{textTransform: 'capitalize'}}>{key}</span>
                : {ingredients[key]}
            </li>;
        });
    };

    componentDidUpdate() {
        console.log(`${OrderSummary.name} componentDidUpdate`);
    }

    render() {
        return (
            <AuxWrapper>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {this.listIngredients(this.props.ingredients)}
                </ul>
                <p>Total price: <strong>${this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </AuxWrapper>
        );
    }
};

export default OrderSummary;