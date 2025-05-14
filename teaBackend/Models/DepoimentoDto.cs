using System.ComponentModel.DataAnnotations;

namespace teaBackend.Models
{
    public class DepoimentoDto
    {
        [Required, MaxLength(100)]
        public string? NomeAutor { get; set; }
        
        [Required]
        public int IdadeAutor { get; set; }
        [Required]
        [ProibirPalavras(new [] {"doença", "cura", "retardado", "normal", "deficiência"})]
        public string? Texto { get; set; }
    }
}