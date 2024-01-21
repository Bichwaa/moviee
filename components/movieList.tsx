//@ts-nocheck
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { image185, fallbackMoviePoster } from '../api/moviedb';

const {width, height} = Dimensions.get('window');

export default function MovieList({title, data, hideSeeAll}) {
  const movieName = 'Firecracker 2';
  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        {
          !hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">See all</Text>
          </TouchableOpacity>
          )
        }
      </View>

      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
          data.map((item, idx) => {
            return (
              <TouchableWithoutFeedback
                key={item}
                onPress={() => {
                  navigation.navigate('Movie', item);
                }}
              >
                <View className="space-y-1 mr-4">
                  <Image
                    source={{uri: image185(item.poster_path) || fallbackMoviePoster }}
                    className="rounded-3xl"
                    style={{
                      width: width * 0.5,
                      height: height * 0.4,
                    }}
                  />

                  <Text className="text-white ml-1">
                    { item?.title?.length > 14 ? item.title.slice(0, 14) + '...' : item.title }
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
      </ScrollView>
    </View>
  )
}