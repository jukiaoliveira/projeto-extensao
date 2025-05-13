using System.ComponentModel.DataAnnotations;

namespace teaBackend.Models 
{
    public class Depoimento
    {
        public int Id {get; set;}
        [MaxLength(100)]
        public string? NomeAutor {get; set;}
        
        public int IdadeAutor {get; set;}

        public string? Texto {get; set;}
    }
}