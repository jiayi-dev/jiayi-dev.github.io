# CV Build
### Lighthouse performance scoring
<img width="503" alt="Screenshot 2024-12-30 at 22 48 11" src="https://github.com/user-attachments/assets/5a48c84a-3cc0-49da-967d-46bce7de3708" />

### Preview
<img width="842" alt="Screenshot 2024-12-30 at 22 50 00" src="https://github.com/user-attachments/assets/b92d4a22-1b09-439e-91d9-56f4fd5d6f92" />

This is a dynamic CV website built with TypeScript. All content and data for the CV are sourced from the `resume.ts` file under the `data` directory. To get started, you can follow the steps below to customize and deploy your CV.

## Features

- **Dynamic Data**: All your resume content is read directly from the `resume.ts` file.
- **Image Management**: All images are placed in the `public/image` folder.
- **Easy Deployment**: You can build and deploy your website to GitHub Pages with simple commands.

## Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jiayi-dev/jiayi-dev.github.io.git
   cd your-cv-repo

2. Install the dependencies:
   ```bash
   npm install

### Usage

1. **Modify Your Resume:**
   All the information that appears on your CV is stored in `data/resume.ts`. You can edit the data inside this file (such as name, experience, education, skills, etc.) to customize your CV.

2. **Preview the CV:**
   After modifying the `resume.ts`, you can preview your changes locally by running:

   ```bash
   npm start

3. **Build the Project for Deployment:**
Once you are satisfied with your changes, you can build the project for deployment:
   ```bash
   npm run build

4. **Run the deploy command:**
   ```bash
   npm run deploy


