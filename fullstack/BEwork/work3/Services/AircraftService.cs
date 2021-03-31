using System.Collections.Generic;
using work3.Models;


namespace work3.Services
{
    public class AircraftService
    {
        List<Aircraft> _aircraftlist=new List<Aircraft>();

        public  AircraftService()
        {

        }

        public List<Aircraft> GetAircraft()
        {
            return _aircraftlist;
        }
        public void AddAircraft(Aircraft aircraft)
        {
            _aircraftlist.Add(aircraft);

        }


    }
}