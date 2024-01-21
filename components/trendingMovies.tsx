import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
// import { image500 } from '../api/moviedb';

var {width, height} = Dimensions.get('window');

export default function TrendingMovies ({data}) {
    const navigation = useNavigation();
    
    // const handleClick = (item) => {
    //   navigation.navigate("Movie", item);
    // };
  
    return (
      <View className="mb-8 h-full p-3">
        <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
        <Carousel
          style={{flex:1, alignItems:'center', width:width,}}
          data={data}
          renderItem={(item) => <MovieCard item={item} />}
          width={width * .7}
          height={height * .6}
        />
      </View>
    );
  }
  
const MovieCard = ({item, handleClick}:any)=>{

    return (
        <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
            <View className="mx-4">
            <Image 
                // source={require('../assets/images/moviePoster1.png')} 
                source={{uri: "https://picsum.photos/300"}} 
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