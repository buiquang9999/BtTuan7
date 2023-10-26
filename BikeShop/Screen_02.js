import * as React from 'react';
import { View,Text,Image,Pressable,FlatList, Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

var array = [
  {
    image: require('../Image/bg (2).png'),
    name: 'Pinarello',
    price: 1800,
    des: 'show something',
    type: 'mountain',
  },
  {
    image: require('../Image/bg (2).png'),
    name: 'Pina Mountai',
    price: 1700,
    des: 'show something',
    type: 'mountain',
  },
  {
    image: require('../Image/bg (2).png'),
    name: 'Pina Bike',
    price: 1500,
    des: 'show something',
    type: 'roadbike',
  },
  {
    image: require('../Image/bg (2).png'),
    name: 'Pinarello',
    price: 1900,
    des: 'show something',
    type: 'roadbike',
  },
  {
    image: require('../Image/bg (2).png'),
    name: 'Pinarello',
    price: 2700,
    des: 'show something',
    type: 'roadbike',
  },
  {
    image: require('../Image/bg (2).png'),
    name: 'Pinarello',
    price: 1350,
    des: 'show something',
    type: 'mountain',
  },
];

function Screen2() {
  var navigation = useNavigation();
  var [state, setState] = React.useState(array);

  var [color, setColor] = React.useState(1);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={({ fontSize: 25, fontWeight: 'bold', color: 'red'})}> The world's Best Bike </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Pressable
          style={
            ([{ borderWidth: '1px', borderRadius: '5px', borderColor: 'red', padding: '5px' },
            (color == 1 ? { backgroundColor: 'red' } : null)])
          }
          title="All"
          onPress={() => {
            setState(array);
            setColor(1);
          }}>
          <Text>All</Text>
        </Pressable>
        <Pressable
          style={
            ([{ borderWidth: '1px', borderRadius: '5px', borderColor: 'red', padding: '5px' },
            (color == 2 ? { backgroundColor: 'red' } : null)])
          }
          title="Mountain"
          onPress={() => {
            var newarr = array.filter((item) => {
              return item.type == 'mountain';
            });
            setState(newarr);
            setColor(2);
          }}>
          <Text>Mountain</Text>
        </Pressable>
        <Pressable
          style={
            ([{ borderWidth: '1px', borderRadius: '5px', borderColor: 'red', padding: '5px' },
            (color == 3 ? { backgroundColor: 'red' } : null)])
          }
          title="Roadbike"
          onPress={() => {
            var newarr = array.filter((item) => {
              return item.type == 'roadbike';
            });
            setState(newarr);
            setColor(3);
          }}>
          <Text>Roadbike</Text>
        </Pressable>
        
      </View>

      <View style={{ flex: 8 }}>
        <FlatList
          numColumns={2}
          data={state}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate('Screen3');
                }}
                style={{
                  alignItems: 'center',
                  height: '150px',
                  width: '45%',
                  borderRadius: '10px',
                  backgroundColor: 'pink',
                  shadowOffset: { width: '3px', height: '3px' },
                  shadowColor: 'grey',
                  shadowOpacity: '0.5',
                  margin: '5px',
                }}>
                <Image
                  source={item.image}
                  style={{ width: '100px', height: '100px' }}
                  resizeMode="contain"
                />
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}
export default Screen2;