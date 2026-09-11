import java.util.Scanner;

class SearchLetter 
{
    public static void main(String[] args) 
    {

        Scanner sc=new Scanner(System.in);
        System.out.println("Enter text:");
        String name=sc.nextLine();
        System.out.print("Enter find char: ");
        char c=sc.next().charAt(0);
        String res="";
        for(int i=0;i<name.length();i++)
        {
            if(c==name.charAt(i))
                res=res+i+",";

        }

        if(res.length()==0)
            System.out.println(c+" is not found");
        else
            System.out.println(c+" is found at index(s) : "+res+"\b ");

        sc.close();
}
}