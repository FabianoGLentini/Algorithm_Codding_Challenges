// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
 

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// My C++ Solution in O(n)

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        
        std::unordered_map<int,int> count;


        for(int num : nums) {
            count[num]++;
        }

        int cap = nums.size();
        vector<vector<int>> bucket(cap + 1);
        for(pair<int, int> pair : count) {
            bucket[pair.second].push_back(pair.first);
        }

        vector<int> res;
        int iteration = 0;

        for(int i = cap; i >= 0 ; i--) {
            for(int num : bucket[i]){
                if(res.size() == k) break;
                res.push_back(num);

            }


        }
        return res;
    }
};

// LeetCode Community Alternative
class Solution {
public:
     std::vector<int> topKFrequent(std::vector<int>& nums, int k) {

          std::unordered_map<int, int> hashmap{};
          for (const auto& i : nums)
               ++hashmap[i];

          std::vector<std::pair<int, int>> vec(begin(hashmap), end(hashmap));

          std::sort(begin(vec), end(vec), [](const auto& x, const auto& y)
               {return y.second < x.second; });

          std::vector<int> top{};
          top.reserve(k);
          for (int i{ 0 }; i < k; ++i)
               top.push_back(vec[i].first);

          return top;

     }
};
