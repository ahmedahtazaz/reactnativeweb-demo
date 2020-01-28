import React, { Component } from 'react';
import { Text, View, Image, TextInput, Button } from 'react-native';

export default class App extends Component {

    state = {
      email: '',
      password: ''
  }
  handleEmail = (text) => {
      this.setState({ email: text })
  }
  handlePassword = (text) => {
      this.setState({ password: text })
  }

  render() {
    const logo = require('./logo.png');
    return (


        <View style={{backgroundColor: 'black', width :'100%', height : '100%' }} >
          <View style = {{alignItems : "center", justifyContent : "center", flexDirection : "column"}}>
            <Image source={logo} style={{width: 192, height: 192}}/>

            <Text style = {{color :'white', fontSize : 30}} >Login Screen </Text>
          </View>

      
          <View style={{flex : 2, flexDirection : 'column', top : 40, left : 30}}>
            <TextInput style={{height : 40, width : '85%' , fontSize : 15, color :'white', borderColor : 'white', borderWidth : 1}} placeholder = "Enter Email" placeholderTextColor = 'white' onChangeText = {this.handleEmail}/>

            <TextInput style={{height : 40,top :15, width : '85%' , fontSize : 15, color :'white', borderColor : 'white', borderWidth : 1}} placeholder = "Enter Password" placeholderTextColor = 'white' onChangeText = {this.handlePassword}/>

            <Button
            onPress={this._postData}
            title="Login"
          />
          
          </View>


          

          
        </View>

      
    );
  }

  _postData = async() =>{

    let formData = new FormData();
    formData.append('Cache-Control', 'no-cache');
    formData.append('OAUTHCONSUMERKEY', 'Ndf4gF8f42');
    formData.append('OAUTHNONCE', 'PpLaR5bAbzB2NTGaHcU38hutQ1M');
    formData.append('OAUTHTIMESTAMP', Date.now());
    formData.append('OAUTHSIGNATURE', 'PpLaR5bAbzB2NTGaHcU38hutQ1M%3D');
    formData.append('LANGUAGE_ID', '101');
    formData.append('PERSIANAPP', '1');
    formData.append('GUEST_USER', '0');
    formData.append('USER_AGENT', 'JADOOTV_MOBILE_ANDROID_PERSIAN');
    formData.append('FARSI_TRANSLATION_REQUIRED', '1');

    console.log('DeiveId = ');
    console.log(formData);

    fetch('https://applb.jemtv.com/mobile_apps_login/app_oauth_login/index.php/login/auth/PK/dc56e463790022ff', {
      method:'POST',
      body:formData
    }).then((responseJson) => {
      //this.state.loginResponse = responseJson;
      console.log(responseJson);
    }).catch(error => {
      console.error(error);
    });
  }
}


