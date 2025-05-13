using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using teaBackend.Models;
using teaBackend.Services;

namespace teaBackend.Controllers;

public class HomeController : Controller
{
    private readonly AppDbContext _context;

    public HomeController(AppDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Depoimentos() {
        var depoimentos = _context.Depoimentos.OrderByDescending(d => d.Id).ToList();
        return View(depoimentos);
    }
}
