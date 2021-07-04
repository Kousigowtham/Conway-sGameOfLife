

export const seedArray = (seedings)=>{
        
    var initialArray = new Array(25).fill(0).map(() => new Array(25).fill(0));

        for(var x=0;x < seedings.length; x++)
        {
                initialArray[(seedings[x][0])][(seedings[x][1])]=1;
        }
    return initialArray;
}

export const nextGen =(prevGeneration)=>{
  
    var nextArray = new Array(25).fill(0).map(() => new Array(25).fill(0));
    
    for(var x=0; x< prevGeneration.length; x++)
        {
            for(var y=0; y < prevGeneration[x].length; y++)
            {
                const neighbours=[[x-1,y-1],[x-1,y],[x-1,y+1],[x,y-1],[x,y+1],[x+1,y-1],[x+1,y],[x+1,y+1]];
                var liveCells=0;

                for(var n=0; n < neighbours.length; n++)
                {
                    if(neighbours[n][0] !== -1 && neighbours[n][1] !== -1 && neighbours[n][0] < 25 && neighbours[n][1] < 25)
                    {
                        if(prevGeneration[neighbours[n][0]][neighbours[n][1]] ===1)
                        liveCells++;
                    }
                }

            var prevValue=prevGeneration[x][y];
            var nextValue=0;
            switch(liveCells){
                case 0:
                    nextValue=0;
                    break;
                case 1:
                    nextValue=0;
                    break;
                case 2:
                    nextValue=prevValue;
                    break;
                case 3:
                    nextValue=1;
                    break;
                default:
                    nextValue=0;
            }
            nextArray[x][y]=nextValue;
            }
        }
        return nextArray;
}

export const PositionOfLiveCells=(board)=>{
        var positions=[];
        for(var x=0; x< board.length;x++)
        {
            for(var y=0; y< board[x].length; y++)
            {
                if(board[x][y]===1){
                    positions.push([x,y]);
                }
            }
        }
        return positions
}