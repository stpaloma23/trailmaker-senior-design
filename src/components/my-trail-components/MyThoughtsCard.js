import ThoughtsCard from "../ThoughtsCard";
import plus from "../../images/plus.png"
import Modal from 'react-modal';
import { useState, useCallback, useRef } from "react";
import { getFirestore, doc, getDoc, addDoc, arrayUnion, setDoc} from "firebase/firestore";
function MyThoughtsCard({app, userInformation, isLoggedIn}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height:'450px',
          width: '650px',
          borderRadius:'25px',
        },
    };
    const titleRef = useRef(null);
    const postRef = useRef(null);
    const uploadThought = useCallback( async () => {
        if (isLoggedIn) {
            try {
                const uid = userInformation.uid;
                const postTitle = titleRef.current.value;
                const postContent= postRef.current.value;
                console.log(postTitle, postContent);
                const db = getFirestore(app);
                const docRef = doc(db,"user-thoughts",String(uid));
                await setDoc(docRef, {[postTitle]:[postContent]});
                // const tasks = await getDoc(docRef);
                setModalIsOpen(false)
                // console.log(tasks.data());
            } catch(e) {
                console.error("Error adding document: ", e)
            }
        }
    }, [app, userInformation, isLoggedIn]);

    return (
        <div className="my-trail-card">
            <h1>My Thoughts</h1>
            <div className="thoughts-container">
                <div className="make-a-new-thought" onClick={() => setModalIsOpen(true)}>
                    <img src={plus} alt="plus sign"/>
                </div>
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
                    <h2>What Are You Thinking About? </h2>
                    {/* <label htmlFor="thoughtTitle"><h3>Title</h3></label> */}
                    <input className="thought-title-input" name="thoughtTitle" placeholder="Title" ref={titleRef}></input>
                    {/* <label htmlFor="thoughtPost"><h4> write about it </h4></label> */}
                    <textarea className="thought-post-input" type="text" name="thoughtPost" ref={postRef} placeholder="Write about it"/>
                    <div className="though-post-buttons">
                        <button onClick={() => setModalIsOpen(false)}>Close</button>
                        <button onClick={uploadThought}>Post</button>
                    </div>
                </Modal>
                <ThoughtsCard/>
                <ThoughtsCard/>
                <ThoughtsCard/>
            </div>
        </div>
    )
}
export default MyThoughtsCard;