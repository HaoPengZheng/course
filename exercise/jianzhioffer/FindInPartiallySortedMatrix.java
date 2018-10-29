public class FindInPartiallySortedMatrix {
    public static boolean Find(int target, int[][] array) {
        if (array[0].length <= 0 || array.length <= 0) {
            return false;
        }
        int row = 0;
        int col = array[0].length - 1;
        boolean result = false;
        if (target < array[0][0] || target > array[array.length - 1][array[0].length - 1]) {
            return false;
        }
        while (array != null && row < array.length && col >= 0) {
            if (target == array[row][col]) {
                result = true;
                break;
            } else if (target < array[row][col]) {
                col--;
            } else {
                row++;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int target = 1;
        int[][] array = { {} };
        boolean result = Find(target, array);
        System.out.println(result);
    }
}
