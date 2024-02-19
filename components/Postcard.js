import { ImageBackground, View, StyleSheet, Text, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { fontSize } from "../constants";
function Postcard({ img, title, category }) {
  return (
    <View style={style.wrap}>
      <ImageBackground
        source={img}
        style={style.imageBackground}
        imageStyle={style.imageStyle}
      >
        <View style={style.overlay}>
          <View style={style.top}>
            <Text style={style.category}>{category}</Text>
            <View style={style.heart}>
              <FontAwesome name="heart" style={style.icon} />
              <Text style={style.category}>878</Text>
            </View>
          </View>
          <View style={style.container}>
            <Text style={style.title}>{title}</Text>
          </View>
          <View style={style.author}>
            <Image
              source={require("../assets/jisoo.jpg")}
              style={style.authorImage}
            />
            <Text style={style.category}>NAGOYA</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  wrap: {
    width: 300,
    height: 250,
    marginHorizontal: 10,
  },
  imageBackground: {
    height: 250,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  overlay: {
    height: 250,
    padding: 14,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    marginTop: 60,
    marginBottom: 25,
    height: 84,
  },
  heart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    color: "#fff",
    fontSize: fontSize.h5,
    fontWeight: "800",
  },
  icon: {
    color: "#fff",
    marginRight: 6,
    fontSize: fontSize.h5,
  },
  title: {
    color: "#fff",
    fontSize: fontSize.h1,
    fontWeight: "600",
  },
  author: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  authorImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 8,
  },
});

export default Postcard;
