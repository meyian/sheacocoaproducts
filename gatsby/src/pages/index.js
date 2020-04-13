import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


import leafWallpaper from "../images/85274765-green-leaf-seamless-pattern-tropical-polygons-plant-in-low-poly-style-for-fresh-background-wallpaper.jpg"
import flowerProduct from "../images/IMG-20190127-WA0012.jpg"
import stemsProduct from "../images/IMG-20190601-WA0046.jpg"
import orangeProduct from "../images/IMG-20190601-WA0047.jpg"
import cinnamonProduct from "../images/IMG-20190601-WA0049.jpg"
import woodWallpaper from "../images/wood_bkgd.png"

const IndexPage = () => (

<Layout>

<section className="main">
<div className="main__jumbotron image-wrapper" style={{overflow: "visible", position: "relative"}}>
<div className="image-wrapper" style={{position: "absolute", "zIndex": -500}}>
<img alt="Large image of our product" className="jumbotron__image" src={stemsProduct} />




</div>
<div className="jumbotron__panel-wrapper">
<div className="jumbotron__panel">
<h1 className="jumbotron__text">[Just like nature intended]</h1>
</div>
<button className="jumbotron__cta btn-main">shop now</button>
</div>
</div>
<div className="main__favorites">
<div className="centered_row">
<h2 className="mt-5 mb-5 favorites__header">Our Favorites</h2>
</div>
<div className="container mt-4">
<div className="row special_row">
<div className="col-sm-6 favorites_column">
<div className="h-100 mr-5 favorites__text__1">
<h3>[Probiotic</h3>
<h3 className="mb-2">Cleansing Bars]</h3>
<p>[Im a paragraph. Click here to add your own text and edit me. Let your users get to know you.]</p>

<button className="btn-main mb-5 mt-2">Shop Soaps</button>
</div>
</div>
<div className="col-sm-6 favorites_column float-right">
<div className="image-wrapper product-images">
<div className="product__bkgd-wrapper__1 product__img-wrappers">
<img src={leafWallpaper} />
</div>
<div className="product__img-wrapper__1 product__img-wrappers product__wrapper">
<img src={flowerProduct} />
</div>
</div>
</div>
</div>
</div>
<div className="separator mt-4 mb-4">
&nbsp;
</div>
<div className="container mt-4 favorites__last">
<div className="row special_row">
<div className="col-sm-6 favorites_column float-right">
<div className="h-100 ml-5 favorites__text__2">
<h3>[Natures Essence</h3>
<h3 className="mb-2">Lavendar Bars]</h3>
<p>[Im a paragraph. Click here to add your own text and edit me. Let your users get to know you.]</p>
<button className="btn-main mb-5 mt-2">Shop Soaps</button>
</div>
</div>
<div className="col-sm-6 favorites_column">
<div className="image-wrapper product-images">
<div className="product__bkgd-wrapper__2 product__img-wrappers">
<img className="product__bkgd__2" src={woodWallpaper} />
</div>
<div className="product__img-wrapper__2 product__img-wrappers product__wrapper">
<img className="product__img__2" src={cinnamonProduct} />
</div>
</div>
</div>
</div>
</div>
<div className="separator mb-4 main__separator">
&nbsp;
</div>
</div>
</section>



  </Layout>
)

export default IndexPage

/*

<Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>

*/