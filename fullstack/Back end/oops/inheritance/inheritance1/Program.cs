using System;

namespace inheritance1
{
    class Program
    {
        public static void Main()
        {
            cake c=new cake();
            c.mix();
            eggless e=new eggless();
            e.eggcake();
            chocolate ch=new chocolate();
            c.mix();

            
        }
        public class cake
        {
            public void mix()
            {
                Console.WriteLine("recipe mixing");
            }
            public void cook()
            {
                Console.WriteLine("cooking");
            }
        }
            public class eggless:cake
            {
                public void eggcake()
                {
                Console.WriteLine("adding egg");    
                }
                public void design(){
                    Console.WriteLine("designing");
                }

            }
            public class chocolate:cake
            {
                public void addchoco()
                {
                    Console.WriteLine("adding cholate ");
                }

            

            }

        }
    }
