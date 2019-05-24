var LiveForm = require("./LiveForm");
var random = require("./random.js");
//խոտակերի կլասը
module.exports = class run extends LiveForm {
    constructor(x, y) {
        super(x, y);
    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }



    //move() շարժվել
    move(q) {
        //որոնում է դատարկ տարածքներ
        var fundCords = this.chooseCell(0);
        var cord = fundCords[q];

        if (cord) {
            var x = cord[0];
            var y = cord[1];
            
            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            
            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;
            
        }
    }
}