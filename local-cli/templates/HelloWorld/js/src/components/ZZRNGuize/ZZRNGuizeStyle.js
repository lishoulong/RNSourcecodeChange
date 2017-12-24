import * as StyleSheet from '../../Base/adapterStylesheet';
import {I18nManager} from 'react-native';

const ZZRNGuizeStyle = StyleSheet.create({
    statusBar: {
        display: 'flex',
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D6DAE1',
        ios: {
            marginTop: 20
        }
    },
    arrowWrapper: {
        paddingLeft: 10
    },
    arrowIcon: {
        ios: {
            height: 20,
            width: 18,
            marginVertical: 12,
            resizeMode: 'contain',
            transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
        },
        android: {
            height: 20,
            width: 18,
            resizeMode: 'contain',
            transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
        }
    },
    upTitle: {
        textAlign:'center',
        flex: 1,
        fontSize: 16,
        paddingRight: 28,
        color: '#43474c'
    },
    container: {
        marginLeft: 6,
        marginRight: 6,
        paddingTop: 15,
    },
    plain: {
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 10,
        color: '#43474C',
        lineHeight: 20
    },
    emphsis: {
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
        marginBottom: 8,
        lineHeight: 20
    },
    headerh1: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        marginBottom: 8
    },
    headerh2: {
        color: 'black',
        fontSize: 16,
        marginBottom: 8
    },
    contentList: {
        flexDirection: 'column',
        marginLeft: 5,
    },
    contentItem: {
        fontSize: 14,
        marginLeft: 10,
        marginBottom: 8,
        lineHeight: 17,
        color: '#43474C',
    },
    jumpHref: {
        color: 'blue'
    },
    lastView: {
        marginBottom: 20
    }
})
export default ZZRNGuizeStyle;