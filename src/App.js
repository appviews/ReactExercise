import "./styles.css";

export default function App() {
  const d = new Date();
  var name = "Veena P";
  // var year = Date.year
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <p>Created by {`${name}`}</p>
      <p>Copyright {d.getFullYear()}</p>
    </div>
  );
}
