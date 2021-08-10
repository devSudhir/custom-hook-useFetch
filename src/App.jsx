import { useFetch } from "./Hooks/useFetch";
import "./styles.css";

export default function App() {
  const { loading, data, error } = useFetch(
    "https://json-server-mocker-masai.herokuapp.com/users"
  );
  if (loading) {
    return <h2>Loading</h2>;
  }
  if (error) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <div className="App">
      <h1 style={{ color: "coral" }}>Masai Team</h1>
      {data.map((ele) => {
        return (
          <h3 key={ele.id}>
            {ele.id}. {ele.name}
          </h3>
        );
      })}
    </div>
  );
}
