import { FlatList, KeyboardAvoidingView, LogBox, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-datepicker';
import { NavigationContainer } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Hospitalform = (props) => {
    const [patientName, setPatientName] = useState('');
    const [addFamilyMember, setAddFamilyMember] = useState('');
    const [selectedGender, setSelectedGender] = useState("");
    const [fName, setFName] = useState('');
    const [address, setAddress] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [religion, setReligion] = useState('');
    const [mincome, setMincome] = useState('');
    const [occupation, setOccupation] = useState('');
    const [altContactNo, setAltContactNo] = useState('');
    const [dName, setDName] = useState('');
    const [uploadP, setUploadP] = useState('');
    const [uploadId, setUploadId] = useState('');
    const [minsurance, setMinsurance] = useState('');
    const [policyNo, setPolicyNo] = useState('');
    const [empName, setEmpName] = useState('');
    const [empId, setEmpId] = useState('');


    const [date, setDate] = useState('');

    // CheckBox
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`', 'componentWillReceiveProps']);
    }, [])

    const validForm = () => {


        const emailRegex = /\S+@\S+\.\S+/;
        const reg = /^[0]?[789]\d{9}$/;
        const rule = /^[a-zA-Z ]+(\.|')?[a-zA-Z ]+(\.|')?$/;
        const DOB_REGEX = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

        if (rule.test(patientName) == '') {
            alert('Enter the Patient Name')
        }

        else if (rule.test(addFamilyMember) == '') {
            alert('Enter Family Member Name');
        }
        // else if (DOB_REGEX.test(date) == '') {
        //     alert('Select Your Date of Birth');
        // }

        else if (selectedGender == '') {
            alert('Select Your Gender');
        }

        else if (rule.test(fName) == '') {
            alert('Enter Your Fathers/Husband Name');
        }

        else if (address == '') {
            alert('Enter Your Address');
        }

        else if (reg.test(mobileNumber) == '') {
            alert('Enter Your Mobile No.');
        }

        else if (emailRegex.test(email) == '') {
            alert('Enter Your Email');
        }

        else if (nationality == '') {
            alert('Select Your Nationality');
        }

        else if (religion == '') {
            alert('Select Your Religion');
        }

        else if (mincome == '') {
            alert('Enter Your Monthly Income');
        }

        else if (rule.test(occupation) == '') {
            alert('Enter your Occupation');
        }

        else if (reg.test(altContactNo) == '') {
            alert('Enter Alt.Contact No.');
        }

        else if (rule.test(dName) == '') {
            alert('Enter Doctor Name');
        }

        else if (minsurance == '') {
            alert('Enter Medical Insurance');
        }

        else if (policyNo == '') {
            alert('Enter Your PolicyNo.');
        }

        else if (rule.test(empName) == '') {
            alert('Enter Employer Name');
        }

        else if (empId == '') {
            alert('Enter Employer Id');
        }
        else if (toggleCheckBox == false) {
            alert('Click on Checkbox to Confirm then Submit');
        }

        else {
            // alert('Form Submitted Successfully')
            props.navigation.navigate("Formsubmit");
            
        }

    };


    return (

        < View style={styles.container}>
            <StatusBar

                backgroundColor="#1e90ff"
                barStyle="light-content"
            />

            <View style={styles.header}>
                <Text style={styles.header}>Hospital Form</Text>
            </View>



            <View style={styles.inputContainer}>

                <Text style={{ fontSize: hp('2.5%'), fontWeight: "normal", marginLeft: wp('1.5%') }}>Patient Details</Text>
                <KeyboardAvoidingView enabled
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      
    >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.pname}>
                        <TextInput style={styles.inputTxt1}
                            placeholder='Patient Name'
                            value={patientName}
                            onChangeText={text => setPatientName(text)}
                        />


                        <TextInput style={styles.inputTxt2}
                            placeholder='Add Family Member'
                            value={addFamilyMember}
                            onChangeText={text => setAddFamilyMember(text)}
                        />
                    </View>
                    <View style={styles.dob}>
                        <DatePicker
                            style={styles.inputTxt3}
                            date={date} // Initial date from state
                            mode="date" // The enum of date,
                            placeholder="D.O.B"
                            format="DD-MM-YYYY"
                            minDate="01-01-1900"
                            maxDate="19-01-2022"

                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"

                            onDateChange={(date) => {
                                setDate(date);
                            }}
                        />

                        <Picker
                            style={styles.inputTxt4}
                            selectedValue={selectedGender}
                            onValueChange={(itemValue, itemIndex) => setSelectedGender(itemValue)}
                        >

                            <Picker.Item label="Gender" value="gender" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                            <Picker.Item label="Other" value="other" />

                        </Picker>

                    </View>
                    <View style={styles.fname}>
                        <TextInput style={styles.inputTxt5}
                            placeholder='Father/Husband Name'
                            value={fName}
                            onChangeText={text => setFName(text)}
                        />
                        <TextInput style={styles.inputTxt5}
                            placeholder='Address'
                            value={address}
                            onChangeText={text => setAddress(text)}
                        />
                    </View>
                    <View style={styles.contact}>
                        <TextInput style={styles.inputTxt6}
                            placeholder='Mobile No.'
                            keyboardType='numeric'
                            maxLength={10}
                            value={mobileNumber}
                            onChangeText={text => setMobileNumber(text)}
                        />
                        <TextInput style={styles.inputTxt7}
                            placeholder='Email'

                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.india}>

                        <View
                            style={{
                                borderRadius: hp('12%')
                            }}>
                            <Picker
                                style={styles.inputTxt8}
                                selectedValue={nationality}
                                onValueChange={(itemValue, itemIndex) => setNationality(itemValue)}
                            >
                                <Picker.Item label="Nationality" value="nationality" />
                                <Picker.Item label="Indian" value="indian" />
                                <Picker.Item label="Other" value="Other" />


                            </Picker>
                        </View>
                        <Picker
                            style={styles.inputTxt9}
                            selectedValue={religion}
                            onValueChange={(itemValue, itemIndex) => setReligion(itemValue)}
                        >
                            <Picker.Item label="Religion" value="religion" />
                            <Picker.Item label="Hindu" value="hindu" />
                            <Picker.Item label="Christian" value="christian" />
                            <Picker.Item label="Other" value="Other" />

                        </Picker>

                    </View>
                    <View style={styles.income}>
                        <TextInput style={styles.inputTxt10}
                            placeholder='Monthly Income'
                            value={mincome}
                            onChangeText={text => setMincome(text)}
                        />
                        <TextInput style={styles.inputTxt11}
                            placeholder='Occupation'
                            value={occupation}
                            onChangeText={text => setOccupation(text)}
                        />

                    </View>
                    <View style={styles.alt}>
                        <TextInput style={styles.inputTxt12}
                            placeholder='Alt. Contact No.'
                            keyboardType='numeric'
                            maxLength={10}
                            value={altContactNo}
                            onChangeText={text => setAltContactNo(text)}
                        />
                        <TextInput style={styles.inputTxt12}
                            placeholder='Doctor Name'
                            value={dName}
                            onChangeText={text => setDName(text)}
                        />

                    </View>
                    <View style={styles.upload}>
                        <TextInput style={styles.inputTxt13}
                            placeholder='Upload P'
                            value={uploadP}
                            onChangeText={text => setUploadP(text)}
                        />
                        <TextInput style={styles.inputTxt14}
                            placeholder='Upload ID Proof'
                            value={uploadId}
                            onChangeText={text => setUploadId(text)}
                        />
                    </View>

                    <Text style={{ fontSize: hp('2.5%'), fontWeight: "normal", marginTop: wp('1%'), marginLeft: wp('2%') }}>Insurance Claim </Text>

                    <View style={styles.policy}>
                        <TextInput style={styles.inputTxt15}
                            placeholder='Medical Insurance'
                            value={minsurance}
                            onChangeText={text => setMinsurance(text)}
                        />
                        <TextInput style={styles.inputTxt15}
                            placeholder='Policy No.'
                            value={policyNo}
                            onChangeText={text => setPolicyNo(text)}
                        />
                    </View>

                    <View style={styles.employer}>
                        <TextInput style={styles.inputTxt16}
                            placeholder='Employer Name'
                            value={empName}
                            onChangeText={text => setEmpName(text)}
                        />
                        <TextInput style={styles.inputTxt17}
                            placeholder='Employer ID'
                            value={empId}
                            onChangeText={text => setEmpId(text)}
                        />
                    </View>
                    <SafeAreaView style={styles.termsCondition}>

                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            tintColors={{ true: '#0000ff', false: '' }}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}

                        />

                        <Text>Read the </Text>
                        <Text style={{ color: 'blue' }}>Terms </Text>
                        <Text> <Text>{'&'}</Text> </Text>
                        <Text style={{ color: 'blue' }}> Conditions </Text>
                    </SafeAreaView>

                    <TouchableOpacity style={styles.button} onPress={validForm} >
                        <Text  style={{ color: 'white', fontSize: hp('3%') }}>Submit</Text>
                    </TouchableOpacity>

                </ScrollView>
                </KeyboardAvoidingView>
            </View>


        </View>


    );
}


const styles = StyleSheet.create({

    container: {
        // width: wp('100%'),
        // height: hp('100%'),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('2%'),

    },

    header: {
        alignItems: 'center',
        fontSize: hp('5%'),
        fontWeight: 'bold',
        color: '#000000',
    },

    inputContainer: {
        width: wp('100%'),
        height: hp('85%'),
        padding: wp('3%'),

        // backgroundColor:'yellow',

    },
    pname: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),
        // margin: 5,
        padding: wp('1%'),
    },
    inputTxt1: {
        width: wp('42%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        // marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    inputTxt2: {
        width: wp('42%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        marginRight: wp('2.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    dob: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),

        padding: wp('1%'),
    },
    inputTxt3: {
        width: wp('39%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),

        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    inputTxt4: {
        width: wp('39%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        marginRight: wp('2.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    fname: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),

        padding: wp('1%'),
    },
    inputTxt5: {
        width: wp('92%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),

        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },

    contact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),

        padding: wp('1%'),
    },
    inputTxt6: {
        width: wp('35%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),

        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    inputTxt7: {
        width: wp('50%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        marginRight: wp('2.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    india: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),

        padding: wp('1%'),
    },
    inputTxt8: {
        width: wp('50%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),

        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    inputTxt9: {
        width: wp('35%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        marginRight: wp('2.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },

    income: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),

        padding: wp('1%'),
    },
    inputTxt10: {
        width: wp('50%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),

        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    inputTxt11: {
        width: wp('35%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        marginRight: wp('2.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    alt: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),

        padding: wp('1%'),
    },
    inputTxt12: {
        width: wp('92%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),

        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    upload: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),

        padding: wp('1%'),
    },
    inputTxt13: {
        width: wp('35%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),

        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    inputTxt14: {
        width: wp('35%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        marginRight: wp('2.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    policy: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),

        padding: wp('1%'),
    },
    inputTxt15: {
        width: wp('92%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),

        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    employer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('97%'),
        // margin: 5,
        padding: wp('1%'),
    },
    inputTxt16: {
        width: wp('44%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        // marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },
    inputTxt17: {
        width: wp('44%'),
        height: hp('7.5%'),
        backgroundColor: '#d3d3d3',
        borderRadius: wp('2%'),
        marginTop: wp('3%'),
        marginRight: wp('2.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        padding: wp('4%'),
    },

    termsCondition: {
        width: wp('100%'),
        flexDirection: 'row',
        fontSize: hp('3%'),
        padding: wp('4%'),
        marginTop: wp('3%'),
        alignItems: 'center',

    },
    button: {

        backgroundColor: '#0000ff',
        borderRadius: wp('2.4%'),
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('8.5%'),

    },

});


export default Hospitalform;