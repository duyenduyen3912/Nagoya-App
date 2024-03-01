import { ScrollView, StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Layout from "../components/Layout";
import StoryList from "../components/StoryListcard";
import { color, fontSize } from "../constants";
function SearchResult() {
  return (
    <Layout>
      <View style={style.heading}>
        <FontAwesome style={style.icon} name="arrow-left" />
        <Text style={style.title}>Trinh thám</Text>
      </View>
      <View style={style.filter}>
        <Text style={style.quantity}>34.5k</Text>
        <FontAwesome style={style.filterIcon} name="filter" />
      </View>
      <ScrollView style={style.storyList}>
        <StoryList
          image={require("../assets/story2.jpg")}
          title={"Bên nhau trọn đời"}
          author={"Cố Mạn"}
          review={
            "Truyện Bên Nhau Trọn Đời là một trong những tiểu thuyết đầu tiên của tác giả Cố Mạn. Truyện tuy đã lâu nhưng vẫn để lại cho người đọc những ấn tượng riêng, đọc truyện ta sẽ không bị nhàm chán. Truyện xoay quanh những vấn đề tình yêu, với lối viết truyện cuốn hút, hấp dẫn người đọc nên truyện dễ dàng đi vào lòng người."
          }
          view={"78.7k"}
          star={"4.9"}
          chapterNumber={"90"}
          rank={"#1"}
        />
        <StoryList
          image={require("../assets/story1.jpg")}
          title={"Mãi mãi là bao xa"}
          author={"Cố Mạn"}
          review={
            "Bạch Lăng Lăng, nữ sinh khoa Điện khí, trẻ trung, xinh đẹp và rất tự hào khi quen được một người bạn lý tưởng qua mạng, chàng du học sinh của một trường nổi tiếng của Mỹ, người mang biệt danh “nhà khoa học”: Mãi Mãi Là Bao Xa. Qua những cuộc chuyện trò trên QQ, Lăng Lăng đã gắn bó với chàng trai đó lúc nào cô cũng không hay, cảm xúc lớn dần, sự chia sẻ lớn dần và đến một ngày cô phát hiện ra mình đã yêu người con trai “tài giỏi” và không một chút khuyết điểm ấy. Nhưng sự tỉnh táo giúp cô ý thức được rằng, thế giới mạng chỉ là ảo, họ ở cách nhau cả một đại dương mênh mông, anh lại quá xuất sắc và ưu tú, mối quan hệ của họ sẽ không có kết quả gì. Nhất là khi anh thông báo, nếu anh tiếp tục sự nghiệp nghiên cứu lần này, rất có thể anh phải định cư bên Mỹ, mãi mãi không trở về. Khi nghe tin đó, cô đã gục xuống trước màn hình máy tính và khóc. Tất cả như sụp đổ, tia hy vọng cuối cùng dập tắt, anh sẽ không về nước nữa, khoảng cách giữa họ là mãi mãi… Cô cay đắng nói với anh lời từ biệt và đưa nick của anh vào danh sách đen, không bao giờ xuất hiện khi cô đăng nhập QQ..."
          }
          view={"78.7k"}
          star={"4.9"}
          chapterNumber={"90"}
          rank={"#2"}
        />
        <StoryList
          image={require("../assets/story3.jpg")}
          title={"Rất nhớ, rất nhớ anh"}
          author={"Mặc Bảo Phi Bảo"}
          review={
            "Với lối viết truyện nhẹ nhàng, quyến luyến, tác giả Mặc Bảo Phi Bảo đã lấy đi không ít nước mắt của các độc giả trong truyện Rất Nhớ, Rất Nhớ Anh. Nói đến những chuyện tình online, người ta luôn nghĩ đến những câu chuyện nửa vời, ấp ấp mở mở rất thú vị, hai người luôn có mơ ước được gặp nhau, để xem người yêu ngoài đời của mình có đẹp không?"
          }
          view={"78.7k"}
          star={"4.9"}
          chapterNumber={"90"}
          rank={"#3"}
        />
        <StoryList
          image={require("../assets/story4.jpg")}
          title={"Tam sinh tam thế, Thập lý đào hoa"}
          author={"Đường Thất Công Tử"}
          review={
            "Tam Sinh Tam Thế - Thập Lý Đào Hoa truyện thuộc thể loại ngôn tình cổ đại của tác giả Đường Thất Công Tử rất nổi tiếng mà người đọc mê truyện không thể bỏ qua được."
          }
          view={"78.7k"}
          star={"4.9"}
          chapterNumber={"90"}
          rank={"#4"}
        />
      </ScrollView>
    </Layout>
  );
}

const style = StyleSheet.create({
  heading: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomColor: "#d5d5d5",
    borderBottomWidth: 1,
  },
  icon: {
    fontSize: fontSize.h3,
  },
  title: {
    width: "100%",
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    fontSize: fontSize.h3,
    fontWeight: "600",
  },
  filter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  quantity: {
    color: color.text,
  },
  filterIcon: {
    color: color.text,
    fontSize: 16,
  },
});

export default SearchResult;
