import React from 'react';
import {Row, Col,Button} from 'reactstrap';
import {inject,observer} from 'mobx-react';
@inject('ecomStore')
@observer
class Cart extends React.Component { 
		render(){		
			return (
			<div className="cartContainer">
			<Row className="cartHeader" style={{'marginBottom':'10px'}}>
				<Col lg="2"><strong>Image</strong></Col>
				<Col lg="6"><strong>Title</strong></Col>
				<Col lg="2"><strong>Quantity</strong></Col>
				<Col lg="2"><strong>Action</strong></Col>
			 </Row>	
			 {this.props.ecomStore.cart.map(product=>
					 <Row key={product.id} style={{'marginBottom':'10px'}}>
						<Col lg="2">
							<img style={{'width':'100%'}} className="img img-responsive" src={product.picture} alt={product.title}/>
						</Col>
						<Col lg="6">{product.title}</Col>
						<Col lg="2">1</Col>
						<Col lg="2">
							<Button onClick={()=>this.props.ecomStore.RemoveFromCart(product.id)} className="btn btn-danger btn-sm">Remove</Button>
						</Col>
					 </Row>	
						
				)		
			 }
			 </div>
			);	
	}
}

export default Cart;