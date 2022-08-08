import React from 'react'
import styles from './index.module.css'
import CartAddManager from '../CartAddManager'

const ItemInfo = () => {
	const itemInfo = {
		name: "Fall Limited Edition Sneakers",
		price: 250.00
	}
	return (
		<div className={styles.itemInfo}>
			<p className={styles.companyName}>SNEAKER COMPANY</p>
			<h1 className={styles.itemName}>Fall Limited Edition Sneakers</h1>
			<p className={styles.itemDescription}>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
			<h2 className={styles.itemPriceWithDiscount}>$125.00</h2>
			<p className={styles.itemRealPrice}>$250.00</p>
			<CartAddManager  itemInfo={ itemInfo }/>
		</div>
	)
}

export default ItemInfo