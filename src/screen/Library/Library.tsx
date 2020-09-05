import React from 'react';
import { KeyboardAvoidingView ,Image ,Text ,View} from 'react-native';

import { Asset } from 'expo-media-library';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import styles from './styles'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import PhotoShap from '../PhotoShap/PhotoShap';

type RenderItemProps = {
	index: number
	onPress: (index: number) => void
	isSelected: boolean;
	number?: number
	uri: string
}

interface Props {
	//initSelectedIndexs?: number[],
}

const component: React.FC<Props> = ({ }) => {

	const [state, setState] = React.useState<{
		assets: Asset[];
		endCursor: string;
		hasNextPage: boolean;
	  }>({
		assets: [],
		endCursor: '',
		hasNextPage: true,
	  });

	const [selectedIndex,setSelectedIndex] = React.useState(0);
	const [selectedIndexs,setSelectedIndexs] = React.useState<number[]>([]);
	// const { selectedIndex, selectedIndexs } = useSelector((state: RootState) => state.post)

	const getAssetsAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

		if (status !== 'granted') {
			alert('Sorry, we need camera roll permissions to make this work!');
		}

		MediaLibrary.getAssetsAsync().then(data => {
			setState(data);
		})
	}

	const getNextAssets = async () => {
	const options = {
		after: state.endCursor
	}

	MediaLibrary.getAssetsAsync(options).then(data => {
		setState(prev => {
		return {
			assets: [...prev.assets, ...data.assets],
			endCursor: data.endCursor,
			hasNextPage: data.hasNextPage
		}
		});
	})
	}

	React.useEffect(() => {
		getAssetsAsync();
	}, [])

	const pressImage = (i: number) => {

		// if (!selectedIndexs?.includes(i)) {

		// 	// 選択済み配列に含まれていない場合
		// 	setSelectedIndexs([...selectedIndexs,i]);
		// 	setSelectedIndex(i);
		// 	// dispatch(setSelectedIndexs(i))
		// 	// dispatch(setSelectedIndex(i))
		// 	let postItem: PostItem = {
		// 		uri: state.assets[i].uri
		// 	}
		// 	editPost((p)=>({items:[...p.items,postItem]}));
		// 	//dispatch(addPostItem(postItem))
		// }

		// else if (selectedIndexs?.includes(i) && selectedIndex != i) {
		// 	// 選択済み配列に含まれ、現在TOPに選択されていない場合
		// 	// TOP選択状態にする
		// 	setSelectedIndex(i);
		// 	//dispatch(setSelectedIndex(i))
		// }

		// else if (selectedIndexs?.includes(i) && selectedIndex == i) {
		// 	// 選択済み配列に含まれ、現在TOPに選択されている場合
		// 	// 選択済み配列から除外する
		// 	setSelectedIndexs(selectedIndexs.filter(value => value !== i));
		// 	const uri = state.assets[i].uri;
		// 	editPost((p)=>({items:p.items.filter((v)=>v.uri!=uri)}));
		// 	//dispatch(removeSelectedIndexs (i))
		// 	//dispatch(removePostItemByUri(state.assets[i].uri))

		// }

		// onChangeSelected && onChangeSelected(selectedIndexs);

	}

	//写真を選択したときのaction
	const RenderItem = React.memo((props: RenderItemProps) => {

	return (
		<TouchableOpacity onPress={() => {props.onPress(props.index)}}>
			<Image style={props.isSelected ? [styles.image,{opacity: 0.6}] :styles.image} source={{ uri: props.uri }} />
			{props.isSelected ?
				<View style={styles.numbericon}>
					<Text style = {styles.number_text}>{props.number}</Text>
				</View>
				:
				<></>
			}
		</TouchableOpacity>
		)
	
	})

	return (
		<View style = {{backgroundColor: 'red'}}>
			{/* <View style={styles.topImageContainer}>
				{state.assets.length > 0 ?
				<Image source={{ uri: selectedIndex == -1 ? state.assets[0].uri : state.assets[selectedIndex].uri}} style={styles.topImage} /> : null
				}
			</View> */}
            {state.assets.length > 0 ?
				    <PhotoShap uri = {state.assets[0].uri} />: null
            }
			{/* <FlatList
				data={state.assets}
				numColumns={4}
				keyExtractor={(_, index) => index.toString()}

				renderItem={({ item, index }) => (
				<RenderItem index={index} isSelected={selectedIndexs?.includes(index)} onPress={pressImage} uri={item.uri} number={selectedIndexs.indexOf(index) + 1} />
				)}
				onEndReached={() => getNextAssets()}
			/> */}

    </View>
	  )

}

export default React.memo(component);