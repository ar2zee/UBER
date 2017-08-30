import React from 'react';
import { View, Text} from 'react-native';

import { Container } from 'native-base';

import MapContainer from './MapContainer';

class Home extends React.Component{

	componentDidMount(){
		this.props.getCurrentLocation();
	}

	render(){
		const region = {
			latitude: 29.885150,
			longitude: -95.544834,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		}
		return(
			<Container>
				{ this.props.region.latitude && 
					<MapContainer region={this.props.region} />
				}
			</Container>
		);
	}
}

export default Home;