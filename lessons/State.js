
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const State = ({text}) => {
    const [count,setCount]= useState(0);
    const[data,setData]=useState({
        isLoaded:false,
        data:[]
    })
    const [model,setModel]= useState(false);
    useEffect(()=>{
        setData({
            isLoaded: true,
            data: []
        })
    },[data.isLoaded])
    return(
        <View>
            <Text>
                {count}
            </Text>
            <Text>{model?"show":'hidden'}</Text>
            <Text>{data.isLoaded?"data":'loading...'}</Text>
            <Button title={"tawng"}
                    onPress={()=>setData({isLoaded: !data.isLoaded,data: []})}
            />

        </View>
    );

}
export default Props;
