import React from 'react'
import './MnistProject.css'




export default function MnistProject() {
    return (
        <>

            <div className='mnist-project'>

                <h1>MNIST Handwritten Digit Recognition</h1>
                <hr />
                <h2>Introduction:</h2>
                <hr />
                <p>
                    This repository contains the code for a machine learning model trained to recognize handwritten digits from the MNIST dataset. The goal of this project is to correctly identify digits from a dataset of tens of thousands of handwritten images, and to experiment with different machine learning techniques to improve the model's performance.
                </p>
                <h2>Dependencies:</h2>
                <hr />
                <ul>
                    <li>Python 3</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                    <li>Scikit-Learn</li>
                    <li>TensorFlow</li>
                </ul>
                <h2>Downloading the Data</h2>
                <hr />
                <ol>
                    <li>
                        Go to the following link: https://www.kaggle.com/competitions/digit-recognizer/data
                    </li>
                    <li>
                        Log in to your Kaggle account.
                    </li>
                    <li>
                        Scroll down to the "Data" section and click on the "Download All" button to download a zip file containing the train.csv and test.csv files.
                    </li>
                    <li>
                        Extract the downloaded zip file, the train.csv and test.csv files should be in the extracted folder.
                    </li>
                </ol>
                <h2>
                    Usage
                </h2>
                <hr />
                <ol>
                    <li>
                        Clone the repository: <span className='cmd'>git clone https://github.com/Behlil/MNIST-Handwritten-Digit-Recognition</span>
                    </li>
                    <li>
                        Install the dependencies: <span className='cmd'>pip install -r requirements.txt</span>
                    </li>
                    <li>
                        Run the jupyter notebook: <span className='cmd'>jupyter notebook mnist-handwritten-digit-recognition.ipynb</span>
                    </li>
                    <li>
                        Follow the instructions in the notebook to train and test the model
                    </li>
                </ol>
                <h2>Results</h2>
                <hr />
                <p>
                    The model achieved an accuracy of 98% on the test set.
                </p>

                <h2>Acknowledgements</h2>
                <hr />
                <ul>
                    <li>
                        The MNIST dataset is a classic dataset in the field of computer vision and serves as a benchmark for classification algorithms.
                    </li>
                    <li>
                        The tutorial-style kernels provided by the competition organizers were used as a guide for our experimentation and learning process.
                    </li>
                </ul>
                
                <h2>Note</h2>
                <hr />
                <p>
                    This project is just a prototype and is not meant to be used in any production environment. The model is not well optimized and can be improved by using more advanced techniques and architectures.
                </p>
                <p>View the <a target="_blank" href="https://github.com/Behlil/MNIST-Handwritten-Digit-Recognition">source code</a> in Github</p>
            </div>
        </>
    )
}
