import React from 'react';
import Card from '../UI/Card/Card';
import Style from './Users.module.css';

const Users = props => {
    const toUser = users => {
        return users.map((user, index) => {
            return <li key={index}>{user.username}, {user.age} years old</li>;
        });
    };

    return <Card className={Style.users}><ul>{toUser(props.users)}</ul></Card>;
};

export default Users;