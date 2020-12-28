import React from 'react';
import styles from './styles'
import { View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

type Props = {
}

const component: React.FC<Props> = ({}) => {

    const initlocation = {lat: 35.681236,long: 139.767125}

    const [location, setLocation ] = React.useState<{lat: number,long: number}>(initlocation)


    const getLocationAsync = async() =>{

        const {status} = await Permissions.askAsync(Permissions.LOCATION)
        if(status !== 'granted'){
          console.log('位置情報を入力')
        }
        const nowlocation = await Location.getCurrentPositionAsync({});
        let lat = (nowlocation.coords.latitude + initlocation.lat) / 2
        let long = (nowlocation.coords.longitude + initlocation.long) / 2
        setLocation({lat:lat,long: long})
      }

      React.useEffect(() => {
        getLocationAsync()

        let length = Math.sqrt(Math.pow(location.lat, 2) + Math.pow(location.long, 2))
        console.log("=======length===========",length)
    },[])


	return (
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 1,
            longitudeDelta: 1,
        }}
        showsUserLocation = {true}
        region={{
            latitude:location.lat,
            longitude:location.long,
            // latitudeDelta:0.1,
            // longitudeDelta:0.1,
          }}
        onRegionChangeComplete = {(region) => {console.log("==complete====",region)}}
        >
            <Marker
                    coordinate={{
                        latitude: 35.681236,
                        longitude: 139.767125,
                    }}
                    title={"東京駅"}
                    description={"JRの駅です。"}
                    onPress={()=>alert("click")}
            >
            </Marker>
        </MapView>
	)

}

export default React.memo(component);