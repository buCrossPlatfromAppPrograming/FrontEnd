import React from "react";
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import EasyFirst from "./screens/easy/EasyFirst";
import NomalFirst from "./screens/normal/NormalFirst";
import HardFirst from "./screens/hard/HardFirst";


function QuizMain(){
    return (
        <View style={styles.container}>
            {/* <EasyFirst/> */}
            {/* <NomalFirst /> */}
            <HardFirst />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default QuizMain;