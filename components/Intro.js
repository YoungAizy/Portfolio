import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Intro(){
    return(
        <div className={styles.intro}>
        <div>
        <h2>Software Engineer</h2>
          <p>
            I&#39;m Ayanda Marotya; a <em>Full Stack Software Engineer</em> with more than 4 years hands on experience in building scalable web apps using microservices, AWS, and JavaScript frameworks for frontend and backend. 
            I also have android mobile development experience, utilising GCP and services like Firebase and Maps to build e-haul and chat apps. 
            <br></br><br></br>Have a look at my <code>PROJECTS</code> and send me an email if my work impresses you.
            <br></br>Looking forward to hearing from you, and hopefully working together :&#41;
        </p>
        </div>
        <Image src={"/display_pic.jpg"} alt="profile display picture" height={250} width={250} />
      </div>
    )
}