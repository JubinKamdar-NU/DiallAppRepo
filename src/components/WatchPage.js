import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, SafeAreaView } from 'react-native';

import { Video } from 'expo-av';

const { width, height } = Dimensions.get('window');


const data = [
  {
    id: '1',
    title: 'Video 1 Title',
    username: 'User 1',
    uri: 'https://firebasestorage.googleapis.com/v0/b/diallapp-574cb.appspot.com/o/DB7D0730-B961-41E1-8711-93DE9D1322A9.MP4?alt=media&token=1a8e014c-2589-4bde-8c13-ad0be11f4fec.mp4',
  },
  {
    id: '2',
    title: 'Video 2 Title',
    username: 'User 2',
    uri: 'https://firebasestorage.googleapis.com/v0/b/diallapp-574cb.appspot.com/o/DB7D0730-B961-41E1-8711-93DE9D1322A9.MP4?alt=media&token=1a8e014c-2589-4bde-8c13-ad0be11f4fec.mp4',
  },
  
];

const WatchPage = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const video = React.useRef(null);
  

  

  const renderVideoItem = ({ item }) => (
    <SafeAreaView style={styles.videoContainer}>
      <Video
        ref={video}
        source={{ uri: item.uri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode='cover'
        shouldPlay
        style={styles.video}
      />
      <View style={styles.videoInfoContainer}>
        <Text style={styles.videoTitle}>{item.title}</Text>
        <Text style={styles.username}>By {item.username}</Text>
      </View>
    </SafeAreaView>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderVideoItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  video: {
    width: width,
    height: height-70,
  },
  videoInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  videoTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    color: 'white',
    fontSize: 14,
  },
});

export default WatchPage;
