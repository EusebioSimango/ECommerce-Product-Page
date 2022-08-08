import React from 'react'
import Prod1 from './../../assets/image-product-1.jpg'
import styles from './index.module.css'
import Prod1Thumbnail from './../../assets/image-product-1-thumbnail.jpg'

const ImageViewer = () => {
  return (
    <div className={styles.imageViewer}>
      <div className={styles.currentImage}>
        <img className={styles.active} src={Prod1}/>
      </div>
      <div className={styles.imageNavegation}>
        <div className={styles.imageThumbnail}>
          <img src={Prod1Thumbnail}/>
        </div>
        <div className={styles.imageThumbnail}>
          <img src={Prod1Thumbnail}/>
        </div>
        <div className={styles.imageThumbnail}>
          <img src={Prod1Thumbnail}/>
        </div>
        <div className={styles.imageThumbnail}>
          <img src={Prod1Thumbnail}/>
        </div>
      </div>
    </div>
  )
}

export default ImageViewer;
