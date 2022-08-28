import styles from '../styles/Home.module.css';

const WEB = ['HTML5','CSS3','Javascript ES6', 'React.js', 'Redux', 'Node.js #amp; Express', 'MUI and Bootstrap', 'Websockets', 'SEO'];
const DEV = ['Java', 'Native Android mobile development', 'C#','Python', 'Postgresql','MongoDB','Firebase/Firestore','Git'];

export default function Skills (){
    return(
        <div className={styles.skills}>
          <div className={styles.web}>
            <h3>&#60; WEB &#47;&#62;</h3>
            <div>
              <ul>
                {WEB.map((item,id)=> <li key={id}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles.software}>
            <h3>&#123; SOFTWARE &#125;</h3>
            <ul>
            {DEV.map((item,id)=> <li key={id}>{item}</li>)}
            </ul>
          </div>
        </div>
    )
}