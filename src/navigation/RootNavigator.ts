import {Animated, Easing} from "react-native";
import {createAppContainer, createStackNavigator} from "react-navigation";
import LoginScreens from "./LoginScreens";

const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 500,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;

            const thisSceneIndex = scene.index;
            const width = layout.initWidth;

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            });

            return {transform: [{translateX}]};
        },
    };
};

const RootNavigator = createStackNavigator({LoginScreens: LoginScreens},
    {
        headerMode: "none",
        transitionConfig: TransitionConfiguration,
    });

export default createAppContainer(RootNavigator);
