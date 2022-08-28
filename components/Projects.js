import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { GoMarkGithub } from "react-icons/go";
import { GoLinkExternal } from "react-icons/go";

export default function Projects(){
    return(
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
    )
}