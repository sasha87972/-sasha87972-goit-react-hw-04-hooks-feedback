import PropTypes from "prop-types";
import React from "react";
import NotificationMsg from "./notification.styles";

const Notification = ({ message }) => {
  return <NotificationMsg>{message}</NotificationMsg>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;
