import React from "react";
import "./Electronic.css";
import watch from "../../images/watch.png";
import iphone from "../../images/iphone.png";
import head from "../../images/head.png";
import air from "../../images/air.png";
export default function Electronic() {
  return (
    <div className="p2">
      <div className="links">
        <div>
          <a href="/" alt="auctions">
            All
          </a>
          <a href="/" alt="auctions">
            electronics
          </a>
          <a href="/" alt="auctions">
            Clothes
          </a>
          <a href="/" alt="auctions">
            Electricity
          </a>
          <a href="/" alt="auctions">
            Sale
          </a>
          <a href="/" alt="auctions">
            Sale
          </a>
          <a href="/" alt="auctions">
            Sale
          </a>
          <a href="/" alt="auctions">
            Sale
          </a>
          <a href="/" alt="auctions">
            More
          </a>
        </div>
      </div>
      <div className="ch1">
        <div className="cont1">
          <div className="cont1-1">
            <div className="d1"></div>
            <div className="d1"></div>
            <div className="d1"></div>
          </div>
          <div className="cont1-2"></div>
        </div>
        <div className="cont2">
          <h3>Electronics</h3>
          <p>
            iPhone 14 Pro Max, 256 GB memory, supports 5G technology, with the
            FaceTime (Product) application, purple
          </p>
          <p>
            The brand <span>: Apple</span>
          </p>
          <div className="cirs">
            <div className="c1"></div>
            <div className="c2"></div>
            <div className="c3"></div>
          </div>
          <h3>Specifications</h3>
          <p>
            6.7-inch Super Retina XDR display with Always On and Pro Motion
            functionality Dynamic Island, a magical new way to interact with
            iPhone 48-megapixel main camera with 4 times higher resolution
            Cinema mode now in Dolby Vision at 4K resolution up to 30 frames per
            second Motion mode for smooth, freely shot videos IMPORTANT SAFETY
            FEATURE - Accident detection, call for help if you can't All-day
            battery life and up to 29 hours of video playback
          </p>
          <div className="btns">
            <button className="btn1" type="submit">
              Add to cart
            </button>
            <button className="btn2">87,000 EGP</button>
          </div>
        </div>
      </div>
      <div className="dd">
        <h3>Similar sponsored items</h3>
      </div>
      <div className="ch2">
        <div className="d1">
          <button>Sale</button>
          <div className="content">
            <div className="img1">
              <img src={watch} alt="react logo" />
            </div>
            <h3>Apple Watch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur
            </p>
            <pre>
              <h5>
                $700<span> $600</span>
              </h5>
            </pre>
            <div className="dot">
              <ul>
                <li className="dot1"></li>
                <li className="dot2"></li>
                <li className="dot3"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d2">
          <button>Sale</button>
          <div className="content">
            <div className="img1">
              <img src={iphone} alt="react logo" />
            </div>
            <h3>Apple Watch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur
            </p>
            <pre>
              <h5>
                $700<span> $600</span>
              </h5>
            </pre>
            <div className="dot">
              <ul>
                <li className="dot1"></li>
                <li className="dot2"></li>
                <li className="dot3"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d3">
          <button>Sale</button>
          <div className="content">
            <div className="img1">
              <img src={head} alt="react logo" />
            </div>
            <h3>Apple Watch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur
            </p>
            <pre>
              <h5>
                $700<span> $600</span>
              </h5>
            </pre>
            <div className="dot">
              <ul>
                <li className="dot1"></li>
                <li className="dot2"></li>
                <li className="dot3"></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d4">
          <button>Sale</button>
          <div className="content">
            <div className="img1">
              <img src={air} alt="react logo" />
            </div>
            <h3>Apple Watch</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur
            </p>
            <pre>
              <h5>
                $700<span> $600</span>
              </h5>
            </pre>
            <div className="dot">
              <ul>
                <li className="dot1"></li>
                <li className="dot2"></li>
                <li className="dot3"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
