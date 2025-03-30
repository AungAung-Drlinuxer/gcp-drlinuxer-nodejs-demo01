To start a Node.js project using the `npm init`, `npm install`, and `npm start` commands, follow these steps:

### Step 1: Initialize the Project with `npm init`

1. **Create a new directory** for your project:
   ```bash
   mkdir gcp-drlinuxer-nodejs-demo01
   cd gcp-drlinuxer-nodejs-demo01
   ```

2. **Run `npm init`** to initialize a new Node.js project:
   ```bash
   npm init
   ```

   This command will prompt you for details about your project, such as name, version, description, entry point, etc. You can press **Enter** to accept the default values or provide custom values.

   If you want to skip the prompts and generate a `package.json` file with default values, you can use `npm init -y`:
   ```bash
   npm init -y
   ```

   This will create a `package.json` file with default values.

### Step 2: Install Project Dependencies with `npm install`

1. **Install Express.js** (since you need it for your backend):
   ```bash
   npm install express dotenv
   ```

   This will install the `express` and `dotenv` dependencies and update your `package.json` file to include them under `dependencies`.

2. **Optional:** If you have any other dependencies, install them by running `npm install <package-name>`.

### Step 3: Create `server.js`

Create a `server.js` file and add the following content:

```javascript
const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Cloud Run and Cloud Build Demo - CI/CD Pipeline" });
});

app.get("/echo/:text", (req, res) => {
    const { text } = req.params;
    return res.status(200).json({ message: "Echo Route", data: text });
});
```

This is your Express.js application.

### Step 4: Add a `start` Script in `package.json`

In your `package.json`, make sure there is a `start` script defined. If not, you can manually add it or run this command to add it:

```bash
npm set-script start "node server.js"
```

This will add the following to your `package.json` under `scripts`:

```json
"scripts": {
    "start": "node server.js"
}
```

### Step 5: Run the Application

Now that your project is set up and dependencies are installed, you can start the application using:

```bash
npm start
```

This will run the `server.js` file, starting the Express server.

### Step 6: Test the Application

Once the server is running, you can test it:

- Open your browser and go to `http://localhost:8080/` to test the root route, or use `curl`:

  ```bash
  curl http://localhost:8080/
  ```

  Expected output:
  ```json
  { "message": "Cloud Run and Cloud Build Demo - CI/CD Pipeline" }
  ```

- Test the echo route with `curl`:

  ```bash
  curl http://localhost:8080/echo/hello
  ```

  Expected output:
  ```json
  { "message": "Echo Route", "data": "hello" }
  ```

---

### Recap of the Commands:
1. **Initialize project**:
   ```bash
   npm init -y
   ```

2. **Install dependencies**:
   ```bash
   npm install express dotenv
   ```

3. **Add `start` script** (if not already in `package.json`):
   ```bash
   npm set-script start "node server.js"
   ```

4. **Start the application**:
   ```bash
   npm start
   ```

Now you have a fully working Node.js project that you can run with `npm init`, `npm install`, and `npm start`.