import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
//import local components
import Header from '../components/Header';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ayanda Marotya | Portfolio</title>
        <meta name="description" content="Welcome to my online portfolio showcasing my skillset as a freelance developer for software and web applications." />
        <meta name='keywords' 
        content='React developer, Web developer, Full Stack developer, software developer, Freelance developer, Software engineer, mobile developer, Javascript Developer' />
        <meta name='author' content='Ayanda Marotya'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <Intro />
        <h2 id={styles.skill_header}>SKILLSET</h2>
        <Skills/>
        <h2 id='projects'>PROJECTS</h2>
        <Projects/>
      <button className={styles.stickyBtn}><Link href="#header" passHref><AiOutlineArrowUp/></Link></button>
      </main>
      
      <footer className={styles.footer}>
        <p>Copyright &copy; { new Date().getFullYear()} Ayanda Marotya </p>
         <a
          href="https://www.linkedin.com/in/ayanda-marotya-11185b13a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin /> LET&#39;S CONNECT
        </a>
      </footer>
    </div>
  )
}
