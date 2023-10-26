import * as React from "react";
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Screen3 (){
    return(
        <View style={styles.container}>   
            <Image source={require("../Image/bg (3).png")} style={styles.imgsc3}></Image>
            <View style={styles.vt}>
                <Text style={styles.t1}> Pina Mountain </Text>
                <View style={styles.v1}>
                    <Text style={styles.t2}> 15% OFF 1350$ </Text>
                    <Text style={styles.t3}> <del> 449$ </del> </Text>
                </View>
                <Text style={styles.t4}> Description </Text>
                <Text style={styles.t5}> It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc. </Text>
                <View style={styles.v2}>
                    <Image source={require("../Image/bg (3).png")} style={styles.imgheart}></Image>
                    <View style={styles.btn}>
                        <Text style={styles.t6}> Add to card </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    imgsc3:{
        height: '260px',
        width: '260px',
        resizeMode: 'contain',
        marginLeft: 60,
    },
    vt:{
        marginLeft: 10,
    },
    t1:{
        marginTop: 15,
        fontSize: 30,
        fontWeight: 'bold',
    },
    v1:{
        flexDirection:'row',
        marginTop: 10,
    },
    t2:{
        fontSize: 25,
    },
    t3:{
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    t4:{
        marginTop: 25,
        fontSize: 20,
        fontWeight: 'bold',
    },
    t5:{
        fontSize: 18,
        marginTop: 20,
    },
    v2:{
        flexDirection: 'row',
        marginTop: 20,
    },
    imgheart:{
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginTop: 20,
        marginLeft: 20,
    },
    btn:{
        height: 50,
        width: 260,
        backgroundColor: 'red',
        marginLeft: 45,
        marginTop: 15,
        borderRadius: 60,
    },
    t6:{
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
});
export default Screen3;