// Weighted average:
// [(N1*C1)+(N2*C2)+...+(Nn*Cn)] / (C1+C2+...+Cn)
const notes = [
    {
        course: "Math",
        note: 10,
        credit: 2,
    },
    {
        course: "Development",
        note: 8,
        credit: 5,
    },
    {
        course: "Finances",
        note: 7,
        credit: 5,
    },
];

const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});

const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});

const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

const weightedAverageNotesWithCredits = sumOfNotesWithCredit / sumOfCredits;