import { useState } from "react";
import "./App.css";
import ActivityForm from "./components/ActivityForm";
import Activity from "./components/Activity";
import ActivityList from "./components/ActivityList";

let initialState = [
  {
    id: 1,
    priority: "1",
    title: "Título",
    description: "Primeira Atividade",
  },
  {
    id: 2,
    priority: "2",
    title: "Título",
    description: "Segunda Atividade",
  },
];

function App() {
  const [activities, setActivities] = useState(initialState);

  function addActivity(e) {
    e.preventDefault();

    const nextId =
      activities.length > 0
        ? Math.max(...activities.map((activity) => Number(activity.id))) + 1
        : 1;

    const id = document.getElementById("id").value;
    const priority = document.getElementById("priority").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (priorityLabel(priority) === "Não definido") {
      alert("Por favor, selecione uma prioridade válida.");
      return;
    }

    const newActivity = {
      id: nextId, //document.getElementById("id").value,
      priority: document.getElementById("priority").value,
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
    };

    setActivities([...activities, { ...newActivity }]);
  }

  function deleteActivity(id) {
    const activityFiltered = activities.filter(
      (activity) => activity.id !== id
    );
    setActivities([...activityFiltered]);
  }

  function priorityLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }
  return (
    <>
      <ActivityForm addActivity={addActivity} activities={activities} />
      <ActivityList
        activities={activities}
        priorityLabel={priorityLabel}
        deleteActivity={deleteActivity}
      />
    </>
  );
}

export default App;
