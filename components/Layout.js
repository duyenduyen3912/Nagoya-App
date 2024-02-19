import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { color, fontSize } from "../constants";

function Layout({ children, navigation }) {
  return (
    <View style={style.wrap}>
      <View style={style.container}>{children}</View>

      <SafeAreaView style={style.nav}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home", { name: "Home" })}
        >
          <FontAwesome style={style.icon} name="home" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Search", { name: "Search" })}
        >
          <FontAwesome style={style.icon} name="search" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome style={style.icon} name="bars" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome style={style.icon} name="pencil" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome style={style.icon} name="bell" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  wrap: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingBottom: 54,
  },

  nav: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 54,
    position: "absolute",
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopColor: "#d5d5d5",
    borderTopWidth: 1,
  },
  icon: {
    fontSize: fontSize.h1,
    color: color.text,
  },
});

export default Layout;
