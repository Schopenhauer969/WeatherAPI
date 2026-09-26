✨ Features
Real-Time Weather Data: Displays current temperature (°C), weather conditions, humidity, and wind speed.

Search Functionality: Look up any city worldwide via a search button or by pressing Enter.

Error Handling: Gracefully handles invalid city names or network issues.

Modern Async/Await: Clean and asynchronous JavaScript for API requests.

🚀 Git Setup & GitHub Push Instructions
To initialize this project as a Git repository and push it to GitHub, run the following commands in your terminal:

Bash
# 1. Initialize git in your project folder
git init

# 2. Add all files to staging
git add .

# 3. Commit your files
git commit -m "Initial commit: Weather app using OpenWeatherMap API"

# 4. Rename default branch to main
git branch -M main

# 5. Link your remote repository (replace with your GitHub repo URL)
git remote add origin [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

# 6. Push your code to GitHub
git push -u origin main
⚙️ Configuration & Setup
Get an API Key: Sign up at OpenWeatherMap to get your free API key.

Add Your Key: Open your JavaScript file and replace the placeholder API key with your own:

JavaScript
const API_KEY = "your_actual_openweathermap_api_key_here";
Run the App: Open your index.html file in any modern web browser or use a live server extension (like Live Server in VS Code).
