import React, { useEffect, useState } from 'react';
import './Result.css'

function Result() {
    const [EstimatedCalories, setEstimatedCalories] = useState(0);
    const [Protein, setProtein] = useState(0);
    const [Carbs, setCarbs] = useState(0);
    const [Fat, setFat] = useState(0);

    const [image, setImage] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const storedImage = localStorage.getItem("Image");
        if (storedImage) {
            setImage(storedImage);
        }
    }, []);

    const removeFromLocalStorage = ()=>{
        localStorage.removeItem("Image");
    }

    const reGenerate = ()=>{

    }


    return (
        <div className='flex row main'>
            <div className='flex imageSection'>
                <img src={image} alt='analyzedPhoto'/>
                <div className='row resultrow'>
                    <p>Image Analyzed!  🎉</p>
                    <button onClick={reGenerate}>Re-Generate</button>
                </div>
            </div>
            <div className='flex results'>
                <h2>Results</h2>
                <p>- Estimated Calories: {EstimatedCalories} kcal.</p>
                <h2>Nutritional Values:</h2>
                <p>- Protein: {Protein} g</p>
                <p>- Carbs: {Carbs} g</p>
                <p>- Fat: {Fat} g.</p>
                <p>The analysis is based on AI technology and may not be 100% accurate. Please verify values if needed.</p>
                <a href='/' className='btn2' onClick={removeFromLocalStorage} >Analyze Another Image</a>
            </div>
            
        </div>
    )
}

export default Result