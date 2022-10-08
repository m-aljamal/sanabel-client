import React from "react";
import { LocationMarkerIcon, CalendarIcon } from "@heroicons/react/outline";

const DateLocation = ({ date, location }) => {
  return (
    <div className="sm:flex gap-2 items-center">
      <div className="flex gap-1 ">
        <CalendarIcon className="w-4 h-4 text-primaryPurple" />
        <p className="text-sm">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="flex gap-1   ">
        <LocationMarkerIcon className="w-4 h-4 text-primaryPurple" />
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
};

export default DateLocation;
