import Image from 'next/image';


export default function Carousal({imagePaths,setShowModal,setSelectedImg}){

    const onThumbnailClick = (path)=>{
        setSelectedImg(path);
        setShowModal(true);
    }

    return(
        <div style={myClasses.wrapper}>
            <div style={myClasses.carousel}>
                {imagePaths && imagePaths.map((path,idx)=>(
                    <div key={idx} onClick={()=>onThumbnailClick(path)} style={myClasses.container}>
                        <Image style={myClasses.pic} src={path} alt="Pern app showcase" height={250} width={250} />
                        </div>
                ))}
                
            </div>

        </div>
    )
}

const myClasses ={
    wrapper:{
        overflow: 'hide',
        position: 'relative',
        padding: "2rem 6rem"
    },
    carousel:{
        display: 'flex',
        overflow: 'hide',
        flexFlow: "row nowrap",
    },
    container:{
        margin: "0 1em",
        cursor: "pointer"
    },
    pic:{
        borderRadius: "1px"
    }
}