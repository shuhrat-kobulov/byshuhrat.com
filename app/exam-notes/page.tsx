// PRIVATE EXAM PREPARATION PAGE
// This page is intentionally not linked anywhere in the application.
// Access is only possible via direct URL: /exam-notes
// Not indexed by search engines. Not tracked by analytics.

'use client';

import { useState } from 'react';

export default function ExamNotesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const questions = [
        {
            id: 1,
            title: 'Purpose of NumPy',
            points: [
                'NumPy (Numerical Python) is the fundamental package for scientific computing. Its primary purpose is to provide a high-performance multidimensional array object (called an ndarray) and tools for working with them.',
                'Mathematical Operations: It allows for fast operations on arrays, including linear algebra, Fourier transforms, and random number generation.',
                'Performance: NumPy is written in C, making it significantly faster than standard Python lists for large datasets.',
                'Memory Efficiency: It uses less memory to store data compared to built-in Python structures.',
            ],
            example: [],
        },
        {
            id: 2,
            title: 'Purpose of Pandas',
            points: [
                'Pandas is built on top of NumPy and is designed for data manipulation and analysis. Its primary purpose is to provide easy-to-use data structures for handling "relational" or "labeled" data (similar to an Excel spreadsheet or SQL table).',
                'Data Cleaning: It provides robust tools for handling missing data, merging datasets, and reshaping data.',
                'Data Structures: It introduces the Series (1D) and the DataFrame (2D), which allow you to use row and column labels.',
                'Time Series: It has built-in support for sophisticated date and time functionalities.',
            ],
            example: [],
        },
        {
            id: 3,
            title: 'Difference between NumPy and Pandas',
            points: [
                'Data Structure:',
                'NumPy uses Arrays (ndarray).',
                'Pandas uses DataFrames and Series.',
                'Labeling:',
                'Uses integer-based indexing (0, 1, 2...).',
                'Supports custom labels for rows and columns.',
                'Primary Use Case:',
                'Numerical computations and image processing.',
                'Data analysis, ETL tasks, and tabular data manipulation.',
                '',
                'Think of NumPy as the engine that handles the heavy math, while Pandas is the dashboard that lets you organize, label, and analyze that data in a way that makes sense to humans.'
            ],
            example: [],
        },
        {
            id: 4,
            title: 'Load CSV using Pandas',
            points: [
                'Loading a CSV file is one of the most common tasks in Pandas. The primary function used for this is read_csv().',
            ],
            code: `import pandas as pd

df = pd.read_csv("data.csv")

print(df.head())
`,
        },
        {
            id: 5,
            title: 'Machine Learning Definition and Types',
            points: [
                'Machine Learning (ML) is a branch of Artificial Intelligence (AI) that allows computers to learn from data and improve their performance without being explicitly programmed for every task. Instead of following rigid rules, ML systems use algorithms to find patterns and make decisions.',
            ],
            types: [
                'Supervised learning',
                'Unsupervised learning',
                'Reinforcement learning',
            ],
        },
        {
            id: 6,
            title: 'Correlation and Computation',
            points: [
                'In data science and statistics, Correlation and Computation are two related but distinct concepts. Correlation describes a relationship, while computation refers to the process of calculating that relationship.',
            ],
            code: `df.corr()`,
        },
        {
            id: 7,
            title: 'Model Evaluation Metrics',
            points: [
                'To know if your Machine Learning model is actually "good," you need Evaluation Metrics. The metric you choose depends entirely on the type of problem you are solving: Classification (predicting a category) or Regression (predicting a number).',
                'Accuracy measures correct predictions.',
                'Precision measures correctness of positives.',
                'Recall measures coverage of positives.',
                'F1-score balances precision and recall.',
            ],
        },
        {
            id: 8,
            title: 'Handling Missing Data in Pandas',
            points: [
                'In data analysis, missing data is represented as NaN (Not a Number) in Pandas. Before you can build a Machine Learning model, you must decide how to handle these "holes" in your dataset.',
                'Detect missing values using isnull().',
                'Remove rows using dropna().',
                'Fill values using fillna().',
            ],
            code: `df.fillna(df.mean())`,
        },
        {
            id: 9,
            title: 'Linear Regression with Python',
            points: [
                'Linear Regression is one of the most fundamental algorithms in Machine Learning. It predicts a continuous output (Target) based on one or more input features (Predictors) by fitting a straight line to the data.',
                'Equation: y = mx + c',
            ],
            code: `from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X, y)
model.predict(X)`,
        },
        {
            id: 10,
            title: 'Grouping in Data Analysis',
            points: [
                'In data analysis, Grouping is the process of splitting a dataset into subsets based on specific criteria, applying a function to those subsets, and then combining the results. This is almost always performed using the Split-Apply-Combine strategy.',
                'Grouping splits data into subsets.',
                'Applied using groupby().',
            ],
            code: `import pandas as pd

summary = df.groupby('Category')['Price'].mean()`,
        },
        {
            id: 11,
            title: 'Matplotlib vs Seaborn',
            points: [
                'In the Python data visualization ecosystem, Matplotlib and Seaborn are the most widely used libraries. While Matplotlib provides the foundation, Seaborn is built on top of it to make statistical graphics easier to create.',
                'Matplotlib is low-level.',
                'Seaborn is high-level.',
                'Seaborn provides better default styles.',
                'Seaborn is built on matplotlib.',
            ],
        },
        {
            id: 12,
            title: 'loc[] vs iloc[]',
            points: [
                'loc[] uses labels.',
                'iloc[] uses integer positions.',
            ],
            code: `# Selects the row where the index label is 'Row_1'
df.loc['Row_1']

# Selects specific rows and columns by their names
df.loc[['Row_1', 'Row_2'], ['Name', 'Age']]`,
        },
        {
            id: 13,
            title: 'Purpose of Scikit-learn',
            points: [
                'Scikit-learn (often imported as sklearn) is the most popular and influential library for Machine Learning in Python. Its primary purpose is to provide a consistent, efficient, and easy-to-use toolkit for predictive data analysis.',
                'Provides ML algorithms.',
                'Supports classification and regression.',
                'Includes model evaluation tools.',
            ],
        },
        {
            id: 14,
            title: 'Mean Calculation Code',
            code: `data = [10, 20, 30, 40, 50]

mean = sum(data) / len(data)

print(f"Mean: {mean}") # Output: 30.0`,
        },
        {
            id: 15,
            title: 'Role of Libraries in Data Analysis',
            points: [
                'In data analysis, libraries are collections of pre-written code, functions, and methods that allow you to perform complex tasks without writing everything from scratch. Instead of spending weeks coding a mathematical formula or a charting tool, you can import a library and do it in a single line.',
                'Simplify complex tasks.',
                'Improve performance.',
                'Reduce development time.',
            ],
            example: [
                'NumPy',
                'Pandas',
                'Matplotlib',
                'Scikit-learn',
            ],
        },
        {
            id: 16,
            title: 'Load Excel using Pandas',
            points: [
                'To load Excel files in Pandas, the primary function is pd.read_excel(). While it is similar to loading a CSV, it requires an additional "helper" library (engine) to read the specific .xlsx or .xls formats.'
            ],
            code: `import pandas as pd

# Load the first sheet
df = pd.read_excel('financial_report.xlsx')

# Display the data
print(df.head())`,
        },
        {
            id: 17,
            title: 'Purpose of fit() and predict()',
            points: [
                'In Scikit-learn, the fit() and predict() methods are the two most important functions. They represent the two distinct phases of the Machine Learning lifecycle: Learning and Applying.',
                'fit() trains the model.',
                'predict() generates outputs.',
            ],
        },
        {
            id: 18,
            title: 'Polynomial Regression Usage',
            points: [
                'While Linear Regression assumes a straight-line relationship between variables, Polynomial Regression is used when the data points follow a curved pattern. It is a form of linear regression where the relationship between the independent variable x and the dependent variable y is modeled as an nth degree polynomial.',
                'Used for non-linear relationships.',
                'Extends linear regression with powers.',
            ],
        },
        {
            id: 19,
            title: 'Model Refinement',
            points: [
                'Model Refinement is the process of improving a machine learning model\'s performance after the initial training phase. Once you have a "baseline" model, refinement helps you reduce errors, handle overfitting, and ensure the model generalizes well to new, unseen data.',
                'Improves model performance.',
                'Adjusts parameters.',
                'Reduces errors.',
            ],
            example: [
                'Hyperparameter tuning.',
            ],
        },
        {
            id: 20,
            title: 'Drop Duplicates Example',
            points: [
                'In data analysis, duplicate rows can skew your results and lead to inaccurate models. Pandas provides the drop_duplicates() method to identify and remove these redundant entries.'
            ],
            code: `df.drop_duplicates()`,
        },
        {
            id: 21,
            title: 'Decision Tree Classifier',
            points: [
                'A Decision Tree Classifier is a supervised machine learning algorithm used for classification. It works like a flowchart, making a series of nested "if-else" decisions to split data into categories.',
                'Uses rules and splits.',
            ],
            steps: [
                'Load data',
                'Train model',
                'Visualize tree',
            ],
        },
        {
            id: 22,
            title: 'Aggregation Functions in Grouping',
            points: [
                'In data analysis, Aggregation is the step where you take multiple rows of data and "collapse" them into a single summary value (like a sum, average, or count). When used with groupby(), these functions provide insights into specific segments of your data.',
                'sum() totals values.',
                'mean() averages values.',
                'max() finds highest value.',
                'min() finds lowest value.',
                'agg() applies multiple functions.',
            ],
        },
        {
            id: 23,
            title: 'legend, xlabel, ylabel',
            points: [
                'legend explains plot lines.',
                'xlabel names x-axis.',
                'ylabel names y-axis.',
            ],
        },
        {
            id: 24,
            title: 'Filter Rows Example',
            code: `import pandas as pd

# Sample Data
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 40],
    'City': ['NY', 'LA', 'NY', 'CH']
})

# Filter: Only rows where Age is greater than 30
over_30 = df[df['Age'] > 30]

print(over_30)`,
        },
        {
            id: 25,
            title: 'Accuracy and Misclassification',
            points: [
                'In machine learning, Accuracy and Misclassification are the most basic metrics used to evaluate a classification model. They tell you how often the model is "right" versus how often it is "wrong."',
                'Accuracy = correct / total.',
                'Misclassification = incorrect predictions.',
            ],
            example: [
                '90 correct out of 100 gives 90 percent accuracy.',
            ],
        },
        {
            id: 26,
            title: 'Binning Concept',
            points: [
                'Binning (also known as bucketing or quantization) is a data preprocessing technique used to group continuous numerical values into discrete "bins" or intervals. Essentially, you are turning a high-resolution numerical variable into a lower-resolution categorical variable. For example, instead of looking at specific ages (21, 22, 25, 40, 41), you group them into "Young" and "Middle-Aged."',
                'Converts continuous data into intervals.',
                'Simplifies analysis.',
            ],
            example: [
                'Age groups.',
            ],
        },
        {
            id: 27,
            title: 'Matplotlib Plot Code',
            code: `import matplotlib.pyplot as plt

# 1. Prepare Data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# 2. Create Plot
plt.plot(x, y, color='blue', marker='o', linestyle='--')

plt.show()`,
        },
        {
            id: 28,
            title: 'df.info() Output',
            points: [
                'The df.info() method is one of the first commands every data scientist runs after loading a dataset. It provides a high-level technical summary of a DataFrame, allowing you to quickly spot missing data, incorrect data types, and memory usage issues.',
                'Shows column names.',
                'Shows data types.',
                'Shows memory usage.',
            ],
        },
        {
            id: 29,
            title: 'train_test_split Purpose',
            points: [
                'The train_test_split function is a fundamental tool in the Scikit-learn library. Its purpose is to divide your dataset into two separate subsets: one for training the model and one for testing its performance.',
                'Splits data into training and testing sets.',
                'Prevents overfitting.',
            ],
        },
        {
            id: 30,
            title: 'Pipelining in Data Analysis',
            points: [
                'In data analysis and machine learning, a Pipeline is a way to codify and automate the workflow of transforming data and applying a model. It bundles multiple steps into a single object, ensuring that the same sequence of actions is applied to both your training data and your future "live" data.',
                'Chains multiple steps.',
                'Ensures clean workflow.',
                'Prevents data leakage.',
            ],
        },
        {
            id: 31,
            title: 'Cross-validation',
            points: [
                'Cross-validation (CV) is a statistical technique used to evaluate how well a machine learning model generalizes to an independent dataset. It is primarily used to detect overfitting and to ensure that the model\'s performance isn\'t just a result of a "lucky" split of the data.',
                'Evaluates model stability.',
                'Uses multiple train-test splits.',
            ],
        },
        {
            id: 32,
            title: 'DataFrame Slicing Example',
            points: [
                'In Pandas, slicing refers to selecting a specific subset of rows and columns from your DataFrame. While "filtering" usually involves logic (like Age > 30), slicing usually involves positions or labels.',
                'Selects first five rows.',
            ],
            code: `df[0:5]`,
        },
        {
            id: 33,
            title: 'Feature Selection using SelectKBest',
            points: [
                'SelectKBest is a feature selection method in Scikit-learn that acts as a filter. It identifies and keeps the $k$ most important features in your dataset based on a specific statistical test.',
                'Selects top features.',
                'Uses statistical tests.',
            ],
        },
        {
            id: 34,
            title: 'ANOVA Explanation',
            points: [
                'ANOVA, which stands for Analysis of Variance, is a statistical method used to determine if there is a significant difference between the means (averages) of three or more independent groups.',
                'Compares means of groups.',
                'Tests statistical significance.',
            ],
        },
        {
            id: 35,
            title: 'Purpose of ndim in NumPy',
            points: [
                'In NumPy, ndim is an attribute of an array that tells you the number of dimensions (also known as the "rank" or "axes") of that array.',
                'Returns number of dimensions.',
                'Helps understand array structure.',
            ],
        },
        {
            id: 36,
            title: 'Series and DataFrame',
            points: [
                'In the world of Python data analysis, Pandas is built on two primary data structures: the Series and the DataFrame. Understanding the relationship between them is the first step toward mastering the library.',
                'Series is one-dimensional.',
                'DataFrame is two-dimensional.',
                'Both are core Pandas structures.',
            ],
        },
        {
            id: 37,
            title: 'Overfitting Definition',
            points: [
                'Overfitting is a common problem in machine learning where a model learns the training data "too well." Instead of identifying the underlying patterns, the model memorizes the specific noise and random fluctuations in the training set.',
                'Model learns noise.',
                'Performs poorly on new data.',
            ],
            impact: [
                'Low generalization.',
            ],
        },
        {
            id: 38,
            title: 'Grid Search',
            points: [
                'Grid Search is a systematic hyperparameter tuning technique used to find the optimal settings for a machine learning model. Instead of manually guessing which parameters work best, Grid Search automates the process by "brute-forcing" through a predefined list of options.',
                'Searches best parameters.',
                'Improves model performance.',
            ],
        },
        {
            id: 39,
            title: 'Types of Plotting',
            types: [
                'In data analysis, plotting is generally divided into three categories based on the number of variables you are analyzing: Univariate, Bivariate, and Multivariate. Choosing the right type of plot depends entirely on the "story" you want the data to tell.',
                'Line plot',
                'Bar plot',
                'Scatter plot',
                'Histogram',
                'Pie chart',
            ],
        },
        {
            id: 40,
            title: 'Advantages of Data Visualization',
            points: [
                'Data visualization is the graphical representation of information and data. By using visual elements like charts, graphs, and maps, data visualization tools provide an accessible way to see and understand trends, outliers, and patterns in data.',
                'Improves understanding.',
                'Reveals patterns.',
                'Supports decision making.',
            ],
        },
    ];

    // Filter questions based on search query (title only)
    const filteredQuestions = questions.filter((q) => {
        if (!searchQuery) return true;
        
        const query = searchQuery.toLowerCase();
        
        // Search in title only
        return q.title.toLowerCase().includes(query);
    });

    return (
        <div className="min-h-screen">
            <div className="mb-8 border-b border-gray-300 pb-6">
                <h1 className="text-3xl font-bold text-amber-900 mb-2">
                    Exam Preparation Notes
                </h1>
                <p className="text-sm text-gray-600 mb-4">
                    {questions.length} questions • January 17, 2026
                </p>
                
                {/* Search Box */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search questions by keyword (e.g., pandas, numpy, regression)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-600 focus:outline-none text-gray-800 placeholder-gray-400 bg-white"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 font-bold text-xl"
                            title="Clear search"
                        >
                            ×
                        </button>
                    )}
                </div>
                
                {/* Results count */}
                {searchQuery && (
                    <p className="mt-2 text-sm text-gray-600">
                        Found {filteredQuestions.length} question{filteredQuestions.length !== 1 ? 's' : ''} matching "{searchQuery}"
                    </p>
                )}
            </div>

            {filteredQuestions.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No questions found matching "{searchQuery}"</p>
                    <button
                        onClick={() => setSearchQuery('')}
                        className="mt-4 px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
                    >
                        Clear search
                    </button>
                </div>
            ) : (
                <div className="space-y-8">
                    {filteredQuestions.map((q) => (
                    <div
                        key={q.id}
                        className="border border-gray-200 rounded-lg p-6 bg-white/50 shadow-sm hover:shadow-md transition-shadow"
                    >
                        {/* Question Number and Title */}
                        <div className="mb-4">
                            <span className="inline-block bg-amber-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                                Question {q.id}
                            </span>
                            <h2 className="text-xl font-bold text-gray-800">
                                {q.title}
                            </h2>
                        </div>

                        {/* Main Points */}
                        {q.points && q.points.length > 0 && (
                            <div className="mb-4">
                                <ul className="space-y-2">
                                    {q.points.map((point, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start"
                                        >
                                            <span className="text-amber-600 mr-2 mt-1 flex-shrink-0">
                                                •
                                            </span>
                                            <span className="text-gray-700">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Types (for ML question) */}
                        {q.types && q.types.length > 0 && (
                            <div className="mb-4">
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    Types:
                                </h3>
                                <ul className="space-y-1 ml-4">
                                    {q.types.map((type, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start"
                                        >
                                            <span className="text-amber-600 mr-2">
                                                →
                                            </span>
                                            <span className="text-gray-700">
                                                {type}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Steps (for process-based questions) */}
                        {q.steps && q.steps.length > 0 && (
                            <div className="mb-4">
                                <h3 className="font-semibold text-gray-800 mb-2">
                                    Steps:
                                </h3>
                                <ul className="space-y-1 ml-4">
                                    {q.steps.map((step, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start"
                                        >
                                            <span className="text-amber-600 mr-2 font-semibold">
                                                {idx + 1}.
                                            </span>
                                            <span className="text-gray-700">
                                                {step}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Code Examples */}
                        {q.code && (
                            <div className="mb-4">
                                <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                                    Example:
                                </h3>
                                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto text-sm">
                                    <code>{q.code}</code>
                                </pre>
                            </div>
                        )}

                        {/* Examples (text) */}
                        {q.example && q.example.length > 0 && (
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                                <h3 className="font-semibold text-blue-900 mb-2 text-sm">
                                    Example:
                                </h3>
                                <ul className="space-y-1">
                                    {q.example.map((ex, idx) => (
                                        <li
                                            key={idx}
                                            className="text-blue-800 text-sm"
                                        >
                                            • {ex}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Impact (for overfitting question) */}
                        {q.impact && q.impact.length > 0 && (
                            <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded">
                                <h3 className="font-semibold text-orange-900 mb-2 text-sm">
                                    Impact:
                                </h3>
                                <ul className="space-y-1">
                                    {q.impact.map((imp, idx) => (
                                        <li
                                            key={idx}
                                            className="text-orange-800 text-sm"
                                        >
                                            • {imp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            )}

            {/* Footer note */}
            <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
                <p>Good luck with your exam! 🍀</p>
            </div>
        </div>
    );
}
