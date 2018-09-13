import React from 'react';
import {Link} from 'react-router-dom';  
import {inject,observer} from 'mobx-react';
@inject('ecomStore')
@observer 
class Cartbutton extends React.Component { 	
	render(){		
		return (
			<div>
				<div className="text-right">
					<Link to={'/cart'}><i className="material-icons">shopping_cart</i>{this.props.ecomStore.cart.length}</Link>
				</div>		  
			</div>
		);
	}
	
}

export default Cartbutton;