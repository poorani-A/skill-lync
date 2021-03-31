using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace modulo.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ModuloControllers : ControllerBase
    {
        

       [HttpGet]
    
        public int Get()
        {

            return 10%10;
        }
    }
}
