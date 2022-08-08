import React, {useState} from 'react'
import Prod1 from './../../assets/image-product-1.jpg'
import Prod2 from './../../assets/image-product-2.jpg'
import Prod3 from './../../assets/image-product-3.jpg'
import Prod4 from './../../assets/image-product-4.jpg'
import styles from './index.module.css'
import Prod1Thumbnail from './../../assets/image-product-1-thumbnail.jpg'
import Prod2Thumbnail from './../../assets/image-product-2-thumbnail.jpg'
import Prod3Thumbnail from './../../assets/image-product-3-thumbnail.jpg'
import Prod4Thumbnail from './../../assets/image-product-4-thumbnail.jpg'

const Prods = {
  ProdOne: {
    thumb: Prod1Thumbnail,
    image: Prod1
  },
  ProdTwo: {
    thumb: Prod2Thumbnail,
    image: Prod2
  },
  ProdThree: {
    thumb: Prod3Thumbnail,
    image: Prod3
  },
  ProdFour: {
    thumb: Prod4Thumbnail,
    image: Prod4
  }
}


const ImageViewer = () => {
  const [currentImage, setCurrentImage] = useState<string>(Prods.ProdOne.image)
  return (
    <div className={styles.imageViewer}>
      <div className={styles.currentImage}>
        <img className={styles.active} src={currentImage}/>
      </div>
      <div className={styles.imageNavegation}>
        <div className={styles.imageThumbnail}
          id={Prods.ProdOne.image}
          onClick={(e) => setCurrentImage(e.currentTarget.id)}
        >
          <img src={Prods.ProdOne.thumb}/>
        </div>
        <div className={styles.imageThumbnail}
          id={Prods.ProdTwo.image}
          onClick={(e) => setCurrentImage(e.currentTarget.id)}
        >
          <img src={Prods.ProdTwo.thumb}/>
        </div>
        <div className={styles.imageThumbnail}
          id={Prods.ProdThree.image}
          onClick={(e) => setCurrentImage(e.currentTarget.id)}
        >
          <img src={Prods.ProdThree.thumb}/>
        </div>
        <div className={styles.imageThumbnail}
          id={Prods.ProdFour.image}
          onClick={(e) => setCurrentImage(e.currentTarget.id)}
        >
          <img src={Prod4Thumbnail}/>
        </div>
      </div>
    </div>
  )
}

export default ImageViewer;
