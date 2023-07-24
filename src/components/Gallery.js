import React from "react";
import "../style/gallery.css";
import galleryimg1 from "../assets/component22.png";
import galleryimg2 from "../assets/Component23.png";
import galleryimg3 from "../assets/Component34.png";
import galleryimg4 from "../assets/Component35.png";
import galleryimg5 from "../assets/Component36.png";
import galleryimg6 from "../assets/Component38.png";
import galleryimg7 from "../assets/Component42.png";
import galleryimg8 from "../assets/Component43.png";
import galleryimg9 from "../assets/Component44.png";

const Gallery = () => {
  return (
    <>
      <section className="gallery-section" id="Blog">
        <h1>
          eiusmod nostrud labore et velit <br />
          culpa commodo. Ipsum anim
          <br />
          reprehenderit id nostrud
        </h1>
        <div className="gallery">
          <img src={galleryimg1} alt="galleryimg" />
          <img src={galleryimg2} alt="galleryimg" className="down" />
          <img src={galleryimg3} alt="galleryimg" />
          {/*  */}
          <img src={galleryimg4} alt="galleryimg" />
          <img src={galleryimg5} alt="galleryimg" className="down" />
          <img src={galleryimg6} alt="galleryimg" />
          {/*  */}
          <img src={galleryimg7} alt="galleryimg" />
          <img src={galleryimg8} alt="galleryimg" className="down" />
          <img src={galleryimg9} alt="galleryimg" />
        </div>
      </section>
    </>
  );
};

export default Gallery;
