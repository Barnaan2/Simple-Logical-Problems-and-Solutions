import java.rmi.*;
import java.rmi.server.*;
import java.rmi.registry.*;

public class SampleServerImpl extends UnicastRemoteObject implements SampleServer
{
 SampleServerImpl() throws RemoteException
{
super();
}
public int add(int a,int b) throws RemoteException
{
return a + b;
}
}