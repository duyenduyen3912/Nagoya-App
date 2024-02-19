import { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import BestStorycard from "../components/BestStorycard";
import Category from "../components/Category";
import Layout from "../components/Layout";
import Postcard from "../components/Postcard";
import StoryCard from "../components/Storycard";
import { color, fontSize } from "../constants";

function Home({ navigation }) {
  const scrollViewRef = useRef();
  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const contentWidth = contentSize.width;
    const viewWidth = layoutMeasurement.width;

    // Nếu cuộn đến cuối, di chuyển ScrollView về phía trước một cách mượt mà
    if (contentOffset.x >= contentWidth - 2 * viewWidth) {
      scrollViewRef.current.scrollTo({ x: viewWidth, animated: false });
    }
    // Nếu cuộn đến đầu, di chuyển ScrollView về phía sau một cách mượt mà
    else if (contentOffset.x <= viewWidth) {
      scrollViewRef.current.scrollTo({
        x: contentWidth - 2 * viewWidth,
        animated: false,
      });
    }
  };
  return (
    <Layout>
      <SafeAreaView style={style.header}>
        <View style={style.headerItem}>
          <Image source={require("../assets/fire.png")} style={style.image} />
          <Text style={style.name}>NAGOYA</Text>
        </View>
        <View>
          <Image
            source={require("../assets/jisoo.jpg")}
            style={style.imageUser}
          />
        </View>
      </SafeAreaView>
      <ScrollView style={style.home}>
        <ScrollView
          horizontal={true}
          style={style.listPost}
          // ref={scrollViewRef}
          // scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          // autoplay
          // infinite
        >
          <Postcard
            img={require("../assets/healing.png")}
            title={"Danh sách các bộ truyện thể loại chữa lành hay nhất"}
            category={"CHỮA LÀNH"}
          />
          <Postcard
            img={require("../assets/love.png")}
            title={"Danh sách các bộ truyện thể loại ngôn tình hay nhất"}
            category={"NGÔN TÌNH"}
          />
          <Postcard
            img={require("../assets/codai.png")}
            title={"Danh sách các bộ truyện thể loại cổ đại hay nhất"}
            category={"CỔ ĐẠI"}
          />
          <Postcard
            img={require("../assets/detective.png")}
            title={"Danh sách các bộ truyện thể loại trinh thám hay nhất"}
            category={"TRINH THÁM"}
          />
        </ScrollView>
        <View style={style.block}>
          <Text style={style.title}>THỂ LOẠI</Text>
          <View style={style.categoryList}>
            <Category
              image={require("../assets/healing.png")}
              name={"Chữa lành"}
            />
            <Category
              image={require("../assets/love.png")}
              name={"Ngôn tình"}
            />
            <Category
              image={require("../assets/detective.png")}
              name={"Trinh thám"}
            />
            <Category
              image={require("../assets/lichsu.png")}
              name={"Lịch sử"}
            />
            <Category image={require("../assets/codai.png")} name={"Cổ đại"} />

            <Category
              image={require("../assets/xuyenkhong.png")}
              name={"Xuyên không"}
            />
            <Category
              image={require("../assets/trungsinh.png")}
              name={"Trùng sinh"}
            />
            <Category image={require("../assets/ma.png")} name={"Truyện ma"} />
          </View>
        </View>
        <View style={style.block}>
          <Text style={style.title}>MỚI CẬP NHẬT</Text>
          <View style={style.story}>
            <StoryCard
              image={require("../assets/story1.jpg")}
              title={"Mãi mãi là bao xa"}
              review={
                "Bạch Lăng Lăng, nữ sinh khoa Điện khí, trẻ trung, xinh đẹp và rất tự hào khi quen được một người bạn lý tưởng qua mạng, chàng du học sinh của một trường nổi tiếng của Mỹ, người mang biệt danh “nhà khoa học”: Mãi Mãi Là Bao Xa. Qua những cuộc chuyện trò trên QQ, Lăng Lăng đã gắn bó với chàng trai đó lúc nào cô cũng không hay, cảm xúc lớn dần, sự chia sẻ lớn dần và đến một ngày cô phát hiện ra mình đã yêu người con trai “tài giỏi” và không một chút khuyết điểm ấy. Nhưng sự tỉnh táo giúp cô ý thức được rằng, thế giới mạng chỉ là ảo, họ ở cách nhau cả một đại dương mênh mông, anh lại quá xuất sắc và ưu tú, mối quan hệ của họ sẽ không có kết quả gì. Nhất là khi anh thông báo, nếu anh tiếp tục sự nghiệp nghiên cứu lần này, rất có thể anh phải định cư bên Mỹ, mãi mãi không trở về. Khi nghe tin đó, cô đã gục xuống trước màn hình máy tính và khóc. Tất cả như sụp đổ, tia hy vọng cuối cùng dập tắt, anh sẽ không về nước nữa, khoảng cách giữa họ là mãi mãi… Cô cay đắng nói với anh lời từ biệt và đưa nick của anh vào danh sách đen, không bao giờ xuất hiện khi cô đăng nhập QQ..."
              }
            />
            <StoryCard
              image={require("../assets/story2.jpg")}
              title={"Bên nhau trọn đời"}
              review={
                "Truyện Bên Nhau Trọn Đời là một trong những tiểu thuyết đầu tiên của tác giả Cố Mạn. Truyện tuy đã lâu nhưng vẫn để lại cho người đọc những ấn tượng riêng, đọc truyện ta sẽ không bị nhàm chán. Truyện xoay quanh những vấn đề tình yêu, với lối viết truyện cuốn hút, hấp dẫn người đọc nên truyện dễ dàng đi vào lòng người."
              }
            />
            <StoryCard
              image={require("../assets/story3.jpg")}
              title={"Rất nhớ, rất nhớ anh"}
              review={
                "Với lối viết truyện nhẹ nhàng, quyến luyến, tác giả Mặc Bảo Phi Bảo đã lấy đi không ít nước mắt của các độc giả trong truyện Rất Nhớ, Rất Nhớ Anh. Nói đến những chuyện tình online, người ta luôn nghĩ đến những câu chuyện nửa vời, ấp ấp mở mở rất thú vị, hai người luôn có mơ ước được gặp nhau, để xem người yêu ngoài đời của mình có đẹp không?"
              }
            />
            <StoryCard
              image={require("../assets/story4.jpg")}
              title={"Tam sinh tam thế, thập lý đào hoa"}
              review={
                "Tam Sinh Tam Thế - Thập Lý Đào Hoa truyện thuộc thể loại ngôn tình cổ đại của tác giả Đường Thất Công Tử rất nổi tiếng mà người đọc mê truyện không thể bỏ qua được."
              }
            />
          </View>
        </View>
        <View style={style.block}>
          <Text style={style.title}>TRUYỆN ĐANG HOT</Text>
          <ScrollView
            horizontal={true}
            style={style.bestStory}
            showsHorizontalScrollIndicator={false}
          >
            <BestStorycard
              name={"Bên nhau trọn đời"}
              author={"Cố Mạn"}
              image={require("../assets/story2.jpg")}
              star={"4.8"}
            />
            <BestStorycard
              name={"Rất nhớ, rất nhớ anh"}
              author={"Mặc Bảo Phi Bảo"}
              image={require("../assets/story3.jpg")}
              star={"4.9"}
            />
            <BestStorycard
              name={"Mãi mãi là bao xa"}
              author={"Diệp Lạc Vô Tâm"}
              image={require("../assets/story1.jpg")}
              star={"4.9"}
            />
            <BestStorycard
              name={"Tam sinh tam thế, thập lý đào hoa"}
              author={"Đường Thất Công Tử"}
              image={require("../assets/story4.jpg")}
              star={"4.9"}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </Layout>
  );
}

const style = StyleSheet.create({
  wrap: {
    backgroundColor: "#fff",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9",
    borderBottomColor: "#d5d5d5",
    borderBottomWidth: 1,
  },
  headerItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 8,
    fontWeight: "600",
    fontSize: fontSize.h4,
  },
  image: {
    width: 16,
    height: 22,
  },
  imageUser: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  home: {
    marginTop: 53,
  },
  listPost: {
    marginVertical: 20,
  },
  block: {
    marginVertical: 6,
  },
  title: {
    paddingHorizontal: 20,
    color: color.title,
    fontWeight: "400",
    fontSize: fontSize.h4,
  },
  categoryList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  story: {
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  bestStory: {
    paddingHorizontal: 11,
    marginVertical: 10,
  },
});

export default Home;
