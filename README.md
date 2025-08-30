# 📝 To-Do List App

A simple **full-stack To-Do List web app** built with **Node.js, Express.js, EJS, and Bootstrap**. Allows users to **Create, Read, Update, and Delete (CRUD)** tasks using **RESTful routes** and dynamic server-side rendering.

---

## 📌 Features

* Add new tasks to your to-do list
* View all tasks dynamically rendered from the server
* Edit existing tasks inline
* Delete tasks when completed
* Fully responsive design using **Bootstrap**
* Implements **RESTful routes**:

  * `GET /todolist` → View all tasks
  * `GET /todolist/new` → Add new task form
  * `POST /todolist` → Create task
  * `GET /todolist/:id/edit` → Edit form
  * `PUT /todolist/:id` → Update task
  * `DELETE /todolist/:id` → Delete task

---

## 🔗 Live Demo

🌐 *(Add your deployed link here once hosted)*

---

## 🛠 Tech Stack

* **Node.js** – Backend runtime
* **Express.js** – Server and routing
* **EJS** – Templating engine for dynamic pages
* **Bootstrap** – Responsive UI styling
* **method-override** – PUT & DELETE support in forms
* **Optional:** MongoDB for persistent storage

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Vignesh-737/Todo-App.git
cd comments-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node index.js
```

### 4. Open the app

Visit: `http://localhost:3000/todos`

---

## 📂 Project Structure

```
comments-app/
│
├── index.js          # Main server file with RESTful routes
├── package.json      # Project dependencies
├── views/            # EJS templates
     ├── index.ejs    # Main task list page
     ├── new.ejs      # Add task form
     └── edit.ejs     # Edit task form

```

---

## 💡 How to Use

1. Open the app in your browser
2. Add a new task using the *Add Task* button
3. Edit a task using the *Edit* button
4. Delete a task using the *Delete* button
5. Tasks are dynamically updated on the page

---

## ✅ Future Improvements

* Integrate **MongoDB** for persistent storage
* Add **task completion toggle**
* Implement **user authentication**
* Deploy live on **Render.com** or **Railway**
* Enhance UI with **Bootstrap components and icons**

---

## 📜 License

This project is **open-source** and free to use.
