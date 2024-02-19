import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { color, fontSize, images } from "../constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function SignUp({ navigation }) {
  return (
    <View style={styles.wrap}>
      <ImageBackground source={images.signUp_bg} style={styles.bg}>
        <FontAwesome
          onPress={() => navigation.goBack()}
          name="arrow-left"
          style={styles.icon}
        />
        <View style={styles.top}>
          <Text style={styles.top_text}>Bước đầu đến gần chúng tôi!</Text>
          <Image source={images.signUp_top} style={styles.top_image} />
        </View>
        <View style={styles.form}>
          <View style={styles.item_wrap}>
            <Text style={styles.item_text}>Username</Text>
            <TextInput
              style={styles.item_input}
              placeholder="Nhập username..."
              placeholderTextColor={"#b6b7b8"}
            />
          </View>
          <View style={styles.item_wrap}>
            <Text style={styles.item_text}>Email</Text>
            <TextInput
              style={styles.item_input}
              placeholder="Nhập email..."
              placeholderTextColor={"#b6b7b8"}
            />
          </View>
          <View style={styles.item_wrap}>
            <Text style={styles.item_text}>Số điện thoại</Text>
            <TextInput
              style={styles.item_input}
              placeholder="Nhập số điện thoại..."
              placeholderTextColor={"#b6b7b8"}
            />
          </View>
          <View style={styles.item_wrap}>
            <Text style={styles.item_text}>Password</Text>
            <TextInput
              style={styles.item_input}
              secureTextEntry={true}
              placeholder="Nhập mật khẩu..."
              placeholderTextColor={"#b6b7b8"}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Welcome", { name: "Welcome" })}
          >
            <Text style={styles.btn_text}>Đăng ký</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text}>
              Bạn đã có tài khoản? Đăng nhập{" "}
              <Text
                style={{ fontWeight: "800" }}
                onPress={() =>
                  navigation.navigate("Signin", { name: "Signin" })
                }
              >
                tại đây!.
              </Text>{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.social_wrap}>
          <Text style={styles.social_text}>Đăng ký với</Text>
          <View style={styles.signIn_wrap}>
            <Image source={images.signIn_fb} style={styles.signIn_image} />
            <Image source={images.signIn_gg} style={styles.signIn_image} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 10,
    width: "100%",
    backgroundColor: color.primary,
  },
  icon: {
    marginTop: 25,
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
  bg: {
    flex: 10,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  top_text: {
    flex: 2,
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  },
  top_image: {
    flex: 3,
    justifyContent: "flex-end",
    width: 44,
    height: 100,
  },
  form: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  item_wrap: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  item_text: {
    fontSize: 15,
    color: color.primary,
  },
  item_input: {
    height: 40,
    color: "#b6b7b8",
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: color.primary,
  },
  btn: {
    marginTop: 24,
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: color.primary,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 100,
  },
  btn_text: {
    height: 40,
    padding: 9,
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  text: {
    marginTop: 8,
    fontSize: fontSize.h6,
    color: color.primary,
    alignSelf: "center",
  },

  social_wrap: {
    marginTop: 40,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "white",
  },
  social_text: {
    paddingHorizontal: 30,
    backgroundColor: "#03abfe",
    marginTop: -11,
    alignSelf: "center",
    fontSize: 16,
    color: "white",
  },
  signIn_wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 130,
    marginTop: 20,
  },
  signIn_image: {
    // flex: 1,
    width: 30,
    height: 30,
  },
});

export default SignUp;
