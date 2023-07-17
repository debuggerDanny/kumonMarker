import React, { useEffect, useState } from "react";
import { SafeAreaView,StatusBar,Text,View, StyleSheet ,Image,Pressable } from "react-native";

import { launchCamera } from "react-native-image-picker";






const App = () =>{

    const options = {
        maxWidth: 2000,
        maxHeight: 2000,
        cameraType: "front"
      };

    const [img,setImg] = useState(null);
/*
    useEffect( () => {
        launchCamera(options,setImg);
    },[]);
*/
    //my app visuals
    return (
        <SafeAreaView style={styles.background}>
            <View style= {{marginTop:50}}>
                <Text style= {styles.titleText} >
                    kMarker
                </Text >
                <Text style = { styles.desc}>
                marking maths quicker
                </Text> 

            <Pressable onPress={ (pressType) =>{
             
                launchCamera(options,setImg);
            } } >
                <Image tintColor='#A9A9A9' style = {styles.cameraButton}  source={require("./images/camera-button.png")}/> 
            </Pressable>
             



            </View>    
        </SafeAreaView>
    )

}


//remember to export this to a different file for a bigger project

const styles = StyleSheet.create({

    desc: {
        color:"#F0FFF0",
        textAlign: 'center',
        alignSelf:'center',

        marginTop:25
    },
    titleText:{
        fontSize:30,
        color:"#F0FFF0",
        fontWeight:"bold",
        alignSelf:'center',

        textAlign: 'center',
        
    },

    background:{
        flex:1,
        backgroundColor: "#06191D"
    },

    cameraButton:{
        width:"90%",
        height:undefined,
        aspectRatio:'1',
        justifyContent: "center",
        alignSelf:'center',

        justifyContent: "center",
        alignItems: "center"
       
    }


})





export default App;