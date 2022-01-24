import PropTypes from "prop-types";
import React from "react";
import { List, Button } from "./feedbackOptions.styles";

const FeedbackOptions = ({ items, feedback }) => {
  return (
    <List>
      {items.map((item) => (
        <li key={item.id}>
          <Button type="button" onClick={() => feedback(item.id)}>
            {item.type}
          </Button>
        </li>
      ))}
    </List>
  );
};
FeedbackOptions.propTypes = {
  feedback: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
export default FeedbackOptions;
