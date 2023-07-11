import React, { useEffect, useState } from "react";
import { SafeAreaView,StatusBar,Text,View, StyleSheet, Image } from "react-native";
//import { launchImageLibrary } from "react-native-image-picker";

const App = () =>{






    //my app visuals

    return (
        <SafeAreaView style={styles.background}>
            <StatusBar>
            </StatusBar>            
            <View style= {{marginTop:50}}>



                <Text style= {styles.titleText} >
                    kMarker
                </Text >

                <Text style = { styles.desc}>
                   Designed to make marking kumon maths easier 
                </Text>
                
            </View>    
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({

    desc: {
        color:"#F0FFF0",
        textAlign: 'center',
        marginTop:25
    },
    titleText:{
        fontSize:30,
        color:"#F0FFF0",
        fontWeight:"bold",
        textAlign: 'center',
        
    },

    background:{
        flex:1,
        backgroundColor: "#06191D"
    }


})





export default App;