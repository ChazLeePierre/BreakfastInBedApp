using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BreakfastInBed.Models;

namespace BreakfastInBed.Services
{
    public interface IBreakfastService
    {
        List<PlatterItem> GetPlatterItems();
        List<BeverageItem> GetBeverageItems();
        List<DeliveryTime> GetDeliveryTimes();
        bool addOrder(Order order);
    }
}
