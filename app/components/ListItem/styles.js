// import ListItem from './ListItem';
// import styles from './styles';

// export {ListItem, styles};

import {StyleSheet} from 'react-native';

import colors from '../../config/colors';
export const CHEVRON_SIZE = 25;

export default StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.primaryText,
    },
    email: {
        fontSize: 15,
        color: colors.subtleText,
    },
    chevronContainer: {
        flex: 1,
    },
    chevron: {
        alignSelf: 'flex-end',
    },
});
