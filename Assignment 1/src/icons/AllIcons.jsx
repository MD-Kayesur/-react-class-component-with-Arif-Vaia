// src/icons/AllIcons.js
import { Component } from "react";
import { FaYoutube, FaSearch } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export class Allicons extends Component {
  renderIcon = () => {
    const { icon, className } = this.props;

    switch (icon) {
      case "youtube":
        return <FaYoutube className={className} />;
      case "search":
        return <FaSearch className={className} />;
      case "contact":
        return <IoMdContact className={className} />;
      default:
        return null;
    }
  };

  render() {
    return <>{this.renderIcon()}</>;
  }
}
