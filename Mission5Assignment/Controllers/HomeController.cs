using Microsoft.AspNetCore.Mvc;

namespace Mission5Assignment.Controllers
{
    public class HomeController : Controller
    {
        // This handles the main Hobby page (View 1)
        public IActionResult Index()
        {
            return View();
        }

        // This handles the Calculator page (View 2)
        public IActionResult Calculator()
        {
            return View();
        }
    }
}