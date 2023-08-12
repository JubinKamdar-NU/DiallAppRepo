import React,{useState,useEffect} from "react";
import { SafeAreaView, View, TextInput, Text , FlatList, Image} from "react-native";

import { getFirestore, collection, getDocs } from 'firebase/firestore';

import {firebaseApp} from "../../config.js";


export default SearchPage = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const firestore = getFirestore(firebaseApp);
    

    const usersCollectionRef = collection(firestore, 'users');
    console.log(usersCollectionRef)

    getDocs(usersCollectionRef)
      .then((querySnapshot) => {
        const fetchedUsers = [];
        querySnapshot.forEach((doc) => {
          fetchedUsers.push(doc.data());
        });
        console.log(fetchedUsers)
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const filteredUsers = users.filter(user => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const hasUsername = user.username.toLowerCase().includes(lowercaseSearchTerm);
    const hasKeyword = user.keywords.some(keyword => keyword.toLowerCase().includes(lowercaseSearchTerm));
    
    return hasUsername || hasKeyword;
  });

  console.log(filteredUsers)


  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <Image source={{ uri: item.profilepic }} style={{ width: 50, height: 50, borderRadius: 25 }} />
      <Text style={{ marginLeft: 10 }}>{item.username}</Text>
    </View>
  );

  return (
    <View>
      <TextInput
        placeholder="Search users..."
        style={{ padding: 10, borderWidth: 1, borderColor: 'gray' }}
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />

      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

}

