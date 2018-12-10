import React from 'react';
import { FlatList, Text, TouchableOpacity, ScrollView } from 'react-native';
import Drawer from 'react-native-drawer';
import Menu from '../menuScreens/Menu';
import drawerStyles from '../assets/css/Main';
import styles from '../assets/css/Main'
import { Header } from 'react-native-elements';
import TabNavigator from 'react-native-tab-navigator';
import { connect } from 'react-redux';
import { getMobiles } from '../actions/mobileAction';

  class HomeScreen extends React.Component {
    static navigationOptions = {
      header: null,
      // drawerLabel: 'Home'
    };

    constructor(props) {
      super(props);
      this.state = {
        selectedTab: 'list',
    };

    }
    closeControlPanel = () => {
      this._drawer.close()
    };

    openControlPanel = () => {
      this._drawer.open()
    };

    _renderItem = ({ item }) => {
      return (
          <TouchableOpacity 
            style={{marginBottom: 5}}
            key={item.key} 
            onPress={() => (
              this.props.navigation.push('Details', {
                mobile: item
                })
              )
            }
            title="Go to details"
          >
            <Text>Name: {item.name}</Text>
            <Text>Description: {item.description}</Text>
            <Text>model: {item.model}</Text>
          </TouchableOpacity>
      )
    };
  
    render() {
      this.props.onLoadMobiles();
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
              leftComponent={{ icon: 'menu', color: '#fff', size: 30, onPress: () => this.openControlPanel(), }}
              rightComponent={{ icon: 'add-circle', color: '#fff', size: 30, onPress: () => this.props.navigation.navigate('AddMobile') }}
              
              outerContainerStyles={{
                  backgroundColor: 'rgb(100,130,44)',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 57,
              }}
          />
          <TabNavigator tabBarStyle={styles.tabBar}
            style={{ marginBottom: -50 }}>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'list'}
                tabStyle={{ borderBottomWidth: this.state.selectedTab === 'list' ? 1 : 0, borderBottomColor: this.state.selectedTab === 'list' ? "white" : '#de4b39' }}
                title="List of mobiles"
                selectedTitleStyle={{ color: '#fff'}}
                titleStyle={{ color: '#fff', fontSize: 16, justifyContent: 'center' }}
                onPress={() => this.setState({ selectedTab: 'list' })}>
                <ScrollView style={styles.mainContainer}>
                  <FlatList
                    style={styles.listContainer}
                    data={this.props.mobiles}
                    renderItem={this._renderItem}
                  />
                </ScrollView>
            </TabNavigator.Item>
          </TabNavigator>
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
    return {
      onLoadMobiles: () => dispatch(getMobiles())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


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