const maxBewertung = 10;

let appBewertung = {
    name: 'App B',
    votes: [1, 2, 3],
    voteSum: function(){
        let sum = 0.0
        this.votes.forEach(function(vote){sum += vote})
        return sum;
    },
    anzahlVotes: function(){
        return this.votes.length
    },
    // Durchscnitt als "normale" Funktion
    getAverage: function(){
        return this.voteSum() / this.anzahlVotes()
    },
    // Durchscnitt als Arrow-Funktion. Zugriff auf this (appBewertung) nicht möglich.
    //_getAverage: (this) => ( this.voteSum() / this.anzahlVotes() ),
    addVote: function(vote){
        if( vote > maxBewertung ) return
        this.votes.push(vote)
    },
    getLastVote: function(){
        return this.votes[this.votes.length - 1]
    }
}

let ratingA = {
    name: "Rating A",
    anzahlAbstimmungen: 0,
    letztesErgebnis: 0,
}

let ratingB = {
    name: "Rating A",
    anzahlAbstimmungen: 0,
    letztesErgebnis: 0,
}


// Ich glaube so sollte das laut AUfgabenstellung sein...
let ratings = {
    name: 'Eine name',
    anzahlAbstimmungen: 0,
    letztesErgebnis: 0,
    addVote: function(vote){
        anzahlAbstimmungen++
        // Im fall, dass noch keine bewertung gespeichert wurde, darf nicht durch 2 geteilt werden. 
        this.letztesErgebnis = (letztesErgebnis + vote) / this.anzahlAbstimmungen == 1 ? 1 : 2
    }
}

// Verwalten mehrerer "ratings"
let ratingsArray = [
    {name: "A", anzahlAbstimmungen: 1, letztesErgebnis: 4},
    {name: "B", anzahlAbstimmungen: 1, letztesErgebnis: 4},
    {name: "C", anzahlAbstimmungen: 1, letztesErgebnis: 4},
    {name: "D", anzahlAbstimmungen: 1, letztesErgebnis: 4},
    {name: "D", anzahlAbstimmungen: 1, letztesErgebnis: 4},
]


// Aufgabe 5
console.log( appBewertung.getAverage() )

const hello = "hello";

function con1() {
  const world = "World";
  return console.log(hello + " " + world);
}

function con2(world) {
  return console.log(world + " " + hello);
}

con1();
con2("World"); //World muss übergeben werden weil world nur in funktion verfügbar
process.exit();
