/*import DatePicker from "react-datepicker";*/
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetForm } from "../reducers/formReducer";
import { insertWorkout } from "../reducers/workoutReducer";

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  const handleWorkout = async () => {
    const newWorkout = {
      date: "2.9.2023",
      exercises: [
        {
          name: formData.exercise,
          sets: [{ reps: formData.reps, kg: formData.load }],
        },
      ],
    };

    dispatch(insertWorkout(newWorkout));
    dispatch(resetForm());
  };

  return (
    <div>
      {/*<DatePicker
        selected={formData.date}
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
