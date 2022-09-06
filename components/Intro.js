import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Intro(){
    return(
        <div className={styles.intro}>
        <div>
        <h2>Ayanda Marotya</h2>
          <p> Hi there!<br></br><br></br>Meet your coding buddy Ayanda Marotya. I am a Full Stack developer with hands on experience in web and android mobile development.  My first love is Java &#40;React.js being a close second&#41; and alongside it my passion to design optimised solutions with eye-catching designs. I love new challenges and learning new stuff and therefore I&#39;m always looking to expand my knowledge of the tech world and refine my skill.<br></br><br></br>Have a look at the <code>PROJECTS</code> section and send me an email if my work impresses you. I am looking forward to hearing from you, and hopefully working together :&#41;
        </p>
        </div>
        <Image src={"/display_pic.jpg"} alt="profile display picture" height={250} width={250} />
      </div>
    )
}