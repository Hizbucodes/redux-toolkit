import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

const TimeAgo = ({ timestamp }) => {
  let timeago = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeago = `\n${timePeriod} ago`;
  }
  return <span>{timeago}</span>;
};

export default TimeAgo;
