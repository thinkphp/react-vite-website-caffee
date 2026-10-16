import React, { useState } from "react";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [toggleCoffee, setToggleCoffee] = useState(true);
  const [toggleTea, setToggleTea] = useState(false);
  const [toggleFood, setToggleFood] = useState(false);
  const [toggleSnack, setToggleSnack] = useState(false);
  const [toggleOther, setToggleOther] = useState(false);
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu That fits your Palete" />
        <h1 className="headtext__cormorant">Menu</h1>
      </div>
      <div className="app__menu-selection">
        <ul className="app__menu-selection-links">
          <li className="p__opensans">
            <button
              type="button"
              className={`selection__button ${toggleCoffee ? "active" : ""}`}
              onClick={() => (
                setToggleCoffee(true),
                setToggleTea(false),
                setToggleFood(false),
                setToggleSnack(false),
                setToggleOther(false)
              )}
            >
              Coffee
            </button>
          </li>
          <li className="p__opensans">
            <button
              type="button"
              className={`selection__button ${toggleTea ? "active" : ""}`}
              onClick={() => (
                setToggleCoffee(false),
                setToggleTea(true),
                setToggleFood(false),
                setToggleSnack(false),
                setToggleOther(false)
              )}
            >
              Tea
            </button>
          </li>
          <li className="p__opensans">
            <button
              type="button"
              className={`selection__button ${toggleFood ? "active" : ""}`}
              onClick={() => (
                setToggleCoffee(false),
                setToggleTea(false),
                setToggleFood(true),
                setToggleSnack(false),
                setToggleOther(false)
              )}
            >
              Food
            </button>
          </li>
          <li className="p__opensans">
            <button
              type="button"
              className={`selection__button ${toggleSnack ? "active" : ""}`}
              onClick={() => (
                setToggleCoffee(false),
                setToggleTea(false),
                setToggleFood(false),
                setToggleSnack(true),
                setToggleOther(false)
              )}
            >
              Snack
            </button>
          </li>
          <li className="p__opensans">
            <button
              type="button"
              className={`selection__button ${toggleOther ? "active" : ""}`}
              onClick={() => (
                setToggleCoffee(false),
                setToggleTea(false),
                setToggleFood(false),
                setToggleSnack(false),
                setToggleOther(true)
              )}
            >
              Other
            </button>
          </li>
        </ul>
      </div>
      {toggleCoffee && (
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_wine flex__center">
            <div className="app__specialMenu-menu_items">
              {data.coffee.map((coffee, index) => (
                <MenuItem
                  key={coffee.title + index}
                  title={coffee.title}
                  price={coffee.price}
                  tags={coffee.tags}
                />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_img">
            <img src={images.coffee} alt="coffee img" />
          </div>
        </div>
      )}
      {toggleTea && (
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_cocktail flex__center">
            <div className="app__specialMenu-menu_items">
              {data.tea.map((tea, index) => (
                <MenuItem
                  key={tea.title + index}
                  title={tea.title}
                  price={tea.price}
                  tags={tea.tags}
                />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_img">
            <img src={images.tea} alt="tea img" />
          </div>
        </div>
      )}
      {toggleFood && (
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_cocktail flex__center">
            <div className="app__specialMenu-menu_items">
              {data.food.map((food, index) => (
                <MenuItem
                  key={food.title + index}
                  title={food.title}
                  price={food.price}
                  tags={food.tags}
                />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_img">
            <img src={images.food} alt="food img" />
          </div>
        </div>
      )}
      {toggleSnack && (
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_cocktail flex__center">
            <div className="app__specialMenu-menu_items">
              {data.snack.map((snack, index) => (
                <MenuItem
                  key={snack.title + index}
                  title={snack.title}
                  price={snack.price}
                  tags={snack.tags}
                />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_img">
            <img src={images.snack} alt="snack img" />
          </div>
        </div>
      )}
      {toggleOther && (
        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_cocktail flex__center">
            <div className="app__specialMenu-menu_items">
              {data.other.map((other, index) => (
                <MenuItem
                  key={other.title + index}
                  title={other.title}
                  price={other.price}
                  tags={other.tags}
                />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_img">
            <img src={images.other} alt="other img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecialMenu;
