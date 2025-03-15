class CMatch {
    #homeTeam = undefined;
    #homeTeamTable = undefined;
    #awayTeam = undefined;
    #awayTeamTable = undefined;
    #matchTable = undefined;

    constructor(format, homeTeam, awayTeam) {
        this.#homeTeam = new CTeam(homeTeam);
        this.#homeTeamTable = this.#createTeamTable(this.#homeTeam);
        document.getElementById('elemIdHomeTeam').appendChild(this.#homeTeamTable);
        document.getElementById('elemIdHomeTeam').style = 'display: none;';

        this.#awayTeam = new CTeam(awayTeam);
        this.#awayTeamTable = this.#createTeamTable(this.#awayTeam);
        document.getElementById('elemIdAwayTeam').appendChild(this.#awayTeamTable);
        document.getElementById('elemIdAwayTeam').style = 'display: none;';

        this.#matchTable = this.#createMatchFormat(format);
        document.getElementById('elemIdMatchSummary').appendChild(this.#matchTable);
    }

    #createTeamTable(team) {
        const elemTable = document.createElement('table');
        const elemHead = elemTable.createTHead();
        const elemBody = elemTable.createTBody();

        let elemRow = elemHead.insertRow();
        let elemCell = elemRow.insertCell();
        elemCell.textContent = 'Player';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Batting';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Bowling';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Fielding';

        for (let index = 0; index < 11; index++) {
            let player = team.player(index).player;
            elemRow = elemBody.insertRow();

            elemCell = elemRow.insertCell();
            elemCell.textContent = player.fullname;

            elemCell = elemRow.insertCell();
            elemCell.textContent = player.statBat;

            elemCell = elemRow.insertCell();
            elemCell.textContent = player.statBowl;

            elemCell = elemRow.insertCell();
            elemCell.textContent = player.statField;
        }

        return elemTable;
    }

    #createMatchFormat(format) {
        const elemTable = document.createElement('table');
        const elemHead = elemTable.createTHead();
        const elemBody = elemTable.createTBody();

        let elemRow = elemHead.insertRow();
        let elemCell = elemRow.insertCell();
        elemCell.textContent = 'Innings';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Score';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Overs';

        switch (format) {
            case 1:
                // create 1 innings match
                this.#createInnings(1, this.#homeTeam, this.#awayTeam, elemBody);
                this.#createInnings(2, this.#awayTeam, this.#homeTeam, elemBody);
                break;

            default:
                // create 2 innings match
                this.#createInnings(1, this.#homeTeam, this.#awayTeam, elemBody);
                this.#createInnings(2, this.#awayTeam, this.#homeTeam, elemBody);
                this.#createInnings(3, this.#homeTeam, this.#awayTeam, elemBody);
                this.#createInnings(4, this.#awayTeam, this.#homeTeam, elemBody);
                break;
        }

        return elemTable;
    }

    #createInnings(inningsId, batTeam, bowlTeam, matchBody) {
        let elemRow = matchBody.insertRow();
        let elemCell = elemRow.insertCell();
        elemCell.textContent = batTeam.nationality + ((inningsId < 3) ? ' 1st ' : ' 2nd ') + 'Innings';

        elemCell = elemRow.insertCell();
        elemCell.textContent = '-';

        elemCell = elemRow.insertCell();
        elemCell.textContent = '-';

        let articleId = 'elemIdInnings' + inningsId;
        let elemArticle = document.getElementById(articleId);
        elemArticle.firstChild.textContent = batTeam.name + ((inningsId < 3) ? ' 1st ' : ' 2nd ') + 'Innings';
        elemArticle.style = 'display: none;';

        let elemTable = document.createElement('table');
        let elemHead = elemTable.createTHead();
        let elemBody = elemTable.createTBody();

        elemRow = elemHead.insertRow();
        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Batsman';
        elemCell.className = 'text';

        elemCell = elemRow.insertCell();
        elemCell.textContent = ' ';
        elemCell.className = 'text';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Runs';
        elemCell.className = 'number';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Balls';
        elemCell.className = 'number';

        for (let index = 0; index < 11; index++) {
            let player = batTeam.player(index);
            elemRow = elemBody.insertRow();

            elemCell = elemRow.insertCell();
            elemCell.textContent = player.player.scorename;
            elemCell.className = 'text';

            elemCell = elemRow.insertCell();
            elemCell.textContent = '-';
            elemCell.className = 'text';

            elemCell = elemRow.insertCell();
            elemCell.textContent = '-';
            elemCell.className = 'number';

            elemCell = elemRow.insertCell();
            elemCell.textContent = '-';
            elemCell.className = 'number';
        }

        elemArticle.appendChild(elemTable);

        elemTable = document.createElement('table');
        elemHead = elemTable.createTHead();
        elemBody = elemTable.createTBody();

        elemRow = elemHead.insertRow();
        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Bowler';
        elemCell.className = 'text';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Overs';
        elemCell.className = 'number';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Runs';
        elemCell.className = 'number';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Extras';
        elemCell.className = 'number';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Maidens';
        elemCell.className = 'number';

        elemCell = elemRow.insertCell();
        elemCell.textContent = 'Wickets';
        elemCell.className = 'number';

        for (let index = 0; index < 11; index++) {
            let player = bowlTeam.player(index);
            elemRow = elemBody.insertRow();

            elemCell = elemRow.insertCell();
            elemCell.textContent = player.player.scorename;
            elemCell.className = (index == bowlTeam.wicketKeeperId) ? 'wk text' : 'text';

            elemCell = elemRow.insertCell();
            elemCell.textContent = '-';
            elemCell.className = (index == bowlTeam.wicketKeeperId) ? 'wk number' : 'number';

            elemCell = elemRow.insertCell();
            elemCell.textContent = '-';
            elemCell.className = (index == bowlTeam.wicketKeeperId) ? 'wk number' : 'number';

            elemCell = elemRow.insertCell();
            elemCell.textContent = '-';
            elemCell.className = (index == bowlTeam.wicketKeeperId) ? 'wk number' : 'number';

            elemCell = elemRow.insertCell();
            elemCell.textContent = '-';
            elemCell.className = (index == bowlTeam.wicketKeeperId) ? 'wk number' : 'number';

            elemCell = elemRow.insertCell();
            elemCell.textContent = '-';
            elemCell.className = (index == bowlTeam.wicketKeeperId) ? 'wk number' : 'number';
        }

        elemArticle.appendChild(elemTable);
    }
}