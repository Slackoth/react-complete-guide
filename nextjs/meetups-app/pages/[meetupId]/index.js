import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
    const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mirador_Reserva_Natural_El_Imposible.JPG/1280px-Mirador_Reserva_Natural_El_Imposible.JPG';

    return <MeetupDetail image={img} title='Meetup 1' 
        address='City' description='Description'/>;
};

export const getStaticProps = async context => {
    const params = context.params;

    return {
        props: {
            meetup: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mirador_Reserva_Natural_El_Imposible.JPG/1280px-Mirador_Reserva_Natural_El_Imposible.JPG',
                id: params.meetupId,
                title: 'Meetup 1',
                address: 'City',
                description: 'Description 1'
            }
        }
    }
};

export default MeetupDetails;
