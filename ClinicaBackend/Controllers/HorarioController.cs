
using ClinicaBackend.Contexts;
using ClinicaBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicaBackend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HorarioController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public HorarioController(ApplicationDbContext context)
        {
            this.context = context;
        }
        // GET: api/<HorarioController>
        [HttpGet]
        public IEnumerable<Horario> Get()
        {
            var horario = context.Horario.Include(i => i.Doctor);
            return horario as IEnumerable<Horario>;
        }
        // GET api/<HorarioController>/5
        [HttpGet("{id}")]
        public Horario Get(long id)
        {
            var horario = context.Horario.Find(id);

            return horario;
        }

        // POST api/<HorarioController>
        [HttpPost]
        public ActionResult Post([FromBody] Horario horario)
        {
            try
            {
                context.Horario.Add(horario);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<HorarioController>/5
        [HttpPut("{id}")]
        public ActionResult Put(long id, [FromBody] Horario horario)
        {
            if (horario.id == id)
            {
                context.Entry(horario).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE api/<HorarioController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(long id)
        {
            var horario = context.Horario.Find(id);
            if (horario != null)
            {
                context.Horario.Remove(horario);
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }
    }
}
