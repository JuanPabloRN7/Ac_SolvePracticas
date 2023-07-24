/*import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { AuthContext  } from "../../context/authContext";
import React, { useState ,useContext} from "react";

const Share = () => {

  const { addPost, currentUser } = useContext(AuthContext);  const [text, setText] = useState("");
  

  const handleShare = async () => {
    try {
      await addPost(text, currentUser);
      setText("");
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };
  
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.photoURL} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind, ${currentUser.displayName}?`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleShare}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
 
};

export default Share;
*/

/*
import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { AuthContext } from "../../context/authContext";
import React, { useState, useContext } from "react";

const Share = () => {
  const { addPost, currentUser } = useContext(AuthContext);  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleShare = async () => {
    try {
      if (currentUser) { // Verifica si el usuario está autenticado

      const post = {
        text: text,
        author: currentUser.displayName,
        authorId: currentUser.uid,
        image: null,
      };

      if (image) {
        // Upload the image to Firebase Storage and get the download URL
        const storageRef = getStorage();
        const imageRef = ref(storageRef, `images/${currentUser.uid}/${image.name}`);
        const snapshot = await uploadBytesResumable(imageRef, image);
        const downloadURL = await getDownloadURL(snapshot.ref);

        post.image = downloadURL;
      }

      await addPost(post, currentUser);
      setText("");
      setImage(null);
    } 
  }catch (error) {
      console.error("Error al compartir:", error);
    }
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.photoURL} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind, ${currentUser.displayName}?`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        {image && (
          <div className="image-preview">
            <img src={URL.createObjectURL(image)} alt="" />
            <button onClick={() => setImage(null)}>Remove</button>
          </div>
        )}
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button className="share-button" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;



import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { AuthContext  } from "../../context/authContext";
import React, { useState ,useContext} from "react";

const Share = () => {

  const { addPost, currentUser } = useContext(AuthContext);  const [text, setText] = useState("");
  

  const handleShare = async () => {
    try {
      await addPost(text, currentUser);
      setText("");
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };
  
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.photoURL} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind, ${currentUser.displayName}?`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleShare}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
 
};

export default Share;
/*/

import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { AuthContext } from "../../context/authContext";
import React, { useState, useContext } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Share = () => {
  const { addPost, currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handleShare = async () => {
    try {
      if (currentUser) {
        const post = {
          text: text,
          author: currentUser.displayName,
          authorId: currentUser.uid,
          image: null,
        };

        if (image) {
          // Upload the image to Firebase Storage and get the download URL
          const storageRef = getStorage();
          const imageRef = ref(
            storageRef,
            `images/${currentUser.uid}/${image.name}`
          );
          const snapshot = await uploadBytesResumable(imageRef, image);
          const downloadURL = await getDownloadURL(snapshot.ref);

          post.image = downloadURL;
        }

        await addPost(post, currentUser);
        setText("");
        setImage(null);
      }
    } catch (error) {
      console.error("Error al compartir:", error);
    }
  };
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img src={currentUser.photoURL} alt="" />
          <input
            type="text"
            placeholder={`What's on your mind, ${currentUser.displayName}?`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <label htmlFor="file">
            <div className="item">
            <img src={Image} alt="" />
            <input
                type="file"
                id="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setImage(e.target.files[0])}
                style={{ display: "none" }}
              />     
                <span>Add Image</span>
              </div>
            </label>
             
            
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleShare}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Share;
