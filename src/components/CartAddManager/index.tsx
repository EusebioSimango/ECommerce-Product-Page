import React, { useState } from 'react'
import styles from './index.module.css'
import Cart from '../../assets/icon-cart.svg'

export var cartItem: number = 0

const addToCart = (itemQuantity) => {
	cartItem = cartItem + itemQuantity
	console.log(cartItem)
}

const CartAddManager = () => {

	const [itemQuantity, setItemQuantity] = useState<number>(0)

	const decrementQuantity = () => {
		if (itemQuantity > 0) setItemQuantity(itemQuantity - 1)
	}

	return (
		<div className={styles.cartAddManager}>
			<div className={styles.controler}>
				<span className={styles.minus}
					onClick={decrementQuantity}
				>-</span>
				<span>{ itemQuantity }</span> 
				<span className={styles.plus}
					onClick={() => setItemQuantity(itemQuantity + 1)}
				>+</span>
			</div>
			<button className={styles.addToCart}
				onClick={() => addToCart(itemQuantity)}
			>
				<img src={Cart} alt="Cart Icon"/>
				Add to cart
			</button>
		</div>
	)
}

export default CartAddManager