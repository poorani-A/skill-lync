using System;

namespace abbb_homewrk
{
    class Program
    {
        public static void Main(){
            dog d=new dog();
            d.eat();
            d.sound();
            d.talk();
            d.jump();
            d.jump();
        }
        public  abstract class animal
        {
            public void eat()
            {
                Console.WriteLine("eating");

            }
            public abstract void jump();
        }
        public class cat:animal
        {
            public void sound()
            {
                Console.WriteLine("meow meow meow");
            }
            public override void jump()
            {
                Console.WriteLine("jumping");
            }
    
        }
        public class dog:cat
        {
            public void talk()
            {
                Console.WriteLine("awwe awww");
            }
            public override void jump()
            {
                Console.WriteLine("jumping");
            }


        }

    }
}
