import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    Image,
    StatusBar,
} from 'react-native'
import Colors from '../../res/Colors'
import Loader from '../../Generics/Loader';
import UserSession from '../../libs/sessions';
import styles from './sstyle'

const imageBackground = {
    uri: 'https://images.pexels.com/photos/4047184/pexels-photo-4047184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

class Signup extends React.Component {
    state = {
        loading: false,
        errors: [],
        user: undefined,
        IsPasswordVisible: true,
        isPasswordConfVisible: true,
        form: {},
    };


    handleSubmit = async () => {
        try {
            this.setState({ loading: true, user: undefined });
            let response = await UserSession.instance.signup(this.state.form);
            if (typeof response == 'object') {
                let errors = [];
                let cont = 0;

                for (let error in response) {
                    let key = error;
                    if (error == 'non_field_errors') {
                        error = 'password';
                    }

                    errors.push(
                        <View key={cont}>
                            <Text>{`${error} : ${response[key][0]}`}</Text>
                        </View>,
                    );
                    cont++;
                }
                this.setState({
                    loading: false,
                    user: undefined,
                    errors: errors,
                });
            } else {
                this.setState({
                    loading: false,
                    user: response,
                    errors: [],
                });
                if (this.state.user) {
                    this.props.navigation.navigate('Login');
                }
            }
        } catch (err) {
            console.log('Sign up err', err);
            throw Error(err);
        }
    };

    ToggleIsPasswordVisible = () => {
        if (this.state.IsPasswordVisible) {
            this.setState({ IsPasswordVisible: false });
        } else {
            this.setState({ IsPasswordVisible: true });
        }
    };

    ToggleIsPasswordConfVisible = () => {
        if (this.state.isPasswordConfVisible) {
            this.setState({ isPasswordConfVisible: false });
        } else {
            this.setState({ isPasswordConfVisible: true });
        }
    };

    render() {
        const { IsPasswordVisible, isPasswordConfVisible, loading, errors } = this.state;
        if (loading == true) {
            <Loader />
        }
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={imageBackground} style={styles.image}>
                    <View style={styles.layerColor}>
                        <View style={styles.signupform}>
                            <View style={styles.form_s}>
                                <Text style={styles.signup}>Sign Up</Text>
                                {errors ? (
                                    <View style={styles.errorContainer}>{errors}</View>
                                ) : null}
                                <Text style={styles.inputText}>Username</Text>
                                <TextInput
                                    style={styles.password}
                                    keyboardAppearance="dark"
                                    onChangeText={text => {
                                        this.setState(prevState => {
                                            let form = Object.assign({}, prevState.form);
                                            form.username = text;
                                            return { form };
                                        });
                                    }}
                                />
                                <Text style={styles.inputText}>Email</Text>
                                <TextInput
                                    style={styles.password}

                                    keyboardType="email-address"
                                    keyboardAppearance="dark"
                                    onChangeText={text => {
                                        this.setState(prevState => {
                                            let form = Object.assign({}, prevState.form);
                                            form.email = text;
                                            return { form };
                                        });
                                    }}
                                />
                                <Text style={styles.inputText}>Password</Text>
                                <View style={styles.password}>
                                    <TextInput style={styles.inputs}
                                        secureTextEntry={IsPasswordVisible}

                                        keyboardAppearance="dark"
                                        onChangeText={text => {
                                            this.setState(prevState => {
                                                let form = Object.assign({}, prevState.form);
                                                form.password = text;
                                                return { form };
                                            });
                                        }}
                                    />
                                    <TouchableOpacity onPress={this.ToggleIsPasswordVisible}>
                                        <Image
                                            style={{ marginRight: 10 }}
                                            source={
                                                IsPasswordVisible
                                                    ? require('../../assets/show.png')
                                                    : require('../../assets/hide.png')
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.inputText}>Password Confirmation</Text>
                                <View style={styles.password}>
                                    <TextInput style={styles.inputs}
                                        secureTextEntry={isPasswordConfVisible}
                                        keyboardAppearance="dark"
                                        onChangeText={text => {
                                            this.setState(prevState => {
                                                let form = Object.assign({}, prevState.form);
                                                form.password_confirmation = text;
                                                return { form };
                                            });
                                        }}
                                    />
                                    <TouchableOpacity onPress={this.ToggleIsPasswordConfVisible}>
                                        <Image
                                            style={{ marginRight: 10 }}
                                            source={
                                                isPasswordConfVisible
                                                    ? require('../../assets/show.png')
                                                    : require('../../assets/hide.png')
                                            }
                                        />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}



export default Signup;