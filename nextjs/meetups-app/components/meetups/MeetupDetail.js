import { Fragment } from 'react';
import styles from './MeetupDetail.module.css';

const MeetupDetails = props => {
    return <Fragment>
        <section className={styles.detail}>
            <img src={props.image} alt={props.title}></img>
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    </Fragment>;
};

export default MeetupDetails;