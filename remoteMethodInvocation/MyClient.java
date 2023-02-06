import java.rmi.*;
import java.util.Scanner; 

public class MyClient{
public static void main(String args[])
{
 try{
String url = "rmi://localhost:1099/rmi";
SampleServer remoteObject = (SampleServer)Naming.lookup(url);
System.out.println("Connected to the method");
Scanner input = new Scanner(System.in);  
System.out.println("Enter the first Number: ");

    int num1 = input.nextInt();
System.out.println("Enter the next Number: ");

    int num2 = input.nextInt();

System.out.println("The Sum of the numbers added by remote obj is :- " + remoteObject.add(num1,num2));
}catch(Exception e){System.out.println(e);}
}
}