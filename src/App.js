import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  const [reservations, setReservations] = React.useState([{}]);

  const pushReservation = () => {
    setReservations([...reservations, {}]);
    console.log(reservations);
  };
  return (
    <div className="App">
      <div className="container">
        <button
          className="btn-add-reservation"
          onClick={() => pushReservation()}
        >
          Crear reservacion
        </button>
        <table>
          <tr>
            <th>Nombre </th>
            <th> Fecha</th>
            <th>Hora</th>
            <th>Aerolinea </th>
            <th>Forma de pago</th>
            <th>Comentarios</th>
            <th>Acciones</th>
          </tr>
          {reservations.map((reservation, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <input type="text"></input>
                </td>
                <td>
                  <button className="btn-delete">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
