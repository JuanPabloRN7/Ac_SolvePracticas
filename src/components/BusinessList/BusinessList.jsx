import React, {useEffect, useState} from 'react';
import './BusinessList.css';
import BusinessDataService from '../BusinessDataService';

function BusinessList({getBusinessId}){

  const [business, setBusiness] = useState([]);

  useEffect(() => {
    getBusiness();
  },[]);

  const deleteHandler = async(id)=>{
    await BusinessDataService.deleteBusiness(id);
    getBusiness();
  };

  const getBusiness = async () => {
    const data = await BusinessDataService.getAllBusiness();
    setBusiness(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
  };

  return(
      <div>
        <div className="item">
          <span>Mis negocios</span>
          <button className='refresh-button' onClick={getBusiness}>Refrescar lista</button>
          <pre>{//JSON.stringify(business,undefined,2)
          }</pre>
          {business.map((doc,index)=>{
            return(
              <div className="user" key={doc.id}>
                <div className="userInfo">
                  <img
                    src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <span>{doc.name}</span>
                </div>
                <div className="buttons">
                  <button onClick={(e)=>getBusinessId(doc.id)}>Editar</button>
                  <button onClick={(e)=>deleteHandler(doc.id)}>Borrar</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    );
}

export default BusinessList;