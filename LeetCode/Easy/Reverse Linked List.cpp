// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
 

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

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

// My LeettCode (C++) Solution

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        
        if(!head){
            return nullptr;
        }

        ListNode* revL = nullptr;
        ListNode* curr = head;
        
        while(curr) {
            ListNode* tmp = curr->next;
            curr->next = revL;
            revL = curr;
            curr = tmp;
        }

        return revL;
    }
};

// LeetCode Alterrnatives

class Solution {
public:
    ListNode* node = new ListNode();
    void reversel(ListNode* temp) {
        
        if(temp->next==NULL)
        {
            node = temp;
            return;
        }
        reversel(temp->next);
     
        temp->next->next=temp;
        temp->next=NULL;

    }
    ListNode* reverseList(ListNode* head) {
        if(head==NULL) return head;
        node=head;
        ListNode* temp = new ListNode();
        temp=head;
        reversel(temp);
        return node;
    }
}