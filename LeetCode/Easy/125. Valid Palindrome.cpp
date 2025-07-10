// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// My C++ Solution O(n)

class Solution {
public:
    bool isPalindrome(string s) {
        const char* head = s.c_str();
        const char* tail = &s.back();

        while (tail >= head) {

            while(tail >= head && !isalnum(*tail)) {
                --tail;
            }

             while(tail >= head && !isalnum(*head)) {
                ++head;
            }

            if(!isalnum(*head) || !isalnum(*tail)) return true;
            if(std::tolower(*tail) != std::tolower(*head)) return false;

            ++head;
            --tail;
        }

        return true;
    }
};

// Leetcode Comunity Alternative

class Solution {
public:
    
bool isaLnum(char c){
    return(c >='A' && c<= 'Z')||
           (c >= 'a' && c<= 'z')||
           (c >= '0' && c <= '9');
}
char toLower(char c){
    if(c>= 'A'&& c<='Z'){
        return c + ('a'-'A');
    }
    return c;
}
bool isPalindrome(std::string s){
    int left = 0, right = s.length()-1;
    while(left<right){
        while(left<right && !isaLnum(s[left])) left++;
        while(left<right && !isaLnum(s[right])) right--;

        if(toLower(s[left])!=toLower(s[right])){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
int main(){
    string str;
    cin >> str;
    if(isPalindrome(str)){
        cout << "Is an palindrome";
    }
    else cout << "not an palindrome!";
    return 0;
}
};


// Or

#include <cctype> // for isalnum and tolower

class Solution {
public:
    bool isPalindrome(string s) {
        int i = 0, j = s.size() - 1;

        while (i < j) {
            // Skip non-alphanumeric characters
            while (i < j && !isalnum(s[i])) i++;
            while (i < j && !isalnum(s[j])) j--;

            // Compare lowercase characters
            if (tolower(s[i]) != tolower(s[j])) return false;

            i++;
            j--;
        }

        return true;
    }
};