# CV Build
### Lighthouse performance scoring
<img width="503" alt="399404159-5a48c84a-3cc0-49da-967d-46bce7de3708" src="https://github.com/user-attachments/assets/8e199cf2-60c7-4b5c-9d63-b6f8ffa65ab4" />

### Preview
<img width="803" alt="399405497-141087b4-9b34-45bb-b398-f36478c70373" src="https://github.com/user-attachments/assets/bda38c3a-c2b6-47ab-b796-4e9f421fcb73" />

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


