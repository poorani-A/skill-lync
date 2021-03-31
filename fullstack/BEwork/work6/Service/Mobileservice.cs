using System.Collections.Generic;
using BEwork.Models;


namespace BEwork.Service
{
    public class MobileService
    {
        List<Mobile> _mobilelist=new List<Mobile>();
    
            public  MobileService()
            {

            }
            public List<Mobile> GetMobiles()
            {
                return  _mobilelist;
            }

            public void AddMobile(Mobile mobile)
            {
                _mobilelist.Add(mobile);
            }
        
    
    }
}

