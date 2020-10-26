import React from "react";
import { Link } from "gatsby";
import iconItemStyles from "./iconItem.module.scss";
const IconItem = (props) => {
  let item = props.cardData;
  return (
    <>
      <figure
        className={iconItemStyles.iconItem__card}
        key={item.link_to_detail.id}
      >
        <i className={`fas fa-3x ${item.font_awesome_name}`}></i>
        <h3>{item.extra_content.uid}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          quibusdam voluptates eaque nostrum voluptate modi repellat quas
          asperiores non sapiente illum impedit voluptatum vero dolor
          exercitationem ipsam harum, porro cumque?
        </p>
        <Link
          className={iconItemStyles.section__link}
          to={`/${item.link_to_detail.slug}`}
        >
          Read more...
        </Link>
      </figure>
    </>
  );
};
export default IconItem;
