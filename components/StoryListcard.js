import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { color, fontSize } from "../constants";
function StoryList({
  view,
  author,
  image,
  review,
  title,
  star,
  chapterNumber,
  rank,
}) {
  return (
    <View style={style.wrap}>
      <Image source={image} style={style.img} />
      <ImageBackground
        source={require("../assets/rank.png")}
        style={style.imgRank}
      >
        <Text style={style.rank}>{rank}</Text>
      </ImageBackground>
      <View style={style.detail}>
        <Text style={style.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={style.author}>{author}</Text>
        <View style={style.iconWrap}>
          <View style={style.iconItem}>
            <FontAwesome style={style.icon} name="eye" />
            <Text style={style.iconName}>{view}</Text>
          </View>

          <View style={style.iconItem}>
            <FontAwesome style={style.icon} name="star" />
            <Text style={style.iconName}>{star}</Text>
          </View>
          <View style={style.iconItem}>
            <FontAwesome style={style.icon} name="list" />
            <Text style={style.iconName}>{chapterNumber}</Text>
          </View>
        </View>
        <Text style={style.review} numberOfLines={6} ellipsizeMode="tail">
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
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  img: {
    flex: 4,
    width: 130,
    height: 190,
    borderRadius: 8,
    position: "relative",
  },
  detail: {
    flex: 6,
    marginLeft: 14,
    width: "auto",
  },
  title: {
    fontSize: fontSize.h3,
    fontWeight: "500",
  },
  author: {
    fontWeight: "500",
    color: color.text,
    marginVertical: 6,
    fontSize: fontSize.h5,
  },
  review: {
    marginTop: 10,
    overflow: "hidden",
    color: color.text,
  },
  iconWrap: {
    display: "flex",
    flexDirection: "row",
  },
  iconItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  iconName: {
    marginLeft: 4,
    color: color.text,
    fontSize: fontSize.h6,
  },
  icon: {
    color: color.text,
    fontSize: fontSize.h5,
  },
  imgRank: {
    position: "absolute",
    marginLeft: 14,
    marginTop: 10,
  },
  rank: {
    height: 50,
    width: 34,
    color: "#fff",
    fontWeight: "500",
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
});

export default StoryList;
