import java.util.*;
public class DSA {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String originalStr = sc.nextLine();

        String[] arrStr = originalStr.split(" ");

        for(int i = 0; i < arrStr.length; i++) {

            for(int j = arrStr[i].length() - 1; j >= 0; j--){
                System.out.print(arrStr[i].charAt(j));
            }
            System.out.print(" ");
        }
    }
}