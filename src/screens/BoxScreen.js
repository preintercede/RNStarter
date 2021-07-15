import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View  style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle:{
        borderWidth:3,
        borderColor: 'black',
        // alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200,
        // alignItems: 'flex-end'
    },
    viewOneStyle:{
        height:50,
        width:50,
        backgroundColor:'red'

    },
    viewTwoStyle:{
        height:50,
        width:50,
        backgroundColor: 'green',
        top:50
    },
    viewThreeStyle:{
        height:50,
        width:50,
        backgroundColor: 'purple'
    }

})

export default BoxScreen