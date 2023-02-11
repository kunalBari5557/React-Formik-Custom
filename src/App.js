import "./App.css";
import YoutubeForm from "./component/YoutubeForm";
import { useFormik } from "formik";
import DateArray from "./component/DateArray";
import FormikContainer from "./components/FormikContainer";
import FormikControl from "./components/FormikControl";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import EnrollmentForm from "./components/EnrollmentForm";

function App() {
  return (
    <div>
      <EnrollmentForm />
    </div>
  );
}

export default App;
