import { Image, StyleSheet, Text, View } from "react-native";
import { color, fontSize } from "../constants";
function StoryCard({ title, image, review }) {
  return (
    <View style={style.wrap}>
      <Image style={style.image} source={image} />
      <View style={style.detail}>
        <Text style={style.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={style.review} numberOfLines={3} ellipsizeMode="tail">
          {review}
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrap: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
  image: {
    flex: 3,
    width: 110,
    height: 100,
    borderRadius: 8,
  },
  detail: {
    flex: 7,
    marginLeft: 10,
  },
  title: {
    marginTop: 8,
    fontSize: fontSize.h3,
  },
  review: {
    marginTop: 4,
    overflow: "hidden",
    fontSize: fontSize.h5,
    color: color.title,
  },
});

export default StoryCard;
