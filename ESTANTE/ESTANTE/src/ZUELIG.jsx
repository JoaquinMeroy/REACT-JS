import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

function ZUELIG() {
  const [user, setUser] = useState(null);
  const docRef = doc(db, "USER", "SAfpMvZoRQh0oXBeT6UI"); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching document..."); // Debugging log
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document Data:", docSnap.data()); // Log Firestore data
          setUser(docSnap.data().username); // Fetch 'username' instead of 'name'
        } else {
          console.warn("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>ZUELIG</h1>
      <p><strong>User:</strong> {user ? user : "Loading..."}</p>
    </div>
  );
}

export default ZUELIG;
