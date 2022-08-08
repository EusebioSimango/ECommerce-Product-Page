import React, { useState } from 'react'
import styles from './index.module.css'
import Cart from '../../assets/icon-cart.svg'


const CartAddManager = () => {

	const [itemQuantity, setItemQuantity] = useState<Number>(0)

	return (
		<div className={styles.cartAddManager}>
			<div className={styles.controler}></div>
			<button className={styles.addToCart}>
				<img src={Cart} alt="Cart Icon"/>
				Add to cart
			</button>
		</div>
	)
}

export default CartAddManager