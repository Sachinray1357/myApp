// import * as React from 'react';

// import {
//     ScrollView,
//     StyleSheet,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// export default function App() {
//     const [text, setText] = React.useState('');
//     const [filters, setFilters] = React.useState([
//         { label: 'ALL' },
//         { label: 'Dentist' },
//         { label: 'Cardiologist' },
//         { label: 'Orthologist' },
//         { label: 'Oncologist'},
//     ]);
    
//     const [selected, setSelected] = React.useState(filters[0]);

//     const callback = (data) => {
//         if (selected === data) return setSelected(filters[0]);
//         setSelected(data);
//     };

//     return (

//         <ScrollView style={styles.filterContainer}
//         showsHorizontalScrollIndicator={false}
//             horizontal={true}
//         >
//             {filters.map((filter) => (
//                 <FilterButton
//                     selected={filter === selected}
//                     disabled={filter !== selected && selected !== filters[0] && filter !== filters[0]}
//                     data={filter}
//                     callback={callback}
//                 />
//             ))}
//         </ScrollView>
//     );
// }

// const FilterButton = ({ callback, selected, disabled, data }) => {
//     return (

//         <TouchableOpacity
//             style={[
//                 styles.filterButton,
//                 { backgroundColor: disabled ? 'lightgrey' : (selected ? '#2581d4' : 'white') },
//             ]}
//             onPress={() => {
//                 if (callback && !disabled) {
//                     callback(data);
//                 }
//             }}>
//             <Text style={{ color: selected ? 'black' : '#48d1cc', paddingRight: wp('1%'), fontSize: hp('2.2%') }}>
//                 {data.label}
//             </Text>
//         </TouchableOpacity>

//     );
// };


// const styles = StyleSheet.create({
//     filterContainer: {
//         flexDirection: 'row',
//         width: wp('95%'),
//         height: hp('5.8%'),
//     },

//     filterButton: {
//         borderRadius: wp('2%'),
//         padding: wp('2.5%'),
//         paddingLeft: wp('4%'),
//         marginRight: hp('1.5%')
//     },
// });

// //   export default App;