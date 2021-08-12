import React from 'react'
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
} from 'react-native'
import Colors from '../../res/Colors'
import Loader from '../../Generics/Loader'
import styles from './styles'
import UserSession from '../../libs/sessions';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'


const imageBackground = {
    uri: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

const logo = {
	uri: 'https://res.cloudinary.com/dvabvj55g/image/upload/v1627926350/media/HV_vxhxzk.png'
};

class Login extends React.Component {

    state = {
        loading: false,
        error: null,
        user: undefined,
        isPasswordVisible: true,
        form: {},
    };

    componentDidMount = () => {
        this.deleteTokens();
    };

    deleteTokens = async () => {
        await UserSession.instance.logout();
    };

    handleSubmit = async () => {
        try {
            this.setState({ loading: true, error: null, user: undefined });
            let response = await UserSession.instance.login(this.state.form);
            if (typeof response == 'object') {
                console.log(response);
                if (response['405']) {
                    var message = 'Account is not verified';
                } else {
                    var message = 'Invalid Username or Password. please try again.';
                }
                this.setState({ loading: false, error: message, user: undefined });
            } else {
                this.setState({ loading: false, error: null, user: response });
            }
        } catch (err) {
            this.setState({ loading: false, error: err });
        }
        if (this.state.user) {
            this.props.navigation.replace('BadgesTabNavigator');
        }
    };

    toggleIsPasswordVisible = () => {
        if (this.state.isPasswordVisible) {
            this.setState({ isPasswordVisible: false });
        } else {
            this.setState({ isPasswordVisible: true });
        }
    };

    handleSignUp = async () => {
        this.props.navigation.navigate("Signup");
    }

    render() {
		const { isPasswordVisible, loading, error } = this.state;
		return (
			<View style={styles.container}>			
				<StatusBar backgroundColor="transparent" translucent={true} />
				<ImageBackground source={imageBackground} style={styles.image}>
				<Image
					source= {require('../../assets/logo.png')}
					style={styles.logo}
					/>
					<View style={styles.layerColor}>
					
						<View style={styles.form}>						
							<Text style={styles.title}>Login</Text>
							{error ? (
								<View style={styles.errorContainer}>
									<Text style={styles.errorMsg}>
										{'Invalid Username or Password. Please try again.'}
									</Text>
								</View>
							) : null}
							<View style={styles.formgroup}>
							
								<TextInput	
									style={styles.inputname}
									placeholder={'Username'}
									keyboardAppearance="dark"
									onChangeText={text => {
										this.setState(prevState => {
											let form = Object.assign({}, prevState.form);
											form.username = text;
											return { form }
										});
									}}
								/>
								
								<View style={styles.password}>
									<TextInput
										style={styles.inputPassword}
										secureTextEntry={isPasswordVisible}
										placeholder={'Password'} 
										keyboardAppearance="dark"
										onChangeText={text => {
											this.setState(prevState => {
												let form = Object.assign({}, prevState.form);
												form.password = text;
												return { form }
											});
										}}
									/>
									<TouchableOpacity onPress={this.toggleIsPasswordVisible}>
										<Image
											style={{ marginRight: 10 }}
											source={
												isPasswordVisible
													? require('../../assets/show.png')
													: require('../../assets/hide.png')
											}
										/>
										
									</TouchableOpacity>
								</View>
							</View>
							<TouchableOpacity
								style={styles.submit}
								onPress={this.handleSubmit}>
								<Text style={styles.submitText}>Login</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}



export default Login;