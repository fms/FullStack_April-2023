import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.chatScreen}>
      <ThemedView style={styles.top}>
      <Image  style={styles.profilePic} source={{uri:'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg'}}/>
        <ThemedText style={styles.contactName}>
          Jacob Beaulieu
        </ThemedText>
        <ThemedText style={styles.status}>
          Online
        </ThemedText>
      <Image  style={styles.callIcon} source={{uri:'https://i.pinimg.com/736x/74/3f/b2/743fb256c25aa75c04852b1f257674fe.jpg'}}/>
      </ThemedView>
      <ThemedView style={styles.messageBox}>
        <ThemedText style={styles.message}>
        Hi, you promised to send me a photo
        </ThemedText>
        <ThemedText style={styles.time}>
        1:32 PM
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.messageBoxAnswer}>
        <ThemedText style={styles.messageAnswer}>
        Hi, I'm sorry, I forgot. But it was
        worth the wait. Ipromise.
        </ThemedText>
        <Image  style={styles.answerPic} source={{uri:'https://i.pinimg.com/736x/85/f9/c4/85f9c445075a32a9142030bc0c1c8395.jpg'}}/>
        <ThemedText style={styles.timeAnswer}>
        2:18 PM
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.input}>
        <ThemedText style={styles.placeHolder}>
          Type here...
        </ThemedText>
      </ThemedView>
    </ThemedView>
    // </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  chatScreen: {
    backgroundColor: '#F0F0F0',
    height: '100%',
    width: '100%'
  },
  top: {
    backgroundColor: 'white',
    width: '100%',
    height: '20%',
    borderRadius: 40
  },
  contactName: {
    marginTop: 75,
    marginLeft: 95,
    fontWeight: 500,
    fontSize: 20,
    position: 'absolute',
    color: 'black'
  },
  status: {
    marginTop: 95,
    marginLeft: 95,
    color: '#00AD4B'
  },
  profilePic:{
    position: 'absolute',
    height:'35%',
    width:'15%',
    marginTop:67,
    marginLeft:30,
    borderRadius:50
  },
  callIcon:{
    position: 'absolute',
    height:'25%',
    width:'10%',
    marginTop:77,
    marginLeft:335,
    borderRadius:10
  },
  messageBox:{
    backgroundColor: '#5E6EFF',
    height: 80,
    width: 300,
    borderRadius:20,
    borderBottomRightRadius: 0,
    margin:100,
    marginTop:40,
  },
  message:{
    color:'white',
    margin:24,
    
  },
  time:{
    position: 'absolute',
    marginLeft:220,
    marginTop:45,
    fontSize:11
  },
  messageBoxAnswer:{
    backgroundColor: 'white',
    height: 380,
    width: 320,
    borderRadius:20,
    borderTopLeftRadius: 0,
    marginTop:-60,
  },
  messageAnswer:{
    color:'black',
    margin:24,
    
  },
  timeAnswer:{
    marginLeft:230,
    marginTop:0,
    fontSize:11,
    color:'#787878',
  },
  answerPic:{
    height: '60%',
    width:'70%',
    borderRadius:10,
    marginLeft: 45,
  },
  input:{
    width: '90%',
    backgroundColor: 'white',
    height: '8%',
    marginLeft: 20,
    marginTop: 50,
    borderRadius:30
  },
  placeHolder:{
    color:'#787878',
    margin:18
  }
});
