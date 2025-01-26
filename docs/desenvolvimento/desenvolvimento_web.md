# Desenvolvimento

## Introdução

Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, inclusive a nível de código. Também é importante que a equipe saiba como as pessoas com deficiência usam os _websites_ e aplicativos. Abaixo seguem  sugestões de padrões de acessibilidade e boas práticas, assim como um caixa interativa para registrar a verificação.

## Tabelas [1](#1), [2](#2)

Tabelas de dados organizam os dados com relações lógicas em formato de matriz, retangular, com colunas e linhas. Na primeira linha, o cabeçalho informa o relacionamento entre os eixos X e Y. 
Tabelas sem demarcação estrutural podem criar barreiras de acessibilidade, como por exemplo, quando um leitor de tela lê em voz alta a página, normalmente seguirá a ordem do documento HTML, portanto, a ordem e organização do arquivo fonte também precisam ser construídos de forma coerente com a apresentação visual do conteúdo, para permitir renderizações alternativas da página.

[x] - Células de cabeçalho são demarcadas com a tag \<th>;

[x] - Células de dados são demarcadas com \<td>;

[ ] - Para tabelas mais complexas, o uso explícito dos atributos (_scope, id, and headers attributes_) pode ser usados.

<p style="text-align:center;">Figura 1</p>
![Como o website do INEP faz uso de tabelas:](imagens/page_desenv/tabela_INEP.PNG)

  


## Referências

  

1. Guia de Boas Práticas para Acessibilidade Digital 2023 (Página 34). Disponível em [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 26 Jan. 2025.

  

2. Design & Develop/Tutorials/Tables. Disponível em: [https://www.w3.org/WAI/tutorials/tables/](https://www.w3.org/WAI/tutorials/tables/). Acesso em: 26 Jan. 2025.
