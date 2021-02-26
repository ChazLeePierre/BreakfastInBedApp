using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BreakfastInBed.Models
{
    public class Order
    {
        public int CustomerID { get; set; }
        public int RoomNumber { get; set; }
        public int NoOfOccupants { get; set; }
        public IEnumerable<int> BeverageIds { get; set; }
        public IEnumerable<int> PlatterIds { get; set; }
        public string DeliveryStart { get; set; }
        public string DeliveryEnd { get; set; }
    }
}
