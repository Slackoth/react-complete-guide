import Person from '../Person';
import React, {PureComponent} from 'react';

/**
 * If there is a scenario where checking all the props of a given component for
 * changes is needed, then instead of using shouldComponentUpdate, better extend
 * a class named PureComponent, this class checks for changes on all props
 * automatically
 */
class PersonList extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[PersonList.js] shouldComponentUpdate');

    //     // This only works due to replacing the previous value
    //     // of the state.persons array for a a new copy of the array
    //     // whenever the state.persons change in both handlers.
    //     // This is a pointer comparison, compares whether both pointers
    //     // are pointing towards the same memory address.
    //     if(
    //         nextProps.persons !== this.props.persons ||
    //         nextProps.clickEvent !== this.props.clickEvent ||
    //         nextProps.changeEvent !== this.props.changeEvent
    //     )
    //         return true;
    //     else
    //         return false;
    //     // Avoids unnecessary re-rendering
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PersonList.js] getSnapshotBeforeUpdate');

        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, message) {
        console.log('[PersonList.js] componentDidUpdate', message);
    }

    render() {
        console.log('[PersonList.js] rendering...');

        return this.props.persons.map((person, index) => {
            return (
                // The key always needs to be on the outer element in a map method
                <Person key={person.id} name={person.name} age={person.age}
                    clickEvent={() => this.props.clickEvent(index)}
                    changeEvent={event => this.props.changeEvent(event, person.id)}/>
            );
        })

    }
}

export default PersonList;