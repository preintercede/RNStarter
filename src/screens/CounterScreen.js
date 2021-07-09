import React, {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CounterScreen = () => {
    
    const [counter, setCounter] = useState(0)

    return ( 
    <View>
        <Button title="increase" onPress={()=> {
            setCounter(counter+1)
        }}/>
        <Button title="decrease" onPress={()=> {
            setCounter(counter-1)
        }}/>
        <Text>CurrentCount: {counter}</Text>
    </View>
    )
}

const styles = StyleSheet.create({

})

export default CounterScreen