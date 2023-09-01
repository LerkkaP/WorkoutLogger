import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WorkoutForm = () => {
  return (
    <div>
      <DatePicker />
      Exercise
      <input type="text" />
      Sets
      <input type="number" />
      Reps
      <input type="number" />
    </div>
  );
};

export default WorkoutForm;
