using System;

namespace polymorhsim
{
    class Program
    {
        public static void Main()
        {
        animal a=new animal();
        a.run();
        a.run("rabbit");
        a.run("baby",1);
        }
       public class animal
        {
            public void run()
            {
                Console.WriteLine("run normal");
            }
            public void run(string name)
            {
                Console.WriteLine("run fast...." +name);
            }
            public void run(string name,int age)
            {
                if(age==4&&name=="rabbit")
                {
                    Console.WriteLine("run very fast");
                }
                else if(age==1&&name=="baby")
                {
                    Console.WriteLine(" baby run slow");

                }
                else
                {
                    Console.WriteLine("run normal");
                }
            }

        }
    }


}

