import pandas as pd

from src.config import RAW_DATA_PATH

def load_dataset():
    try:
        df = pd.read_csv(RAW_DATA_PATH)
        print("Dataset loaded successfully!!")
        return df
    except FileNotFoundError:
        print(f"Dataset not found at:\n{RAW_DATA_PATH}")
        return None

def dataset_summary(df);
