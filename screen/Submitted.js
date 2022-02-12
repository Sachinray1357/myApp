import { Button, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import DatePicker from 'react-native-neat-date-picker';

;

function Formsubmit() {

  

       
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text >Hello You have Submit the Form Successfully!</Text>

            <Button title={'open'} onPress={openDatePicker}/>
            <DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    
        </View>



    );
}


export default Formsubmit;



