// @ts-nocheck

import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import { image500 } from '../api/moviedb';
import CustomItem from './customCarouselItem';
import { parallaxLayout } from "./parallax";
import { useSharedValue } from 'react-native-reanimated';


var {width, height} = Dimensions.get('window');


export default function TrendingMovies ({data}) {
    const navigation = useNavigation();
    
    const handleClick = (item) => {
      navigation.navigate("Movie", item);
    };
  
    return (
      <View className="flex-1 mb-8 p-3">
        <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
        <View>
        <Carousel
          loop={true}
          className="rounded-2xl "
          autoPlay={true}
          data={data}
          // renderItem={(item) => <MovieCard item={item.item} key={item.index} handleClick={handleClick} />}
          width={width}
          height={height * .5}
          renderItem={({ item }) => {
            return (
              <View>
                <MovieCard
                key={item.index}
                item={item}
                handleClick={handleClick}
                />
              </View>
            );
          }}
          customAnimation={parallaxLayout(
            {
              size: width/2,
              vertical: false,
            },
            {
              parallaxScrollingScale: 1,
              parallaxAdjacentItemScale: 0.5,
              parallaxScrollingOffset: 40,
            },
          )}
          scrollAnimationDuration={2000}
        />
        </View>
      </View>
    );
  }
  
const MovieCard = ({item, handleClick})=>{
  const sv = useSharedValue(3);
    return (
        <TouchableWithoutFeedback key={item} onPress={() => handleClick(item)} >

            <CustomItem
                key={item.id}
                source = {{uri: image500(item.poster_path)}}
                animationValue={sv}
              />


            {/* <Image 
                source = {{uri: image500(item.poster_path)}}
                style={{
                    width: width * .6,
                    height: height *.5,
                }}
                className="rounded-2xl" 
            /> */}
        </TouchableWithoutFeedback>
    )
}