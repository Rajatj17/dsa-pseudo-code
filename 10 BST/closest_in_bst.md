```markdown
# Problem Statement
You are given a Binary Search Tree (BST) and a target value. You need to find the value in the BST which is closest to the target.

## Input
- A Binary Search Tree represented with a class `Node` and its `key`, `left`, and `right` nodes. 
- An integer `target` representing the target value.

## Output
- The value in the BST which is closest to the target.

# Example
## Input
```cpp
Node* root = NULL;
int arr[] = {8,3,10,1,6,14,4,7,13};
for(int x : arr){
  root = insert(root,x);
}
int target = 12;
```
## Output
```
13
```

# Pseudo code
```
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

Node* insert(Node * root, int key){
	if(root==NULL){
		return new Node(key);
	}
	if(key < root->key){
		root->left = insert(root->left,key);
	}
	else{
		root->right = insert(root->right,key);
	}
	return root;
}

int findClosestInBST(Node * root, int target){
	int closest;
	int diff = INT_MAX;
	Node *temp = root;
	while(temp!=NULL){
		int current_diff = abs(temp->key - target);
		if(current_diff==0){
			return temp->key;
		}
		if(current_diff < diff){
			diff = current_diff;
			closest = temp->key;
		}
		if(temp-> key < target){
			temp = temp -> right;
		}
		else{
			temp = temp->left;
		}
	}
	return closest;
}

void printInOrder(Node *root){
	if(root==NULL){
		return;
	}
	printInOrder(root->left);
	cout << root-> key <<" ,";
	printInOrder(root->right);
}

int main(){
	Node * root = NULL;
	int arr[] = {8,3,10,1,6,14,4,7,13};
	for(int x : arr){
		root = insert(root,x);
	}
	cout << findClosestInBST(root,12) <<endl;
	return 0;
}
```