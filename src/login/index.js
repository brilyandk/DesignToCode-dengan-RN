import React, { Component } from 'react'
import { Text, Image, View } from 'react-native'
import { Button, Input, Item } from 'native-base'
import styles from './styles'

export class Login extends Component {
  render() {
    return (
    <View style={{height:646, backgroundColor:'#f6f6f6'}} >
     <Image style={styles.gambar} source={require ('../assets/enter.png')}/>
       <Text style={styles.teks}>
                Login App
          </Text>
    {/* <Image style={styles.bunder} source={require ('../assets/bunder.png')}/> */}
        <View style={styles.mainbody}>
          <Text style={styles.label}>
            Username
          </Text>
          <Item reguler style={styles.input}>
                <Input autoCapitalize="none" style={{color:"#212121"}} />
          </Item>

           <Text style={styles.label}>
            Password
          </Text>
          <Item reguler style={styles.input}>
                <Input secureTextEntry={true} style={{color:"#212121"}} />
          </Item>
        </View>
    </View>
    )
  }
}

export default Login


