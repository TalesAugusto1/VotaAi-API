// Example client-side code for creating FormData for voting pool creation

/**
 * Creates the FormData with the correct field names for voting pool creation
 *
 * @param {Object} poolData - The voting pool data
 * @param {File|null} mainImage - The main pool image (optional)
 * @param {Array<File|null>} optionImages - Array of option images (can contain nulls)
 * @returns {FormData} FormData object ready to be sent to the API
 */
export function createVotingPoolFormData(poolData, mainImage, optionImages) {
  const formData = new FormData();

  // Add main pool data
  formData.append("title", poolData.title);
  formData.append("description", poolData.description);
  formData.append("category", poolData.category);
  formData.append("startDate", poolData.startDate.toISOString());
  formData.append("endDate", poolData.endDate.toISOString());

  // Important: Convert boolean to lowercase string "true" or "false"
  // This ensures proper handling on the server
  formData.append("anonymous", poolData.anonymous ? "true" : "false");

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
    // Important: Field name MUST be "image" to match backend expectation
    formData.append("image", mainImage);
  }

  // Add option images if available
  optionImages.forEach((image, index) => {
    if (image) {
      // Important: Field name MUST be "option0", "option1", etc.
      // NOT "optionImage0", "optionImage1", etc.
      formData.append(`option${index}`, image);
    }
  });

  return formData;
}

// Example frontend code to use when calling the API:
/*
try {
  const formData = createVotingPoolFormData(
    poolData,
    mainImage,
    optionImages
  );
  
  const response = await fetch('http://api.example.com/voting-pools', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}` 
    },
    body: formData
  });
  
  const result = await response.json();
  
  if (!response.ok) {
    throw new Error(result.message || 'Failed to create voting pool');
  }
  
  return result.votingPool;
} catch (error) {
  console.error('Error creating voting pool:', error);
  throw error;
}
*/
