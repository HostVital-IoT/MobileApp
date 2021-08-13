import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity,ImageBackground } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import UserSession from '../../libs/sessions';
import Colors from '../../res/Colors';



const imageBackground = {
    uri: 'https://images.pexels.com/photos/3307218/pexels-photo-3307218.jpeg?cs=srgb&dl=pexels-tristan-pokornyi-3307218.jpg&fm=jpg',
};

class Profile extends React.Component {

    state = {
        user: {
            profile: {},
        },
        token: '',
        picture: '',
    }

    componentDidMount = () => {
        this.getUserData();
    };

    getUserData = async () => {
        let user = await UserSession.instance.getUser();
        let token = await UserSession.instance.getToken(user.username);
        this.setState({ user: user, token: token });
    };
    //Blob -> Binary large object
    handleChooseProfileImage = () => {
        const options = {
            includeBase64: false,
            mediaType: 'photo',
        };
        launchImageLibrary(options, response => {
            if (!response.didCancel) {
                let photo = response.assets[0].uri;
                this.setState({ picture: photo });
                this.editProfilePicture();
            }
        });
    };

    editProfilePicture = async () => {
        const { user, token, picture } = this.state;
        let response = await UserSession.instance.editProfile(
            user.id,
            token,
            picture,
        );
        console.log(response);
        this.setState({ user: response });
    };

    render() {
        const { user, picture } = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground source={imageBackground} style={styles.image}>
            
                    
        
                <Image
                    style={styles.profileImage}
                    source={{ uri: picture || `${user.profile.profile_picture}` }}
                />
                <Image
					source= {require('../../assets/logo.png')}
					style={styles.logo}
					/>
                <TouchableOpacity
                    style={styles.profileEdit}
                    onPress={this.handleChooseProfileImage}
                >
                    <Image
                        style={styles.camera}
                        source={require('../../assets/edit_icon.png')}
                    />
                </TouchableOpacity>
                <View style={styles.userInfo}>
                    <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
                    <Text style={styles.age}>{user.profile.age}</Text>
                </View>
                <Text style={styles.status}>{user.profile.status}</Text>
                <View style={styles.data}>
                    
                </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        height: '40%',
        backgroundColor: Colors.blue,
    },
    logo:{
        width: 100,
        height:100,
        marginRight:320,
        marginVertical:10,
        top:30,
        position: 'absolute',
   
    },
    profileImage: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: Colors.white,
        position: 'absolute',
        top: 170,   
        left: '26%',
    },
    profileEdit: {
        width: 45,
        height: 45,
        padding: 5,
        borderRadius: 20,
        backgroundColor: Colors.greenp,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 330,
        left: 230,
    },
    camera: {
        flex: 2,
        width: '100%',
        height: '100%',

    },
    userInfo: {
        flexDirection: 'row',
        marginTop: 150,
        justifyContent: 'center',
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.white,
    },
    status: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        color: Colors.white,
        fontWeight:'bold',
    },
    data: {
        padding: 20,
        marginTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    level: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 28,
        top: 60,

    },
    level_t: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 20,
        top: 40,

    },
    title: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 28,
        top: 200,
        right: 95,
        width: 200,
        backgroundColor: Colors.blackPearl,
        color: Colors.white,
        borderRadius: 30,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default Profile;