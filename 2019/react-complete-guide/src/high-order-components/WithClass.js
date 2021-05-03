import React from 'react';

const WithClass = props => (
    <div className={props.classAttr}>
        {props.children}
    </div>
);

// const withClass = (WrappedComponent, className) => {
//     return props => {
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     }
// };

export default WithClass;