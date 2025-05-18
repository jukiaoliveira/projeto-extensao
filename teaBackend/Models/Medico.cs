using System.ComponentModel.DataAnnotations;

namespace teaBackend.Models 
{
    public class Medico
    {
        public int Id {get; set;}
        [MaxLength(100)]
        public string Nome {get; set;}
        [MaxLength(100)]
        public string Especialidade {get; set;}
        [MaxLength(25)]
        public string Telefone {get; set;}
        [MaxLength(200)]
        public string Email { get; set; }
        [MaxLength(200)]
        public string Clinica { get; set; }
    }
}