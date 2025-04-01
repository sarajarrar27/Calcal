import React, { useState } from 'react';
import './Home.css'
import { Bounce, toast } from 'react-toastify';

function Home() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileStream = reader.result;
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        localStorage.setItem("Image", fileStream);
      }
      reader.readAsDataURL(file);
    }
  };

  const navigation = () => {
    if (image) {
      window.location.href = 'Result';
    } else {
      toast.error('Upload Your Photo Meal First!! ', {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }



  return (
    <>
      <img className='first' src='src\assets\photo1.png' />
      <img className='second' src='src\assets\photo2.png' />
      <div className='flex main'>
        <div className='flex scan'>
          <p>Snap a picture of your meal, and let AI estimate the calories for you!</p>
          <label htmlFor='fileInput' className='image-upload-label'>
            {image ? (
              <img src={image} alt='Uploaded' className='uploaded-image' />
            ) : (
              <>
                <img src='src\assets\Vector.png' alt='null' /> <p>Upload Your Meal Photo</p>
              </>
            )}
          </label>
          <input type='file' id='fileInput' accept='image/*' onChange={handleImageChange} className="file-input" />
          <button onClick={navigation}>Generate</button>
          <p>Supports all types of food images: meals, dishes, fruits, and more!</p>
        </div>
      </div>
    </>

  )
}

export default Home