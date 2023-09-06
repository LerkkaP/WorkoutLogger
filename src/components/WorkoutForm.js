import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetForm } from "../reducers/formReducer";

import { insertWorkout } from "../actions/WorkoutActions";

import { v4 as uuidv4 } from "uuid";

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleWorkout = async () => {
    if (!formData.date.match(dateRegex)) {
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
              reps: parseFloat(formData.reps),
              kg: parseFloat(formData.load),
            },
          ],
        },
      ],
    };

    dispatch(insertWorkout(newWorkout));
    dispatch(resetForm());
  };

  const dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;

  return (
    <div>
      Date (dd/MM/yyyy)
      <input
        type="text"
        name="date"
        value={formData.date}
        onChange={(e) => dispatch(updateFormData({ date: e.target.value }))}
      />
      Exercise
      <input
        type="text"
        name="exercise"
        value={formData.exercise}
        onChange={(e) => dispatch(updateFormData({ exercise: e.target.value }))}
      />
      Reps
      <input
        type="number"
        name="reps"
        value={formData.reps}
        onChange={(e) => dispatch(updateFormData({ reps: e.target.value }))}
      />
      Load (kg)
      <input
        type="number"
        name="load"
        value={formData.load}
        onChange={(e) => dispatch(updateFormData({ load: e.target.value }))}
      />
      <button type="submit" onClick={handleWorkout}>
        Create
      </button>
    </div>
  );
};

export default WorkoutForm;
