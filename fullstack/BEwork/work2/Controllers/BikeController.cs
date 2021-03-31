using Microsoft.AspNetCore.Mvc;
using work2.Services;
using work2.Models;



namespace work2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BikeController:ControllerBase
    {
        BikeService _bikeservice;

        public  BikeController(BikeService bikeService)
        {
            this._bikeservice=bikeService;
        }
    

        
        [HttpGet]
        public ActionResult Get()
        {
            return Ok(this._bikeservice. GetBikes());

        }
        [HttpPost]
        public ActionResult Post(Bike bike)
        {
            this._bikeservice .AddBike (bike);
            return Ok();
        }
   }
}