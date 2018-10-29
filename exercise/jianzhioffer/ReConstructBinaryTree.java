import java.util.Arrays;
public class ReConstructBinaryTree {

    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }
    public static TreeNode reConstructBinaryTree(int [] pre,int [] in) {

        int start = pre[0];
        int index = indexOf(start, in);
        TreeNode tree = new TreeNode(start);
        int[] preleft = Arrays.copyOfRange(pre,1,index+1);
        int[] preright = Arrays.copyOfRange(pre,index+1,pre.length);
        int[] inleft =  Arrays.copyOfRange(in,0,index);
        int[] inright = Arrays.copyOfRange(in,index+1,in.length);
        TreeNode leftTree = null;
        TreeNode rightTree = null;
        if(inleft.length!=0){
            leftTree= reConstructBinaryTree(preleft,inleft);
        }
        if(inright.length!=0){
            rightTree = reConstructBinaryTree(preright,inright);
        }
        tree.left = leftTree;
        tree.right = rightTree;
        return tree;
    }
    public static int indexOf(int val,int[] array){
        int index = -1;
        for(int i = 0 ; i <array.length;i++){
            if(array[i]==val){
                index = i;
            }
        }
        return index;
    }
    public static void main(String[] args){
        int[] pre = {1,2,4,7,3,5,6,8};
        int[] in = {4,7,2,1,5,3,8,6};
        TreeNode tree = reConstructBinaryTree(pre,in);
        System.out.println(tree.left.left.val);
    }
}