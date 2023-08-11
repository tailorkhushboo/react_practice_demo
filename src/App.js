// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


//let name = "chirag";

// function funData(user) {
//   return user.firstname + " " + user.lastname;
// }

// const user = {
//   firstname: "Taylor",
//   lastname: "khush",
// };

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <TextForm heading="Enter the your text..."/>
        {/* <About /> */}
      </div>
      {/* <Navbar title="TextUtils" aboutText="This is a about text."/> */}
    </>
  );
}

export default App;
