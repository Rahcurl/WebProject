import * as React from "react";

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["John Doe", "Jane Smith", "Alice Johnson"]);
    }, 3000);
  });
}

function ApiSimulation1() {
  const [users, setUsers] = React.useState([]);
  
  React.useEffect(() => {
    fetchData().then((data) => {
      setUsers(data); // Update state with the fetched list of users
    });
  }, []);

  return (
    <div>
      <ul>
        {users.length === 0 ? (
          <li>Loading...</li>
        ) : (
          users.map((user, index) => <li key={index}>{user}</li>)
        )}
      </ul>
    </div>
  );
}

export default ApiSimulation1;
