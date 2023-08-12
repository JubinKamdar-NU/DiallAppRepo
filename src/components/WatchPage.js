import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions, SafeAreaView, TouchableOpacity, Share } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// Video Data

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
  const [videoStates, setVideoStates] = useState(data.map((item, index) => ({ isPlaying: index === 0 })));

  const togglePlayPause = (index) => {
    const updatedStates = [...videoStates];
    updatedStates[index].isPlaying = !updatedStates[index].isPlaying;
    setVideoStates(updatedStates);
  };

  const shareVideo = async (uri,title) => {
    console.log(uri,title)
    try {
      await Share.share({
        title:title,
        url: uri,
      });
    } catch (error) {
      console.error(error.message);
    }
  };


  const renderVideoItem = ({ item, index }) => (
    <SafeAreaView style={styles.videoContainer}>
      <Video
        source={{ uri: item.uri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode='cover'
        shouldPlay={videoStates[index].isPlaying}
        style={styles.video}
      />
      <TouchableOpacity
        style={styles.playPauseButton}
        onPress={() => togglePlayPause(index)}>
        <Ionicons
          name={videoStates[index].isPlaying ? 'pause' : 'play'}
          size={32}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.shareButton}
        onPress={() => shareVideo(item.uri,item.title)}>
        <Ionicons
          name="share"
          size={32}
          color="white"
        />
        </TouchableOpacity>
      <View style={styles.videoInfoContainer}>
        <Text style={styles.videoTitle}>{item.title}</Text>
        <Text style={styles.username}>By {item.username}</Text>
      </View>
    </SafeAreaView>
  );

  useEffect(() => {
    // Automatically pause other videos when the first video starts playing
    if (videoStates[0].isPlaying) {
      const updatedStates = videoStates.map((state, index) => ({
        ...state,
        isPlaying: index === 0,
      }));
      setVideoStates(updatedStates);
    }
  }, [videoStates[0].isPlaying]);

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
    height: height - 70,
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -16 }, { translateY: -16 }],
    zIndex: 1,
  },
  shareButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
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
