import { Image, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { color, fontSize } from "../constants";
function BestStorycard({ name, author, image, star, number }) {
  return (
    <View style={style.wrap}>
      <Image style={style.image} source={image} />
      <Text style={style.title} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
      <Text style={style.author} numberOfLines={1} ellipsizeMode="tail">
        {author}
      </Text>
      <View style={style.rate}>
        <View style={style.ratePoint}>
          <FontAwesome name="star" style={style.icon} />
          <Text style={style.point}>{star}</Text>
        </View>
        <Text style={style.rateNumber}>8475</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrap: {
    display: "flex",
    flexDirection: "column",
    width: 100,
    marginHorizontal: 9,
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 130,
    borderRadius: 4,
  },
  title: {
    marginTop: 8,
    fontSize: fontSize.h5,
    fontWeight: "500",
  },
  author: {
    marginTop: 4,
    fontSize: fontSize.h6,
    color: color.text,
  },
  rate: {
    marginTop: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratePoint: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 4,
    color: "#f5dd07",
    fontSize: fontSize.h6,
  },
  point: {
    fontSize: fontSize.h6,
  },
  rateNumber: {
    color: "#f55027",
    fontSize: fontSize.h6,
  },
});

export default BestStorycard;
