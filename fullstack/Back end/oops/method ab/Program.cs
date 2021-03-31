using System;

namespace method_ab
{
    class Program
    {
        public static void Main()
        {
            tata t=new tata();
            t.gps();
            t.start();

        }
        public abstract class car
        {
            public void start()
            {
                Console.WriteLine("engine start");
            }
            public void stop()
            {
                Console.WriteLine("car stop");
            }
            public abstract void gps();
        }
        public class tata : car
        {
            public void topopen()
            {
                Console.WriteLine("top open");
            }
            public override void gps()
            {
                Console.WriteLine("navigation");
            }
        }
        
        
    }
}
