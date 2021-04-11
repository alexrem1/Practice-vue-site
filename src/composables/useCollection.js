import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

// declare the connection & refs inside the function
// because the collection state is not global (like a user)
// different collections may be used at once this way

const useCollection = (collection) => {
  // error in the function now as we might use different collections in different positions in the website and we need a new error for each collection in contrast to authentication eg only ever one kind of authentication (logging in)
  const error = ref(null);

  const addDoc = async (doc) => {
    error.value = null;
    try {
      await projectFirestore.collection(collection).add(doc); // could hard code eg "messages" but instead pass in collection. Everytime we use this compasable function we can pass in a different collection
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };

  return { addDoc, error };
};

export default useCollection;
