import styles from '../styles/Home.module.css'
import { useEffect } from 'react';


export default function Carousal({imagePaths,setShowModal,setSelectedImg}){

    useEffect(()=>{
        const width = window.innerWidth;
        if(width<=960){
            const pictures = document.getElementsByClassName('graphic');
    
            let position = 0
            setInterval(() => {
                pictures[position].style.display = "none";
                position = (position+1) % pictures.length
                pictures[position].style.display = "block";
            }, 3000);
        }


    },[])

    const onThumbnailClick = (path)=>{
        setSelectedImg(path);
        setShowModal(true);
    }

    return(
        <div style={myClasses.wrapper}>
            <div id='carousel' style={myClasses.carousel}>
                {imagePaths && imagePaths.map((path,idx)=>(
                    <div key={idx} onClick={()=>onThumbnailClick(path)} className='graphic' style={myClasses.container}>
                        <img className={styles.graphic_pic} style={myClasses.pic} src={path} alt="Pern app showcase" height={160} width={160} />
                        </div>
                ))}
                
            </div>

        </div>
    )
}

const myClasses ={
    wrapper:{
        position: 'relative',
        padding: "1rem 2rem",
        width: "98vw",
        height: '300px',
        overflow: "hidden"
    },
    carousel:{
        display: 'flex',
        flexFlow: "row nowrap",
        justifyContent: 'center',
        width: "100%",
        overflow: "hidden"
    },
    container:{
        margin: "0 1em",
        cursor: "pointer"
    },
    pic:{
        borderRadius: "1px"
    }
}