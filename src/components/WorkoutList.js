import { useSelector } from "react-redux";

const WorkoutList = () => {
  const data = useSelector((state) => state);

  return data.workouts.map((workout, i) => (
    <div key={i}>
      <p>Date {workout.date}</p>
      {workout.exercises.map((exercise, i) => (
        <div key={i}>
          <p>{exercise.name}</p>
          <p>work sets</p>
          <div className="reps">
            {exercise.sets.map((sets, i) => (
              <p key={i}>{sets.reps}/</p>
            ))}
          </div>
          <div className="sets">
            {exercise.sets.map((sets, i) => (
              <p key={i}>{sets.kg}/</p>
            ))}
          </div>
        </div>
      ))}
      <hr></hr>
    </div>
  ));
};

export default WorkoutList;
