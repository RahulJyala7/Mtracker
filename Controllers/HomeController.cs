using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MTracking.Models;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace MTracking.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            string DeploymentPath = ConfigurationSettings.GetConfigurationKey("DeploymentPath");
            ViewBag.DeploymentPath = DeploymentPath;
            ViewBag.Api_URL = ConfigurationSettings.GetConfigurationKey("Api_URL");
            return View();
        }
        
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

    public static class ConfigurationSettings
    {
        private static readonly IConfigurationRoot Configuration;

        static ConfigurationSettings()
        {
            if (Configuration == null)
            {
                var builder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .AddEnvironmentVariables();

                Configuration = builder.Build();
            }
        }

        public static string GetConfigurationKey(string key)
        {
            string value = Configuration[key];
            return value;
        }
    }
}
