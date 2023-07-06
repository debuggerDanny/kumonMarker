import React from "react";
import Webcam from "react-webcam";

const CameraScene = () => {

    //completely empty to begin with
    const [devices,setDevices] = React.useState([]);
    const [backCam,setBackCam] = React.useState([]);

    const videoConstraints ={ facingMode:  "environment" };

    //use callback to cache this function
    //gets all the possible camera feed 
    const handleDevices = React.useCallback( 
        
        (mediaDevices) =>{
        
            setDevices(
                mediaDevices.filter( 
                    ({kind}) => kind==="videoinput")
                );
            if(devices[0] != undefined){
                setBackCam([devices[0]]);
                
            }
        }                
        ,[setDevices]
        
    );

    //below is a useEffect hook. it runs after every render
    React.useEffect( () =>{
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },[handleDevices] );


    return (

        <Webcam
        audio={false}
        mirrored={true}
        videoConstraints={videoConstraints}
        ></Webcam>
    )
            
          
}

    
export default CameraScene;