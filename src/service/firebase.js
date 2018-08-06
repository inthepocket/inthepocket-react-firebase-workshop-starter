import firebase from 'firebase';

// Update this config with your Firebase credentials
import config from '../config.json';

/**
 * Initialize the connection between Firebase & app
 */
export const initFirebase = () => {
  try {
    firebase.initializeApp(config.firebase);
  } catch (error) {
    console.error('Could not set up firebase, did you add the credentials in src/config.json?');
  }
};

/**
 * Act on a firebase reference
 */
export const firebaseRef = refId => firebase.database().ref(refId);

/**
 * Read data once from a firebase reference
 */
export const getFromFirebaseRef = async (refId) => {
  const ref = await firebase.database()
    .ref(refId)
    .once(
      'value',
      successData => console.log(`Succesfully read data from ${refId}`, successData),
      failureData => console.error(`Failed to read data from ${refId}`, failureData),
    );

  return ref.val();
};

/**
 * Read data from a firebase reference and subscribe to any changes on the data (real-time)
 */
export const listenToFirebaseRef = async (refId, handler) => {
  await firebaseRef(refId).on('value', (snapshot) => {
    const data = snapshot.val();
    handler(data);
  });
};

/**
 * Add new data to a firebase reference
 */
export const postToFirebaseRef = async (refId, data) => {
  return await firebaseRef(refId).push(
    data,
    err => err && console.error(`Could not push data to reference ${refId}`, { err, data })
  );
};

/**
 * Set data in a reference, overwriting it if it already existed before this action
 */
export const setInFirebaseRef = async (refId, data) => {
  await firebaseRef(refId).set(
    data,
    err => err && console.error(`Could not set data in reference ${refId}`, { err, data })
  );
};

/**
 * Change existing data in a reference
 */
export const updateInFirebaseRef = async (refId, data) => {
  await firebaseRef(refId).update(
    data,
    err => err && console.error(`Could not set update in reference ${refId}`, { err, data })
  );
};

/**
 * Remove existing data from a firebase reference
 */
export const deleteInFirebaseRef = async (refId) => {
  await firebaseRef(refId)
    .remove(err => err && console.error(`Error occured during remove in reference ${refId}`, err));
};
