import java.rmi.*;
public interface SampleServer extends Remote
{
  public int add(int a ,int b) throws RemoteException;
}