import Image from 'next/image';
import { useState } from 'react';


export default function ImageModal({image,thumbnails,setVisibility}){

    const [currentImg, setCurrentImg] = useState(image);

    const onClose = ()=>{
        setVisibility(false);
    }


    return(
        <div style={myStyles.wrapper}>
            <div style={myStyles.closeBtnwrapper}><button onClick={onClose} style={myStyles.closeBtn}>X</button></div>
            <div style={myStyles.container}>
            <Image style={myStyles.pic} src={currentImg} alt="Pern app showcase" width={400} height={400} />
            </div>
            <div style={myStyles.thumbnails}>
                {thumbnails && thumbnails.map((path,idx)=>(
                    <div key={idx} style={myStyles.thumbnail}>
                    <Image src={path} alt="Pern app showcase" height={120} width={120} onClick={()=>setCurrentImg(path)}/>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

const myStyles = {
    wrapper:{
        backgroundColor: "rgba(0,0,0,.5)",
        width: "100%",
        height: "100%",
        position: 'fixed',
        display:'flex',
        flexDirection: 'column',
        top: '0',
        bottom: '0',
        zIndex: '10'
    },
    closeBtnwrapper:{
        display: 'flex',
        justifyContent: 'flex-end',
        margin:'18px'
    },
    closeBtn:{
        padding:'8px',
        fontSize: '18px',
        border: "2px solid black",
        borderRadius: "100%",
        backgroundColor:'rgba(1,1,1,.3)',
         cursor: "pointer"
    },
    container:{
       display:'flex',
       justifyContent:'center'
    },
    thumbnails:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        margin: '22px'
    }
}