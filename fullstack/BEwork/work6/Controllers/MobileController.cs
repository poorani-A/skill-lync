using Microsoft.AspNetCore.Mvc;
using BEwork.Models;
using BEwork.Service;

namespace BEwork.Controllers
{
    [ApiController]
    [Route("[controller]")]


    public class MobileController:ControllerBase
    {
        MobileService _mobileservice;
        public MobileController(MobileService mobileservice)
        {
            this._mobileservice=mobileservice ;
            
        }

        [HttpGet]
        public ActionResult Get()
        {
           return Ok(this._mobileservice.GetMobiles());
        }



        [HttpPost]
        public ActionResult Post(Mobile mobile)
        {
            this._mobileservice.AddMobile(mobile);
            return Ok();
        }
        

    }

}