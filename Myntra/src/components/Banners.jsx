const Banners = () => {
  return (
    <>
      <div className="bannerContainer">
        <img
          className="bannerImage"
          src="./src/imagesCSS/banner.jpg"
          alt="Banner"
        />
      </div>
      <div className="categoryHeading">
        <div className="coupon">
          <img
            className="couponBanner"
            src="./src/imagesCSS/offers/CouponCorner.webp"
            alt="coupon-banner"
          />
          <div className="couponContainer">
            <a href="#">
              <img
                id="c1"
                className="couponoffer"
                src="./src/imagesCSS/offers/c1.webp"
                alt="100rs"
              />
            </a>
            <a href="#">
              <img
                id="c2"
                className="couponoffer"
                src="./src/imagesCSS/offers/c2.webp"
                alt="200rs"
              />
            </a>
          </div>
        </div>
        <img
          className="festiveOffer"
          src="./src/imagesCSS/offers/Festive Offer Heading.webp"
          alt="festive-Offer"
        />
        <span className="categoryTitle">MEDAL WORTHy brands to BAG</span>
      </div>
    </>
  );
};

export default Banners;
