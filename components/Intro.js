import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Intro(){
    return(
        <div className={styles.intro}>
        <div>
        <h2>Hi, there!</h2>
          <p> My name is Ayanda Marotya, I am a Software and Web developer with project experience both on frontend and backend technologies. I also provide SEO and Digital Marketing services.
            My passion is to design optimised solutions with eye-catching designs. I am always open to grabbing new opportunities and learning new technologies. I am looking forward in hearing from you, and hopefully working together.
        </p>
        </div>
        <Image src={"/display_pic.jpg"} alt="profile display picture" height={250} width={250} />
      </div>
    )
}