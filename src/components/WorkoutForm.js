import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetForm } from "../reducers/formReducer";

import { insertWorkout } from "../actions/WorkoutActions";

import { v4 as uuidv4 } from "uuid";

const dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleWorkout = async () => {
    const reps = parseFloat(formData.reps);
    const kg = parseFloat(formData.load);

    if (isNaN(reps) || isNaN(kg)) {
      alert("Reps and load must be valid numbers");
      return;
    }
    if (!formData.date.match(dateRegex)) {
      alert("Invalid date format. Please use dd/MM/yyyy.");
      dispatch(resetForm());
      return;
    }
    const newWorkout = {
      date: formData.date,
      exercises: [
        {
          exercise_id: uuidv4(),
          name: formData.exercise,
          sets: [
            {
              set_id: uuidv4(),
              reps: reps,
              kg: kg,
            },
          ],
        },
      ],
    };

    dispatch(insertWorkout(newWorkout));
    dispatch(resetForm());
  };
  return (
    <div>
      <div>
        {" "}
        Date (dd/MM/yyyy)
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={(e) => dispatch(updateFormData({ date: e.target.value }))}
        />
      </div>
      <div>
        {" "}
        Exercise
        <input
          type="text"
          name="exercise"
          value={formData.exercise}
          onChange={(e) =>
            dispatch(updateFormData({ exercise: e.target.value }))
          }
        />
      </div>
      <div>
        Reps
        <input
          type="number"
          name="reps"
          value={formData.reps}
          onChange={(e) => dispatch(updateFormData({ reps: e.target.value }))}
        />
      </div>
      <div>
        Load (kg)
        <input
          type="number"
          name="load"
          value={formData.load}
          onChange={(e) => dispatch(updateFormData({ load: e.target.value }))}
        />
      </div>
      <div>
        <button type="submit" onClick={handleWorkout}>
          Create
        </button>
      </div>
    </div>
  );
};

export default WorkoutForm;
