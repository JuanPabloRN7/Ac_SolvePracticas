import React, {useState, useEffect} from 'react';
import './RegisterBusiness.css';
import BusinessDataService from '../BusinessDataService';

function RegisterBusiness({id,setBusinessId}){

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [prize, setPrize] = useState('');
  const [location, setLocation] = useState('');
  const [places, setPlaces] = useState('');
  const [entry_time, setEntryTime] = useState('');
  const [departure_time, setDepartureTime] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const newBusiness = {
      name,
      phone,
      prize,
      location,
      places,
      entry_time,
      departure_time
    };
    if(id !== undefined && id !=='')
    {
      await BusinessDataService.updateBusiness(id, newBusiness);
      setBusinessId('');
   }
    else
      await BusinessDataService.addBusiness(newBusiness);

    setName('');
    setPhone('');
    setPrize('');
    setLocation('');
    setPlaces('');
    setEntryTime('');
    setDepartureTime('');

  };

  const editHandler =async()=>{
    const docSnap=await BusinessDataService.getBusiness(id);
    setName(docSnap.data().name);
    setPhone(docSnap.data().phone);
    setPrize(docSnap.data().prize);
    setLocation(docSnap.data().location);
    setPlaces(docSnap.data().places);
    setEntryTime(docSnap.data().entry_time);
    setDepartureTime(docSnap.data().departure_time);
  };

  useEffect(()=>{
    console.log(id);
    if(id!==undefined && id !== "")
      editHandler();
  },[id]);

    return(
      <div>
        <div className="item">
          <span>Añadir un negocio</span>
        <form 
        className="business-form"
        onSubmit={handleSubmit}
        >
        <div>
          <label>Nombre del negocio: </label>
          <input
            value={name}
            className="business-input"
            type='text'
            placeholder="Nombre"
            name="business-name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Número de teléfono: </label>
          <input
            value={phone}
            className="business-input"
            type='text'
            placeholder="Teléfono"
            name="business-name"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Precio por horas: </label>
          <input 
            value={prize}
            className="business-input"
            type='text'
            placeholder="Precio"
            name="business-prize"
            onChange={(e) => setPrize(e.target.value)}
          />
        </div>
        <div>
          <label>Ubicación: </label>
          <input 
            value={location}
            className="business-input"
            type='text'
            placeholder="Ubicación"
            name="business-location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Plazas totales: </label>
          <input 
            value={places}
            className="business-input"
            type='text'
            placeholder="Plazas"
            name="business-location"
            onChange={(e) => setPlaces(e.target.value)}
          />
        </div>
        <div>
          <label>Hora de entrada: </label>
          <input 
            value={entry_time}
            className="business-input"
            type='text'
            placeholder="Entrada"
            name="business-location"
            onChange={(e) => setEntryTime(e.target.value)}
          />
        </div>
        <div>
          <label>Hora de salida: </label>
          <input 
            value={departure_time}
            className="business-input"
            type='text'
            placeholder="Entrada"
            name="business-location"
            onChange={(e) => setDepartureTime(e.target.value)}
          />
        </div>
        <button className="register-button">
          Registrar
        </button>
      </form>
      </div>
    </div>
    );
}

export default RegisterBusiness;