import { useSelector } from "react-redux";

const WorkoutList = () => {
  const workouts = useSelector((state) => state);
  return console.log(workouts);
};

export default WorkoutList;
