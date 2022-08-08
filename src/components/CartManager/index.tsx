import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { cartItem } from '../CartAddManager'

const CartManager = () => {
	const [isEmpty, setIsEmpty] = useState<boolean>(true)

	useEffect(() => {
		if (cartItem > 0) setIsEmpty(false)
	}, [cartItem])

	return (
		<div className={styles.cart}>
			<div className={styles.cartHead}>
			Cart
			</div>
			<div className={styles.cartBody}>
			{ isEmpty && <p className={styles.cartEmpty}
			>Your Cart is empty</p> }
			</div>
		</div>
	)
}

export default CartManager