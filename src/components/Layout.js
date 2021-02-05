import React from "react";
import Sidebar from "./Sidebar";
import "./layout.scss";
import PropTypes from 'prop-types';

export default function Layout(props) {
  return (
    <div className="Layout">
      <Sidebar />
      <div className="Content">{props.children}</div>
    </div>
  );
}

Layout.propTypes = {
    children: PropTypes.element.isRequired
};