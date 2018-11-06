import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        height: 75,
        flexDirection: 'row',
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    listItemImage: {
        width: '100%',
        height: '100%',
    },
    listItemLeft: {
        flex: 1
    },
    listItemRight: {
        paddingLeft: 10,
        flex: 3,
        justifyContent: 'center'
    },
    input: {
        width: '60%',
        height:50,
        color: 'lightblue',
        fontSize: 20,
        marginLeft: 15,
        marginTop:11,
        borderRadius: 10,
        fontWeight: 'bold',
        borderWidth: 0.3,
        borderColor: 'black',
    },
    searchButton: {
        height:50
    }
});

export default styles;