import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { cartItem, cartItems } from '../CartAddManager'

const CartManager = () => {
	const [isEmpty, setIsEmpty] = useState<boolean>(true)

	useEffect(() => {
		if (cartItem > 0) setIsEmpty(false)
		console.log('ran')
	}, [cartItem])

	return (
		<div className={styles.cart}>
			<div className={styles.cartHead}>
			Cart
			</div>
			{console.log(cartItems)}
			<div className={styles.cartBody}>
			{ isEmpty && (
				<p className={styles.cartEmpty} >Your Cart is empty</p> 
			)}
				<div className={styles.item}>
					<p>{cartItems[0]?.name}</p>
				</div>
			</div>
		</div>
	)
}

export default CartManager