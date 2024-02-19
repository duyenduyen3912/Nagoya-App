import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Layout from "../components/Layout";
function Search() {
  return (
    <Layout>
      <View style={style.top}>
        <Text style={style.title}>Tìm kiếm</Text>
        <View style={style.search}>
          <FontAwesome style={style.icon} name="search" />
          <TextInput
            style={style.input}
            placeholder="Tìm kiếm truyện hoặc tác giả"
          />
        </View>
      </View>
      <ScrollView style={style.tag}>
        <Text style={style.subtitle}>Khám phá các tag bạn có thể thích</Text>
        <View style={style.tagList}>
          <View style={style.item}>
            <Text style={style.tagName}>Truyện Ma</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/ma.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Truyện Ma</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/truyenma.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Linh dị</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/linhdi.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Xuyên không</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/xuyenkhong2.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Trinh thám</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/trinhtham.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Chữa lành</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/chualanh.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Lịch sử</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/lichsu2.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Ngôn tình</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/ngontinh.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Viễn tưởng</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/vientuong.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Fanfiction</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/fanfic.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Tiểu thuyết</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/tieuthuyet.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Phiêu lưu</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/phieuluu.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Hành động</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/hanhdong.png")}
            />
          </View>
          <View style={style.item}>
            <Text style={style.tagName}>Trọng sinh</Text>
            <Image
              style={style.tagImage}
              source={require("../assets/trongsinh.png")}
            />
          </View>
        </View>
      </ScrollView>
    </Layout>
  );
}

const style = StyleSheet.create({
  top: {
    borderBottomColor: "#d5d5d5",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  search: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#d5d5d5",
    borderWidth: 1,
    marginHorizontal: 14,
    marginTop: 10,
    marginBottom: 16,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#f7f7f7",
    borderRadius: 20,
  },
  icon: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    paddingHorizontal: 14,
  },
  input: {
    marginLeft: 8,
  },
  tag: {
    paddingHorizontal: 7,
    paddingVertical: 14,
  },
  tagList: {
    marginTop: 14,
    marginBottom: 24,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    width: "46.3%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
    marginHorizontal: 7,
    overflow: "hidden",
    marginVertical: 8,
  },
  tagName: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 14,
    marginRight: 20,
  },
  tagImage: {
    flex: 1,
    width: 70,
    height: 70,
    transform: [{ translateX: 4 }],
  },
});

export default Search;
