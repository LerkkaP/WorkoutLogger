import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetForm } from "../reducers/formReducer";
import { createWorkout } from "../reducers/workoutReducer";

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);
  console.log(formData);

  const hardcodedDate = "31.12.2023";

  const handleWorkout = () => {
    const newExercise = {
      name: formData.exercise,
      sets: [{ reps: formData.reps, kg: formData.load }],
    };

    const exercises = [newExercise];

    dispatch(createWorkout(hardcodedDate, exercises));
    dispatch(resetForm());
  };

  /*const handleDateChange = (date) => {
    const formattedDate = date.toISOString();

    dispatch(updateFormData({ date: formattedDate }));
  };*/

  return (
    <div>
      {/*<DatePicker
        selected={formData.date}
        onChange={handleDateChange}
        dateFormat={"dd.MM.yyyy"}
        isClearable
  />*/}
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
