class TicTacToe_Game_Small: 
    def __init__(self): 
        self.numRows = 9
        self.board = [-1 for _ in range(self.numRows)]
        self.winStatus = -1 
    
    def checkCellModifiable(self, ind): 
        return self.board[ind] == -1
    
    def checkFull(self): 
        return -1 not in self.board

    def checkWin(self): 
        if self.winStatus != -1: 
            return True 

        # check rows 
        for i in range(0, self.numRows, 3):
            if self.board[i] != -1 and self.board[i] == self.board[i+1] and self.board[i] == self.board[i+2]: 
                self.winStatus = self.board[i]
                return True 
        
        # check cols
        for i in range(self.numRows // 3): 
            if self.board[i] != -1 and self.board[i] == self.board[i+3] and self.board[i] == self.board[i+6]: 
                self.winStatus = self.board[i]
                return True 

        # check UL->LR diagonal
        if self.board[0] != -1 and self.board[0] == self.board[4] and self.board[0] == self.board[8]: 
            self.winStatus = self.board[i]
            return True 

        # check LL->UR diagonal
        if self.board[6] != -1 and self.board[6] == self.board[4] and self.board[4] == self.board[2]: 
            self.winStatus = self.board[i]
            return True 

        return False


class TicTacToe_Game: 
    def __init__(self): 
        self.numGames = 9
        self.board = [TicTacToe_Game_Small() for _ in range(self.numGames)]
        self.currGameInd = -1
        self.winStatus = -1
    
    def checkModifiable(self, gameInd, cellInd): 
        if self.currGameInd != -1 and gameInd != self.currGameInd: 
            return False 
        return self.board[gameInd].checkCellModifiable(cellInd)
    
    def checkWin(self): 
        if self.winStatus != -1: 
            return True 
        
        # check rows 
        for i in range(0, self.numGames, 3):
            if self.board[i].winStatus != -1 and self.board[i].winStatus == self.board[i+1].winStatus and self.board[i].winStatus == self.board[i+2].winStatus: 
                self.winStatus = self.board[i].winStatus
                return True 
        
        # check cols
        for i in range(self.numGames // 3): 
            if self.board[i].winStatus != -1 and self.board[i].winStatus == self.board[i+3].winStatus and self.board[i].winStatus == self.board[i+6].winStatus: 
                self.winStatus = self.board[i].winStatus
                return True 

        # check UL->LR diagonal
        if self.board[0].winStatus != -1 and self.board[0].winStatus == self.board[4].winStatus and self.board[0].winStatus == self.board[8].winStatus: 
            self.winStatus = self.board[0].winStatus
            return True 

        # check LL->UR diagonal
        if self.board[6].winStatus != -1 and self.board[6].winStatus == self.board[4].winStatus and self.board[4].winStatus == self.board[2].winStatus: 
            self.winStatus = self.board[6].winStatus
            return True 

        return False

    def checkFull(self): 
        for gameInd in range(self.numGames): 
            if not self.board[gameInd].checkFull(): 
                return False 
        return True 

    def evaluateGame(self, playerNum): 
        if self.checkFull(): 
            return 0
        
        if self.checkWin(): 
            return 1 if self.winStatus == playerNum else -1 

        # add code for handling when game is incomplete


class TicTacToe_Model: 
    def __init__(self):
        pass

    