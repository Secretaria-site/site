(function organizarMenu() {

    function tentarOrganizar() {

        const menu = document.getElementById("listaMenu");

        // Se o menu ainda não existe, tenta novamente
        if (!menu) {
            setTimeout(tentarOrganizar, 100);
            return;
        }

        // Pega os itens que o seu JS original criou
        const itensOriginais = Array.from(
            menu.querySelectorAll("li")
        );

        // Se ainda não existem os assuntos, espera
        if (itensOriginais.length === 0) {
            setTimeout(tentarOrganizar, 100);
            return;
        }


        // =====================================================
        // CATEGORIAS
        // =====================================================

        const categorias = [

            {
                titulo: "INFORMAÇÕES DO SUAP",

                itens: [
                    "Primeiro acesso ao SUAP",
                    "Acesso SUAP Responsável",
                    "Utilizando o SUAP",
                    "Como criar e-mail acadêmico",
                    "Como cadastrar justificativa de falta",
                    "Carteirinha Estudantil",
                    "Declarações e Documentos"
                ]
            },


            {
                titulo: "VIDA ACADÊMICA",

                itens: [
                    "Trancamento",
                    "Transferência",
                    "Horários de Aula",
                    "Projetos Pedagógicos",
                    "Aproveitamento de Estudos",
                    "Calendário Acadêmico",
                    "Rematrícula Online"
                ]
            },


            {
                titulo: "APOIO AO ALUNO",

                itens: [
                    "Assistência Estudantil",
                    "Exercício Domiciliar",
                    "Segunda Chamada"
                ]
            },


            {
                titulo: "AMBIENTES E SERVIÇOS DIGITAIS",

                itens: [
                    "Acesso AVA / Moodle",
                    "Portal Microsoft 365"
                ]
            },


            {
                titulo: "TCC E ESTÁGIO",

                itens: [
                    "TCC / Monografia",
                    "Estágio"
                ]
            },


            {
                titulo: "DOCUMENTOS E NORMAS",

                itens: [
                    "Documentos Legais"
                ]
            }

        ];


        // =====================================================
        // FUNÇÃO PARA ENCONTRAR O ITEM ORIGINAL
        // =====================================================

        function encontrarItem(nome) {

            const nomeNormalizado =
                nome
                    .replace(/\s+/g, " ")
                    .trim()
                    .toLowerCase();


            return itensOriginais.find(item => {

                const texto =
                    item.textContent
                        .replace(/\s+/g, " ")
                        .trim()
                        .toLowerCase();

                return texto === nomeNormalizado;

            });

        }


        // =====================================================
        // GUARDA OS ITENS ANTES DE LIMPAR
        // =====================================================

        const itensEncontrados = {};


        categorias.forEach(categoria => {

            categoria.itens.forEach(nome => {

                const item = encontrarItem(nome);

                if (item) {

                    itensEncontrados[nome] = item;

                } else {

                    console.warn(
                        "Não encontrei no menu:",
                        nome
                    );

                }

            });

        });


        // =====================================================
        // LIMPA SOMENTE A LISTA VISUAL
        // =====================================================

        menu.innerHTML = "";


        // =====================================================
        // MONTA AS CATEGORIAS
        // =====================================================

        categorias.forEach(categoria => {


            // -----------------------------------------------
            // TÍTULO
            // -----------------------------------------------

            const titulo =
                document.createElement("li");

            titulo.className =
                "titulo-categoria";

            titulo.textContent =
                categoria.titulo;

            menu.appendChild(titulo);


            // -----------------------------------------------
            // ITENS
            // -----------------------------------------------

            categoria.itens.forEach(nome => {

                const item =
                    itensEncontrados[nome];


                if (!item) {
                    return;
                }


                item.classList.add(
                    "item-menu"
                );


                menu.appendChild(item);

            });

        });


        // =====================================================
        // CSS DO MENU
        // =====================================================

        if (
            !document.getElementById(
                "estilo-menu-categorias"
            )
        ) {

            const style =
                document.createElement("style");


            style.id =
                "estilo-menu-categorias";


            style.textContent = `

                #listaMenu {

                    list-style: none;

                    padding: 10px 15px 25px;

                    margin: 0;

                }


                /* ==========================
                   TÍTULO DA CATEGORIA
                ========================== */

                #listaMenu .titulo-categoria {

                    display: block;

                    padding: 18px 8px 8px;

                    margin: 10px 0 5px;

                    color: #006B3F;

                    font-size: 11px;

                    font-weight: 800;

                    letter-spacing: 0.8px;

                    text-transform: uppercase;

                    border-bottom: 2px solid #E4F1E9;

                    cursor: default;

                    background: transparent;

                }


                #listaMenu .titulo-categoria:first-child {

                    margin-top: 0;

                }


                /* NÃO aplica hover no título */

                #listaMenu .titulo-categoria:hover {

                    background: transparent;

                    color: #006B3F;

                    border-left: none;

                    transform: none;

                }


                /* ==========================
                   ITEM DO MENU
                ========================== */

                #listaMenu .item-menu {

                    display: flex;

                    align-items: center;

                    gap: 10px;

                    padding: 12px 13px;

                    margin: 3px 0;

                    border-radius: 11px;

                    border-left: 4px solid transparent;

                    color: #333;

                    background: transparent;

                    cursor: pointer;

                    transition:
                        .2s ease;

                }


                /* ÍCONE */

                #listaMenu .item-menu
                .material-icons-round {

                    color: #008C52;

                    font-size: 20px;

                    flex-shrink: 0;

                }


                /* HOVER */

                #listaMenu .item-menu:hover {

                    background: #EAF8F0;

                    color: #006B3F;

                    border-left-color: #006B3F;

                    transform: translateX(3px);

                }


                #listaMenu .item-menu:hover
                .material-icons-round {

                    color: #006B3F;

                }


                /* ==========================
                   MODO ESCURO
                ========================== */

                body.dark
                #listaMenu .titulo-categoria {

                    color: #6EE7B7;

                    border-bottom-color: #334155;

                }


                body.dark
                #listaMenu .item-menu {

                    color: #F1F5F9;

                }


                body.dark
                #listaMenu .item-menu
                .material-icons-round {

                    color: #6EE7B7;

                }


                body.dark
                #listaMenu .item-menu:hover {

                    background: #26352F;

                    color: #6EE7B7;

                    border-left-color: #6EE7B7;

                }

            `;


            document.head.appendChild(style);

        }


        console.log(
            "✅ MENU CATEGORIZADO COM SUCESSO!"
        );

    }


    // =====================================================
    // COMEÇA A TENTAR
    // =====================================================

    tentarOrganizar();

})();