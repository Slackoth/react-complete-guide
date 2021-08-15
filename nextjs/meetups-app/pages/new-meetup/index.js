import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = props => {
    const addMeetupHandler = (meetup) => {
        console.log(meetup);
    };

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetup;