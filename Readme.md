# Blog App

This is a blog application built using Node.js, Express, EJS, and Bootstrap. The application allows users to create, view, and comment on blog posts. It includes user authentication and authorization features.

## Features

- User authentication (sign up, log in, log out)
- Create, view, edit, and delete blog posts
- Upload cover images for blog posts
- Comment on blog posts
- Responsive design with Bootstrap

## Technologies Used

- Node.js
- Express
- EJS (Embedded JavaScript templating)
- Bootstrap
- MongoDB (with Mongoose)
- Passport.js (for authentication)
- Multer (for file uploads)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Dharam-IN/nodejs-blog
    cd blog-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```
    PORT=8000
    MONGODB_URL=your_mongodb_connection_string
    ```

4. Run the application:
    ```bash
    npm start
    ```

    The application will be running on `http://localhost:8000`.

## Usage

### Home Page

The home page displays a list of all blog posts. Each post includes a title, cover image, and a link to view the full post.

### Sign Up

Users can sign up by providing their name, email, and password.

### Log In

Registered users can log in with their email and password.

### Create a Blog Post

After logging in, users can create a new blog post by providing a title, body content, and an optional cover image.

### View a Blog Post

Users can view the full details of a blog post, including the title, cover image, body content, and comments.

### Comment on a Blog Post

Logged-in users can comment on blog posts. Each comment includes the commenter's name and profile photo.

## Contributing

Contributions
