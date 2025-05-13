using System.ComponentModel.DataAnnotations;

namespace teaBackend.Models
{
    public class DepoimentoDto
    {
        [Key]
        public int Id { get; set; }
        
        [Required, MaxLength(100)]
        public string? NomeAutor { get; set; }
        
        [Required]
        public int IdadeAutor { get; set; }
        [Required]
        public string? Texto { get; set; }
    }
}