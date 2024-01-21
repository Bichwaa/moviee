//@ts-nocheck
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';

var {width, height} = Dimensions.get('window');


export default function TrendingMovies ({data}) {
    const navigation = useNavigation();
    
    const handleClick = (item) => {
      console.log("trending movies handerrrrrr=====>")
      navigation.navigate("Movie", item); // @ts-ignore
    };
  
    return (
      <View className="flex-1 mb-8 h-full p-3">
        <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
        <View>
        <Carousel
        autoPlay={false}
          style={{flex:1, alignItems:'center', width:width,}}
          data={data}
          renderItem={(item) => <MovieCard item={item.item} key={item.index} handleClick={handleClick} />}
          width={width * .7}
          height={height * .6}
        />
        </View>
      </View>
    );
  }
  
const MovieCard = ({item, handleClick})=>{

    return (
        <TouchableWithoutFeedback key={item} onPress={() => handleClick(item)} >
            <View className="mx-4">
            <Image 
                source = {{uri: image500(item.poster_path)}}
                style={{
                    width: width * .6,
                    height: height *.5,
                }}
                className="rounded-2xl" 
            />
            </View>
        </TouchableWithoutFeedback>
    )
}