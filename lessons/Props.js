import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Props = ({text}) => {
    const [count,setCount]= useState(0);
    return(
        <View>
            <Text>
                {typeof {count}}
            </Text>
            <Button title={"tawng"}
            onPress={()=>(setCount+1)}
            />

        </View>
    );

}
export default Props;
