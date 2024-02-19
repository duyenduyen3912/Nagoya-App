import { Image, StyleSheet, Text, View } from "react-native";
import { color, fontSize } from "../constants";
function Category({ image, name }) {
  return (
    <View style={style.wrap}>
      <Image source={image} style={style.image} />
      <Text style={style.text}>{name}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  wrap: {
    marginHorizontal: 14,
    marginVertical: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 40,
  },
  text: {
    marginTop: 6,

    color: color.text,
    fontSize: fontSize.h6,
  },
});

export default Category;
