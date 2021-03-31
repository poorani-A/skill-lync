using Microsoft.AspNetCore.Mvc;
using work3.Services;
using work3.Models;

namespace work3.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AircraftController : ControllerBase
    {

        AircraftService _aircraftService;
        public AircraftController(AircraftService aircraftService)
        {
            this._aircraftService=aircraftService;

        }

    [HttpGet]
    public ActionResult Get()
    {
        return Ok(this._aircraftService.GetAircraft());
    }
    [HttpPost]
    public ActionResult Post(Aircraft aircraft)
    {
        this._aircraftService.AddAircraft(aircraft);
        return Ok();
    }


    }
}


