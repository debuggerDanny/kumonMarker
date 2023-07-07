import React from "react";
import { SafeAreaView,StatusBar,Text,View, StyleSheet } from "react-native";

const App = () =>{

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
        textAlign: 'center',
        marginTop:25
    },
    titleText:{
        fontSize:30,
        fontWeight:"bold",
        textAlign: 'center',
        
    },

    background:{
        flex:1,
        backgroundColor: "#06191D"
    }


})





export default App;