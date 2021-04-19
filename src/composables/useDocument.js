import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

const useDocuments = (collection, id) => {
  const error = ref(null);
  const isPending = ref(false);

  let docRef = projectFirestore.collection(collection).doc(id);

  const deleteDoc = async () => {
    isPending.value = true;
    error.value = null;

    try {
      const res = await docRef.delete();
      isPending.value = false;

      return res;
    } catch (error) {
      console.log(error.message);
      error.value = "The document could not be deleted";
      isPending.value = false;
    }
  };
  return { error, isPending, deleteDoc };
};

export default useDocuments;
