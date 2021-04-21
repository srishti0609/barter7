import 
{
    Card, Icon,View,TouchableOpacity,Text
} from 'react-native';
import * as React from 'react';
import firebase from 'firebase';

import db from '../config';

export default class UserDetailsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            userId: firebase.auth().currentUser.email;
            receiverId: this.props.navigation.getParam('details')["user_id"],
            requestId:this.props.navigation.navigate.getParam('details')["request_id"],
            item: this.props.navigation.getParam('details')["item"],
            description: this.props.navigation.getParam('details')["description"],
            receiverName:'',
            receiverContact:'',
            receiverAddress:'',
            receiverRequestDocId:''

        }
    }
    getUserDetails(){
       
        db.collection('user').where('email_id','==',this.state.receiverId).get().then
        (snapshot=>{
            snapshot.forEach(doc=>{
                
                this.setState({
                    receiverName: doc.data().first_name,
                    receiverContact: doc.data().contact,
                    receiverAddredd: doc.data().address,
                })
            })
        });

        db.collection('exchange_request').where('request_id','==',this.state.receiverId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                this.setState({receiverRequestDocId:doc_id})
            })
        })
    }

updateBookStatus=()=>{
    db.collection('all_exchange').add({
        item :this.state.item,
        request_id :this.state.requestId,
        requested_by :this.state.receiverName,
        donor_id :this.state.uderId,
        request_status: "Barter interested"
    })
}

render(){
    return(
    
        <Card
            title={"Item Information"}
            titleStyle= {{fontSize : 20}}
          >
              
          <Card >
            <Text style={{fontWeight:'bold'}}>Name : {this.state.itemName}</Text>
          </Card>
          <Card>
            <Text style={{fontWeight:'bold'}}>Reason : {this.state.description}</Text>
          </Card>
        </Card>
        </Card>
     
      <View style={{flex:0.3}}>
        <Card
          title={"receiver Information"}
          titleStyle= {{fontSize : 20}}
          >
              </Card>
          <Card>
            <Text style={{fontWeight:'bold'}}>Name: {this.state.receiverName}</Text>
          </Card>
          <Card>
            <Text style={{fontWeight:'bold'}}>Contact: {this.state.receiverContact}</Text>
          </Card>
          <Card>
            <Text style={{fontWeight:'bold'}}>Address: {this.state.receiverAddress}</Text>
          </Card>
          </Card>
          </Card>
        
      
      <View style={styles.buttonContainer}>
        {
          this.state.receiverId !== this.state.userId
          ?(
            <TouchableOpacity
                style={styles.button}
                onPress={()=>{
                  this.updateBarterStatus()
              
                  this.props.navigation.navigate('MyBarters')
                }}>
              <Text>I want to Exchange</Text>
            </TouchableOpacity>
          )
          : null
            }
      </View>
}
}