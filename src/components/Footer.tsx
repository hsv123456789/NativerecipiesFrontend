import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
export default function Footer() {
  const date: Date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="first_part">
        <h1>Native Recipies</h1>
        <p>shared with love ❤️</p>
      </div>
      <div className="second_part">
        <div>{"  "}</div>
        <div>© {year} Harisrevatcha | All rights reserved</div>
      </div>
      <div className="third_part">
        {" "}
        <div className="">
          Follow us on
          <div className="social_media_div">
            <a href="">
              <AiOutlineInstagram />
            </a>
            <a href="">
              <AiOutlineFacebook />
            </a>
            <a href="">
              <AiOutlineTwitter />
            </a>
            <a href="">
              <AiOutlineYoutube />
            </a>
          </div>
        </div>{" "}
        <div>{""} </div>
      </div>
    </footer>
  );
}
