// Helpers

function isEven(number) {
    return (number % 2 === 0);
}

function calculateMean(myList) {
    // let sumList = 0;
    // for(let i = 0; i < myList.length; i++) {
    //     sumList += myList[i];
    // }
    const sumList = myList.reduce(
        function (acc = 0, newElement) {
            return acc + newElement;
        }
    ); 
    
    const listMean = sumList / myList.length;
    return listMean;
}

// Median calculator

function salaryMedian(myList){
    const middle = parseInt(myList.length / 2);

    if (isEven(myList.length)) {
        const personMid1 = myList[middle - 1];
        const personMid2 = myList[middle];
        
        const median = calculateMean([personMid1,personMid2]);
        return median;
    } else {
        const personMid = myList[middle];
        return personMid;
    }
}

// Overall mean


const salariesCol = colombia.map(
    function (person) {
        return person.salary
    }
);

const salariesColSorted = salariesCol.sort(
    function (salaryA,salaryB) {
        return salaryA - salaryB;
    }
);

const overallMedianCol = salaryMedian(salariesColSorted);

// Mediana del top 10% = 100%-10%

const spliceStart = (salariesColSorted.length * 90) / 100;
const spliceCount = salariesColSorted.length - spliceStart;

const salariesColTop10 = salariesColSorted.splice(spliceStart,spliceCount);

const medianTop10Col = salaryMedian(salariesColTop10);

function addData() {
    newName = document.getElementById("input-name").value;
    newNumber = parseInt(document.getElementById("input-salary").value);
}

function dataAnalysis() {
    const printOverallMean = document.getElementById("overall-mean");
    printOverallMean.innerText = `The overall mean is: \n${overallMedianCol}`;

    const printTop10 = document.getElementById("top10-mean");
    printTop10.innerText = `The overall mean is: \n${medianTop10Col}`;
}

function clearData() {
    const clearOverallMean = document.getElementById("overall-mean");
    clearOverallMean.innerText = ``;

    const clearTop10 = document.getElementById("top10-mean");
    clearTop10.innerText = ``;
}
