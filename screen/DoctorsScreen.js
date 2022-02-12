import React, { useState } from 'react';
import { Alert,  Image,  ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


import Icon from 'react-native-vector-icons/FontAwesome';

import { Rating } from 'react-native-ratings';
import { SearchBar } from 'react-native-elements';

function DoctorsScreen() {

  const [search, setSearch] = useState("");
  const [filled, setFilled] = useState("false");
  const [text, setText] = React.useState('');
    const [filters, setFilters] = React.useState([
        { label: 'ALL' },
        { label: 'Dentist' },
        { label: 'Cardiologist' },
        { label: 'Orthologist' },
        { label: 'Oncologist'},
    ]);
    
    const [selected, setSelected] = React.useState(filters[0]);

    const callback = (data) => {
      if (selected === data) return setSelected(filters[0]);
      setSelected(data);
  };


  const updateSearch = (search) => {
    setSearch(search);
  };



  const favorite = () => {
    setFilled(!filled)
  };

 

  return (

    <View style={styles.doctContainer}>

<StatusBar   
     backgroundColor = "#2581d4"  
     barStyle = "dark-content"   
  />  

      <View style={{ flexDirection: 'row', marginRight: hp('30%'), marginTop: hp('2%') }}>
        <View style={{}}>
          <Icon name='chevron-left' size={hp('3%')} color={'#808080'} style={{ backgroundColor: 'white', width: wp('8%'), height: hp('5%'), borderRadius: wp('2%'), padding: wp('1.5%') }} />
        </View>
        <Text style={{ fontSize: hp('3.2%'), fontWeight:'bold', color: 'black', paddingLeft: wp('4%') }}>Doctors</Text>
      </View>

      <View>
        <SearchBar
          round
          inputStyle={{ backgroundColor: 'white' }}
          containerStyle={{ width: wp('90%'), height: hp('8.2%'), marginTop: hp('3.5%'), backgroundColor: 'white', borderRadius: hp('1.2%') }}
          inputContainerStyle={{ backgroundColor: 'white' }}
          placeholderTextColor={'#808080'}
          placeholder={'Search'}
          platform="android"
          clearIcon={{
            iconStyle: { margin: 10 },
            containerStyle: { margin: -10 },
          }}
       
        />
      </View>



      <ScrollView
        horizontal={true}
      >
        <View style={{ width: wp('95%'), height: hp('9.5%'), flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('3%'), }}>
        <ScrollView style={styles.filterContainer}
        showsHorizontalScrollIndicator={false}
            horizontal={true}
        >
            {filters.map((filter) => (
                <FilterButton
                    selected={filter === selected}
                    disabled={filter !== selected && selected !== filters[0] && filter !== filters[0]}
                    data={filter}
                    callback={callback}
                />
            ))}
        </ScrollView>
        </View>
      </ScrollView>



      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ width: wp('90%'), height: hp('15%'), backgroundColor:'white', borderRadius: wp('3%'), marginTop: hp('2%') }}>

          <View style={{ width: wp('26%'), height: hp('15%'), padding: wp('2%'), flexDirection: 'row', }}>
            <Image source={require('../Image/doctor2.png')} style={{ width: wp('22%'), height: hp('12%'), borderRadius: wp('1.5%'), margin: hp('.4%') }} />


            <View style={{ width: wp('64%'), height: hp('13%'), }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ marginLeft: wp('3.4%'), fontWeight: 'bold', fontSize: hp('2.8%'), color: 'black' }}>Dr. S N Jha</Text>

                  <Text style={{ marginLeft: wp('0.9%'), fontSize: hp('2.2%'), paddingLeft: wp('2.2%') }}>Specialist Cardiologist</Text>

                </View>
                <TouchableOpacity onPress={favorite}>
                  <Icon name={filled ? "heart" : "heart"} size={hp('3%')} color={filled ? 'red' : '#BDC3C7'} style={{ paddingLeft: wp('12%'), margin:hp('0.5%') }} />
                  {/* <Icon  name="heart-o" size={hp('3%')} color={'red'} /> */}
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', width: wp('30%'), height: hp('5%'), alignItems: 'center', }}>
              <Rating
        type='star'
        ratingCount={5}
        ratingColor='#f6d060'
        // unSelectedColor='#BDC3C7'
        imageSize={wp('4%')}
        onFinishRating={(rating) => {
          Alert.alert('Star Rating: ' + JSON.stringify(rating));
        }}
        style={{ paddingLeft: wp('3.6%') }}
      />
                <Text style={{ fontSize: hp('3%'), fontWeight: 'bold', color: 'black', marginLeft: wp('6%') }}>2.8</Text>
                <Text style={{ fontSize: hp('2.2%'), marginLeft: wp('1.3%') }}>(2821 views)</Text>
              </View>
            </View>

          </View>
        </View>

        <View style={{ width: wp('90%'), height: hp('15%'), backgroundColor: 'white', borderRadius: wp('3%'), marginTop: hp('2%') }}>

          <View style={{ width: wp('26%'), height: hp('15%'), padding: wp('2%'), flexDirection: 'row', }}>
            <Image source={require('../Image/doctor3.png')} style={{ width: wp('22%'), height: hp('12%'), borderRadius: wp('1.5%'), margin: hp('.4%') }} />


            <View style={{ width: wp('64%'), height: hp('13%'), }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ marginLeft: wp('3.4%'), fontWeight: 'bold', fontSize: hp('2.8%'), color: 'black' }}>Dr. S N Jha</Text>

                  <Text style={{ marginLeft: wp('0.9%'), fontSize: hp('2.2%'), paddingLeft: wp('2.2%') }}>Specialist Cardiologist</Text>

                </View>
                <TouchableOpacity onPress={favorite}>
                  <Icon name={filled ? "heart" : "heart"} size={hp('3%')} color={filled ? 'red' : '#BDC3C7'} style={{ paddingLeft: wp('12%'), margin:hp('0.5%') }} />
                  {/* <Icon  name="heart-o" size={hp('3%')} color={'red'} /> */}
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', width: wp('30%'), height: hp('5%'), alignItems: 'center', }}>
              <Rating
        type='star'
        ratingCount={5}
        ratingColor='#f6d060'
        // unSelectedColor='#BDC3C7'
        imageSize={wp('4%')}
        onFinishRating={(rating) => {
          Alert.alert('Star Rating: ' + JSON.stringify(rating));
        }}
        style={{ paddingLeft: wp('3.6%') }}
      />
                <Text style={{ fontSize: hp('3%'), fontWeight: 'bold', color: 'black', marginLeft: wp('6%') }}>2.8</Text>
                <Text style={{ fontSize: hp('2.2%'), marginLeft: wp('1.3%') }}>(2821 views)</Text>
              </View>
            </View>

          </View>
        </View>

        <View style={{ width: wp('90%'), height: hp('15%'), backgroundColor: 'white', borderRadius: wp('3%'), marginTop: hp('2%') }}>

          <View style={{ width: wp('26%'), height: hp('15%'), padding: wp('2%'), flexDirection: 'row', }}>
            <Image source={require('../Image/doctor2.png')} style={{ width: wp('22%'), height: hp('12%'), borderRadius: wp('1.5%'), margin: hp('.4%') }} />


            <View style={{ width: wp('64%'), height: hp('13%'), }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ marginLeft: wp('3.4%'), fontWeight: 'bold', fontSize: hp('2.8%'), color: 'black' }}>Dr. S N Jha</Text>

                  <Text style={{ marginLeft: wp('0.9%'), fontSize: hp('2.2%'), paddingLeft: wp('2.2%') }}>Specialist Cardiologist</Text>

                </View>
                <TouchableOpacity onPress={favorite}>
                  <Icon name={filled ? "heart" : "heart"} size={hp('3%')} color={filled ? 'red' : '#BDC3C7'} style={{ paddingLeft: wp('12%'), margin:hp('0.5%') }} />
                  {/* <Icon  name="heart-o" size={hp('3%')} color={'red'} /> */}
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', width: wp('30%'), height: hp('5%'), alignItems: 'center', }}>
              <Rating
        type='star'
        ratingCount={5}
        ratingColor='#f6d060'
        // unSelectedColor='#BDC3C7'
        imageSize={wp('4%')}
        onFinishRating={(rating) => {
          Alert.alert('Star Rating: ' + JSON.stringify(rating));
        }}
        style={{ paddingLeft: wp('3.6%') }}
      />
                <Text style={{ fontSize: hp('3%'), fontWeight: 'bold', color: 'black', marginLeft: wp('6%') }}>2.8</Text>
                <Text style={{ fontSize: hp('2.2%'), marginLeft: wp('1.3%') }}>(2821 views)</Text>
              </View>
            </View>

          </View>
        </View>

        <View style={{ width: wp('90%'), height: hp('15%'), backgroundColor: 'white', borderRadius: wp('3%'), marginTop: hp('2%') }}>

          <View style={{ width: wp('26%'), height: hp('15%'), padding: wp('2%'), flexDirection: 'row', }}>
            <Image source={require('../Image/doctor4.png')} style={{ width: wp('22%'), height: hp('12%'), borderRadius: wp('1.5%'), margin: hp('.4%') }} />


            <View style={{ width: wp('64%'), height: hp('13%'), }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ marginLeft: wp('3.4%'), fontWeight: 'bold', fontSize: hp('2.8%'), color: 'black' }}>Dr. S N Jha</Text>
                  <Text style={{ marginLeft: wp('0.9%'), fontSize: hp('2.2%'), paddingLeft: wp('2.2%') }}>Specialist Cardiologist</Text>
                </View>
                <TouchableOpacity onPress={favorite}>
                  <Icon name={filled ? "heart" : "heart"} size={hp('3%')} color={filled ? 'red' : '#BDC3C7'} style={{ paddingLeft: wp('12%'), margin:hp('0.5%') }} />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', width: wp('30%'), height: hp('5%'), alignItems: 'center', }}>
              <Rating
        type='star'
        ratingCount={5}
        ratingColor='#f6d060'
        // unSelectedColor='#BDC3C7'
        imageSize={wp('4%')}
        onFinishRating={(rating) => {
          Alert.alert('Star Rating: ' + JSON.stringify(rating));
        }}
        style={{ paddingLeft: wp('3.6%') }}
      />
                <Text style={{ fontSize: hp('3%'), fontWeight: 'bold', color: 'black', marginLeft: wp('6%') }}>2.8</Text>
                <Text style={{ fontSize: hp('2.2%'), marginLeft: wp('1.3%') }}>(2821 views)</Text>
              </View>
            </View>

          </View>
        </View>

        <View style={{ width: wp('90%'), height: hp('15%'), backgroundColor: 'white', borderRadius: wp('3%'), marginTop: hp('2%') }}>

          <View style={{ width: wp('26%'), height: hp('15%'), padding: wp('2%'), flexDirection: 'row', }}>
            <Image source={require('../Image/doctor1.png')} style={{ width: wp('22%'), height: hp('12%'), borderRadius: wp('1.5%'), margin: hp('.4%') }} />


            <View style={{ width: wp('64%'), height: hp('13%'), }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ marginLeft: wp('3.4%'), fontWeight: 'bold', fontSize: hp('2.8%'), color: 'black' }}>Dr. S N Jha</Text>

                  <Text style={{ marginLeft: wp('0.9%'), fontSize: hp('2.2%'), paddingLeft: wp('2.2%') }}>Specialist Cardiologist</Text>

                </View>
                <TouchableOpacity onPress={favorite}>
                  <Icon name={filled ? "heart" : "heart"} size={hp('3%')} color={filled ? 'red' : '#BDC3C7'} style={{ paddingLeft: wp('12%'), margin:hp('0.5%') }} />
                 
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', width: wp('30%'), height: hp('5%'), alignItems: 'center', }}>
              <Rating
        type='star'
        ratingCount={5}
        ratingColor='#f6d060'
        // unSelectedColor='#BDC3C7'
        imageSize={wp('4%')}
        onFinishRating={(rating) => {
          Alert.alert('Star Rating: ' + JSON.stringify(rating));
        }}
        style={{ paddingLeft: wp('3.6%') }}
      />
                <Text style={{ fontSize: hp('3%'), fontWeight: 'bold', color: 'black', marginLeft: wp('6%') }}>2.8</Text>
                <Text style={{ fontSize: hp('2.2%'), marginLeft: wp('1.3%') }}>(2821 views)</Text>
              </View>
            </View>

          </View>
        </View>



      </ScrollView>

    </View>


  );
}

const FilterButton = ({ callback, selected, disabled, data }) => {
  return (

      <TouchableOpacity
          style={[
              styles.filterButton,
              { backgroundColor: disabled ? 'lightgrey' : (selected ? '#2581d4' : 'white') },
          ]}
          onPress={() => {
              if (callback && !disabled) {
                  callback(data);
              }
          }}>
          <Text style={{ color: selected ? 'black' : '#48d1cc', paddingRight: wp('1%'), fontSize: hp('2.2%') }}>
              {data.label}
          </Text>
      </TouchableOpacity>

  );
};


const styles = StyleSheet.create({
  doctContainer: {
    // width: wp('100%'),
    // height: hp('100%'),
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: wp('2%'),
    backgroundColor: '#f5f5f5',
  },

  filterContainer: {
    flexDirection: 'row',
    width: wp('95%'),
    height: hp('5.8%'),
},

filterButton: {
    borderRadius: wp('2%'),
    padding: wp('2.5%'),
    paddingLeft: wp('4%'),
    marginRight: hp('1.5%')
},

  searchBar: {
    width: wp('100%'),
    margin: hp('2%'),
    padding: wp('4%'),
  }

})

export default DoctorsScreen;
