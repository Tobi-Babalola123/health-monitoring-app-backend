import { gapi } from "gapi-script";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const SCOPES = "https://www.googleapis.com/auth/fitness.activity.read";

// Initialize the client and authenticate
export const connectGoogleFit = () => {
  return new Promise((resolve, reject) => {
    gapi.load("client:auth2", async () => {
      try {
        await gapi.client.init({
          clientId: CLIENT_ID,
          scope: SCOPES,
        });
        console.log("Google API client initialized.");

        // Call loadFitnessApi and wait for completion
        await loadFitnessApi();
        // Call getFitnessDataDirect to fetch data after loading the API
        await getFitnessDataDirect();

        resolve();
      } catch (error) {
        console.error("Error initializing Google API client:", error);
        reject(error);
      }
    });
  });
};

// Load the Fitness API with additional logging
const loadFitnessApi = async () => {
  try {
    await gapi.client.load("fitness", "v1");
    console.log("Fitness API loaded successfully.");

    // Check if fitness API is attached to gapi.client
    if (gapi.client.fitness) {
      console.log("Fitness API loaded and available:", gapi.client.fitness);
    } else {
      console.error("Fitness API failed to attach to gapi.client.");
    }
  } catch (error) {
    console.error("Error loading Fitness API:", error);
  }
};

// In src/Api/GoogleFitIntegration.js

export const getFitnessDataDirect = async () => {
  const authInstance = gapi.auth2.getAuthInstance();
  if (authInstance.isSignedIn.get()) {
    const accessToken = authInstance.currentUser
      .get()
      .getAuthResponse().access_token;
    const datasetId = `${Date.now() - 30 * 24 * 60 * 60 * 1000}-${Date.now()}`;

    try {
      const response = await fetch(
        `https://www.googleapis.com/fitness/v1/users/me/dataSources/derived:com.google.step_count.delta:com.google.android.gms:estimated_steps/datasets/${datasetId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const fitnessData = await response.json();
      console.log("Direct Fitness Data:", fitnessData);
      return fitnessData; // Return the data
    } catch (error) {
      console.error("Error retrieving fitness data via REST:", error);
      return null; // Return null in case of error
    }
  } else {
    console.log("User is not signed in.");
    return null; // Return null if user is not signed in
  }
};
