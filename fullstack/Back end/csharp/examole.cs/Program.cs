using System;

namespace examole.cs
{
    class Program
    {
        public class newone
        {
            public void open()
            {
                Console.WriteLine("i will open this");
            }
            public void close()
            {
                Console.WriteLine("close immediatly");
            }
        } 
        public class olderone:newone
        {
             public void quality()
            {
                Console.WriteLine("old is gold");
            }
        }
       public static void Main()
       {
           olderone old=new olderone();
           old.open();
           old.quality();
       
           newone ne=new newone();
           ne.open();
           ne.close();
           }
   
    }
}


