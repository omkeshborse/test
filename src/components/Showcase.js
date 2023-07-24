import React from 'react'
import '../style/showcase.css'
import img1 from '../assets/div.png'
import img2 from '../assets/div-1.png'
import img3 from '../assets/div-2.png'
const Showcase = () => {
  return (
    <section className="showcase-section" id="showcase-section">
      <div className="left-showcase">
        <img src={img1} alt="showcase1" />
        <img src={img2} alt="showcase1" />
        <img src={img3} alt="showcase1" />
      </div>
      <div className="right-showcase">
        <h1>
          Lorem Ipsum Dolor <br /> <span>lorem ipsum</span>
        </h1>
        <div className="card">
          <h1>Lorem Ipsum Dolor</h1>
          <p>
            Enim in cupidatat consectetur eiusmod nostrud labore et velit culpa
            commodo. Ipsum anim reprehenderit id nostrud ullamco mollit sunt. Id
            enim consequat irure aute est qui veniam officia consectetur do sint
            cillum. Enim in cupidatat consectetur eiusmod nostrud labore et
            velit culpa commodo. Ipsum anim reprehenderit id nostrud ullamco
            mollit sunt. Id enim consequat irure aute est qui veniam officia
            consectetur do sint cillum. Enim in cupidatat consectetur eiusmod
            nostrud labore et velit culpa commodo. Ipsum anim reprehenderit id
            nostrud ullamco mollit sunt. Id enim consequat irure aute est qui
            veniam officia consectetur do sint{" "}
          </p>

          <button>join now</button>
        </div>
      </div>
    </section>
  );
}

export default Showcase