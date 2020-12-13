import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Platform,
    Alert
    
} from 'react-native';
import {Input, Card, Button,Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';



class Tickets extends Component {



    static navigationOptions = {
        title: 'Tickets'
    }
 
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            nameerror: '',
            mailerror: '',
            mail: '',
            password: '',
            number: '',
            age: '',
            location:'',
            price:'',
            
        }
    }
    
    submit()
    {
        console.warn(this.state)
    }
    namevalidator()
    {
        if(this.state.name=="")
        {
            this.setState({nameerror:"Name field can't be empty"})
        }
        else{
            let rjx=/^[a-zA-z]+$/;
            let isValid=rjx.test(this.state.name)
            if(!isValid){
                this.setState({nameerror:"Name field must be alphabetic"})
            }
            else{
                this.setState({nameerror:""})
            }
            
        }
    }
    mailvalidator(){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        let isValid=reg.test(this.state.mail)
        if(!isValid){
            this.setState({mailerror:"Invalid Email"})
        }
        else{
            this.setState({mailerror:""})
        }
    }

    render() {
        return(
            <ScrollView>

            <Header
                outerContainerStyles={styles.topMenu}
                centerComponent={{text: 'Guide', style: {color: '#fff', fontWeight: 'bold', fontSize: 18}}}
             />

                <Text style={styles.heading}>
                    Register as Guide
                </Text>
                <ScrollView>
                <Card>
                <Input
                    placeholder="Enter Your Name"
                    onChangeText={(name) => this.setState({name})}
                    onBlur={()=>this.namevalidator()}
                    value={this.state.name}
                    containerStyle={styles.formInput}
                    />
                <Text style={{color:'red', marginLeft:25}}>{this.state.nameerror}</Text>

                <Input
                    placeholder="Enter Your Mail"
                    onChangeText={(mail) => this.setState({mail})}
                    value={this.state.mail}
                    onBlur={()=>this.mailvalidator()}
                    containerStyle={styles.formInput}
                    />
                <Text style={{color:'red', marginLeft:25}}>{this.state.mailerror}</Text>

                <Input
                    placeholder="Enter Your Password"
                    secureTextEntry= {true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    containerStyle={styles.formInput}
                    />

                <Input
                    placeholder="Enter Your Phone Number"
                    keyboardType='numeric'
                    onChangeText={(number) => this.setState({number})}
                    value={this.state.number}
                    containerStyle={styles.formInput}
                    />

                <Input
                    placeholder="Enter Your Age"
                    keyboardType='numeric'
                    onChangeText={(age) => this.setState({age})}
                    value={this.state.age}
                    containerStyle={styles.formInput}
                    />

                <Input
                    placeholder="Enter Your Location"
                    onChangeText={(location) => this.setState({location})}
                    value={this.state.location}
                    containerStyle={styles.formInput}
                    />

                <Input
                    placeholder="Enter Your Price"
                    keyboardType='numeric'
                    onChangeText={(price) => this.setState({price})}
                    value={this.state.price}
                    containerStyle={styles.formInput}
                    />

                
                <Button
                   title= "Submit"
                   onPress={()=>{this.submit()}}
                   />


                </Card>
                </ScrollView>
        
            </ScrollView>
        );
    }



}



const styles = StyleSheet.create({
    formInput: {
        margin: 20
    },
    topMenu: {
        height: 53,
        backgroundColor: '#64b5f6',
      },
      heading: {
        fontFamily: 'serif',
        fontSize: 25,
        textAlign: 'center',
        color: '#EB144C'

    }
});
export default Tickets;
