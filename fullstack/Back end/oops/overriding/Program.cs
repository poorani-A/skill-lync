using System;

namespace overriding
{
    public class Cycle
    {
        public virtual void method1()
        {
            Console.WriteLine("i dad ride cycle");
        }

        public static void Main()
        {
            
        }

    }
    //derived class
    public class Bike:Cycle
    {
        public override void method1(){
            Console.WriteLine("i ride ");

        }
    }
}
