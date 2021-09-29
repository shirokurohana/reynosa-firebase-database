import firebase from "./firebase";

export async function getResourceIds(){
  let output = [];
  try {
    const snapshot = await firebase.collection("family-members").get();
    snapshot.forEach(
      (doc) => {
        output.push(
          {
            params: {
              id: doc.id
            }
          }
        );
      }
    );
  } catch(error) {
    console.log(error);
  }
  return output;
}

// one document

export async function getResourceData(idRequested) {
  const doc = await firebase.collection("family-members").doc(idRequested).get();
  let output;
  if (!doc.empty) {
    output = {id:doc.id, data:doc.data()};

  } else {
    output = null;
  }

  return output;
}


// thank you to Jaruwan for her excellent post on the discussion 
export async function getSortedList() {
  let output = [];
  try {
    const snapshot = await firebase.collection("family-members").get();
    snapshot.forEach(
      (doc) => {
        output.push(
          {
              id: doc.id.toString(),
              name: doc.data().name.toString()
          }
        );
      }
    );
  } catch(error) {
    console.log(error);
  }
  return output;
}