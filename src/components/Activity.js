import React from "react";

export default function Activity(props) {
  function priorityIcon(priority) {
    const fireIcon = (color) => (
      <i className="me-1 fa-brands fa-gripfire" style={{ color }}></i>
    );

    switch (priority) {
      case "1":
        return fireIcon("blue");
      case "2":
        return (
          <>
            {fireIcon("orange")}
            {fireIcon("orange")}
          </>
        );
      case "3":
        return (
          <>
            {fireIcon("red")}
            {fireIcon("red")}
            {fireIcon("red")}
          </>
        );
      default:
        return "";
    }
  }
  return (
    <div className="card mb-2 shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge bg-secondary me-1">{props.activity.id}</span>
            - {props.activity.title}
          </h5>
          <h6>
            Prioridade: {props.priorityLabel(props.activity.priority)}
            <span className="ms-1 text-black">
              {priorityIcon(props.activity.priority)}
            </span>
          </h6>
        </div>
        <p className="card-text">{props.activity.description}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            className="btn-sm btn btn-outline-primary me-2"
            onClick={() => props.editActivity(props.activity.id)}
          >
            <i className="fas fa-pen me-2"></i>
            Editar
          </button>
          <button
            className="btn-sm btn btn-outline-danger"
            onClick={() => props.deleteActivity(props.activity.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}
