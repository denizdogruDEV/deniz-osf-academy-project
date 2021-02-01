import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/pdp-images/pdp-1.jpg",
    thumbnail: "/pdp-images/pdp-1-small.jpg",
  },
  {
    original: "/pdp-images/pdp-2.jpg",
    thumbnail: "/pdp-images/pdp-2-small.jpg",
  },
  {
    original: "/pdp-images/pdp-3.jpg",
    thumbnail: "/pdp-images/pdp-3-small.jpg",
  },
  {
    original: "/pdp-images/pdp-4.jpg",
    thumbnail: "/pdp-images/pdp-4-small.jpg",
  },
];

class MyGalleryMobile extends React.Component {
  render() {
    return (
      <ImageGallery
        thumbnailPosition="bottom"
        showNav={false}
        showPlayButton={false}
        items={images}
      />
    );
  }
}
export default MyGalleryMobile;
