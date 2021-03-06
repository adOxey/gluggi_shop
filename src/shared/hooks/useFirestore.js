import { gluggiFirestore, gluggiStorage } from "../../firebase/firebase";
import { v1 as uuidv1 } from "uuid";

const useFirestore = (collection) => {
  // Remove item from Firestore
  const removeFromFirestore = (id) => {
    const collectionRef = gluggiFirestore.collection(`${collection}`);

    collectionRef
      .where("id", "==", `${id}`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => doc.ref.delete());
      })
      .catch((err) => console.log(err));
  };

  // Add item to Firestore
  const addToFirestore = (values) => {
    const collectionRef = gluggiFirestore.collection(`${collection}`);

    collection === "products" &&
      collectionRef
        .add({
          title: values.productName.trim(),
          description: values.shortDets.trim(),
          details: values.fullDesc.trim(),
          ingredients: values.ingredients.trim(),
          price: Number(values.price),
          quantity: 1,
          alergy_advice: values.alergyAdvice.trim(),
          disabled: false,
          id: uuidv1(),
          image: values.imageAsUrl,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });

    collection === "reviews" &&
      collectionRef
        .add({
          title: values.values.shortReview.trim(),
          description: values.values.fullReview.trim(),
          grade: values.grade,
          author: values.author.trim(),
          date: new Date(),
        })
        .then(() => {
          console.log("Review successfully added");
        })
        .catch((error) => {
          console.error("Error adding review: ", error);
        });
  };

  // Update product in firestore
  const updateProductInfo = (values) => {
    gluggiFirestore
      .collection(`${collection}`)
      .doc(`${values.docName}`)
      .update({
        title: values.productName.trim(),
        description: values.shortDets.trim(),
        details: values.fullDesc.trim(),
        ingredients: values.ingredients.trim(),
        price: Number(values.price),
        quantity: 1,
        alergy_advice: values.alergyAdvice.trim(),
        disabled: false,
        id: `${values.docName}`,
        image: values.imageAsUrl,
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  // Add image to Firebase Storage
  const handleFirebaseUpload = (values, getImageUrl) => {
    console.log("handleFirebaseUpload", values);
    console.log("start of upload");
    // async magic goes here...
    if (values.imageAsFile === "") {
      console.error(
        `not an image, the image file is a ${typeof values.imageAsFile}`
      );
    }
    const uploadTask = gluggiStorage
      .ref(`/images/${values.imageAsFile.name}`)
      .put(values.imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then pass the image from firebase as the argument to the getImageUrl function:
        gluggiStorage
          .ref("images")
          .child(values.imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            getImageUrl(fireBaseUrl);
          });
      }
    );
  };

  return {
    removeFromFirestore,
    addToFirestore,
    handleFirebaseUpload,
    updateProductInfo,
  };
};

export default useFirestore;
