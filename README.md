# Football World Cup Score Board Javascript library 

## Available methods:

Create a new match with the given teams names
```
startGame(homeTeam, awayTeam)
```
Updates the score for a match matching the team names
```
updateScore(homeTeam, awayTeam, homeScore, awayScore)
```
Remove the match matching the given home and away teams
```
finishGame(homeTeam, awayTeam)
```
Get a summary of matches by total score. Those matches with the same total score will be returned ordered by the most recently added to our system.
```
getSummary()
```

## Tech stacks
- Jasmine (TDD)
- Javascript
- HTML


## How to run
- Download jasmine-standalone-5.1.2.zip(https://github.com/jasmine/jasmine/releases)
- Copy scoreboard.js to src folder
- Copy scoreboardSpec.js to spec folder
- Replace and open specRunner.html and to run Junit test
- Open index.html in browser for football score board
