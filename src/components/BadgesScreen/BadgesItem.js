import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Pressable,
    ScrollView,
    ImageBackground,
} from 'react-native'
import Colors from '../../res/Colors'
import redimage from '../../assets/red.png'
import yellowimage from '../../assets/yellow.png'
import greenimage from '../../assets/green.png'

const imageBackground = {
    uri: 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};


class itemsItem extends React.Component {
    renderStatusColor() {
        const { item } = this.props;
        if(item.status == 'Good'){
        return <Image style={styles.status} source={greenimage}/>;
        }else if(item.status == 'Stable'){
        return <Image style={styles.status} source={yellowimage}/>;
        }else if('Bad'){
            return <Image style={styles.status} source={redimage}/>;
        }
    }
    
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
                     {this.renderStatusColor()}
                     <View style={styles.icons}>
                    {this.props.onEdit ? (
                        <Pressable onPress={this.props.onEdit}>
                            <Image
                                style={styles.editIcon}
                                source={require('../../assets/edit_icon.png')}
                            />
                        </Pressable>
                    ) : null}
                    {this.props.onDelete ? (
                        <Pressable onPress={this.props.onDelete}>
                            <Image
                                style={styles.deleteIcon}
                                source={require('../../assets/delete_icon.png')}
                            />
                        </Pressable>
                    ) : null}
                </View>

                        <View style={styles.userData}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.age}>{item.age}</Text>

                    </View>
                        <Text style={styles.statustext}>{item.status}</Text>
                    <View style={styles.data}></View>
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
        marginTop: 15,
        width: 35,
        height: 35,
        marginLeft: 160,
        borderRadius:30,
        borderWidth: 3,
        borderColor: Colors.white,

    },
    statustext: {
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
        height: 40,
        width: 40,
        resizeMode: 'cover',
        justifyContent: 'center',
        marginRight:165,
        
    },
    deleteIcon: {
        marginLeft: 1,
        height: 40,
        width: 40,
        resizeMode: 'cover',
        justifyContent: 'center',
        marginRight:14,
        
        
    },
    dataColumns: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userData: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
    },
  
});

export default itemsItem;