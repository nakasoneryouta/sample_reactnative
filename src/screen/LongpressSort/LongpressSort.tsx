import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import DraggableFlatList from 'react-native-draggable-flatlist'

type Props = {
}

type Data = {
    key: number,
    label: string,
    backgroundColor: string
}

const component: React.FC<Props> = ({}) => {

      const [sampledata, setSampleData] = React.useState<Data[]>(
          [
                {key: 1,label: '1',backgroundColor: 'red'},
                {key: 2,label: '2',backgroundColor: 'orange'},
                {key: 3,label: '3',backgroundColor: 'blue'},
                {key: 4,label: '4',backgroundColor: 'green'},
      ])
      


    //   const _renderItem = ( item :any) => {
    //       console.log('呼び出し')
    //       console.log(item.backgroundColor)
    //     return (
    //     <View style = {{height: 100,backgroundColor: item.backgroundColor}}>
    //       <TouchableOpacity
    //         style={{
    //           height: 100,
    //           backgroundColor:'red',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //         }}
    //         onLongPress={item.move}
    //         onPressOut={item.moveEnd}
    //       >
    //         <Text style={{
    //           fontWeight: 'bold',
    //           color: 'white',
    //           fontSize: 32,
    //         }}>11</Text>
    //       </TouchableOpacity>
    //       </View>
    //     )
    //   }

	return (
        <View style={{ flex: 1 }}>
            <DraggableFlatList
                data={sampledata}
                renderItem={({item, index ,drag ,isActive}) =>
                {return(
                <TouchableOpacity
                    style={{
                      height: 100,
                      backgroundColor: isActive ? "gray" : item.backgroundColor,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    onLongPress={drag}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 32
                      }}
                    >
                      {item.label}
                    </Text>
                </TouchableOpacity>
                )}}
                keyExtractor={(item) => `draggable-item-${item.key}`}
                onDragEnd = {(data) => setSampleData(data.data)}
            />
      </View>
	)

}

export default React.memo(component);