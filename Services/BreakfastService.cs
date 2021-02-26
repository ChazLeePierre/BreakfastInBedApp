using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BreakfastInBed.Models;

namespace BreakfastInBed.Services
{
    public class BreakfastService: IBreakfastService
    {
        private List<Order> orders { get; set; }

        public BreakfastService()
        {
            orders = new List<Order>();
        }
        
        public List<PlatterItem> GetPlatterItems()
        {
            string[] platterFoods = new []
            {
                "Chef's Egg Choice", "Yogurt", "Granola", "Sliced Ham", "Fresh Cheese", "Croissants", "Avocado Slices", "Romaine Lettuce", "Cherry Tomatoes"
            };

            var items = new List<PlatterItem>();

            for (int i = 0; i < platterFoods.Length; i++)
                items.Add(new PlatterItem { Id = i + 1, Name = platterFoods[i] });

            return items;
        }

        public List<BeverageItem> GetBeverageItems()
        {
            string[] beverages = new[]
            {
                "Regular Coffee", "Decaffinated Coffee", "Tea", "Apple Juice", "Orange Juice"
            };

            var items = new List<BeverageItem>();

            for (int i = 0; i < beverages.Length; i++)
                items.Add(new BeverageItem { Id = i + 1, Name = beverages[i] });

            return items;
        }

        public List<DeliveryTime> GetDeliveryTimes()
        {
            return new List<DeliveryTime>()
            {
                new DeliveryTime { Start = "7:00 am", End = "7:15 am" },
                new DeliveryTime { Start = "7:15 am", End = "7:30 am" },
                new DeliveryTime { Start = "7:30 am", End = "7:45 am" },
                new DeliveryTime { Start = "7:45 am", End = "8:00 am" },
                new DeliveryTime { Start = "8:00 am", End = "8:15 am" },
                new DeliveryTime { Start = "8:15 am", End = "8:30 am" },
                new DeliveryTime { Start = "8:30 am", End = "8:45 am" },
                new DeliveryTime { Start = "8:45 am", End = "9:00 am" }
            };
        }

        public bool addOrder(Order order)
        {
            if (order == null) return false;

            orders.Add(order);
            return true;
        }
    }
}
