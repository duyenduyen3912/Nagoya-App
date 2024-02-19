import { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { color, fontSize, images } from "../constants";
import { ValidateEmail, ValidatePassword } from "../utilies/Validate";
import FontAwesome from "react-native-vector-icons/FontAwesome";

function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const login = () => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      ValidateEmail(email) == true &&
      ValidatePassword(password) == true
    ) {
      console.log(
        email.length > 0 &&
          password.length > 0 &&
          ValidateEmail(email) == true &&
          ValidatePassword(password) == true
      );
      return true;
    } else return false;
  };
  return (
    <View style={styles.wrap}>
      {/* <FontAwesome
        onPress={() => navigation.goBack()}
        name="arrow-left"
        style={styles.icon}
      /> */}
      <View style={styles.top}>
        <Text style={styles.top_text}>Bạn đã có tài khoản?</Text>
        <Image source={images.signIn_top} style={styles.top_image} />
      </View>
      <View style={styles.item_wrap}>
        <Text style={styles.item_text}>Email</Text>
        <TextInput
          onChangeText={(email) => {
            setErrorEmail(
              ValidateEmail(email) == true ? "" : "Email not incorrect format"
            );
            setEmail(email);
          }}
          style={styles.item_input}
          placeholder="Nhập email..."
          placeholderTextColor={"#b6b7b8"}
        />
        <Text style={styles.error}>{errorEmail}</Text>
      </View>
      <View style={styles.item_wrap}>
        <Text style={styles.item_text}>Password</Text>
        <TextInput
          onChangeText={(text) => {
            setErrorPassword(
              ValidatePassword(text) == true
                ? ""
                : "Mật khẩu cần có ít nhất 8 ký tự"
            );
            setPassword(text);
          }}
          style={styles.item_input}
          secureTextEntry={true}
          placeholder="Nhập mật khẩu..."
          placeholderTextColor={"#b6b7b8"}
        />
        <Text style={styles.error}>{errorPassword}</Text>
      </View>
      <TouchableOpacity
        disabled={login() == false}
        style={{
          marginTop: 18,
          borderRadius: 8,
          backgroundColor: login() == true ? color.primary : color.disable,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 100,
        }}
        onPress={() => navigation.navigate("Welcome", { name: "Welcome" })}
      >
        <Text style={styles.btn_text}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>
          Bạn chưa có tài khoản? Đăng ký{" "}
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate("Welcome", { name: "Welcome" })}
          >
            tại đây!.
          </Text>{" "}
        </Text>
      </TouchableOpacity>
      <View style={styles.social_wrap}>
        <Text style={styles.social_text}>Đăng nhập với</Text>
        <View style={styles.signIn_wrap}>
          <Image source={images.signIn_fb} style={styles.signIn_image} />
          <Image source={images.signIn_gg} style={styles.signIn_image} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 10,
    width: "100%",
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  icon: {
    marginTop: 25,
    color: color.primary,
    fontSize: 20,
    fontWeight: "400",
  },
  top: {
    flexDirection: "row",
    marginTop: 100,
    marginBottom: 30,
  },
  top_text: {
    flex: 2,
    fontSize: 32,
    fontWeight: "600",
    color: "black",
  },
  top_image: {
    flex: 3,
    justifyContent: "flex-end",
    width: 46,
    height: "auto",
  },
  item_wrap: {
    margin: 7,
  },
  item_text: {
    fontSize: 15,
    color: color.primary,
  },
  error: {
    fontSize: 15,
    color: color.danger,
  },
  item_input: {
    height: 40,
    color: "#b6b7b8",
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: color.primary,
  },

  btn_text: {
    height: 40,
    padding: 9,
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  text: {
    marginTop: 14,
    color: color.primary,
    fontSize: fontSize.h6,
    alignSelf: "center",
  },
  signup: {
    fontWeight: "800",
  },
  social_wrap: {
    marginTop: 40,
    marginHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: color.primary,
  },
  social_text: {
    paddingHorizontal: 30,
    backgroundColor: "white",
    marginTop: -11,
    alignSelf: "center",
    fontSize: 16,
    color: "black",
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

export default SignIn;
