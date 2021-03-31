using System;

namespace inheritance2
{
    class Program
    {

        public class mathscalc
        {
            public static void Main()
            {
                calculation ad = new calculation();  //derived
                ad.add(10);
                // mod.mul(10, 10);


                maths mth = (maths)ad;   //baseclass
                mth.add(10);
                // mth.mul(5, 5);

            }
        }

        public class maths      //basic
        {

            public virtual void add(int a)
            {
                Console.WriteLine("sum of two numbers = " + (a + a));
            }

        }
        public class calculation : maths          //derived
        {
            public override void add(int x)
            {
                Console.WriteLine("product of a number = " + (x * x));

            }

        }


        // public class mathscalc
        // {
        //     public static void Main()
        //     {
        //         calculation ad = new calculation();  //derived
        //         ad.add(10);
        //         // mod.mul(10, 10);


        //         maths mth = (maths)ad;   //baseclass
        //         mth.add(10);
        //         // mth.mul(5, 5);

        //     }
        // }
    }
}
