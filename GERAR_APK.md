# Gerando APK com EAS Build (Expo Application Services)

Este guia rápido demonstra como configurar e executar uma build de produção (APK) para Android utilizando a ferramenta EAS (Expo Application Services) para projetos Expo Go.

## Pré-requisitos

1.  **Projeto Expo:** Você deve estar na raiz de um projeto React Native/Expo.
2.  **Conta Expo:** Uma conta Expo configurada.
3.  **EAS CLI:** A ferramenta de linha de comando do EAS instalada globalmente.

<!-- end list -->

```bash
npm install -g eas-cli
# OU
yarn global add eas-cli
```

## Passo 1: Login e Inicialização do EAS

A primeira etapa é fazer login na sua conta Expo e inicializar o projeto para usar o EAS.

1.  **Fazer Login:**

    ```bash
    eas login
    ```

    (Siga as instruções para autenticar-se)

2.  **Inicializar o Projeto EAS:**

    ```bash
    eas build:configure
    ```

      * **O que faz:** Cria o arquivo `eas.json` na raiz do seu projeto, que define as configurações de build.
      * **Responda às perguntas:** Use as configurações padrão, ou escolha a opção `All platforms` para o APK.

## Passo 2: Configuração de Build (`eas.json`)

O arquivo `eas.json` permite definir diferentes perfis de build (ex: `production`, `preview`, `development`). Para um APK de produção, usaremos o perfil `preview`.

Adicione na chave `preview` o `buildType` para gerar um APK.

```json
// eas.json
{
  //...
  "build": {
    //...
    "preview": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

## Passo 3: Executar a Build de Produção

Execute o comando `eas build` especificando a plataforma (`android`) e o perfil (`preview`).

```bash
eas build --platform android --profile preview
```

### O que o comando faz:

1.  **Verificação:** O EAS CLI verifica seu projeto e arquivos de configuração.
2.  **Submissão:** O código do seu projeto é enviado para os servidores do Expo.
3.  **Fila:** A build entra na fila de processamento do Expo.
4.  **Notificação:** Você receberá uma URL de acompanhamento no terminal.

## Passo 4: Download do APK

Quando a build for concluída (o que pode levar de 10 a 30 minutos, dependendo da fila), o EAS CLI irá:

1.  Mostrar uma notificação no terminal.
2.  Fornecer um link direto para o download do arquivo **`.apk`**.

Você pode usar o comando abaixo a qualquer momento para ver o status das suas builds recentes:

```bash
eas build:list
```

### Instalação

  * O arquivo `.apk` gerado pode ser instalado diretamente em qualquer dispositivo Android para testes.