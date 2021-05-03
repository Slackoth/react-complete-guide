/**
 * .children is a special property that simply outputs whatever gets entered
 * between the opening and closing tag of this component
 * 
 * High order components are basically components wrapping other components
 * 
 * There is a in-built component that has the exact function of this Aux component,
 * is called Fragment
 */
const Aux = props => props.children;

export default Aux;