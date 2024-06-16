describe('FootballWorldCupScoreBoard', function () {
    let scoreBoard;

    beforeEach(function () {
        scoreBoard = new FootballWorldCupScoreBoard();
    });

    it('should start a game with initial score 0-0', function () {
        scoreBoard.startGame('Team A', 'Team B');
        const game = scoreBoard.getGame('Team A', 'Team B');
        expect(game).toBeDefined();
        expect(game.homeScore).toBe(0);
        expect(game.awayScore).toBe(0);
    });

    it('should finish a game', function () {
        scoreBoard.startGame('Team A', 'Team B');
        scoreBoard.finishGame('Team A', 'Team B');
        const game = scoreBoard.getGame('Team A', 'Team B');
        expect(game).toBeUndefined();
    });

    it('should update the score of a game', function () {
        scoreBoard.startGame('Team A', 'Team B');
        scoreBoard.updateScore('Team A', 'Team B', 2, 1);
        const game = scoreBoard.getGame('Team A', 'Team B');
        expect(game.homeScore).toBe(2);
        expect(game.awayScore).toBe(1);
    });

    it('should return a summary of games ordered by total score and timestamp', function () {
        scoreBoard.startGame('Team A', 'Team B');
        scoreBoard.startGame('Team C', 'Team D');
        scoreBoard.updateScore('Team A', 'Team B', 2, 1);
        scoreBoard.updateScore('Team C', 'Team D', 1, 1);

        const summary = scoreBoard.getSummary();
        expect(summary[0].homeTeam).toBe('Team A');
        expect(summary[1].homeTeam).toBe('Team C');
    });
});