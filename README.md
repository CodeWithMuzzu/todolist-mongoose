# TODO List with MONGODB Web App - README
Welcome to the TODO List Web App repository! This project is a simple web application built with Node.js, Express, and MongoDB to help you keep track of your daily tasks. We encourage everyone to contribute to this project and make it even better!

1. Installation
1. Clone the repository to your local machine.
1. Install Node.js and MongoDB if you haven't already.
1. Navigate to the project directory and install the required dependencies by running the following command:
   ```js
   npm install
   ```
1. Create a ```.env ``` file in the root directory and add your MongoDB connection credentials:
   ```.env
   USERNAME=your_mongodb_username
   PASSWORD=your_mongodb_password
   ```
1. Getting Started
   To start the TODO List Web App, run the following command:
   ```js
   nodemon index.js
   ```
> The application will be accessible at http://localhost:3000 in your web browser.

## Usage
### Homepage - Today's List
The homepage will display your TODO list for today. You can add new items by typing them in the input field and clicking the "+" button. To delete an item, simply click on the item text.

### Custom Lists
You can create custom lists by navigating to http://localhost:3000/your_custom_list_name. Replace your_custom_list_name with the desired name for your custom list. Custom lists allow you to keep track of tasks based on your specific needs.

### Work List (Example)
An example of a predefined list called "Work List" is available. You can access it by navigating to http://localhost:3000/work.

### About
The "About" page provides some information about the project.

### Contributing
We welcome contributions to improve this web app! Whether you find and fix a bug, add a new feature, or enhance the documentation, your contributions are highly appreciated.

If you'd like to contribute, follow these steps:

1. Fork the repository on GitHub.
1. Create a new branch with a descriptive name for your feature/fix.
1. Make your changes and commit them with clear messages.
1. Push your changes to your forked repository.
1. Submit a pull request to the main repository.
1. We will review your changes and, if everything looks good, merge them into the main branch.

Thank you for considering contributing to the TODO List Web App! Let's make task management easier together. If you have any questions or need assistance, feel free to reach out.

Happy contributing! 🚀
