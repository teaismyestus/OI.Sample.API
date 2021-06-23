using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OI.Sample.API.Dto;
using OI.Sample.API.Entities;
using OI.Sample.API.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OI.Sample.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly ICreateFile _dataService;

        public DataController(ICreateFile dataService)
        {
            _dataService = dataService;
        }

        [HttpPost]
        public ActionResult GetGeoData(DataDto dataDto)
        {
            var data = new Data
            {
                Name = dataDto.Name,
                Number = dataDto.Number,
                cords = dataDto.cords
            };
            _dataService.CreateAndWriteFile(data);
            return Ok();
        }
        [HttpGet]
        public ActionResult ReadGeoData(DataDto dataDto)
        {
        
            return Ok();
        }
    }
}
