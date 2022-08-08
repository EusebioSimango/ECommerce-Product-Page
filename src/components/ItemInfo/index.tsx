import React from 'react'
import styles from 'index.modules.css'

const ItemInfo = () => {
	return (
		<div className={itemInfo}>
			<p>SNEAKER COMPANY</p>
			<h1 className={itemName}>Fall Limited Edition Sneakers</h1>
			<p className={itemDescription}>These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
			<h2 className={itemPriceWithDiscount}>$125.00</h2>
			<p className={itemRealPrice}>$250.00</p>
			<CartAddManager />
		</div>
	)
}

export default ItemInfo