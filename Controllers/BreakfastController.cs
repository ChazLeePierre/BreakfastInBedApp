using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BreakfastInBed.Models;
using BreakfastInBed.Services;

namespace BreakfastInBed.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BreakfastController : Controller
    {
        private IBreakfastService _service;
        public BreakfastController(IBreakfastService service)
        {
            _service = service;
        }

        [HttpGet("[action]")]
        public IEnumerable<PlatterItem> GetPlatterItems()
        {
            return _service.GetPlatterItems();
        }

        [HttpGet("[action]")]
        public IEnumerable<BeverageItem> GetBeverageItems()
        {
            return _service.GetBeverageItems();
        }

        [HttpGet("[action]")]
        public IEnumerable<DeliveryTime> GetDeliveryTimes()
        {
            return _service.GetDeliveryTimes();
        }

        [HttpPost("AddOrder")]
        public IActionResult AddOrder([FromBody]Order order)
        {
            return _service.addOrder(order) ?
                Ok("SUCCESS: Order was successfully added.") :
                Ok("ERROR: Order was not added.");
        }
    }
}
