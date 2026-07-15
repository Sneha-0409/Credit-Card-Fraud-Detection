from pathlib import Path

# Root directory of the project
BASE_DIR = Path(__file__).resolve().parent.parent

# Data paths
RAW_DATA_PATH = BASE_DIR / "data" / "raw" / "creditcard.csv"
PROCESSED_DATA_PATH = BASE_DIR / "data" / "processed"

# Saved models
MODEL_DIR = BASE_DIR / "saved_models"

# Reports
REPORT_DIR = BASE_DIR / "reports"

# Random seed
RANDOM_STATE = 42