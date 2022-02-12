import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

function DetailsScreen(props) {

    const [subject, setSubject] = useState([

        { name: 'General Awareness', id: '1' },
        { name: 'Aptitude', id: '2' },
        { name: 'Reasoning', id: '3' },
        { name: 'General Science', id: '4' },
        { name: 'Computer Science', id: '5' },
        { name: 'Political Science', id: '6' },
        { name: 'History', id: '7' },
        { name: 'Current Affairs', id: '8' },
        { name: 'React-Native', id: '9' },
        { name: 'Biology', id: '10' },
        { name: 'Java', id: '11' },
        { name: 'JavaScript', id: '12' },
        { name: 'Flutter', id: '13' },
        { name: 'React Js', id: '14' },
        { name: 'English', id: '15' },

    ]);
    return (
        <View style={styles.flatlistContainer}>
           <StatusBar  
                    backgroundColor = "pink"  
                    barStyle = "dark-content"   
                    hidden = {false}    
                    translucent = {true}  
                />  
            <Text style={styles.header}>Subject List</Text>
           
            <FlatList showsVerticalScrollIndicator={false}

                keyExtractor={(item) => item.id}
                data={subject}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={({item}) =>   props.navigation.navigate("Form") }>
                    <Text style={styles.flatList}>{item.name} </Text>
                    </TouchableOpacity>
                )}
            />
          
        </View>
    );
}

const styles = StyleSheet.create({

    flatlistContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    header: {
        color: 'black',
        fontSize: hp('8%'),
        fontFamily: 'DancingScript-Bold',
    },


    flatList: {
        flex: 1,
        width: wp('85%'),
        color: 'red',
        fontSize: hp('4%'),
        borderWidth: 3,
        borderColor: 'green',
        borderRadius:wp('2%'),
        backgroundColor: 'pink',
        margin: hp('2%'),
        padding: wp('2%'),
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default DetailsScreen;