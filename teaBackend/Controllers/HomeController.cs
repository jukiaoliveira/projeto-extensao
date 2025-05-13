using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using teaBackend.Models;

namespace teaBackend.Controllers;

public class HomeController : Controller
{
    public HomeController()
    {
        
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Depoimentos() {
        return View();
    }
}
