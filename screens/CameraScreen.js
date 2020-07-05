import React,{useState,useEffect} from "react";

import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity
} from "react-native";


import { FontAwesome } from "@expo/vector-icons";
import { Camera } from 'expo-camera';

const CameraScreen = ({route,navigation}) =>{

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [isFlashLightOn,setIsFlashLightOn] = useState(Camera.Constants.FlashMode.off);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const flipCamera = () =>{
        setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
    }

    const flashLight = () =>{
        setIsFlashLightOn(isFlashLightOn === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)
    }

    const takePicture = async () =>{
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            navigation.navigate("Home",{ photo : photo })
        }
    }

    if (hasPermission === null) {
        return (
            <View>
                <Text>Testing</Text>
            </View>
        );
    } else if (hasPermission === false) {
        return (
            <View>
                <Text>No access to camera</Text>
            </View>
        );
    } else if (hasPermission === true) {
        return (
            <Camera
                style={styles.cameraView}
                type={type}
                flashMode={isFlashLightOn}
                ref={ref => {
                    this.camera = ref;
                }}>

            <View style={styles.container}>
                <View style={styles.actionContainer}>
                    <TouchableOpacity
                        onPress={() => flipCamera()}
                        style={styles.iconHolder}
                    >
                        <FontAwesome name="camera" size={35} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => takePicture()}
                        style={styles.iconHolder}
                    >
                        <FontAwesome name="circle" size={35} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => flashLight()}
                        style={styles.iconHolder}
                    >
                        <FontAwesome name="flash" size={35} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            </Camera>
        );
    }


}

export default CameraScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cameraView: {
        flex: 1
    },
    actionContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent"
    },
    iconHolder: {
        flex: 1,
        alignItems: "center",
        alignSelf: "flex-end"
    },
    icon: {
        marginBottom: 10,
        color: "#fff"
    }
});