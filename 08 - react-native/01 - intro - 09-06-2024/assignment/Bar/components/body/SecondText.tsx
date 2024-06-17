import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Body() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <Image
                style={styles.image}
                source={require('@/assets/imgs/background-png-13193.png')}
            />
            <View style={styles.sentTextContainer}>
                <Text>1:32 PM</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: '#FFFF',
        width: '90%',
        padding: 20,
        alignItems: 'flex-start',
        borderRadius: 20,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 40,
        marginTop: 10,
    },
    sentTextContainer: {
        alignSelf: 'flex-end',
        marginTop: 10,
    },

    text: {
        fontSize: 16
    }

});

export default Body;
