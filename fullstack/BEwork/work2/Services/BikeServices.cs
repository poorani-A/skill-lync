using System.Collections.Generic;
using work2.Models;


namespace work2.Services
{


public class BikeService
{
    List<Bike> _bikelist=new List<Bike>();

    public  BikeService()
    {

    }
    public List<Bike> GetBikes()
    {
        return _bikelist;

    }
    public void AddBike(Bike bike)
    {
         _bikelist.Add(bike);
    }



}

}