# Objective
To build a compatibility-based 'Friend Finder' web application that works like a dating app. It will take results from user surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

#### Minimum Requirements
Attempt to complete the assignment as described in the instructions. Add a README.md and add the assignment to your portfolio. **The assignment must be deployed!**
Do not forget to add the assignment to your portfolio. Make sure to add a link to your updated portfollio in the comments section of your homework so the TAs can ensure you completed this step when they are grading the assignment. 

#### Hosting on Heroku
Now that I have a backend to my application, I can use Heroku for hosting. Be aware that Heroku will charge you if you have more than 5 applications at a time or are adding a database.
 * Check the Heroku deployment guide for any questions or confusions in this process.

## Instructions

### Starter Steps
1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your _server.js_ file should require the basic npm packages we've used in class: _express_ and _path_.

3. Your _htmlRoutes.js_ file should include two routes.
 * A GET route to _/survey_ which should diplau the survey page.
 * A default, catch-all route that leads to _home.html_ which displays the home page.

4. You should save your application's data inside of _app/data/friends.js_ as an array of objects. Each of these objects should roughly follow the fomat below.

```javascript
{
    "name" : "Ahmed",
    "photo" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}
```

 ### API
 1. Your _apiRoutes.js_ file should contain two routes.
  * A GET route with the url _/api/friends_. This will be used to dusplay a JSON of all possible friends. 
  * A POST routes _/api/friends_. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

### Compatibility
- Convert each user's results into a simple array of numbers (ex: _[5,1,4,4,5,1,2,5,4,1]_).
- With that done, compare the difference bewteen current user's scores against those from other users. Compare question by question. Add up the differences to calculate _totalDifference_.
  - Example:
    - User 1: _[5,1,4,4,5,1,2,5,4,1_
    - User 2: _[3,2,6,4,5,1,2,5,4,1_
    - Total Difference: **2 + 1 + 2 = 5**
- Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both _5 - 3_ and _3 - 5_ as _2_ and so on.
- The closest match will be the user's most compatible friend. Display the result as a modal pop-up. 
  - The modal should display both the name and picture of the closest match.