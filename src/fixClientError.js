/**
 * This is an example of how to properly set up the formData on the client side
 * to avoid the "Invalid input" error with the anonymous field
 */

// Import the necessary modules for React Native
// import * as ImagePicker from 'expo-image-picker';

/**
 * Fixed version of the createVotingPool function from apiClient.js
 */
export async function createVotingPool(poolData, mainImage, optionImages = []) {
  // In a real app, get token from secure storage
  const token = "your-auth-token";

  if (!token) {
    throw new Error("Authentication required");
  }

  // Create FormData object
  const formData = new FormData();

  // Add main pool data
  formData.append("title", poolData.title);
  formData.append("description", poolData.description);
  formData.append("category", poolData.category);
  formData.append("startDate", poolData.startDate.toISOString());
  formData.append("endDate", poolData.endDate.toISOString());

  // FIX: Convert boolean to lowercase string - must be exactly "true" or "false"
  formData.append("anonymous", poolData.anonymous === true ? "true" : "false");

  console.log(
    "anonymous value being sent:",
    poolData.anonymous === true ? "true" : "false"
  );

  // Add location data if available
  if (poolData.latitude && poolData.longitude) {
    formData.append("latitude", String(poolData.latitude));
    formData.append("longitude", String(poolData.longitude));
    if (poolData.address) {
      formData.append("address", poolData.address);
    }
  }

  // Add options as JSON string
  formData.append("options", JSON.stringify(poolData.options));

  // Add main image if available
  if (mainImage) {
    const fileToUpload = {
      uri: mainImage.uri,
      type: mainImage.mimeType || "image/jpeg",
      name: mainImage.fileName || "image.jpg",
    };
    formData.append("image", fileToUpload);
  }

  // Add option images if available
  const hasOptionImages = optionImages.some((img) => img !== null);

  // Add each option image with index in the name
  if (hasOptionImages) {
    optionImages.forEach((image, index) => {
      if (image) {
        const fileToUpload = {
          uri: image.uri,
          type: image.mimeType || "image/jpeg",
          name: image.fileName || `option${index}.jpg`,
        };
        // FIX: Use correct field name
        formData.append(`option${index}`, fileToUpload);
      }
    });
  }

  // Log the form data for debugging
  console.log("Form data fields being sent:");
  for (const pair of formData._parts) {
    console.log(
      `${pair[0]}: ${typeof pair[1] === "object" ? "File" : pair[1]}`
    );
  }

  // Send the request
  try {
    const API_BASE_URL = "http://192.168.1.110:3000";
    const response = await fetch(`${API_BASE_URL}/api/voting-pools`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // Don't set Content-Type for FormData
      },
      body: formData,
    });

    console.log("Response status:", response.status);

    // Handle error responses
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating voting pool:", errorData);
      throw new Error(errorData.message || "Failed to create voting pool");
    }

    // Parse and return the response
    const data = await response.json();
    console.log("Voting pool created successfully");
    return data.votingPool;
  } catch (error) {
    console.error("Error in createVotingPool:", error);
    throw error;
  }
}

/**
 * Example usage:
 *
 * const poolData = {
 *   title: "Test Voting",
 *   description: "This is a test voting pool",
 *   category: "Test",
 *   startDate: new Date(),
 *   endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
 *   anonymous: true, // IMPORTANT: this is a JavaScript boolean
 *   options: [
 *     { text: "Option 1", description: "Description 1" },
 *     { text: "Option 2", description: "Description 2" }
 *   ]
 * };
 *
 * // Call the function
 * createVotingPool(poolData, mainImageFile, [option1ImageFile, option2ImageFile])
 *   .then(result => console.log("Created voting pool:", result))
 *   .catch(error => console.error("Failed to create voting pool:", error));
 */
