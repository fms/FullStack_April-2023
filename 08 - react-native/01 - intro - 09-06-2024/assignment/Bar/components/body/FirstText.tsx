import { StyleSheet, View, Text } from 'react-native'
import React, { Component } from 'react'

export class Body2 extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Lorem ipsum dolor sit amet consectetur</Text>
                <Text>1:32 PM</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 30,
        backgroundColor: "#7B94F9",
        width: "90%",
        padding: 20,
        flex: 0,
        gap: 30,
        alignItems: "flex-end",
        borderRadius: 20,
    },
    text: {
        fontSize: 16
    }
})

export default Body2