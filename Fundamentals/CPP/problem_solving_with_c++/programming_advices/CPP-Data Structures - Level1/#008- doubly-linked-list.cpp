
#include <iostream>
using namespace std;

// Create a node
class Node
{
public:
    int value;
    Node* next;
    Node* prev;
};

void InsertAtBeginning(Node*& head, int value) {


    /*
        1-Create a new node with the desired value.
        2-Set the next pointer of the new node to the current head of the list.
        3-Set the previous pointer of the current head to the new node.
        4-Set the new node as the new head of the list.
    */

    Node* newNode = new Node();
    newNode->value = value;
    newNode->next = head;
    newNode->prev = NULL;

    if (head != NULL) {
        head->prev = newNode;
    }
    head = newNode;
}

Node* Find(Node* head, int Value)
{

    while (head != NULL) {

        if (head->value == Value)
            return head;


        head = head->next;
    }

    return NULL;


}

void InsertAfter(Node* current, int value) {


    /*  1 - Create a new node with the desired value.
         2-Set the next pointer of the new node to the next node of the current node.
         3-Set the previous pointer of the new node to the current node.
         4-Set the next pointer of the current node to the new node.
         5-Set the previous pointer of the next node to the new node(if it exists).
    */

    Node* newNode = new Node();
    newNode->value = value;
    newNode->next = current->next;
    newNode->prev = current;

    if (current->next != NULL) {
        current->next->prev = newNode;
    }
    current->next = newNode;
}


void InsertAtEnd(Node* head, int value) {

    /*
        1-Create a new node with the desired value.
        2-Traverse the list to find the last node.
        3-Set the next pointer of the last node to the new node.
        4-Set the previous pointer of the new node to the last node.
    */

    Node* newNode = new Node();
    newNode->value = value;
    newNode->next = NULL;
    if (head == NULL) {
        newNode->prev = NULL;
        head = newNode;
    }
    else {
        Node* current = head;
        while (current->next != NULL) {
            current = current->next;
        }
        current->next = newNode;
        newNode->prev = current;
    }
}


void DeleteNode(Node*& head, Node*& NodeToDelete) {


    /*
        1-Set the next pointer of the previous node to the next pointer of the current node.
        2-Set the previous pointer of the next node to the previous pointer of the current node.
        3-Delete the current node.
    */
    if (head == NULL || NodeToDelete == NULL) {
        return;
    }
    if (head == NodeToDelete) {
        head = NodeToDelete->next;
    }
    if (NodeToDelete->next != NULL) {
        NodeToDelete->next->prev = NodeToDelete->prev;
    }
    if (NodeToDelete->prev != NULL) {
        NodeToDelete->prev->next = NodeToDelete->next;
    }
    delete NodeToDelete;
}


void  DeleteFirstNode(Node*& head)
{

    if (head == NULL)
    {
        return;
    }

    Node* Temp = head;

    head = head->next;

    if (head != NULL)
    {
        head->prev = NULL;
    }

    delete Temp;
}


void  DeleteLastNode(Node*& head)
{

    if (head == NULL)
    {
        return;
    }

    if (head->next == NULL)
    {
        delete head;
        head = NULL;
        return;
    }

    Node* Current = head;

    while (Current->next->next != NULL)
    {
        Current = Current->next;
    }

    Node* Temp = Current->next;

    Current->next = NULL;

    delete Temp;//free from memory

}



// Print the linked list
void PrintList(Node* head)

{
    cout << "\n ";
    while (head != NULL) {
        cout << head->value << " ";
        head = head->next;
    }
    cout << "NULL";

}

int main()
{
    Node* head = NULL;

    InsertAtBeginning(head, 5);
    InsertAtBeginning(head, 4);
    InsertAtBeginning(head, 3);
    InsertAtBeginning(head, 2);
    InsertAtBeginning(head, 1);

    PrintList(head);

    //3
    /*
    Node*  N1= Find(head,2);

    if (N1 != NULL)
    {
        cout << "\nfound\n";
    }
    else
    {
        cout << "\nnot found\n";
    }
    */

   //4
    /*
    Node* N1 = Find(head, 2);
    InsertAfter(N1, 500);
    PrintList(head);
   */


    //5
    /*
    InsertAtEnd(head, 500);
    PrintList(head);
    */


    //6
    /*
    Node* N10 = Find(head, 4);
    DeleteNode(head, N10);
    PrintList(head);
    */

    //7
    /*
    DeleteFirstNode(head);
    PrintList(head);
    */

    //8
    DeleteLastNode(head);
    PrintList(head);


    system("pause>0");

}
