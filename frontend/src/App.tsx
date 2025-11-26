import "./App.css";
import { useUsers } from "./hooks/useUsers";

function App() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users</p>;

  return (
    <ul>
      {data?.users?.map((u: any) => (
        <p>
          {u.id} - {u.name}
        </p>
      ))}
    </ul>
  );
}

export default App;
