// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// My C++ Solution: O(n^2), Omega(1)
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> twoSum;

        for(int i=0; i<nums.size(); i++){
            for(int j=i+1;j<nums.size();j++){
                if(nums[i] + nums[j] == target) {
                    twoSum.push_back(i);
                    twoSum.push_back(j);
                    return twoSum;
                }
            }
        }

        return twoSum;
    }
};


// My C++ O(n) Solution
#include <map>


class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> twoSum;
        // map is < nums value, index of value from nums>
        std::unordered_map<int,int> twoSum_map;

        for(int i=0; i<nums.size(); i++){
            int curr = nums[i];

           if(twoSum_map.contains(target - curr)){
            twoSum.push_back(i);
            twoSum.push_back(twoSum_map[target - curr]);

            return twoSum;
           }

           twoSum_map[curr] = i;
        }

        return twoSum;
    }
};


// LeetCode Communit alternative solution:

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> mp;
        for(int i = 0;i<nums.size();i++){
            if(mp.find(target - nums[i]) == mp.end()){
                mp[nums[i]] = i;
            }
            else{
                return {mp[target - nums[i]],i};
            }
        }
        return {-1,-1};
        
    }
}