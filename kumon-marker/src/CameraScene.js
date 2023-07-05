import React from "react";
import Webcam from "react-webcam";

const CameraScene = () => {

    //completely empty to begin with
    const [devices,setDevices] = React.useState([])


    //use callback to cache this function
    //gets all the possible camera feed 
    const handleDevices = React.useCallback( 
        
        (mediaDevices) =>{
        
            setDevices(
                mediaDevices.filter( 
                    ({kind}) => kind==="videoinput")
                )
        }                
        ,[setDevices]
        
    );

    //below is a useEffect hook. it runs after every render
    React.useEffect( () =>{
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
    },[handleDevices] );


    return (
        <>
        {devices.map( ( device,key) => (
            <div key = {key}>
                <Webcam
                audio = {false}
                mirrored = {true}
                videoConstraints = {{deviceId:device.deviceId}}
                />
                {device.label || "Device $(key+)"}

            </div>


        ))}
        
        </>
    )

}
export default CameraScene;