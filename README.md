# DrugTargetIdentification
# Drug-Protein Interaction Visualizer

## Overview

This project is a web application designed to visualize drug-protein interactions using a bipartite graph. It allows users to upload interaction data, and the application calculates and displays the proteins based on their interaction centrality.

## Features

- **Input data**: Enter drug-protein interactions in the input fields provided.
- **Data Processing**: The backend processes the file to calculate the centrality of proteins.
- **Visualization**: A bipartite graph is generated, showing the proteins and their interactions with drugs.
- **Responsive Design**: The graph is responsive and scales for mobile devices.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, D3.js for data visualization
- **Backend**: Node.js, Express.js

## Installation

 Clone the repository:
 ```
   git clone https://github.com/yourusername/drug-protein-interaction-visualizer.git
```
   Navigate to the project directory:
```
cd drug-protein-interaction-visualizer
```
Wrap index.html file in a public folder.

Install the required dependencies:
```
npm install
```
Start the server:
```
node server.js
```
Open your browser and navigate to http://localhost:3000 to view the application.
