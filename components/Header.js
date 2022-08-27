import styles from '../styles/Home.module.css';


export default function Header(props){
    return(
    <header id='header'>
        <nav className={styles.Nav}>
          <Image src={"/portfolio_logo.svg"} alt="Portfolio Logo" height={50} width={100} />
          <ul>
            <li>
              <Link href='#projects' >Projects</Link>
            </li>
            <li><a href="mailto:ayandamarotya@gmail.com?subject=Project Enquiry" >Contact Me</a></li>
            <li><a href='https://github.com/YoungAizy'   target="_blank"
          rel="noopener noreferrer" >Github</a></li>
          </ul>
        </nav>
        <div className={styles.tools}>
          <Image src={"/javascript_logo.png"} alt="javascript logo" height={150} width={150}/>
          <Image src={"/react_icon.png"} alt="react.js logo" height={150} width={150}/>
          <Image src={"/Node.js_logo.png"} alt="Node.js logo" height={150} width={150}/>
          <Image src={"/python.png"} alt="python language logo" height={150} width={150}/>
          <Image src={"/android_icon.png"} alt="android logo" height={150} width={150}/>
        </div>
      </header>
      )
    }