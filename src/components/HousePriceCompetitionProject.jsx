import React from 'react'
import './HousePriceCompetitionProject.css'
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';




export default function HousePriceCompetitionProject() {
    return (
        <>
            
        <div className='housepriceproject'>
            
            <h1>House Price Competition Project</h1>
            <hr />
            <h2>Introduction</h2>
            <hr />
            <p>
                This project is a playground competition on Kaggle, which aims to predict the final price of residential homes in Ames, Iowa based on 79 explanatory variables. The dataset provides a rich collection of information about the homes, including features such as the number of bedrooms, the size of the lot, and the proximity to certain amenities.
            </p>
            <h2>Competition Description</h2>
            <hr />
            <p>
                The goal of this competition is to correctly predict the final price of each home in the dataset. The dataset contains 79 explanatory variables that describe almost every aspect of the residential homes in Ames, Iowa. With the application of advanced regression techniques, I've ranked top 300 in the competition.
            </p>
            <h2>My Approach</h2>
            <hr />
            <p>I've used various feature engineering techniques to extract meaningful information from the dataset, such as creating new features based on the interaction of existing ones, and encoding categorical variables using one-hot encoding.</p>
            <p>For the model, I've implemented a Gradient Boosting Regressor with XGBoost library, which has shown to be a powerful tool for regression problems. Additionally, I've used techniques like hyperparameter tuning and cross-validation to improve the model's performance.</p>
            <h2>Getting Started</h2>
            <hr />
            <ol type='1'>
                <li>
                    Clone the repository:
                    <span className='cmd'>git clone https://github.com/Behlil/House-Price-Competition</span>
                </li>
                <li>
                    Install the dependencies:
                    <span className='cmd'>pip install -r requirements.txt</span>
                </li>
                <li>
                    Run the jupyter notebook:
                    <span className='cmd'>jupyter notebook notebook.ipynb</span>
                </li>
                <li>The code will automatically train the model and generate predictions for the test set.</li>
                <li>You can use the generated predictions to submit to the competition on Kaggle.</li>
            </ol>
            <h2>Conclusion</h2>
            <hr />
            <p>This project is a great example of how feature engineering and advanced regression techniques can be used to achieve high performance on a challenging dataset. I hope that my code serves as a useful reference for others looking to improve their skills in machine learning and data science.</p>
            <p>Please let me know if you have any other questions or concerns.</p>

            <p>View the <a target="_blank" href="https://github.com/Behlil/House-Price-Competition">source code</a> in Github</p>

            </div>
            </>
    )
}
