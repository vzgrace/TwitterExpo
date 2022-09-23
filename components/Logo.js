import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class Logo extends React.Component {
    
    render(){
        return (
            <View style={styles.top}>
                <Text style={styles.TwitterText}>
                    Twitter Analysis
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        alignSelf: 'stretch',
        height: 120,
        flexDirection: 'row',
        backgroundColor: '#1DA1F2',
        alignItems: 'center',
        // centers items vertically
        justifyContent: 'center',
        // centers items horizontally
        
    },
    TwitterText: {
        fontFamily: 'Gill Sans',
        color: "white",
        fontSize: 30

    }
});

export default Logo;