import Navbar from '../components/Navbar';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <>
            <Navbar />
            <h1 className={styles.mainHeading}>This is a Contact page</h1>
        </>
    );
};

export default Contact;
