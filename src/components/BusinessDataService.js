import {db} from '../firebase-config'
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, where} from "firebase/firestore"

const businessCollectionRef = collection(db, "Parqueaderos")

class BusinessDataService{
  addBusiness = (newBusiness) =>{
    return addDoc(businessCollectionRef, newBusiness);
  };

  updateBusiness = (id, updatedBusiness) => {
    const businessDoc=doc(db,"Parqueaderos", id);
    return updateDoc(businessDoc,updatedBusiness);
  };

  deleteBusiness = (id) => {
    const businessDoc=doc(db,"Parqueaderos", id);
    return deleteDoc(businessDoc)
  };

  getAllBusiness = () =>{
    return getDocs(businessCollectionRef);
  };

  getBusiness = (id) =>{
    const businessDoc=doc(db,"Parqueaderos", id);
    return getDoc(businessDoc);
  }

  getBusinessLatitudeLongitude=(latitude,longitude)=>{
    // const q1 = query(businessCollectionRef, 
    //                   where("latitude", "<=", ""+(latitude+0.01)), 
    //                   where("latitude", ">=", ""+(latitude-0.01)), 
    //                   where("longitude", "<=", ""+(longitude+0.01)), 
    //                   where("longitude", ">=", ""+(longitude-0.01)));
    const q = query(businessCollectionRef,
                      where("latitude", "<=", latitude+0.01),
                      where("latitude", ">=", latitude-0.01),
    );
    return getDocs(q);
  }

}

export default new BusinessDataService();