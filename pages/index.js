/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { BsLinkedin } from "react-icons/bs";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";
//import local components
import Header from '../components/Header';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Carousal from '../components/Carousal';
import ImageModal from '../components/ImageModal'


export default function Home() {
  const [galleryModalVisibility, setGalleryModalVisibility] = useState(false);
  const [thumbnails,setThumbnails] = useState(null);
  const [selectedImgPath,setSelectedImgPath] = useState(null)

  useEffect(()=>{
    if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
  },[])

  const graphic_design_paths = [
    "/images/graphic_design/K-Design_Logo.png",
    "/images/graphic_design/business_card.png",
    "/images/graphic_design/kay_logo_01.png",
    "/images/graphic_design/Boutique_packaging.png",
    "/images/graphic_design/k-Designz.png",
    "/images/graphic_design/logo_template.jpg",
    "/images/graphic_design/moon_sphere.jpg"
  ]
  
  return (
    <div>
      <Head>
        <title>Ayanda Marotya | Software Engineer</title>
        <meta name="description" content="Online portfolio showcasing my skillset as a freelance software developer." />
        <meta name='keywords' 
        content='React developer, Web developer, Full Stack developer, Wordpress developer, software developer, Freelance Software engineer, mobile developer, Javascript Developer, Laravel Developer, AWS Developer' />
        <meta name='author' content='Ayanda Marotya'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.svg" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Header/>

      <main className={styles.main}>
        <Intro />
        <h2 id={styles.skill_header}>Graphic Design</h2>
        <Carousal imagePaths={graphic_design_paths} setSelectedImg={setSelectedImgPath} setShowModal={setGalleryModalVisibility}/>
        <h2 id={styles.skill_header}>SKILLSET</h2>
        <Skills/>
        <h2 id='projects'>PROJECTS</h2>
        <Projects/>
       {galleryModalVisibility && 
       <ImageModal image={selectedImgPath} thumbnails={graphic_design_paths} setVisibility={setGalleryModalVisibility}/>}
      <button className={styles.stickyBtn}><Link href="#header" passHref><AiOutlineArrowUp/></Link></button>
      </main>
      
      <footer className={styles.footer}>
        <p>Copyright &copy; { new Date().getFullYear()} Ayanda Marotya </p>
         <a
          href="https://www.linkedin.com/in/ayanda-marotya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin /> LET&#39;S CONNECT
        </a>
      </footer>
    </div>
  )
}
