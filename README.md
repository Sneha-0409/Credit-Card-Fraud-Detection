# 💳 Credit Card Fraud Detection System

A Machine Learning project that detects fraudulent credit card transactions using the **Gradient Boosting Classifier**. The project performs end-to-end data preprocessing, exploratory data analysis (EDA), model training, evaluation, and prediction to accurately classify transactions as **Fraudulent** or **Legitimate**.

---

## 📌 Features

- Exploratory Data Analysis (EDA)
- Data preprocessing and cleaning
- Fraud vs Legitimate transaction analysis
- Gradient Boosting Classifier implementation
- Model evaluation using multiple performance metrics
- Feature importance analysis
- Fraud prediction for new transactions
- Model serialization using Pickle

---

## Dataset

This project uses the **Credit Card Fraud Detection Dataset** containing anonymized credit card transactions.

- **Transactions:** 284,807
- **Fraud Cases:** 492
- **Features:** 30 (Time, Amount, V1–V28, Class)

**Target Variable**
- `0` → Legitimate(Genuine) Transaction
- `1` → Fraudulent Transaction

> It can be downloaded from Kaggle.

---

## 🛠️ Tech Stack

- Python
- Jupyter Notebook
- NumPy
- Pandas
- Matplotlib
- Seaborn
- Scikit-learn
- Pickle

---

## Machine Learning Model

**Algorithm Used**
- Gradient Boosting Classifier

The model was trained on preprocessed transaction data and evaluated using multiple classification metrics to ensure reliable fraud detection on an imbalanced dataset.

---

## Exploratory Data Analysis

The following analyses were performed:

- Fraud vs Non-Fraud transaction distribution
- Transaction amount distribution
- Transaction time distribution
- Correlation heatmap
- Amount vs Class boxplot

---

## Model Performance

| Metric | Score |
|---------|--------|
| Accuracy | **99.92%** |
| Precision | **86.11%** |
| Recall | **65.26%** |
| F1-Score | **74.25%** |
| ROC-AUC | **85.39%** |

---

## 📁 Project Structure

```
Credit-Card-Fraud-Detection/
│
├── Credit_Card_Fraud_Detection.ipynb
├── gradient_boosting_model.pkl
├── requirements.txt
├── README.md
└── images/
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/your-username/Credit-Card-Fraud-Detection.git
```

Move into the project directory

```bash
cd Credit-Card-Fraud-Detection
```

Install the required libraries

```bash
pip install -r requirements.txt
```

Run the Jupyter Notebook.

---

## Results

- Successfully classified fraudulent and legitimate transactions using the Gradient Boosting algorithm.
- Achieved **99.92% Accuracy** and **85.39% ROC-AUC**.
- Performed comprehensive data preprocessing, EDA, feature analysis, and model evaluation.
- Saved the trained model for future predictions using Pickle.

---

## Future Improvements

- Improve fraud detection using SMOTE for class imbalance.
- Perform hyperparameter tuning for better performance.
- Deploy the model as a web application using Streamlit or FastAPI.

---

## 👩‍💻 Author

**Sneha 3rd year Computer Science**
