import java.util.Scanner;

public class vowels {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter Your Name: ");
        String name = scan.nextLine();

        int cnt = 0;

        for (int i = 0; i < name.length(); i++) {
            if (name.charAt(i) == 'a') {
                cnt++;
            }
        }

        System.out.println("Count = " + cnt);
        scan.close();
    }
}