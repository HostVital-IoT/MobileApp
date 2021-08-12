import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
    ScrollView,
} from 'react-native'
import Colors from '../../res/Colors'

class itemsItem extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.row}>
                    <Image
                        style={styles.header}
                        source={{ uri: `${item.header_img}` }}
                    />
                        <Image
                            style={styles.profileImage}
                            source={{ uri: `${item.profile_picture}` }}
                        />
                        
                        <View style={styles.userData}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.age}>{item.age}</Text>
                    </View>
                    <Text style={styles.status}>{item.status}</Text>
                    <View style={styles.data}>

                       

                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    content: {
        flex: 1,
        marginTop: 30,
        width: '70%',
        height: 'auto',
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: 60,



    },
    data: {
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',

    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.blackPearl,
    },
    age: {
        fontSize: 28,
        marginLeft: 20,
        color: Colors.zircon,
    },
    status: {
        marginTop: 50,
        fontSize: 22,
        textAlign: 'center',
        color: Colors.zircon,
    },
    profileImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        borderWidth: 3,
        borderColor: Colors.white,
        position: 'absolute',
        top: 70,
        left: '23%',
        marginTop:30,
        
    },
    header: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        resizeMode: 'cover',
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 20,
        color: Colors.blackPearl,
    },
    statusText: {
        fontWeight: '100',
        color: Colors.blackPearl,
        fontWeight: 'bold',
    },
    icons: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    editIcon: {
        height: 22,
        width: 22,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    deleteIcon: {
        marginLeft: 15,
        height: 22,
        width: 22,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    dataColumns: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userData: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'center',
    },
});

export default itemsItem;