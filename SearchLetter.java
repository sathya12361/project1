import java.util.Scanner;

class SearchLetter {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Enter search letter: ");
        char letter = sc.next().charAt(0);

        boolean found = false;

        for (int i = 0; i < name.length(); i++) {

            if (name.charAt(i) == letter) {

                if (!found) {
                    System.out.print(letter + " is found at index(s): ");
                }

                System.out.print(i + " ");
                found = true;
            }
        }

        if (!found) {
            System.out.println(letter + " is not found");
        }
    }
}