import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window")

const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height

export const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
};
export default StyleSheet.create({
    loginBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 170
    },
    mainContainer: {
        backgroundColor: '#FFF',
        flex: 1
    },
    inputFields: {
        marginTop: 25,
        width: 290,
        paddingLeft: 15,
        height: 40,
        borderColor: "#d3d3d3",
        borderWidth: 1,
        borderRadius: 10
    },
    inputFieldsRow: {
        marginTop: 10,
        width: 130,
        height: 40,
        borderColor: "#d3d3d3",
        borderWidth: 1,
        borderRadius: 10
    },
    inputFieldsForm: {
        width: 290,
        paddingLeft: 15,
        height: 40,
        borderColor: "#d3d3d3",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    buttonLogin: {
        backgroundColor: '#e24f2d',
        borderRadius: 5,
        width: 290,
        height: 40,
        paddingTop: 20,
        marginTop: 20
    },
    buttonRegister: {
        backgroundColor: 'white',
        borderColor: '#e24f2d',
        borderWidth: 1,
        borderRadius: 5,
        width: 290,
        height: 40,
        paddingTop: 20,
        marginTop: 10
    },
    buttonText: {
        color: '#e24f2d',
        fontWeight: 'bold'
    },
    button: {
        height: 50,
        width: 150,
        backgroundColor: '#e24f2d',
        top: SCREEN_HEIGHT / 1.3,
        left: SCREEN_WIDTH / 3.2,
        borderRadius: 5,
        justifyContent: 'center',
    },
    buttonTextLocation: {
        fontSize: 17,
        color: '#FFF',
        alignSelf: 'center',
    },
    photo: {
        alignSelf: 'center',
        height: 100,
        width: 80,
    },
    forgotPassword: {
        fontSize: 15,
        color: '#999',
        marginLeft: 150,
    },
    menu: {
        flex: 1,
        width: 230,
        height: SCREEN_HEIGHT,
        backgroundColor: 'white',
    },
    rowProfile: {
        flexDirection: 'row',
        padding: 5,
        paddingLeft: 25,
        paddingBottom: 0,
        marginBottom: 0,
        paddingRight: 30,
    },
    displayName: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
        marginRight: 15,
        marginTop: 20
    },
    searchHeader: {
        flex: 1,
        backgroundColor: '#de2b38',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBarEl: {
        width: SCREEN_WIDTH - 90,
        marginLeft: 9,
        backgroundColor: '#de2b38',
    },
    tabBar: {
        backgroundColor: '#de2b38',
        position: 'absolute',
        height: 40,
        marginTop: -2,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    redSquareMP: {
        marginTop: 15,
        height: 120,
        width: 150,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    columnMP: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'flex-start'
    },
    map: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        position: 'absolute',
    },
    mapList: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 38,
        position: 'absolute',
    },
    modal: {
        top: 100,
        position: 'absolute',
        width: SCREEN_WIDTH,
        borderRadius: 10,
        height: 180,
        backgroundColor: 'white',
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    mapForm: {
        left: 0,
        right: 0,
        position: 'relative',
        top: 0,
        bottom: 0,
        height: 150
    },
    rowElement: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingBottom: 7,
        paddingTop: 7,
    },
    text: {
        fontSize: 18,
        color: '#000',
        marginLeft: 12
    },
    contentContainer: {
        marginTop: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flex: 1
    },
    myOfferContainer: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flex: 1
    },
    divider: {
        marginTop: 10,
        marginBottom: 20,
    },

})