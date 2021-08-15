import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Meetup 1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mirador_Reserva_Natural_El_Imposible.JPG/1280px-Mirador_Reserva_Natural_El_Imposible.JPG',
        address: 'City'
    }, {
        id: 'm2',
        title: 'Meetup 2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mirador_Reserva_Natural_El_Imposible.JPG/1280px-Mirador_Reserva_Natural_El_Imposible.JPG',
        address: 'Town'
    }, {
        id: 'm3',
        title: 'Meetup 3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mirador_Reserva_Natural_El_Imposible.JPG/1280px-Mirador_Reserva_Natural_El_Imposible.JPG',
        address: 'Village'
    },
];

const HomePage = props => {
    return <MeetupList meetups={props.meetups}/>;
};

// IMPORTANT
// The page is pre-generated
export const getStaticProps = async context => {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        // Re-genarates the page on the server every 10 seconds
        revalidate: 10
    };
};

// IMPORTANT
// The page is pre-generated for every incoming request
// export const getServerSideProps = async context => {
//     const request = context.req;
//     const response = context.res;

//     // Fetch API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// };

export default HomePage;
