using System.Collections.Generic;
using work1.Models;

namespace work1.Services
{
    public class LaptopService
    {
        List<Laptop> _laptoplist = new List<Laptop>();
        public LaptopService()
        {

        }
        public List<Laptop> Getlaptops()
        {
            return _laptoplist;

        }
        public void Addlaptop(Laptop laptop)
        {
            _laptoplist.Add(laptop);
        }
    }
}



