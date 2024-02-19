import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {color} from '../constants/';
function UIButton(props) {
  return (
    <TouchableOpacity
      style={{
        width: '85%',
        height: 50,
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.isSelected ? 'white' : 'transparent',
      }}
      onPress={props.onPress}>
      {props.isSelected && (
        <FontAwesome
          name="check"
          style={{
            color: 'green',
            fontSize: 16,
            position: 'absolute',
            left: 20,
          }}
        />
      )}
      <Text
        style={{
          color: props.isSelected ? color.primary : 'white',
          fontSize: 15,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton;
