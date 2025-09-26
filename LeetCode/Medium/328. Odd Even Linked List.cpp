// 328. Odd Even Linked List
// Solved
// Medium
// Topics
// premium lock icon
// Companies
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:


// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]
 

// Constraints:

// The number of nodes in the linked list is in the range [0, 104].
// -106 <= Node.val <= 106


// My C++ Solution violating O(1) memory but succeeding in O(n) time complexity
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* oddEvenList(ListNode* head) {

        if(!head || !head->next || !head->next->next) return head;

        // Bucket Kth
        ListNode dummyKth, dummyNotKth;
        ListNode* notKthTail = &dummyNotKth;
        ListNode* kthTail = &dummyKth;

        // Og List;
        ListNode* curr = head;

        // Counnt
        int count = 1;

        while(curr) {
            ListNode* next = curr->next;
            curr->next = nullptr;
            
            // if not kth 
            if(count % 2) {
                notKthTail->next = curr;
                notKthTail = notKthTail->next;

            } else {
                kthTail->next = curr;
                kthTail = kthTail->next;
            }

            curr = next;
            count++;

        }

        notKthTail->next = dummyKth.next;

        return dummyNotKth.next;
    }

    // Community Alternative Solution
    public:
    ListNode* oddEvenList(ListNode* head) {
        if(!head || !head->next) return head; 
        ListNode* oddHead=head->next,*oddTail = head->next;
        ListNode* evenTail=head;
        while(oddTail){
            evenTail->next=oddTail->next;
            if(oddTail->next) oddTail->next=oddTail->next->next;
            if(evenTail->next)
            evenTail=evenTail->next;
            oddTail=oddTail->next;
        }
        if(evenTail) evenTail->next=oddHead;
        return head;
    }
};