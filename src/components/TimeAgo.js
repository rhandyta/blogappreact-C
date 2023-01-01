import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

function TimeAgo({ timestamp }) {
    const date = parseISO(timestamp);
    const time = formatDistanceToNow(date);
    return <p className="font-thin text-sm text-slate-500">{time}</p>;
}

export default TimeAgo;
