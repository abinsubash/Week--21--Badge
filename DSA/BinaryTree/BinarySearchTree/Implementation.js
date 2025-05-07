class Node{
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const node = new Node(value)
        if(this.root==null){
            this.root = node
        }else[
         this.insertNode(node)   
        ]
    }
    insertNode(node,root=this.root){
        if(node.value<root.value){
            if(root.left==null){
                root.left= node
            }else[
                this.insertNode(node,root.left)
            ]
        }else{
            if(root.right==null){
                root.right = node
            }else{
                this.insertNode(node,root.right)
            }
        }
    }
    inOrder(root = this.root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root = this.root){
        if(root){
            console.log(root.value)
            this.postOrder(root.left)
            this.postOrder(root.right)
        }
    }
    preOrder(root=this.root){
        if(root){
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder(){

        let queue = [this.root]
        while(queue.length>0){
            let cur = queue.shift()
            console.log(cur.value )
            if(cur.left){
                queue.push(cur.left)
            }
            if(cur.right){
                queue.push(cur.right)
            }
        }
    }
    min(root=this.root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    delete(value){
        this.root = this.deleteNode(value,this.root)
    }
    deleteNode(value,root){
        if(root==null){
            return root
        }
        if(root.value>value){
            root.left = this.deleteNode(value,root.left)
        }else if(root.value<value){
            root.right = this.deleteNode(value,root.right)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.value,root.right)
        }
        return root
    }
  findClosest(target){
    let closest = this.root.value
    function traverse(node){
        if(node==null){
            return null
        }
        if(Math.abs(node.value-target)<Math.abs(closest-target)){
            closest = node.value
        }
        if(target<node.value){
            return traverse(node.left)
        }else{
            return traverse(node.right)
        }
    }
    traverse(this.root)
    return closest
  }
  heightTree(root = this.root){
    if(root ==null){
        return -1
    }
    let leftHeight = this.heightTree(root.left)
    let rightHeight = this.heightTree(root.right)
    return Math.max(leftHeight,rightHeight)+1
  }
  findDepth(target,root = this.root, depth=0){
    if(root==null)return -1
    if(root.value ==target){
        return depth
    }
    if(root.value>target){
        return this.findDepth(target,root.left,depth+1)
    }else{
        return this.findDepth(target,root.right,depth+1)
    }
  }
}

const BST = new BinarySearchTree()
BST.insert(12)
BST.insert(33)
BST.insert(44)
BST.insert(55)
BST.levelOrder()
console.log('This is closest',BST.findClosest(40))
console.log(BST.heightTree(33))
