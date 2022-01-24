import PropTypes from "prop-types";
import React from "react";
import { SectionItem, Title } from "./section.styles";

const Section = ({ title, children }) => {
  return (
    <SectionItem>
      <Title>{title}</Title>
      {children}
    </SectionItem>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
