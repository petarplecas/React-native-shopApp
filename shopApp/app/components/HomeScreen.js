import React from 'react';
import { Button, View, FlatList, Text, TouchableOpacity } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from '../menuScreens/Menu';
import drawerStyles from '../assets/css/Main';
import styles from '../assets/css/Main'
import { Header, SearchBar, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import {  } from '../actions/mobileAction';

  class HomeScreen extends React.Component {
    static navigationOptions = {
      header: null,
      // drawerLabel: 'Home'
    };

    closeControlPanel = () => {
      this._drawer.close()
    };

    openControlPanel = () => {
      this._drawer.open()
    };

    _renderItem = ({ item }) => {
      console.log(item)
      return (
          <TouchableOpacity key={item.key}>
            <Text>Name: {item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>model: {item.model}</Text>
          </TouchableOpacity>
      )
    };
  
    render() {
      return (
        <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          content={<Menu navigation={this.props.navigation}
          />}
          tapToClose={true}
          openDrawerOffset={0.35}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          tweenHandler={(ratio) => ({ main: { opacity: (2 - ratio) / 2 } })} >
          <Header
              leftComponent={{ icon: 'bars', color: '#fff', onPress: () => this.openControlPanel(), }}
              
              outerContainerStyles={{
                  backgroundColor: '#de4b39',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 57,
              }}
          />
          
          <View>
            <Button
              onPress={() => this.props.navigation.navigate('Details')}
              title="Go to details"
            />
            <Button
              onPress={() => this.props.navigation.navigate('AddMobile')}
              title="Add mobile"
            />
            <FlatList
              style={styles.listContainer}
              data={this.props.mobiles}
              renderItem={this._renderItem}
            />
          </View>
        </Drawer>
      )
    }
  }

  mapStateToProps = (state) => {
    return {
      mobiles: state.mobileReducer.mobiles
    };
  }

  mapDispatchToProps = (dispatch) => {
    return {}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

//   const styles = StyleSheet.create({
//     listContainer: {
//       width: "100%"
//   }
// });

// centerComponent={
//   <View style={styles.searchHeader}>
//       <SearchBar
//           lightTheme
//           showLoading
//           icon={{ type: 'font-awesome', name: 'search', color: 'white', size: 24 }}
//           containerStyle={styles.searchBarEl}
//           inputStyle={{ backgroundColor: '#e24f2d' }}
//           onChange={(event) => this.applyFilter(event.nativeEvent.text)}
//       />
//   </View>
// }
// rightComponent={<Icon
//   name='filter-variant'
//   type='material-community'
//   color='white'
// />}