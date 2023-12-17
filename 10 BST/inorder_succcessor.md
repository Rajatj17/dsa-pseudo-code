```plaintext
Problem Statement:
We are given a binary search tree (BST) and we need to convert it into a sorted doubly linked list. Additionally, we need to find the inorder successor of a given node in the BST.

Example Input:
Node * root = NULL;
root = insert(root,8);
root = insert(root,3);
root = insert(root,10);
root = insert(root,1);
root = insert(root,6);
root = insert(root,14);
root = insert(root,4);
root = insert(root,7);
root = insert(root,13);

Node* t1 = root->left->right->right;
Node* t2 = root->right;

Inorder succ of 7 is 8
Inorder succ of 10 is 13

Pseudo code:
class Node
{
  public:
   int key;
   Node *left;
   Node *right;

   Node(int key){
       this->key = key;
       left = right  = NULL;
   }
};

//function to insert a node in BST
Node* insert(Node * root, int key){
	if(root==NULL){
		return new Node(key);
	}

	//rec case 
	if(key < root->key){
		root->left = insert(root->left,key);
	}
	else{
		root->right = insert(root->right,key);
	}
	return root;
}

//function to print BST in inorder traversal
void printInOrder(Node *root){
	if(root==NULL){
		return;
	}
	//left, root, right
	printInOrder(root->left);
	cout << root-> key <<" ,";
	printInOrder(root->right);
}

//function to find inorder successor in BST
Node * inorderSucc(Node * root, Node * target){

	// If Right Subtree 
	if(target->right!=NULL){
		Node* temp = target->right;
		while(temp->left!=NULL){
			temp = temp->left;
		}
		return temp;
	}

	// Otherwise 
	Node * temp = root;
	Node * succ = NULL;
	while (temp!=NULL){
		if(temp->key > target->key){
			succ = temp;
			temp = temp->left;
		}
		else if(temp->key < target->key ){
			temp = temp->right;
		}
		else{
			break;
		}
	}
	return succ;
}

//main function
int main(){
	Node * root = NULL;
	root = insert(root,8);
	root = insert(root,3);
	root = insert(root,10);
	root = insert(root,1);
	root = insert(root,6);
	root = insert(root,14);
	root = insert(root,4);
	root = insert(root,7);
	root = insert(root,13);

	//Test our Code
	Node* t1 = root->left->right->right;
	Node* t2 = root->right;

	cout<<"Inorder succ of 7 is" << inorderSucc(root,t1)->key <<endl;
	cout<<"Inorder succ of 10 is" << inorderSucc(root,t2)->key <<endl;
 
	return 0;
}
```