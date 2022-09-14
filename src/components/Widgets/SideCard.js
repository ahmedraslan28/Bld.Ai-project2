import { React, useState } from "react";
import "../../Styles/CoursePage/SideCard.css";
import { BsDisplay, BsPhone } from "react-icons/bs";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { AiOutlineFile } from "react-icons/ai";
import { IoTrophyOutline } from "react-icons/io5";
import { BiInfinite } from "react-icons/bi";
function SideCard({ getperc, obj_sum }) {
  const [x, setX] = useState(true);
  window.onscroll = () => {
    if (window.scrollY > 400) setX(false);
    if (window.scrollY < 350) setX(true);
  };
  return (
    <div className="card">
      <img
        src={obj_sum.image_480x270}
        class="card-img-top"
        style={{ display: x ? "block" : "none" }}
      ></img>
      <div className="card-body">
        <div className="card-price">
          <span className="cur-price">
            {obj_sum.price.discount_price.price_string}
          </span>
          <span className="old-price">
            {obj_sum.price.list_price.price_string}
          </span>
          <span className="diss-perc">
            {getperc(
              obj_sum.price.discount_price.amount,
              obj_sum.price.list_price.amount
            )}
            % off
          </span>
        </div>
        <button type="button" className="btn addtocart">
          Add to cart
        </button>
        <button type="button" className="btn buynow">
          Buy now
        </button>
        <div className="gurantee">30-Day-Money-Back gurantee</div>
        <div className="course-include">
          <p className="txt">This course includes:</p>
          <p>
            <BsDisplay className="icon" />
            {obj_sum.content_info_short} hours on-demand video
          </p>
          <p>
            <AiOutlineFile className="icon" />1 article
          </p>
          <p>
            <HiOutlineFolderDownload className="icon" />3 downloadable resources
          </p>
          <p>
            <BiInfinite className="icon" />
            Full lifetime access
          </p>
          <p>
            <BsPhone className="icon" />
            Access on mobile and TV
          </p>
          <p>
            <IoTrophyOutline className="icon" />
            Certificate of completion
          </p>
        </div>
        <div className="flx">
          <a href="#">Share</a>
          <a href="#">Gift this course</a>
          <a href="#">apply coupon</a>
        </div>
      </div>
      <div className="cont">
        <div>Training 5 or more people?</div>
        <p>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <button type="button" className="btn buynow">
          Try Udemy Business
        </button>
      </div>
    </div>
  );
}

export default SideCard;
