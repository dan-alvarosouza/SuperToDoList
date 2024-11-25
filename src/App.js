import { useState } from "react";
import "./App.css";

let initialState = [
  {
    id: 1,
    description: "Primeira Atividade",
  },
  {
    id: 2,
    description: "Segunda Atividade",
  },
];

function App() {
  const [activities, setActivities] = useState(initialState);

  function addActivity(e) {
    e.preventDefault();

    const newActivity = {
      id: document.getElementById("id").value,
      description: document.getElementById("description").value,
    };

    setActivities([...activities, { ...newActivity }]);
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Id
          </label>
          <input id="id" type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Descrição
          </label>
          <input id="description" type="text" className="form-control" />
        </div>
        <hr />
        <div class="col-12">
          <button className="btn btn-outline-secondary" onClick={addActivity}>
            + Atividade
          </button>
        </div>
      </form>
      <div className="mt-3">
        {activities.map((activity) => (
          <div key={activity.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  <span className="badge bg-secondary me-1">{activity.id}</span>
                  - título
                </h5>
                <h6>
                  Prioridade: Normal
                  <span className="ms-1 text-black">
                    <i className="me-1 fa-brands fa-gripfire"></i>
                    <i className="me-1 fa-brands fa-gripfire"></i>
                  </span>
                </h6>
              </div>
              <p className="card-text">{activity.description}</p>
              <div className="d-flex justify-content-end pt-2 m-0 border-top">
                <button className="btn-sm btn btn-outline-primary me-2">
                  <i className="fas fa-pen me-2"></i>
                  Editar
                </button>
                <button className="btn-sm btn btn-outline-danger me-2">
                  <i className="fas fa-trash me-2"></i>
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
