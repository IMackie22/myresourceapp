import React from'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Directory(props) {

    const renderDirectoryItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/Volunteer.jpg')}}
            />
        );
    };

    return (
        <FlatList
            data={props.homescreen}
            renderItem={renderDirectoryItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;
