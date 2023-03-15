# whelter-app
Repository for Whelter, an emergency shelter oriented Android application developed for SE300.

# Required installations
In command prompt, change the directory to the root folder of the project and run the following commands one at a time:
```
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-linear-gradient
```

# Setting up how to push to GitHub repo branch(es)
1. When you have the repo files installed (example: C:/......./whelter-app), open up Command Prompt and change the directory to this location.
2. Run `git init -b main` to initialize.
3. Run `git remote add origin https://github.com/AshleyConnearney13/Emergency-Weather-App.git`. Verify that its connected using `git remote -v`.
3. Run `git add .` to queue files for a commit.
4. Run `git commit -m "XXXXX"` to commit the files to your LOCAL repository. *Note: XXXXX stands for the title of the commit to show. This displays to the right of the file name on GitHub, so write something that describes what changed in the file(s) that makes them relate to eachother.*
5. Run `git push origin master:ZZZZZ` to push the files to the ONLINE repository on GitHub, where everyone will be able to see the changes. *Note: XXXXX stands for the branch name being pushed to. Do NOT push to main (our release branch) unless its agreed upon.*
