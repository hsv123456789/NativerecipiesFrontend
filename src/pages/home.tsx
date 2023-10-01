import { useState } from "react";
import Cover from "../assets/Cover.jpg";
import { useEffect } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import CaesarsSalad from "../assets/CaesarsSalad.jpg";
import animeMale from "../assets/animeMale.jpg";
import animeFemale from "../assets/animeFemale.jpg";
import Flag_of_India from "../assets/Flag_of_India.png";
import Biriyani from "../assets/Biriyani.jpg";
import Baguette from "../assets/baguette.jpg";

export default function Home() {
  const [continents, setContinent] = useState([
    "Asia",
    "Europe",
    "Americas",
    "Africa",
  ]);
  let [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const counterManager = () => {
      if (count < 3) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setCount(0);
      }
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 10);
    };
    const continentInterval = setInterval(counterManager, 2000);
    return () => clearInterval(continentInterval);
  }, [count]);

  return (
    <>
      <div className="block_one">
        <div className="block_one_part_one">
          <h2>
            The best place to find rare and unique recipies from different
            cultures in{" "}
            {isVisible && (
              <span className={`continent fade-animation`}>
                {continents[count]}
              </span>
            )}
          </h2>
        </div>
        <div className="block_one_part_two">
          <img src={Cover}></img>
        </div>
      </div>

      <div className="block_two">
        <div className="block_two_part_one">
          <h1>
            Easily acecssible recipies with overview in the form of cards{" "}
          </h1>
          <h3>
            Find all the recipies easily with the inbuilt search bars and see
            the basic discription about them in unique card format before
            viewing them completly
          </h3>
        </div>
        <div className="block_two_part_two">
          <Card
            title="Caesar's Salad"
            source={CaesarsSalad}
            cusine="Western"
            country="🇲🇽/Mexico"
            description=" A protien rich saldad made up of plant based and animal based protien
          originated in mexico Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. A, assumenda eos, quis porro commodi illo sit
          consequuntur dolores facere unde est laudantium consectetur quae
          corporis deserunt vel voluptate similique impedit."
            id="first_card"
          ></Card>
          <Card
            title="Biriyani"
            source={Biriyani}
            cusine="SouthAsian"
            country="🇮🇳/India"
            description=" A rich protien meal filled with meat and spices highly nutritious yet tasty originated in modern southern india 
              Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. A, assumenda eos, quis porro commodi illo sit
          consequuntur dolores facere unde est laudantium consectetur quae
          corporis deserunt vel voluptate similique impedit."
            id="second_card"
          ></Card>
          <Card
            title="Baguette"
            source={Baguette}
            cusine="Western"
            country="🇫🇷/France"
            description=" A traditional bread that is made in france which is quite longer than the usally served one . A, assumenda eos, quis porro commodi illo sit
          consequuntur dolores facere unde est laudantium consectetur quae
          corporis deserunt vel voluptate similique impedit."
            id="third_card"
          ></Card>
        </div>
      </div>
      <div className="block_three">
        <div className="block_three_part_one">
          <h1>Meet and connect with other members of the cooking community</h1>
          <h3>share intresting recipies with them and make a community</h3>
        </div>
        <div className="block_three_part_two">
          <div className="sample_chat">
            <div className="avatar_sample_chat1">
              <div className="chat_bubble">
                Hey did you check out the new recipies here
              </div>
              <img className="avatar" alt="user1" src={animeMale} />
            </div>
            <div className="avatar_sample_chat2">
              <div className="chat_bubble">yeah they seem good</div>
              <img className="avatar" alt="user2" src={animeFemale} />
            </div>
          </div>
          <div className="sample_communities">
            <div className="communities">
              <div className="container_nav">
                <p>Communities</p>
              </div>
              <div className="communities_scroll">
                <div className="communities_bar">
                  <img
                    src={Flag_of_India}
                    className="avatar_communities"
                    alt="Indian flag"
                  />
                  <p>Indian food enjoyers</p>
                </div>
                <div className="communities_bar">
                  <img
                    src={Flag_of_India}
                    className="avatar_communities"
                    alt="Indian flag"
                  />
                  <p>Indian food enjoyers</p>
                </div>
                <div className="communities_bar">
                  <img
                    src={Flag_of_India}
                    alt="Indian flag"
                    className="avatar_communities"
                  />
                  <p>Indian food enjoyers</p>
                </div>
                <div className="communities_bar">
                  <img
                    src={Flag_of_India}
                    alt="Indian flag"
                    className="avatar_communities"
                  />
                  <p>Indian food enjoyers</p>
                </div>
                <div className="communities_bar">
                  <img
                    src={Flag_of_India}
                    alt="Indian flag"
                    className="avatar_communities"
                  />
                  <p>Indian food enjoyers</p>
                </div>
                <div className="communities_bar">
                  <img
                    src={Flag_of_India}
                    alt="Indian flag"
                    className="avatar_communities"
                  />
                  <p>Indian food enjoyers</p>
                </div>
                <div className="communities_bar">
                  <img
                    src={Flag_of_India}
                    alt="Indian flag"
                    className="avatar_communities"
                  />
                  <p>Indian food enjoyers</p>
                </div>
                <div className="communities_bar">
                  <img
                    src={Flag_of_India}
                    alt="Indian flag"
                    className="avatar_communities"
                  />
                  <p>Indian food enjoyers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
