class CPlayer {
    #data = undefined;

    constructor(dataPlayer) {
        this.#data = dataPlayer;
    }

    get forename() { return this.#data.forename; }
    get surname() { return this.#data.surname; }
    get fullname() { return this.#data.forename + ' ' + this.#data.surname; }
    get scorename() { return this.#data.forename[0] + '. ' + this.#data.surname; }
    get nationality() { return this.#data.nation; }
    get statBat() { return this.#data.bat; }
    get statBowl() { return this.#data.bowl; }
    get statField() { return this.#data.field; }

    // calcBat(inBowlStat) { return (BfxRandomInt(inBowlStat) < BfxRandomInt(this.statBat)); }
    // calcBowl(difficultyStat) { return (BfxRandomInt(difficultyStat) < BfxRandomInt(this.statBowl)); }
    // calcField(inBatStat) { return (BfxRandomInt(this.statField) > BfxRandomInt(inBatStat)); }
}

class CTeam {
    #name = undefined;
    #nation = undefined;
    #team = undefined;
    #nextBatsmanIndex = 0;
    #bowlers = undefined
    #nextBowlerIndex = 0;
    #wicketKeeperIndex = undefined;

    constructor(dataTeam) {
        this.#name = dataTeam.name;
        this.#nation = dataTeam.nation;
        this.#team = new Array();
        for (let index = 0; index < dataTeam.orderBat.length; index++) {
            const playerIndex = dataTeam.orderBat[index];
            const playerData = new CPlayer(dBplayers[playerIndex]);
            this.#team.push({
                id: index,
                player: playerData,
                batRuns: 0,
                batStatus: '',
                batBalls: 0,
                bowlBalls: 0,
                bowlRuns: 0,
                bowlExtras: 0,
                bowlMaidens: 0,
                bowlWickets: 0
            })
        }
        this.#bowlers = dataTeam.orderBowl;
        this.#wicketKeeperIndex = dataTeam.wicketKeeper;
    }

    get name() { return this.#name; }
    get nationality() { return this.#nation; }
    player(index) { return this.#team[index]; }
    get wicketKeeperId() { return this.#wicketKeeperIndex; }

    get nextBatsman() {
        if (this.#nextBatsmanIndex >= this.#team.length) { return undefined; }
        this.#nextBatsmanIndex++;
        return this.player(this.#nextBatsmanIndex - 1);
    }

    get nextBowler() {
        if (this.#nextBowlerIndex >= this.#bowlers.length) { return undefined; }
        this.#nextBowlerIndex++;
        return this.player(this.#bowlers[this.#nextBowlerIndex - 1]);
    }
}