import { useState } from "react";
import "./App.css";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

function App() {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({id : 0});

  function addActivity() {
    const nextId =
      activities.length > 0
        ? Math.max(...activities.map((activity) => Number(activity.id))) + 1
        : 1;

    const id =
      activities.length > 0
        ? Math.max(...activities.map((activity) => Number(activity.id))) + 1
        : 1;
    const priority = document.getElementById("priority").value;
    
    if (priorityLabel(priority) === "Não definido") {
      alert("Por favor, selecione uma prioridade válida.");
      return;
    }

    const newActivity = {
      id: nextId,
      priority: document.getElementById("priority").value,
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
    };

    setActivities([...activities, { ...newActivity, id }]);
  }

  function cancelActivity() {
    setActivity({ id: 0 });
  }

  function updateActivity(activity) {
    setActivities(
      activities.map((item) => (item.id === activity.id ? activity : item))
    );
    setActivity({ id: 0 });
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

  function editActivity(id) {
    const activity = activities.filter((activity) => activity.id === id);
    setActivity(activity[0]);
  }

  return (
    <>
      <ActivityForm
        addActivity={addActivity}
        updateActivity={updateActivity}
        cancelActivity={cancelActivity}
        selectedActivity={activity}
        activities={activities}
      />
      <ActivityList
        activities={activities}
        priorityLabel={priorityLabel}
        deleteActivity={deleteActivity}
        editActivity={editActivity}
      />
    </>
  );
}

export default App;
