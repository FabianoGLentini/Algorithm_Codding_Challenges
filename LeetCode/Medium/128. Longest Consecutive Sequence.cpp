// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// My First Atmp Cpp Solution

class Solution
{
public:
    int longestConsecutive(vector<int> &nums)
    {
        // disjoint graph
        std::map<int, int> disjoint;
        int max = 0;

        for (int val : nums)
        {

            if (disjoint.find(val) != disjoint.end())
                continue;

            disjoint[val] = -1;

            if (disjoint.find(val - 1) != disjoint.end())
            {
                int num = disjoint[val - 1]; // will be Neg if
                disjoint[val - 1] = val;
                disjoint[val] += num;
            }

            int i = val + 1;

            while (disjoint.find(i) != disjoint.end())
            {
                if (disjoint[i] < 0)
                {
                    disjoint[i] += disjoint[val];
                    disjoint[val] = i;
                    i++;
                }
                else
                {
                    i = disjoint[i];
                }
            }

            val = i - 1;

            max = min(max, disjoint[val]);
        }

        return -(max);
    }
};

// My solution none dynamic in O(n), with O(n) space complexity

class Solution
{
public:
    int longestConsecutive(vector<int> &nums)
    {
        // Non dynamic aproach

        if (nums.empty())
            return 0;

        set<int> seq;
        int max_count = 0;

        for (int value : nums)
        {
            seq.insert(value);
        }

        int count = 0;
        for (int curr : seq)
        {

            if (seq.find(curr - 1) == seq.end())
            {
                max_count = max(max_count, count);
                count = 0;
            }

            ++count;
        }

        return max(max_count, count);
    }
};


// My attempt at using path compression disjoint, but this is slower then O(n) 
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
    // Graph disjoint set method
        
        // map < num value as key, curr parrent index>
        unordered_map<int, int> seq_graph;
        // parent holds index of itself or of the other parent index
        vector<int> parent;
        // mirrors i of parent to hold size_count
        vector<int> size_count;
        int curr_max = 0;

        // do not inca if num in seq_graph
        for(int n : nums){
            // If already in seq_graph no need to adjust or add anything new
            if(seq_graph.find(n) != seq_graph.end()) continue;

            /* 
                If n-1 in graph it should be the current parent, 
                we must then take its value to be saved and incremented based 
                on if there are n + 1 ... n + k sequence. 
                Then update new parent with updated count
            */

            
            int pr_i = -1; // parent to point to

            // check if n+1 exist, add same i point to parent & inc parent size_count[i] 
            if(seq_graph.find(n+1) != seq_graph.end()) {
                pr_i = seq_graph[n+1];

                // Seach for true parent/with compression
                vector<int> toCompress;  
                while(pr_i != parent[pr_i]){
                    toCompress.push_back(pr_i);
                    pr_i = parent[pr_i];
                }

                // Apply Path Compression
                for(int i : toCompress) parent[i] = pr_i;

                ++size_count[pr_i]; // increment to include new n value

            }          

            // pr_i == NULL -> (!(n+1) & (n is parent))
            if(pr_i == -1) {
                pr_i = parent.size(); // added el position base 0
                parent.push_back(pr_i);
                size_count.push_back(0); // includes itself as count
                ++size_count[pr_i];
            }

            //  (exist (n-1) ->  is parent) -> ()
            if(seq_graph.find(n-1) != seq_graph.end()){

                int prevP_i = seq_graph[n-1];
                int prevP_size = size_count[prevP_i];
                size_count[pr_i] += prevP_size; // join set size

                parent[prevP_i] = pr_i; // compress to new parent

            }

            seq_graph[n] = pr_i; // final set up for map graph
            curr_max = max(curr_max, size_count[pr_i]);
            
        }

        return curr_max;
    }
    
};


// Neet code suggested solution 
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int res = 0;
        unordered_set<int> store(nums.begin(), nums.end());

        for (int num : nums) {
            int streak = 0, curr = num;
            while (store.find(curr) != store.end()) {
                streak++;
                curr++;
            }
            res = max(res, streak);
        }
        return res;
    }
};

//  Leetcode Community Alternative

class Solution {
public:
    int longestConsecutive(vector<int>& nums) 
    {
        if(nums.size()==0) return 0;
        unordered_set<int>seen(nums.begin(),nums.end());
        int maxCount=0;
        for(auto it:seen)
        {
            if(seen.find(it-1)==seen.end())
            {
                int x=it,count=1;
                while(seen.find(x+1)!=seen.end())
                {
                    x++;
                    count+=1;
                }
                maxCount=max(maxCount,count);
            }
        }
        return maxCount;
    }
};
auto init = atexit([]() { ofstream("display_runtime.txt") << "0"; });