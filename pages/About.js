import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';
import Image from 'next/image';

const About = () => {
    return (
        <>
            <Navbar />
            <div style={{ textAlign: 'center' }}>
                <h1 className={styles.mainHeading}> This is the About page</h1>
                <Image src="/demo1.jpg" width="500" height="300" alt="about" />
            </div>
        </>
    );
};

export default About;
