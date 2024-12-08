function uploadImage() {
 // Get the image files from the input elements
 const profileImageInput = document.getElementById('profile-input');
 const coverImageInput = document.getElementById('cover-input');

 // Get the files selected by the user
 const profileImageFile = profileImageInput.files[0];
 const coverImageFile = coverImageInput.files[0];

 // Check if files are selected
 if (profileImageFile && coverImageFile) {
  // Create URL objects for the images
  const profileImageURL = URL.createObjectURL(profileImageFile);
  const coverImageURL = URL.createObjectURL(coverImageFile);

  // Update the elements with the new images
  document.querySelector('.header').style.backgroundImage = `url(${coverImageURL})`;
  document.querySelector('.work1').src = profileImageURL;
 }
}

