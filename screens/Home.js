import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const Home = ({route,navigation}) =>{
    let photo = null;
    if( route.params !== undefined) {
        photo = route.params.photo;
    }
    return(
        <View style={styles.container}>
            <Image
                resizeMode="center"
                style={styles.imageHolder}
                source={photo === null ? require("../assets/email.png") : photo}
            />
            <Button
                title="Take Photo"
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Camera");
                }}
            />
        </View>
    )
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    imageHolder: {
        alignSelf: "center",
        height: 500,
        margin: 20
    },
    button: {
        margin: 20
    }
});