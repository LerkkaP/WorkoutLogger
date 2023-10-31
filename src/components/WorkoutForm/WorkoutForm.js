import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetForm } from "../../reducers/formReducer";

import { insertWorkout } from "../../actions/WorkoutActions";
import styles from "./WorkoutForm.module.css";

const dateRegex = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;

const WorkoutForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(({ form }) => form);

  const isValidRepsAndLoad = (reps, kg) => {
    return !isNaN(reps) && !isNaN(kg);
  };

  const isValidDate = (date) => {
    return date.match(dateRegex);
  };

  const handleWorkout = async () => {
    const reps = parseFloat(formData.reps);
    const kg = parseFloat(formData.load);

    if (!isValidRepsAndLoad(reps, kg)) {
      alert("Reps and load must be valid numbers");
      return;
    }

    if (!isValidDate(formData.date)) {
      alert("Invalid date format. Please use dd/MM/yyyy.");
      dispatch(resetForm());
      return;
    }
    const newWorkout = {
      date: formData.date,
      exercises: [
        {
          name: formData.exercise,
          sets: [
            {
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
          className={styles.field}
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
          className={styles.field}
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
          className={styles.field}
          type="number"
          name="reps"
          value={formData.reps}
          onChange={(e) => dispatch(updateFormData({ reps: e.target.value }))}
        />
      </div>
      <div>
        Load (kg)
        <input
          className={styles.field}
          type="number"
          name="load"
          value={formData.load}
          onChange={(e) => dispatch(updateFormData({ load: e.target.value }))}
        />
      </div>
      <div>
        <button className={styles.btn} type="submit" onClick={handleWorkout}>
          Create
        </button>
      </div>
    </div>
  );
};

export default WorkoutForm;
