import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { images } from "../constants";
import { UIButton } from "../components";
function Welcome({ navigation }) {
  const [accountType, setAccountType] = useState([
    {
      title: "Tác giả",
      isSelected: false,
    },
    {
      title: "Độc giả",
      isSelected: false,
    },
    {
      title: "Quản lý",
      isSelected: false,
    },
  ]);

  return (
    <View style={{ flex: 10, height: "100vh" }}>
      <ImageBackground
        source={images.backgroundWelcome}
        resizeMode="cover"
        style={{ flex: 1, width: "100%", paddingTop: 30 }}
      >
        <View style={styles.item_row}>
          <View style={styles.item_left}>
            <Image
              style={styles.image}
              source={require("../assets/fire.png")}
            />
            <Text style={styles.name_header}>NAGOYA</Text>
          </View>

          <FontAwesome name="question" style={styles.icon} />
        </View>
        <View style={styles.item_column}>
          <Text style={styles.text}>Chào mừng bạn đến với</Text>

          <Text style={styles.name_wc}>NAGOYA</Text>
          <Text style={styles.text}>Hãy chọn loại tài khoản.</Text>
        </View>
        <View style={styles.select}>
          {accountType.map((item, index) => {
            return (
              <UIButton
                key={index}
                onPress={() => {
                  let newType = accountType.map((selected) => {
                    return {
                      ...selected,
                      isSelected: selected.title === item.title,
                    };
                  });
                  setAccountType(newType);
                }}
                title={item.title}
                isSelected={item.isSelected}
              ></UIButton>
            );
          })}
        </View>
        <View style={styles.next}>
          <UIButton
            title="Tiếp theo"
            onPress={() => navigation.navigate("Signup", { name: "Signup" })}
          ></UIButton>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  item_row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    paddingRight: 10,
    paddingLeft: 10,
  },
  item_column: {
    marginTop: 120,
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  item_left: {
    flexDirection: "row",
    alignItems: "center",
  },
  name_header: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  name_wc: {
    marginLeft: 10,
    marginBottom: 6,
    marginTop: 6,
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  text: {
    fontSize: 14,
    color: "white",
  },
  image: {
    width: 22,
    height: 22,
  },

  icon: {
    color: "white",
    fontSize: 20,
    fontWeight: 300,
  },
  select: {
    marginTop: 26,
    alignItems: "center",
  },
  next: {
    marginTop: 200,
    alignItems: "center",
  },
});

export default Welcome;
