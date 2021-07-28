import firebase from "firebase";
import { FormEvent, useContext, useRef, useState } from "react";
import { AuthContext } from "../context/auth-context";
import { signInWithGoogle } from "../firebaseConfig";
import ShoutOut from "../models/ShoutOut";
import "./ShoutOutForm.css";

const rootRef = firebase.storage().ref();
const directoryRef = rootRef.child("images");
interface Props {
  addShoutOut: (shoutOut: ShoutOut) => void;
  name?: string;
}

const ShoutOutForm = ({ addShoutOut, name = "" }: Props) => {
  const { user } = useContext(AuthContext);
  const [to, setTo] = useState<string>(name);
  const [text, setText] = useState<string>("");
  const from = user?.displayName as string;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const file = files[0]; // Here is the file we need
      const snapshot = await directoryRef.child(file.name).put(file);
      const img = await snapshot.ref.getDownloadURL();
      addShoutOut({ to, from, text, img });
      // snapshot.ref.getMetadata().then(metadata => ...);
    } else {
      addShoutOut({ to, from, text });
    }
  };

  return user ? (
    <div className="ShoutOutForm">
      <h2>Leave a Shout Out</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="to">To</label>
        <input
          type="text"
          name="to"
          id="to"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <label htmlFor="from">From</label>
        <p>{from}</p>
        <label htmlFor="text">Shout Out</label>
        <textarea
          name="text"
          id="text"
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type="file" ref={fileInputRef} accept="image/*" />
        <button>Submit Shout Out!</button>
      </form>
    </div>
  ) : (
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  );
};

export default ShoutOutForm;
