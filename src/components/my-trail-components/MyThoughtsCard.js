import ThoughtsCard from "../ThoughtsCard";
import plus from "../../images/plus.png"
import Modal from 'react-modal';
import { useState, useCallback, useRef, useEffect } from "react";
import { getFirestore, doc, getDoc,  setDoc} from "firebase/firestore";
function MyThoughtsCard({app, userInformation, isLoggedIn}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [userThoughts, setUserThoughts] = useState([]);
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
                await setDoc(docRef, {[postTitle]:[postContent]} , { merge: true });
                setModalIsOpen(false)
                // console.log(tasks.data());
            } catch(e) {
                console.error("Error adding document in thoughts card: ", e)
            }
        }
    }, [app, userInformation, isLoggedIn]);

    useEffect( () =>{
        const fetchThoughts = async () => {
            try {
                console.log("in fetch thoughts ")
                const uid = userInformation.uid;
                const db = getFirestore(app);
                const docRef = doc(db,"user-thoughts",String(uid));
                const thoughts = await getDoc(docRef);
                setUserThoughts(Object.values(thoughts.data()));
                console.log("thoughts",thoughts.data());
            } catch (error) {
                console.warn("error in thoughts card", error);
            }
        }
        fetchThoughts();
    },[app,userInformation]);

    console.log("user thoughts outside" , userThoughts);

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
                {
                    userThoughts.map((thought, i) => {
                        return (<ThoughtsCard
                            title={thought[0]} key={i}/>)

                    })
                }
                <ThoughtsCard
                    title={"Colleges I'm Applying to "}
                />
                <ThoughtsCard
                    title={"My FAFSA Check List"}
                />
                <ThoughtsCard
                    title={"Internships to Apply To"}
                />
            </div>
        </div>
    )
}
export default MyThoughtsCard;

/*
Object.entries(userThoughts).map(([title,content])=>{
                        <ThoughtsCard 
                            title={title} />
                    })*/