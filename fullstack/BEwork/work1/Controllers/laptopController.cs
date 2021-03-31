using Microsoft.AspNetCore.Mvc;
using work1.Services;
using work1.Models;



namespace work1.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class laptopController:ControllerBase
    {


    LaptopService _laptopService;
    public laptopController(LaptopService laptopService)
    {
        this._laptopService=laptopService;

    }
    [HttpGet]
    public ActionResult GET()
    {
        return Ok(this._laptopService.Getlaptops());
    }

    [HttpPost]
    public ActionResult Post(Laptop laptop)
    {
        this._laptopService.Addlaptop(laptop);
        return Ok();
    }
    }
}
