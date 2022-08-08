import React, {useState} from 'react'
import styles from './index.module.css'
import Prod1 from './../../assets/image-product-1.jpg'
import Prod2 from './../../assets/image-product-2.jpg'
import Prod3 from './../../assets/image-product-3.jpg'
import Prod4 from './../../assets/image-product-4.jpg'
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

  const handleClick = (target: HTMLDivElement) => {
    const listNav = window.document.getElementsByClassName(target.className)
    const arrayListNav = [...listNav]
    arrayListNav.map((thumb: any) => {
      thumb.style.opacity = 'initial' 
      thumb.style.outline = 'none'
    })

    setCurrentImage(target.id)
    target.style.outline = '2px solid var(--orage)'
    target.style.outlineOffset = '2px'
    target.style.opacity = '0.5'
  }
  return (
    <div className={styles.imageViewer}>
      <div className={styles.currentImage}>
        <img src={currentImage}/>
      </div>
      <div className={styles.imageNavegation}>
        <div className={styles.imageThumbnail}
          id={Prods.ProdOne.image}
          onClick={(e) => {
            handleClick(e.currentTarget)
          }}
        >
          <img src={Prods.ProdOne.thumb}/>
        </div>
        <div className={styles.imageThumbnail}
          id={Prods.ProdTwo.image}
          onClick={(e) => {
            handleClick(e.currentTarget)
          }}
        >
          <img src={Prods.ProdTwo.thumb}/>
        </div>
        <div className={styles.imageThumbnail}
          id={Prods.ProdThree.image}
          onClick={(e) => {
            handleClick(e.currentTarget)
          }}
        >
          <img src={Prods.ProdThree.thumb}/>
        </div>
        <div className={styles.imageThumbnail}
          id={Prods.ProdFour.image}
          onClick={(e) => {
            handleClick(e.currentTarget)
          }}
        >
          <img src={Prod4Thumbnail}/>
        </div>
      </div>
    </div>
  )
}

export default ImageViewer;
