import "./styles/main.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div
      className="max-w-[1344px] mx-auto flex flex-col
     items-center my-20"
    >
      <img src={logo} />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo{" "}
        </span>
        está aqui.
      </h1>
      <div className="grind grid-cols-6 gap-6">
    <a href=""></a>

      </div>
    </div>
  );
}

export default App;
