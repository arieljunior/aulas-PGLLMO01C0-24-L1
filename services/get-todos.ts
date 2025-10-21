export interface Todo {
    id: string;
    title: string;
    description: string;
}
export function getTodos(): Todo[] {
    return [
        {
            id: '1',
            title: 'Configurar ambiente React Native',
            description: 'Instalar Node.js, Expo CLI e configurar o ambiente de desenvolvimento.',
        },
        {
            id: '2',
            title: 'Criar estrutura do projeto',
            description: 'Criar a estrutura básica do app com pastas organizadas por funcionalidades.',
        },
        {
            id: '3',
            title: 'Implementar navegação',
            description: 'Utilizar React Navigation para navegação entre telas.',
        },
        {
            id: '4',
            title: 'Criar tela de login',
            description: 'Criar uma tela de login com validação de formulário.',
        },
        {
            id: '5',
            title: 'Consumir API externa',
            description: 'Fazer requisições a uma API REST usando Axios.',
        },
        {
            id: '6',
            title: 'Gerenciar estado global',
            description: 'Utilizar Context API ou Zustand para gerenciamento de estado.',
        },
        {
            id: '7',
            title: 'Estilizar componentes',
            description: 'Utilizar Styled Components para estilizar os componentes da aplicação.',
        },
        {
            id: '8',
            title: 'Tratar erros de rede',
            description: 'Implementar tratamento de erros e feedbacks para o usuário.',
        },
        {
            id: '9',
            title: 'Criar componentes reutilizáveis',
            description: 'Desenvolver botões, inputs e outros componentes genéricos.',
        },
        {
            id: '10',
            title: 'Testar componentes',
            description: 'Escrever testes com Jest e React Native Testing Library.',
        },
    ];
}