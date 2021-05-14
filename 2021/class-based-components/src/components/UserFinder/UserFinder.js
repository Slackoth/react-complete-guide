import { Fragment, Component } from 'react';
import Styles from './UserFinder.module.css';
import Users from '../Users';
import UsersContext from '../../store/users-context';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor(props) {
    super(props);
    
    this.state = {
      filteredUsers: [],
      searchTerm: ''
    };
  }
  componentDidMount() {
    // Send http request
    this.setState({filteredUsers: this.context.users});
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter(
          user => user.name.includes(this.state.searchTerm)
        )
      });
    }
  }

  searchChangeHandler = event => {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <Fragment>
        <div className={Styles.finder}>
          <input type='search' onChange={this.searchChangeHandler} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
};

export default UserFinder;