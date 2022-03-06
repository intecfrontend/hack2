import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import React, { useLayoutEffect } from "react";
import CustomListItem from "../Components/CustomListItem";
import { auth, db } from "../firebase";
import { TouchableOpacity } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";


const HomeScreen = ({ navigation }) => {

  const signOutUser = () => {
    auth.signOut().then(() => {
        navigation.replace("Login");
    });
  };

    useLayoutEffect(() =>{
            navigation.setOptions({
                title: "Signal",
                headerStyle: {backgroundColor: "white"},
                headerTitleStyle: {color: "black"},
                headerTinColor: "black",
                headerLeft: () => (
                    <View style={{marginLeft: 20 }}>
                        <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar rounded source={{uri: auth?.currentUser?.photoURL }} />
                        </TouchableOpacity>
                    </View>
                ),
                headerRight: () => (
                  <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,

                  }}>
                    <TouchableOpacity activeOpacity={0.5}> 
                      <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("AddChat")} activeOpacity={0.5}> 
                    <SimpleLineIcons name="pencil" size={25} color="black" />
                    </TouchableOpacity>
                  </View>
                ),
           
            });
           
    }, [navigation]);
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <View>
          <Text>Home Page</Text>
        </View> */}
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
