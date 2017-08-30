import React from 'react';
import { Text} from 'react-native';
import { View, InputGroup, Input } from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './SearchBoxStyles.js';


export const SearchBox = () => {

	return(
		<View style={styles.searchBox}>
			<View style={styles.inputWrapper}>
				<Text style={styles.label}> PICK UP </Text>
				<InputGroup>
					<Icon name='search' size={15} color='#FF5E3A' />
						<Input style={styles.inputSearch} placeholder='Choose Pick-up Location' />
				</InputGroup>
			</View>

			<View style={styles.secondInputWrapper}>
				<Text style={styles.label}> DROP OFF</Text>
				<InputGroup>
					<Icon name='search' size={15} color='#FF5E3A' />
						<Input style={styles.inputSearch} placeholder='Choose Drop-off Location' />
				</InputGroup>
			</View>
		</View>
	);
};
export default SearchBox;