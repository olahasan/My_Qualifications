#include <iostream>
using namespace std;

class Node
{
public:
    int Value;
    Node* Next;
};



void InsertAtBeginning(Node* &head, int Value)
{
    Node* New_Node = new Node(); //create node

    New_Node->Value = Value; // insert date
    New_Node->Next = head; 

    head = New_Node; //move head to new date
}

void InsertAtEnd(Node*& head, int Value)
{
    Node* New_Node = new Node(); //create node

    New_Node->Value = Value; // insert date
    New_Node->Next = NULL;

    if (head == NULL)
    {
        head = New_Node;
        return;
    }

    Node* LastNode = head;

    while (LastNode->Next != NULL)
    {
        LastNode = LastNode->Next;
    }

    LastNode->Next = New_Node;
}

Node* Find(Node* head, int Value)
{
    while (head != NULL)
    {
        if (head->Value == Value)
        {
            return head;
        }
        head = head->Next;
    }

    return NULL;
}

void InsertAfter(Node* prev_node, int Value)
{
    if (prev_node == NULL) {
        cout << "the given previous node cannot be NULL";
        return;
    }

    Node* New_Node = new Node(); //create node

    New_Node->Value = Value; // insert date
    New_Node->Next = prev_node->Next;

    prev_node->Next = New_Node; //move head to new date
}

void DeleteNode(Node* &head, int Value)
{
    Node* Current = head;
    Node* Prev = head;

    if (head == NULL)
    {
        return;
    }

    if (Current->Value == Value)
    {
        head = Current->Next;
        delete Current;
        return;
    }

    // Find the key to be deleted
    while (Current != NULL && Current->Value != Value) {
        Prev = Current;
        Current = Current->Next;
    }

    // If the value is not present
    if (Current == NULL) return;

    // Remove the node
    Prev->Next = Current->Next;
    delete Current;//free from memory
}
   
void  DeleteFirstNode(Node* &head)
{
    Node* Current = head;

    if (head == NULL)
    {
        return;
    }

    head = Current->Next;
    delete Current;
    return;
}

void  DeleteLastNode(Node*& head)
{
    Node* Current = head;
    Node* Prev = head;

    if (head == NULL)
    {
        return;
    }

    if (Current->Next == NULL)
    {
        head = NULL;
        delete Current;
        return;
    }
    // Find the key to be deleted
    while (Current != NULL && Current->Next != NULL) {
        Prev = Current;
        Current = Current->Next;
    }

    // Remove the node
    Prev->Next =NULL;
    delete Current;//free from memory

}




void PrintList(Node* head)
{
    cout << "\n";
    while (head != NULL)
    {
        cout << head->Value << " ";
        head = head->Next;
    }
}


int main()
{
    //1
    /*
    //1

    Node* Head;
    Node* Node1 = NULL;
    Node* Node2 = NULL;
    Node* Node3 = NULL;

     Node1 = new Node();
     Node2 = new Node();
     Node3 = new Node();

     Node1->Value = 1;
     Node2->Value = 2;
     Node3->Value = 3;

     Node1->Next = Node2;
     Node2->Next = Node3;
     Node3->Next = NULL;


     Head = Node1;

     while (Head != NULL)
     {
         cout << Head->Value << " ";
         Head = Head->Next;
     }
    */

    //2

    Node * head = NULL;

   // InsertAtBeginning(head, 1);
    //InsertAtBeginning(head, 2);
    //InsertAtBeginning(head, 3);
    //InsertAtBeginning(head, 4);
    //InsertAtBeginning(head, 5);
    //PrintList(head);

    //Node*  N1= Find(head,2);

    //InsertAfter(N1, 500);
    //PrintList(head);


    InsertAtEnd(head, 1);
    InsertAtEnd(head, 2);
    InsertAtEnd(head, 3);
    InsertAtEnd(head, 4);
    InsertAtEnd(head, 5);
    InsertAtEnd(head, 6);
    PrintList(head);

    //DeleteNode(head,4);
    //PrintList(head);

    //DeleteFirstNode(head);
    //PrintList(head);

    DeleteLastNode(head);
    PrintList(head);


    system("pause>0");
    return 0;
}
