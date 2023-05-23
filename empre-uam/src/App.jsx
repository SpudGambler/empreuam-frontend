import { useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Login } from './views/Login'

function App() {
  //const [count, setCount] = useState(0);
  //const [data, setData] = useState([]);

  useEffect(() => {
    /* fetch("http://localhost:3000/api/v1/user", {
      method: 'get'
    })
      .then((res) => res.json())
      .then((jsonResponse) => {
        setData(jsonResponse.data);
      }); */
  });


  return (
    <>
      
      <Login />
    </>
  )
  /* return(
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data.map(art => {
            return (
              <tr key={art.id}>
                <td>{art.nombre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) */
}

export default App;
