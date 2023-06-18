import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_188}>
        <Text style={styles.Text_2_188}>Turn 2</Text>
      </View>
      <View style={styles.View_2_189}>
        <Text style={styles.Text_2_189}>0 VP</Text>
      </View>
      <View style={styles.View_2_190}>
        <View style={styles.View_2_191} />
        <View style={styles.View_2_192}>
          <Text style={styles.Text_2_192}>Primary</Text>
        </View>
        <View style={styles.View_2_193}>
          <Text style={styles.Text_2_193}>0</Text>
        </View>
        <View style={styles.View_2_194}>
          <Text style={styles.Text_2_194}>+</Text>
        </View>
        <View style={styles.View_2_195}>
          <Text style={styles.Text_2_195}>-</Text>
        </View>
      </View>
      <View style={styles.View_2_196}>
        <View style={styles.View_2_197} />
        <View style={styles.View_2_198}>
          <Text style={styles.Text_2_198}>Secondary 1</Text>
        </View>
        <View style={styles.View_2_199}>
          <Text style={styles.Text_2_199}>0</Text>
        </View>
        <View style={styles.View_2_200}>
          <Text style={styles.Text_2_200}>+</Text>
        </View>
        <View style={styles.View_2_201}>
          <Text style={styles.Text_2_201}>-</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca3cfcb7-68e2-429f-88db-f3ee4c4eb2e1"
          }}
          style={styles.ImageBackground_2_202}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f038c65-5f29-40ec-863d-755ccd461a99"
          }}
          style={styles.ImageBackground_2_203}
        />
        <View style={styles.View_2_204}>
          <Text style={styles.Text_2_204}>?</Text>
        </View>
        <View style={styles.View_2_205}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bde206df-7045-4935-8b8d-f3b189ca8a9d"
            }}
            style={styles.ImageBackground_2_206}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/016ab93c-de23-4160-aeb0-e24038f8fa69"
            }}
            style={styles.ImageBackground_2_207}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d8cdc50-ac35-40f0-9145-59748518b8ce"
            }}
            style={styles.ImageBackground_2_208}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c36e3a3e-53b1-442c-ac7e-3be1cdf91028"
            }}
            style={styles.ImageBackground_2_209}
          />
          <View style={styles.View_2_210}>
            <Text style={styles.Text_2_210}>Created by reniakotonoha</Text>
          </View>
          <View style={styles.View_2_211}>
            <Text style={styles.Text_2_211}>from the Noun Project</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_212}>
        <View style={styles.View_2_213} />
        <View style={styles.View_2_214}>
          <Text style={styles.Text_2_214}>Secondary 2</Text>
        </View>
        <View style={styles.View_2_215}>
          <Text style={styles.Text_2_215}>0</Text>
        </View>
        <View style={styles.View_2_216}>
          <Text style={styles.Text_2_216}>+</Text>
        </View>
        <View style={styles.View_2_217}>
          <Text style={styles.Text_2_217}>-</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/996c0cd7-0e15-4b41-9f8a-2191d5ec4497"
          }}
          style={styles.ImageBackground_2_218}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b794368-91a5-494e-95ba-a72fec39287a"
          }}
          style={styles.ImageBackground_2_219}
        />
        <View style={styles.View_2_220}>
          <Text style={styles.Text_2_220}>?</Text>
        </View>
        <View style={styles.View_2_221}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae309c85-23dc-404c-8002-ecb58294502b"
            }}
            style={styles.ImageBackground_2_222}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6aa88f09-492a-42b3-b53d-d4e72c069d83"
            }}
            style={styles.ImageBackground_2_223}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1dc58750-f1e6-4e42-8164-95347310a17e"
            }}
            style={styles.ImageBackground_2_224}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8e4bf58d-f9b5-44e9-942a-994145304c74"
            }}
            style={styles.ImageBackground_2_225}
          />
          <View style={styles.View_2_226}>
            <Text style={styles.Text_2_226}>Created by reniakotonoha</Text>
          </View>
          <View style={styles.View_2_227}>
            <Text style={styles.Text_2_227}>from the Noun Project</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_390}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_7"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef0b2768-7367-46d0-a044-0ddb136ddbbc"
          }}
          style={styles.ImageBackground_2_391}
        />
        <View style={styles.View_2_393}>
          <Text style={styles.Text_2_393}>Created by Shiva</Text>
        </View>
        <View style={styles.View_2_394}>
          <Text style={styles.Text_2_394}>from the Noun Project</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_2_188: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 51,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_189: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_2_189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_190: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("28%")
  },
  View_2_191: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_2_192: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_193: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_194: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_194: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_195: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_195: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_196: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("56%")
  },
  View_2_197: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_2_198: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_199: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_200: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_200: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_201: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_201: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_202: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  ImageBackground_2_203: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("20%")
  },
  View_2_204: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_204: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_205: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_206: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_207: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_208: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_209: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_210: {
    width: wp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_211: {
    width: wp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_212: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("85%")
  },
  View_2_213: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_2_214: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_215: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 64,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_216: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_216: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_217: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_217: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_218: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  ImageBackground_2_219: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("20%")
  },
  View_2_220: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_221: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_222: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_223: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_224: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_225: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_226: {
    width: wp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_226: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_227: {
    width: wp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_227: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_390: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_391: {
    width: wp("7%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_393: {
    width: wp("8%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_393: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 4,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_394: {
    width: wp("10%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_394: {
    color: "rgba(81, 81, 81, 1)",
    fontSize: 4,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
