import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Footer = () => {
    return (
        <View >
            <TextInput style={style.container} placeholder='Type here...'></TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 20,
        width: "90%",
        padding: 20,
        flex: 0,
        flexDirection: "row",
        textAlign: "left",
        backgroundColor: "#ffff",
        borderRadius: 60,
    },
})

export default Footer
