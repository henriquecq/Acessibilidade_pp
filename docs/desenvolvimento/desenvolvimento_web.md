# Desenvolvimento

  

## Introdução

Durante a criação de um website mais acessível para pessoas com deficiência, existem alguma considerações básicas a serem feitas, e nesta página iremos discutir sobre Desenvolvimento Web para Acessbilidade. 

Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, inclusive a nível de código. Também é importante que a equipe saiba como as pessoas com deficiência usam os _websites_ e aplicativos. Abaixo seguem  sugestões de padrões de acessibilidade e boas práticas, assim como uma caixa interativa para registrar a verificação.

##  Menus [1](#1)
Menus são usados para navegação e tem papel crítico na operabilidade da página web. É importante reconhecer os seguintes pontos-chave durante o desenvolvimento dos menus:
Estrutura, Estilo, Menus Dropdown e Menus de aplicação

[x] - Utiliza Lista Desordenada, tag \<ul>, a maioria dos menus de navegação usa esta abordagem, já que os itens não estão em uma ordem específica;
[ ] - Utiliza Lista Ordenada, tag \<ol>, 	quando a sequência dos itens é importante
[x] - Identifica o menu, usando a tag \<nav>, garantindo acesso direto ao menu para os usuários;
[ ] - Rotulado com atributos como _"aria-label"_ e  _"aria-labelledby_",  para diferentes menus na mesma página;
[ ] - Indica a seleção atual do menu, por exemplo, com um rótulo invisível na apresentação, mas presente no documento fonte, assim sendo lido por um leitor de tela;
[x] - Indica visualmente quando o ponteiro paira sobre o menu;
[x] - Indica visualmente quando o ponteiro paira sobre o item da lista;
[x] - Indica visualmente quando o ponteiro paira sobre o link;
[x] - Utiliza código CSS com considerações diferentes dependendo do foco com uso de mouse ou teclado;
[ ] - Utiliza o atributo _roles_ para adicionar semântica para os menus de aplicação;
[ ] - Muda o item do menu utilizando as setas <- e ->;

Figura 1
![Menu Nav](imagens/page_desenv/menu_nav_ul)
Figura 2
![Menu Nav](imagens/page_desenv/menu_nav_ul_hover)
Figura 3
![Menu Nav](imagens/page_desenv/menu_nav_ul_keyboard_select)

Menus de navegação são importantes pois refletem a estrutura arquitetural do site, e podem determinar como será a navegação entre as páginas e funcionalidades.

## Tabelas [2](#2), [3](#3)

Tabelas de dados organizam os dados com relações lógicas em formato de matriz, retangular, com colunas e linhas. Na primeira linha, o cabeçalho informa o relacionamento entre os eixos X e Y. 
Tabelas sem demarcação estrutural podem criar barreiras de acessibilidade, como por exemplo, quando um leitor de tela lê em voz alta a página, normalmente seguirá a ordem do documento HTML, portanto, a ordem e organização do arquivo fonte também precisam ser construídos de forma coerente com a apresentação visual do conteúdo, para permitir renderizações alternativas da página.

[x] - Células de cabeçalho são demarcadas com a tag \<th>;

[x] - Células de dados são demarcadas com \<td>;

[ ] - Para tabelas mais complexas, o uso explícito dos atributos (_scope, id, and headers attributes_) pode ser usados.

<p style="text-align:center;">Figura 4</p>
![Como o website do INEP faz uso de tabelas:](imagens/page_desenv/tabela_INEP.PNG)

  



## Referências

1. Design & Develop/Tutorials/Menus. Disponível em: [https://www.w3.org/WAI/tutorials/menus/](https://www.w3.org/WAI/tutorials/menus/). Acesso em: 26 Jan. 2025.

2. Guia de Boas Práticas para Acessibilidade Digital 2023 (Página 34). Disponível em [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 26 Jan. 2025.

3. Design & Develop/Tutorials/Tables. Disponível em: [https://www.w3.org/WAI/tutorials/tables/](https://www.w3.org/WAI/tutorials/tables/). Acesso em: 26 Jan. 2025.