using System;

namespace Interface
{
    class Program
    {

        public static void Main()
        {
            company c = new company();
            c.hotel1();
            c.smtowers();
             c.bar();
             c.isprout();
    
        }
        public abstract class perungudi
        {
            public void smtowers()
            {
                Console.WriteLine("its is a institution");
            }
            public abstract void hotel1();
            public void bar()
            {
                Console.WriteLine("drink");
            }
        }
        interface Icity
            {
                void hotel1();
            }
        public class company : perungudi,Icity
        {
            public void isprout()
            {
                Console.WriteLine("tarining center");
            }

            public override void hotel1()
            {
                Console.WriteLine("food");
            }


            

        }

    }

}