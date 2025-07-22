import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Header(props){


  useEffect(()=>{
    const width = window.innerWidth;
    const images = document.getElementsByClassName('tools');
    
    let position = 0;
    if(images.length>0 && width<=960){
      setInterval(() => {
        images[position].style.display = 'none';
        position = (position+1) % images.length;
        images[position].style.display = 'block';
      }, 3000);
    }
  },[])
    return(
    <header id='header'>
        <nav className={styles.Nav}>
          <img className={styles.logo} src={"/portfolio_logo.svg"} alt="Portfolio Logo" height={50} width={100} />
          <ul>
            <li>
              <Link href='#projects' >Projects</Link>
            </li>
            <li><a href="mailto:ayandamarotya@gmail.com?subject=Project Enquiry" >Contact Me</a></li>
            <li><a href='https://github.com/YoungAizy'   target="_blank"
          rel="noopener noreferrer" >Github</a></li>
          </ul>
        </nav>
        <div className={styles.tools_wrapper}>
          <div id='' className={styles.tools_container}>
            <img className={`${styles.tech_tool} tools`} src={"/javascript_logo.png"} alt="javascript logo" height={150} width={150}/>
            <img className={`${styles.tech_tool} tools`} src={"/react_icon.png"} alt="react.js logo" height={150} width={150}/>
            <img className={`${styles.tech_tool} tools`} src={"/Node.js_logo.png"} alt="Node.js logo" height={150} width={150}/>
            <img className={`${styles.tech_tool} tools`} src={"/python.png"} alt="python language logo" height={150} width={150}/>
            <img className={`${styles.tech_tool} tools`} src={"/android_icon.png"} alt="android logo" height={150} width={150}/>
          </div>
        </div>
      </header>
      )
    }