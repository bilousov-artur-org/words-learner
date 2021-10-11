import React, {useEffect, useState} from 'react';
import {
    FlatList,
    Image, StyleSheet,
    Text, View,
} from 'react-native';

import styles from '../Chat.style';

const baseUrl = 'https://randomuser.me/api/?seed=lol&inc=picture,name';

const getUsers = async(
    count: number = 10,
    page: number = 1,
    callback: (users: any) => void
) => {
    const user = await fetch(`${baseUrl}&page=${page}&results=${count}`);
    const parsedUser = await user.json();
    callback(parsedUser.results);
};

//todo: clean up: Structure Reference
const stub = {
    "name": {
        "first": "Mattie",
        "last": "De Fouw",
        "title": "Ms",
    },
    "picture": {
        "large": "https://randomuser.me/api/portraits/women/33.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/33.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/33.jpg",
    }
};

const renderItem = ({item} : {item: any}) => {
    return (
        <View style={styles.itemContainer} >
            <Image style={styles.avatar} source={{
                uri: item.picture.medium
            }}/>
            <Text style={styles.name}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
        </View>
    );
};

export default function LoginScreen() {

    const [users = [], setUsers] = useState([]);

    useEffect(() => {
        getUsers(100, 1, setUsers);
    }, []);

    return (
        <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={(item, index) => index + ''}
        />
    );
};
