// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// My C++ First Solution

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> anagrams = {};

        map<array<int, 26>, vector<string>> grouped_anagrams; 

        for(string word : strs){
            array<int,26> contain_alpha = {};

            for(char c : word){
                ++contain_alpha[c - 'a'];
            }

            if(grouped_anagrams.find(contain_alpha) == grouped_anagrams.end()) {
                grouped_anagrams[contain_alpha] = {word};

            } else {
                grouped_anagrams[contain_alpha].push_back(word);

            }

        }

        for(auto p : grouped_anagrams){
            anagrams.push_back(p.second);
        }

        return anagrams;
    }
};

// LeetCode Comunity Solution

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string,vector<string>> ans;
        for(string s:strs)
        {
            string key=s;
            sort(key.begin(),key.end());
            ans[key].push_back(s);
        }
        vector<vector<string>> res;
        for(auto& entry:ans)
        {
            res.push_back(entry.second);
        }
        return res;
    }
};
auto init = atexit([]() { ofstream("display_runtime.txt") << "0"; });
