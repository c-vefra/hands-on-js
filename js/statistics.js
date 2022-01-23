// Calculate Mean

meanList = [];
medianList = [];
modeList = [];

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
    const mean = sumList / myList.length;
    return mean;
}

function addNumberMean() {
    newNumber = parseInt(document.getElementById("input-mean").value);
    meanList.push(newNumber);

    const printList = document.getElementById("list-mean");
    printList.innerText = `Your list: \n${meanList}`;
}

function calculateMeanBtn() {
    const mean = calculateMean(meanList);

    const printMean = document.getElementById("result-mean");
    printMean.innerText = `The mean of your list is: \n${mean.toFixed(2)}`;
}

function clearMean() {
    meanList = [];
    const clearList = document.getElementById("list-mean");
    clearList.innerText = ``;

    const clearMean = document.getElementById("result-mean");
    clearMean.innerText = ``;
}


// Calculate Median

function isEven(number){
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculateMedian (mylist) {
    let median;
    const midList = parseInt(mylist.length / 2);
    
    mylist.sort(function(a, b) {
        return a - b;
    });
    
    if(isEven(mylist.length)){
        const element1 = mylist[midList - 1];
        const element2 = mylist[midList];
        const meanElements = calculateMean([element1,element2]);
        median = meanElements;
    } else {
        median = mylist[midList];
    }
    return median;
}

function addNumberMedian() {
    newNumber = parseInt(document.getElementById("input-median").value);
    medianList.push(newNumber);

    const printList = document.getElementById("list-median");
    printList.innerText = `Your list: \n${medianList}`;
}

function calculateMedianBtn() {
    const median = calculateMedian(medianList);

    const printMedian = document.getElementById("result-median");
    printMedian.innerText = `The median of your list is: \n${median.toFixed(2)}`;
}

function clearMedian() {
    medianList = [];
    const clearList = document.getElementById("list-median");
    clearList.innerText = ``;

    const clearMedian = document.getElementById("result-median");
    clearMedian.innerText = ``;
}


// Calculate mode

function calculateMode (myList) {
    const listCount = {

    };
    
    myList.map(
        function (element) {
            if (listCount[element]) {
                listCount[element] += 1;
            } else {
                listCount[element] = 1;
            }
        }
    );
    
    const listArray = Object.entries(listCount).sort(
        function (acc, newElement) {
            return acc[1] - newElement[1];
        }
    ); 
    const mode = listArray[listArray.length - 1];
    return mode;
}

function addNumberMode() {
    newNumber = parseInt(document.getElementById("input-mode").value);
    modeList.push(newNumber);

    const printList = document.getElementById("list-mode");
    printList.innerText = `Your list: \n${modeList}`;
}

function calculateModeBtn() {
    const mode = calculateMode(modeList);

    const printMode = document.getElementById("result-mode");
    printMode.innerText = `The mode of your list is: \n${mode[0]} with ${mode[1]} appearance`;
}

function clearMode() {
    modeList = [];
    const clearList = document.getElementById("list-mode");
    clearList.innerText = ``;

    const clearMode = document.getElementById("result-mode");
    clearMode.innerText = ``;
}


// Calculate Range

function calculateRange(myList) {
    myList.sort(function(a, b) {
        return a - b;
    });
    
    const smallest = myList[0];
    const largest = myList[myList.length - 1];
    return largest - smallest
}
