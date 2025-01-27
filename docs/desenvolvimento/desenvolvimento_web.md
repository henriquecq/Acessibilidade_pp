
# **Desenvolvimento**

  

  

## **Introdução**

  

Durante a criação de um website mais acessível para pessoas com deficiência, existem alguma considerações básicas a serem feitas, e nesta página iremos discutir sobre Desenvolvimento Web para Acessbilidade.

  

Nessa fase, é importante garantir que a equipe de desenvolvimento saiba como implementar acessibilidade, inclusive a nível de código. Também é importante que a equipe saiba como as pessoas com deficiência usam os _websites_ e aplicativos. Abaixo seguem sugestões de padrões de acessibilidade e boas práticas, assim como uma caixa interativa para registrar a verificação.

  

## **Menus** <sup>[\[2\]](#referencias), [\[5\]](#referencias), [\[6\]](#referencias), [\[7\]](#referencias), [\[8\]](#referencias)</sup>

Menus são usados para navegação e tem papel crítico na operabilidade da página web. É importante reconhecer os seguintes pontos-chave durante o desenvolvimento dos menus:

Estrutura, Estilo, Menus Dropdown e Menus de aplicação

<ul class="checklist">
    <li><input type="checkbox" id="task2" checked><label for="task2">Utiliza Lista Desordenada, tag "ul", a maioria dos menus de navegação usa esta abordagem, já que os itens não estão em uma ordem específica;</label></li>
    <li><input type="checkbox" id="task1"><label for="task1">Utiliza Lista Ordenada, tag "ol", quando a sequência dos itens é importante</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Identifica o menu, usando a tag "nav", garantindo acesso direto ao menu para os usuários;</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Rotulado com atributos como _"aria-label"_ e _"aria-labelledby_", para diferentes menus na mesma página;</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Indica a seleção atual do menu, por exemplo, com um rótulo invisível na apresentação, mas presente no documento fonte, assim sendo lido por um leitor de tela;</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Indica visualmente quando o ponteiro paira sobre o menu;</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Indica visualmente quando o ponteiro paira sobre o item da lista;</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Indica visualmente quando o ponteiro paira sobre o link;</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Utiliza código CSS com considerações diferentes dependendo do foco com uso de mouse ou teclado;</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Utiliza o atributo _roles_ para adicionar semântica para os menus de aplicação;</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Muda o item do menu utilizando as setas <- e ->;</label></li>
</ul>



Menus de navegação são importantes pois refletem a estrutura arquitetural do site, e podem determinar como será a navegação entre as páginas e funcionalidades.

  

## **Tabelas** <sup>[\[2\]](#referencias), [\[3\]](#referencias), [\[4\]](#referencias)</sup>

  

Tabelas de dados organizam os dados com relações lógicas em formato de matriz, retangular, com colunas e linhas. Na primeira linha, o cabeçalho informa o relacionamento entre os eixos X e Y.

Tabelas sem demarcação estrutural podem criar barreiras de acessibilidade, como por exemplo, quando um leitor de tela lê em voz alta a página, normalmente seguirá a ordem do documento HTML, portanto, a ordem e organização do arquivo fonte também precisam ser construídos de forma coerente com a apresentação visual do conteúdo, para permitir renderizações alternativas da página.

<ul class="checklist">
    <li><input type="checkbox" id="task2" checked><label for="task2">Células de cabeçalho são demarcadas com a tag "th";</label></li>
    <li><input type="checkbox" id="task1"><label for="task1">Células de dados são demarcadas com "td";</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Para tabelas mais complexas, o uso explícito dos atributos (_scope, id, and headers attributes_) pode ser usados.</label></li>
</ul>




## **Textos** <sup>[\[2\]](#referencias)</sup>
Textos bem estruturados e semanticamente organizados são essenciais para a acessibilidade, pois garantem que leitores de tela interpretem corretamente o conteúdo. Um bom desenvolvimento textual facilita a navegação, tornando a página acessível a diferentes públicos.

<ul class="checklist">
    <li><input type="checkbox" id="task2" checked><label for="task2">Altura das fontes não é fixa.</label></li>
    <li><input type="checkbox" id="task1"><label for="task1">Campo de busca (recomendado).</label></li>
</ul>


 
## **Imagens** <sup>[\[2\]](#referencias)</sup>
Imagens acessíveis dependem de um bom desenvolvimento estrutural, como o uso de textos alternativos (alt text) que descrevem seu conteúdo para leitores de tela. Essa prática garante que informações visuais sejam compreendidas por pessoas com deficiência visual e melhora a navegação para todos, promovendo uma experiência mais inclusiva.

<ul class="checklist">
    <li><input type="checkbox" id="task2" checked><label for="task2">Colocar textos alternativos de imagem, explicando o contexto/conteúdo.</label></li>
    <li><input type="checkbox" id="task1"><label for="task1">Ter a informação de para onde ele leva em links que possuem apenas uma imagem( icones para redes sociais por exemplo).</label></li>
</ul>



## **Semântica** <sup>[\[2\]](#referencias)</sup>
A semântica no desenvolvimento web consiste no uso adequado de elementos HTML para representar o significado do conteúdo, promovendo acessibilidade, SEO e organização clara. Tags como `<header>` e `<main>` tornam o código mais intuitivo e fácil de interpretar por tecnologias assistivas e navegadores.

<ul class="checklist">
    <li><input type="checkbox" id="task2" checked><label for="task2">Cabeçalhos têm que seguir uma lógica e não seguir tamanho do texto:</label></li>
    <li>- H1: Título que descreve a página</li>
    <li>- H2: Título que descreve a seção</li>
    <li>- HX: assim sucessivamente de forma lógica e hierárquica</li>
    <li><input type="checkbox" id="task1"><label for="task1">Ordenamento lógico ao focar elementos (para evitar de por exemplo ir para o final da página)</label></li>
</ul>



## **Formulários** <sup>[\[2\]](#referencias)</sup>
Um formulário bem projetado deve ser acessível, intuitivo e funcional. Para isso, é importante utilizar boas práticas, como adicionar labels associados aos campos de entrada para melhorar a navegação e a compreensão, usar `<fieldset>` e `<legend>` para estruturar seções, e incluir atributos como `aria-describedby` e `autocomplete` para melhorar a acessibilidade e usabilidade.

<ul class="checklist">
    <li><input type="checkbox" id="task2" checked><label for="task2">Adicionar "fieldset" e "legend" para organizar seções do formulário.</label></li>
    <li><input type="checkbox" id="task1">Adicionar "label" para os campos de entrada, para associá-los aos elementos correspondentes.<label for="task1"></label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Adicionar o atributo "aria-describedby" para descrever os campos de entrada.</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Adicionar o atributo "autocomplete" para facilitar o preenchimento dos campos.</label></li>
    <li><input type="checkbox" id="task4"><label for="task4">Evitar o uso de Captchas.</label></li>
</ul>



## **Referências**

  

1. Design & Develop/Tutorials/Menus. Disponível em: [https://www.w3.org/WAI/tutorials/menus/](https://www.w3.org/WAI/tutorials/menus/). Acesso em: 26 Jan. 2025.

2. Guia de Boas Práticas para Acessibilidade Digital 2023 (Página 34). Disponível em [https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf](https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/acessibilidade-digital/guiaboaspraaticasparaacessibilidadedigital.pdf). Acesso em: 26 Jan. 2025.

3. Design & Develop/Tutorials/Tables. Disponível em: [https://www.w3.org/WAI/tutorials/tables/](https://www.w3.org/WAI/tutorials/tables/). Acesso em: 26 Jan. 2025.

4. Design & Develop/Tutorials/Tables/one-header/. Disponível em [https://www.w3.org/WAI/tutorials/tables/one-header/](https://www.w3.org/WAI/tutorials/tables/one-header/). Acesso em: 26 Jan. 2025.

5. Design & Develop/Tutorials/menus/structure/. Disponível em [https://www.w3.org/WAI/tutorials/menus/structure/](https://www.w3.org/WAI/tutorials/menus/structure/). Acesso em: 26 Jan. 2025.

6. Design & Develop/Tutorials/menus/structure/. Disponível em [https://www.w3.org/WAI/tutorials/menus/structure/](https://www.w3.org/WAI/tutorials/menus/structure/). Acesso em: 26 Jan. 2025.

7. Design & Develop/Tutorials/menus/flyout/. Disponível em [https://www.w3.org/WAI/tutorials/menus/flyout/](https://www.w3.org/WAI/tutorials/menus/flyout/). Acesso em: 26 Jan. 2025.

8. Design & Develop/Tutorials/menus/application-menus/. Disponível em [https://www.w3.org/WAI/tutorials/menus/structure/](https://www.w3.org/WAI/tutorials/menus/application-menus/). Acesso em: 26 Jan. 2025.
