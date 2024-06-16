class FootballWorldCupScoreBoard {
    constructor() {
        this.games = new Map();
        this.orderOfGames = [];
    }

    startGame(homeTeam, awayTeam) {
        const key = this.generateKey(homeTeam, awayTeam);
        if (!this.games.has(key)) {
            const game = { homeTeam, awayTeam, homeScore: 0, awayScore: 0, timestamp: Date.now() };
            this.games.set(key, game);
            this.orderOfGames.push(game);
        }
    }

    finishGame(homeTeam, awayTeam) {
        const key = this.generateKey(homeTeam, awayTeam);
        if (this.games.has(key)) {
            this.games.delete(key);
            this.orderOfGames = this.orderOfGames.filter(game => this.generateKey(game.homeTeam, game.awayTeam) !== key);
        }
    }

    updateScore(homeTeam, awayTeam, homeScore, awayScore) {
        const key = this.generateKey(homeTeam, awayTeam);
        if (this.games.has(key)) {
            const game = this.games.get(key);
            game.homeScore = homeScore;
            game.awayScore = awayScore;
            game.timestamp = Date.now();
        }
    }

    getGame(homeTeam, awayTeam) {
        const key = this.generateKey(homeTeam, awayTeam);
        return this.games.get(key);
    }

    getSummary() {
        return this.orderOfGames.sort((a, b) => {
            const totalScoreA = a.homeScore + a.awayScore;
            const totalScoreB = b.homeScore + b.awayScore;
            if (totalScoreA === totalScoreB) {
                return b.timestamp - a.timestamp;
            }
            return totalScoreB - totalScoreA;
        });
    }

    generateKey(homeTeam, awayTeam) {
        return `${homeTeam} vs ${awayTeam}`;
    }
}