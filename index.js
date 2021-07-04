import ps from 'prompt-sync'
import {seedArray,nextGen,PositionOfLiveCells} from './App.js'


var liveCell=[];
const prompt=ps({sigint:true});
var run= parseInt(prompt("Enter the run: "));
console.log('After inputing initial seeds type "EXIT" \nSeedings Position should be like 2 3');
var inputArr= [];

while(1)
{
    var input=prompt().trim().split(' ')

    if(input[0] === 'EXIT')
        break;

    
    for(var x=0; x< input.length; x++)
    {
        inputArr.push(parseInt(input[x]));
    }

    liveCell.push(inputArr);
    inputArr=[];
}

var zeroGeneration= seedArray(liveCell);
var nextGeneration=zeroGeneration;
while(run)
{
    nextGeneration=nextGen(nextGeneration);
    run--;
}

const result=PositionOfLiveCells(nextGeneration)
console.log(result);
