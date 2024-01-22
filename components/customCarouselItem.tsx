import * as React from "react";
import type { ImageSourcePropType } from "react-native";
import { Image, StyleSheet, View,Dimensions } from "react-native";
import Animated, { interpolate, SharedValue, useAnimatedStyle,} from "react-native-reanimated";
import { BlurView as _BlurView } from "expo-blur";

var {width, height} = Dimensions.get('window');

interface ItemProps {
    source: ImageSourcePropType
    animationValue: SharedValue<number>
  }

  const BlurView = Animated.createAnimatedComponent(_BlurView);


  const CustomItem: React.FC<ItemProps> = ({ source, animationValue }) => {
    const maskStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [1, 0, 1],
      );
  
      return {
        opacity,
      };
    }, [animationValue]);
  
    return (
      <View
      className="flex-1 w-full items-center"
      >
        <Image
          source={source}
          style={{
            width: width * .5,
            height: height *.5,
        }}
        className="rounded-2xl" 
        />
        <BlurView
          intensity={50}
          pointerEvents="none"
          style={[StyleSheet.absoluteFill, maskStyle]}
        />
      </View>
    );
  };

  export default CustomItem;