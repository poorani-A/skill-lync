using System;

namespace work_1
{
    class Program
    {
        public static void Main()
        {
            whatsapp wha =new whatsapp();
            wha.icon();
            wha.camera();
            wha.setting();
            wha.voicecal();
            instagram ist =new instagram();
            ist.reel();
            ist.icon();
            ist.camera();
        }
        public abstract class application
        {
            public void notification()
            {
                Console.WriteLine("show notification");
            }
            public void setting()
            {
                Console.WriteLine("modify settings");
            }
            public abstract void camera();

        }
        interface Iapp
        {
             void icon();

        }
        public class whatsapp:application,Iapp
        {
            public void voicecal()
            {
                Console.WriteLine("Hd voice call");
            }
            public void videocall()
            {
                Console.WriteLine("video call");
            }
            public override void camera()
            {
               Console.WriteLine("click pic");
            }
            public void icon()
            {
                Console.WriteLine("for presentation ");
            }
        }
        public class instagram:application,Iapp
        {
            public void reel()
            {
                Console.WriteLine("show all videos");
            }
            public override void camera()
            {
                Console.WriteLine("take pic");
            }
            public void icon()
            {
                Console.WriteLine("show icon");
            }

        }
        
    }
}
