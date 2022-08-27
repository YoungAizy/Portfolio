import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { GoMarkGithub } from "react-icons/go";
import { GoLinkExternal } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
//import local components
import Header from '../components/Header'

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
        <div className={styles.intro}>
          <div>
          <h2>Hi, there!</h2>
            <p> My name is Ayanda Marotya, I am a Software and Web developer with project experience both on frontend and backend technologies. I also provide SEO and Digital Marketing services.
              My passion is to design optimised solutions with eye-catching designs. I am always open to grabbing new opportunities and learning new technologies. I am looking forward in hearing from you, and hopefully working together.
          </p>
          </div>
          <Image src={"/display_pic.jpg"} alt="profile display picture" height={250} width={250} />
        </div>
          <h2 id={styles.skill_header}>SKILLSET</h2>
        <div className={styles.skills}>
          <div className={styles.web}>
            <h3>&#60; WEB &#47;&#62;</h3>
            <div>
              <ul>
                <li>HTML5</li><li>CSS3 &amp; Bootstrap</li><li>Javascript ES6</li><li>React JS</li>
            <li>Node and Express</li><li>Websockets</li><li>SEO</li>
              </ul>
            </div>
          </div>
          <div className={styles.software}>
            <h3>&#123; SOFTWARE &#125;</h3>
            <ul>
            <li>Java</li><li>Native Android Mobile development</li><li>Python</li>
            <li>Postgresql</li><li>Firebase</li><li>Git</li>
            </ul>
          </div>
        </div>
          <h2 id='projects'>PROJECTS</h2>
        <div className={styles.projects}>
          <div className={styles.container}>
            <Image src={"/pern_stack.png"} alt="Pern app showcase" height={200} width={300} />
            <div>
              <h3>PERN Stack App</h3>
              <p>A simple restaurant finder and rating system using React.js and Bootstrap in the frontend backed up by Express.js providing an API to post and fetch data from a Postgresql database.</p>
              <div className={styles.tags}><span>PERN stack</span> <span>React</span> <span>Web Development</span> <span>full Stack</span> </div>
              <div className={styles.buttons}>
                <button><a href="https://github.com/YoungAizy/pern_web_app"  target="_blank"
          rel="noopener noreferrer"><GoMarkGithub/> Code</a></button>
                <button><a href="https://pern-restaurant-finder.herokuapp.com/"  target="_blank"
          rel="noopener noreferrer"><GoLinkExternal/> Live</a></button>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <Image src={"/movie_web_app.png"} alt="Movie Lookup app showcase" height={200} width={300} />
            <div>
              <h3>Movie Lookup App</h3>
              <p>A React movie database web app providing users with information on upcoming movies and TV series. Users can also lookup information on actors, directors etc... As well as save the favourites.</p>
              <div className={styles.tags}><span>Material-UI</span> <span>React</span> <span>Web Development</span><span>Node</span> </div>
              <div className={styles.buttons}>
                <button><a href="https://github.com/YoungAizy/MovieApp_web"  target="_blank"
          rel="noopener noreferrer"><GoMarkGithub/> Code</a></button>
                <button><a href="https://react-movie-lookup.netlify.app/"  target="_blank"
          rel="noopener noreferrer"><GoLinkExternal/> Live</a></button>
              </div>
            </div>
          </div>
        </div>
      <button className={styles.stickyBtn}><Link href="#header" passHref><AiOutlineArrowUp/></Link></button>
      </main>
      
      <footer className={styles.footer}>
        <p>Copyright &copy; 2022 Ayanda Marotya </p>
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
