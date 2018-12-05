import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import styles from '../assets/css/Main'
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import profile from '../assets/img/Profilna.jpg'
import { connect } from 'react-redux'
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        }
    }

    render() {
        const { loading } = this.state;
        // if (loading) {
        //     return <Text style={{ flex: 1, alignContent: 'center' }}>Loading..</Text>;
        // }
        return (
            <View style={styles.menu} >
                <LinearGradient style={{ height: 100 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['rgb(123,75,26)', 'rgb(110,183,51)']}>
                    <View style={styles.rowProfile}>
                        <Avatar
                            large
                            avatarStyle={styles.profileImage}
                            rounded
                            source={{ uri: "data:image/jpeg;base64,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" }}
                            overlayContainerStyle={{ flex: 1, marginRight: 30 }} /*Some Layout fixes*/
                            imageProps={{ resizeMode: 'cover' }}
                            activeOpacity={0.7}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            {/* <Text style={styles.displayName}>{user.name + ' ' + user.surname}</Text> */}
                            <Text style={{ fontSize: 20, color: 'white' }}>View Profile</Text>
                        </View>
                    </View>
                </LinearGradient>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} >
                    <View style={styles.rowElement}>
                        <Text style={styles.text}>My Home</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')} >
                    <View style={styles.rowElement}>
                        <Text style={styles.text}>Details</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('AddMobile')} >
                    <View style={styles.rowElement}>
                        <Text style={styles.text}>AddMobile</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)

 