using System;

namespace csharp
{
    class practie
    {
        public class animal
        {
            public void eat()
            {
                Console.WriteLine("eating");

            }
            public void jump()
            {
                Console.WriteLine("jumping");
            }
            public void run()
            {
                Console.WriteLine("running");
            }
        }
        public class dog : animal
        {
            public void sleep()
            {
                Console.WriteLine("dog sleeping");
            }

        }
        public static void Main()
        {
            animal a = new animal();
            a.eat();
            a.jump();
            dog d = new dog();
            d.sleep();
            d.run();


        }
    }

}

