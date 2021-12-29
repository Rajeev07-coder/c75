import React from 'react';
import { Text , View , StyleSheets , Images , TextInput, TouchableOpacity, KeyboardAvoidingView , Alert} from 'react-native';
import Firebase from 'firebase';

export default class LoginScreen extends React.Component{
constructor() {
  super ();
  this.state = {
      emailId : '',
      password : '',
  }  
}
login = async(email,password) => {
    if(email && password){
        try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
    if (response){
        this.props.navigation.navigate ('transaction')
    }        
    }

    catch (error){
        switch(error.code){
            case 'user-not-found':
                Alert.alert ("User Does Not Exist")
                console.log ("does not exist") 
                break

                case 'invalid-email/password':
                Alert.alert ("Incorrect Email||Paaword")
                console.log ("invalid")
                break
        }
    }
}


else {
    Alert.alert ('Enter email&&password')
}
}
