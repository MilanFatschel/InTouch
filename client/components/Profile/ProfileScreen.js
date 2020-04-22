import React from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from "react-native";
import { Ionicons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"

import UserPermissions from './../../utilities/UserPermissions'
import { ScrollView } from "react-native-gesture-handler";

export class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
            name: String,
            email: String,
            avatar: null
        },
        avatar: null
    };
  }

  componentDidMount() {
  }

  async handleAvatarPick() {
      UserPermissions.getCameraPermissions();

      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3]
      })

      if(!result.cancelled) {
          this.setState({avatar: result.uri})
      }    
  }

  render() {
    const styles= StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
        },
        text: {
            fontFamily: "HelveticaNeue",
            color: "#52575D"
        },
        subText : {
            fontSize: 12,
            color: "#AEB5BC",
            textTransform: "uppercase",
            fontWeight: "500"
        },
        image: {
            flex: 1,
            width: 200,
            height: 200,
        },
        titleBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 24,
            marginHorizontal: 16
        },
        profileImage: {
            width: 200,
            height: 200,
            borderRadius: 100,
            overflow: "hidden"
        },
        addImage: {
            backgroundColor: "#41444B",
            position: "absolute",
            bottom: 0,
            right: 0,
            height: 60,
            width: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center"
        },
        infoContainer: {
            alignSelf: "center",
            alignItems: "center",
            marginTop: 16,
        },
        profilePlaceHolder: {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#E1E2E6",
            marginTop: 48,
            justifyContent: "center",
            alignItems: "center"
        },
        statsContainer: {
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 32
        },
        statsBox: {
            alignItems: "center",
            flex: 1
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style ={styles.titleBar}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.state.params.navigation.goBack(null)}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                  </TouchableOpacity>
                  <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
                </View>
                <View style={{alignSelf: "center"}}>
                  <TouchableOpacity
                  onPress={() => this.handleAvatarPick()}>
                    <View style={styles.profileImage}>
                      <Image source = {require("./../../images/default_user_profile.png")} 
                      style={styles.image}
                      resizeMode="center"/>
                    </View>
                      <View style={styles.addImage}>
                        <Ionicons
                        name="ios-add"
                        size={48}
                        color="#DFD8C8"
                        style= {{ marginTop: 6, marginLeft: 2 }}>
                        </Ionicons>
                      </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={[styles.text, { fontWeight: "200", fontSize: 36}]}>
                   Firstname Lastname
                  </Text>
                  <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14 }]}>
                    Username: {this.props.navigation.state.params.currentUserDetails.username}
                  </Text>
                </View>
                <View style={styles.statsContainer}>
                  <View style={styles.statsBox}>
                      <Text style={[styles.text, { fontSize: 24}]}>500</Text>
                      <Text style={[styles.text, styles.subText]}>Friends</Text>
                  </View>
                  <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1}]}>
                      <Text style={[styles.text, { fontSize: 24}]}>500</Text>
                      <Text style={[styles.text, styles.subText]}>Friends</Text>
                  </View>
                  <View style={styles.statsBox}>
                      <Text style={[styles.text, { fontSize: 24}]}>500</Text>
                      <Text style={[styles.text, styles.subText]}>Friends</Text>
                  </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
}