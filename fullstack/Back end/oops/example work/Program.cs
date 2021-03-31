using System;

namespace example_work
{
    class Program
    {
        public static void Main(){
            cat ca=new cat();
            ca.jump();
            ca.eat();
            ca.sound();



        }
        public abstract class animal
        {
            public void eat()
           {
                Console.WriteLine("animals are eating  ");

            }
    
        }
        public class rabbit:animal
        {
            public void jump()
            {
                Console.WriteLine("animals are jumping");
            }
        }
        public class cat:rabbit
        {
            public void sound()
            {
                Console.WriteLine("meo meo meo");
            }
        }
    }
}
