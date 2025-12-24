// 36. Valid Sudoku
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Example 1:

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

// My Cpp solution T(n) = O(n^2)

class Solution
{
public:
    bool isValidSudoku(vector<vector<char>> &board)
    {

        vector<vector<int>> board_boxes(9, vector<int>(9, 0));

        if (board.size() != 9)
            return false;

        for (int row = 0; row < 9; row++)
        {
            if (board[row].size() != 9)
                return false;
            vector<int> row_ck(9, 0);
            vector<int> col_ck(9, 0);

            for (int col = 0; col < 9; col++)
            {

                char col_num = board[col][row];
                char row_num = board[row][col];

                int b_index = get_subbox_i(row, col);

                int col_i = col_num - '0' - 1;
                int row_i = row_num - '0' - 1;

                bool col_dot = col_num == '.';
                bool row_dot = row_num == '.';

                if ((!col_dot && col_ck[col_i] > 0) || (!row_dot && row_ck[row_i] > 0) || (!row_dot && board_boxes[b_index][row_i] > 0))
                    return false;

                if (!col_dot)
                    ++col_ck[col_i];
                if (!row_dot)
                {
                    ++row_ck[row_i];
                    ++board_boxes[b_index][row_i];
                }
            }
        }

        return true;
    }

    int get_subbox_i(int row, int col)
    {
        /*
                [0]  [0] = 0         [0]  [1] = 1         [0]  [2] = 2
       [sub_box[0-2][0-2]], [sub_box[0-2][3-5]], [sub_box[0-2][6-8]],
                [1]  [0] = 3         [1]  [1] = 4         [1]  [2] = 5
       [sub_box[3-5][0-2]], [sub_box[3-5][3-5]], [sub_box[3-5][6-8]],
                [2]  [0] = 6         [2]  [1] = 7         [2]  [2] = 8
       [sub_box[6-8][0-2]], [sub_box[6-8][3-5]], [sub_box[6-8][6-8]],
       */

        int col_norm_b = col % 3;

        if (row < 3)
        {
            if (col < 3)
            {
                return 0;
            }
            else if (col < 6)
            {
                return 3;
            }
            else
            {
                return 6;
            }
        }
        else if (row < 6)
        {
            if (col < 3)
            {
                return 1;
            }
            else if (col < 6)
            {
                return 4;
            }
            else
            {
                return 7;
            }
        }
        else
        {
            if (col < 3)
            {
                return 2;
            }
            else if (col < 6)
            {
                return 5;
            }
            else
            {
                return 8;
            }
        }
    }
};

// LeetCode Comunity Alternative Solution:

class Solution
{
public:
    bool isValidSudoku(vector<vector<char>> &board)
    {
        vector<int> row(9, 0);
        vector<int> col(9, 0);
        vector<int> square(9, 0);
        for (int i = 0; i < board.size(); i++)
        {
            for (int j = 0; j < board[0].size(); j++)
            {
                if (board[i][j] == '.')
                {
                    continue;
                }
                int d = board[i][j] - '1';
                int mask = 1 << d;
                int b = (i / 3) * 3 + (j / 3);
                if ((row[i] & mask) || (col[j] & mask) || (square[b] & mask))
                {
                    return false;
                }
                row[i] |= mask;
                col[j] |= mask;
                square[b] |= mask;
            }
        }
        return true;
    }
};
