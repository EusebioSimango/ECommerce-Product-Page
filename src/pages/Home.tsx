import React from 'react'
import ItemInfo from '../components/ItemInfo'
import ImageViewer from '../components/ImageViewer'

const Home = () => {
	return (
		<div className="homeContainer">
			<ImageViewer />
			<ItemInfo />
		</div>
	)
}

export default Home