import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  const dataFields = [
    "Nombre",
    "Fecha",
    "Hora",
    "Aerolinea",
    "Metodo de pago",
    "Comentarios",
    "Acciones",
  ];

  const [reservations, setReservations] = React.useState([
    { name: "", date: "", time: "", airline: "", payment: "", comments: "" },
  ]);

  //Funcion para insertar un nuevo elemento en el array de reservaciones
  const pushReservation = () => {
    setReservations([
      ...reservations,
      { name: "", date: "", time: "", airline: "", payment: "", comments: "" },
    ]);
    console.log(reservations);
  };

  //funcion para eliminar del array una reservacion basada en el indice de su posicion
  const deleteReservation = (position) => {
    const arrayNew = [...reservations];
    arrayNew.splice(position, 1);
    setReservations(arrayNew);
    console.log(reservations);
  };

  const updateReservation = ({ event, position }) => {
    //Se optienen los valores de los inputs y se asignan a sus campos
    let objUpdated = { ...reservations[position] };
    objUpdated = {
      ...reservations[position],
      [event.target.name]: event.target.value,
    };
    //Se remplaza el objeto dentro del array de reservaciones
    const arrayUpdated = [...reservations];
    arrayUpdated.splice(position, 1, objUpdated);
    //se actualiza el estado que almacena el array
    setReservations(arrayUpdated);
  };

  console.log(reservations);

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
          <thead>
            {dataFields.map((field) => {
              return <th>{field} </th>;
            })}
          </thead>
          {reservations.map((reservation, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={reservation.name}
                    onChange={(e) =>
                      updateReservation({ event: e, position: idx })
                    }
                  ></input>
                </td>
                <td>
                  <input
                    type="date"
                    name="date"
                    onChange={(e) =>
                      updateReservation({ event: e, position: idx })
                    }
                    value={reservation.date}
                  ></input>
                </td>
                <td>
                  <input
                    type="time"
                    name="time"
                    value={reservation.time}
                    onChange={(e) =>
                      updateReservation({ event: e, position: idx })
                    }
                  ></input>
                </td>
                <td>
                  <input
                    type="text"
                    name="airline"
                    value={reservation.airline}
                    onChange={(e) =>
                      updateReservation({ event: e, position: idx })
                    }
                  ></input>
                </td>
                <td>
                  <select
                    type="text"
                    name="payment"
                    value={reservation.payment}
                    onChange={(e) =>
                      updateReservation({ event: e, position: idx })
                    }
                  >
                    <option disabled></option>
                    <option>Efectivo</option>
                    <option>Tarjeta</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    name="comments"
                    value={reservation.comments}
                    onChange={(e) =>
                      updateReservation({ event: e, position: idx })
                    }
                  ></input>
                </td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => deleteReservation(idx)}
                  >
                    Eliminar
                  </button>
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
