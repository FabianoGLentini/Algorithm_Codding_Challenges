// 242. Valid Anagram
// Easy
// Topics
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// My C++ Solution

class Solution {
public:
    bool isAnagram(string s, string t) {
        int length = s.size();

        if(length != t.size()){
            return false;
        }

        std::unordered_map<char, int> track;

        for(int i = 0; i < length; i++) {
            track[s[i]] += 1;
            track[t[i]] -= 1;
            if(track[s[i]] == 0) {
                track.erase(s[i]);
            }

            if(track[t[i]] == 0) {
                track.erase(t[i]);
            }
        }

        if(track.size() != 0){
            return false;
        }

        return true;
    }
};

// LeetCode Community Solution

class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }
        
        vector<int> freq(26, 0);
        for (int i = 0; i < s.length(); i++) {
            freq[s[i] - 'a']++;
            freq[t[i] - 'a']--;
        }
        
        for (int i = 0; i < freq.size(); i++) {
            if (freq[i] != 0) {
                return false;
            }
        }
        
        return true;
    }
};