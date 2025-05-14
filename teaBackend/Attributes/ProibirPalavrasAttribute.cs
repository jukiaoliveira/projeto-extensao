using System.ComponentModel.DataAnnotations;
using System.Linq;

public class ProibirPalavrasAttribute : ValidationAttribute
{
    private readonly string[] _palavrasProibidas;

    public ProibirPalavrasAttribute (string[] palavrasProibidas)
    {
        _palavrasProibidas = palavrasProibidas;
    }

    protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
    {
        if (value is string text)
        {
            foreach (var palavra in _palavrasProibidas)
            {
                if (text.Contains(palavra, StringComparison.OrdinalIgnoreCase))
                {
                    return new ValidationResult($"O texto contém uma palavra proibida: '{palavra}'.");
                }
            }
        }

        return ValidationResult.Success!;
    }
}