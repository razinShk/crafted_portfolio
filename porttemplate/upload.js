function previewImage(event, type) {
 const file = event.target.files[0];
 if (file) {
  const reader = new FileReader();
  reader.onload = function (e) {
   const uploadedImageContainer = document.createElement('div');
   uploadedImageContainer.classList.add('uploaded-image');

   const imgElement = document.createElement('img');
   imgElement.src = e.target.result;
   imgElement.alt = file.name;

   const deleteIcon = document.createElement('span');
   deleteIcon.classList.add('delete-icon');
   deleteIcon.textContent = '✕';
   deleteIcon.onclick = function () {
    uploadedImageContainer.remove();
   };

   uploadedImageContainer.appendChild(imgElement);
   uploadedImageContainer.appendChild(deleteIcon);

   if (type === 'profile') {
    document.getElementById('profile-uploaded-images').appendChild(uploadedImageContainer);
   } else if (type === 'cover') {
    document.getElementById('cover-uploaded-images').appendChild(uploadedImageContainer);
   }
  };
  reader.readAsDataURL(file);
 }
}


