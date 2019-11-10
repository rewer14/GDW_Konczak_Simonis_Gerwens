const maxBewertung = 10;

let appBewertung = {
    name: 'App B',
    votes: [1, 2, 3],
    anzahlVotes: function(){
        return this.votes.length
    },
    getAverage: function(){
        let sum = 0.0
        this.votes.forEach(function(vote){sum += vote})
        return sum / this.anzahlVotes()
    },
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

// Verwalten mehrerer "ratings"
let ratings = [
    {name: "A", anzahlAbstimmungen: 1, letztesErgebnis: 4},
    {name: "B", anzahlAbstimmungen: 1, letztesErgebnis: 4},
    {name: "C", anzahlAbstimmungen: 1, letztesErgebnis: 4},
    {name: "D", anzahlAbstimmungen: 1, letztesErgebnis: 4},
    {name: "D", anzahlAbstimmungen: 1, letztesErgebnis: 4},
]

console.log( ratings.name )