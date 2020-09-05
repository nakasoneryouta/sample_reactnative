import React from 'react';
import styles from './styles'
import { View, TouchableOpacity } from 'react-native';

type Props = {
}

const component: React.FC<Props> = ({}) => {

	return (
        <TouchableOpacity style = {styles.container}>
        </TouchableOpacity>
	)

}

export default React.memo(component);