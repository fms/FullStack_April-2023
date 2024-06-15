import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

function Header() {
    return (
        <>
            <View style={style.container}>

                <Image
                    style={style.personImage}
                    source={require('@/assets/imgs/human-icon-png-1904.png')} />
                <View>
                    <Text>
                        Jacob Beaulue
                    </Text>
                    <Text style={style.onlineText}>
                        Online
                    </Text>
                </View>
                <Image
                    style={style.phoneImage}
                    source={require('@/assets/imgs/phone-1.png')} />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 10,
        width: "100%",
        padding: 45,
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#ffff",
        borderRadius: 40,
    },

    phoneImage: {
        width: 23,
        height: 23
    },
    personImage: {
        width: 23,
        height: 23
    },
    onlineText: {
        color: "yellowgreen"
    }
})

export default Header