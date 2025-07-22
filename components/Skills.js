import styles from '../styles/Home.module.css';

const WEB = ['HTML5 & CSS3',
            'Javascript ES6', 'React Ecosystem', 'Node.js & Express', 'MUI and Bootstrap', 
            'API Development', 'PHP (Wordpress and Laravel)', 'SEO'];
const DEV = ['Java (JavaFX & Spring)', 'Native Android mobile development','Python (API & AI development)', 'PostgresSQL','MongoDB','Firebase/Firestore','Git'];

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