import React from 'react' 
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = <Text style={styles.subHeader}>My name is Dylan</Text>

    return (
    <View>
        <Text style={styles.Header}>Getting started with React Native</Text>
        {name}
    </View>
    )
}

const styles = StyleSheet.create({
    Header:{
        fontSize: 45
    },
    subHeader:{
        fontSize: 20
    }
})

export default ComponentsScreen