import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import backgroundDefault from '../assets/Capture.PNG';
function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(backgroundDefault);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="user_bg">
      <label for="file-upload" className="custom-file-upload">
        <EditIcon  className="editicon"/>
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
      {selectedImage && (
        <div className="image-preview">
          <img src={selectedImage} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
