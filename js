<!DOCTYPE html>
<html>
<body>

<script>

var veiculo = prompt("Digite o nome do veículo:")
var anoVeiculo = prompt("Digite o ano do veículo:")
var preco = prompt("Digite o valor do veículo:")

var precoEntrada = preco * 0.50
var precoParcelas = precoEntrada / 12

document.write("Promoção: " + veiculo + " " + anoVeiculo + " // Entrada de R$: " + precoEntrada + " 12x de R$ " + precoParcelas.toFixed(2))
</script>

</body>
</html>
