import { Component } from 'react';
import User from './User';
import classes from './Users.module.css';

class Users extends Component {
  constructor(props) {
    super(props);
    
    this.state = {show: true};
  }

  toggleUsersHandler = () => {
    this.setState(prevState => {return {show: !prevState.show}});
  }

  componentDidMount() {
    // if(this.props.users.length === 0)
      // throw new Error('No users provided!');
  }

  usersList = () => (
    <ul>
      {this.props.users.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );
  
  render() {
    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.show ? 'Hide' : 'Show'} Users
        </button>
        {this.state.show && this.usersList()}
      </div>
    );
  }
};

export default Users;
