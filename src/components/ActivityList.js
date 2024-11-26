import React from "react";
import Activity from "./Activity";

export default function ActivityList(props) {
  return (
    <div className="mt-3">
      {props.activities.map((activity) => (
        <Activity
          key={activity.id}
          activity={activity}
          priorityLabel={props.priorityLabel}
          priorityIcon={props.priorityIcon}
          deleteActivity={props.deleteActivity}
          editActivity={props.editActivity}
        />
      ))}
    </div>
  );
}
