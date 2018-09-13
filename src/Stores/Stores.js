import {observable,action} from 'mobx';
class EcomStore{
	@observable cart=[];
	@action
	AddToCart(product){
		this.cart.push(product);		
	}
	@action
	RemoveFromCart(productid){ 
		console.log(this.cart);
		let modifiedCart=this.cart.filter(product=>product.id!==productid);
		this.cart=modifiedCart;	
	}
}
export default EcomStore;