import React from "react";

import "./Link.css";

const Link = ({ title, link, modifier }) => {
  return (
    <li className="link">
      <a
        className={`link__item link__item_type_${modifier}`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {title}
      </a>
    </li>
  );
};

export default Link;
