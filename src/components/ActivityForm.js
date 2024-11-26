import React, { useEffect, useState } from "react";

const initialActivity = {
  id: 0,
  title: "",
  priority: 0,
  description: "",
};

export default function ActivityForm(props) {
  const [activity, setActivity] = useState(actualActivity());

  useEffect(() => {
    if (props.selectedActivity.id !== 0) setActivity(props.selectedActivity);
  }, [props.selectedActivity]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  function actualActivity() {
    if (props.selectedActivity.id !== 0) {
      return props.selectedActivity;
    } else {
      return initialActivity;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(props.selectedActivity.id !== 0)
        props.updateActivity(activity);
    else 
        props.addActivity(activity);
    setActivity(initialActivity);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    props.cancelActivity();
    setActivity(initialActivity);
  };

  return (
    <>
      <h1>{activity.id !== 0 ? "Atividade " + activity.id : "Atividades"}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
            name="title"
            value={activity.title}
            onChange={inputTextHandler}
            id="title"
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            name="priority"
            value={activity.priority}
            onChange={inputTextHandler}
            id="priority"
            className="form-select"
          >
            <option defaultValue="0">Selecionar...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
            name="description"
            value={activity.description}
            onChange={inputTextHandler}
            id="description"
            type="text"
            className="form-control"
          />
        <hr />
        </div>
        <div className="col-12 mt-0">
          {activity.id === 0 ? (
            <button className="btn btn-outline-secondary" type="submit">
              <i className="fas fa-plus me-2"></i>
              Atividade
            </button>
          ) : (
            <>
              <button className="btn btn-outline-success me-2" type="submit">
                <i className="fas fa-floppy-disk me-2"></i>Salvar
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={handleCancel}
              >
                <i className="fas fa-rectangle-xmark me-2"></i>Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
}
