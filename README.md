<p align="center"><a href="https://lumo-framework.dev" target="_blank"><img src="https://lumo-framework.dev/tamo-mascot.png" width="200" alt="Lumo Framework Logo"></a></p>

<p align="center">
  <a href="https://github.com/lumo-framework/monorepo/actions/workflows/release.yml">
    <img alt="CI Status" src="https://github.com/lumo-framework/monorepo/actions/workflows/release.yml/badge.svg">
  </a>
  <a href="https://www.npmjs.com/package/@lumo-framework/core">
    <img alt="npm version" src="https://img.shields.io/npm/v/@lumo-framework/core">
  </a>
  <a href="https://www.npmjs.com/package/@lumo-framework/core">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/@lumo-framework/core">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/lumo-framework/monorepo">
  <img alt="Contributors" src="https://img.shields.io/github/contributors/lumo-framework/monorepo?color=blue">
</p>

> Lumo is a minimal framework for building serverless applications in TypeScript. It ships with a CLI to deploy your
> app to AWS, GCP, Cloudflare.

## Features

🧾 Typed Request/Response for building REST APIs with confidence.

🔍 Automatic function discovery - REST routes, jobs, and subscribers: just export and deploy.

⚡️ Dispatch or emit - beautifully expressive ways to run background jobs or emit events.

🔧 High-level resources - define databases, caches, and queues in a single config.

☁️ Built for AWS - with GCP and Cloudflare support coming soon.

🚀 No Docker. No infrastructure. Build and deploy.

## 🌩️ Supported Cloud Adapters

Deploy your TypeScript functions to multiple cloud providers:

- **[Amazon Web Services](https://lumo-framework.dev/0.7.0-alpha/deployment#aws-deployment)** - AWS Lambda, DynamoDB, SQS, and more
- **[Cloudflare Workers](https://lumo-framework.dev/0.7.0-alpha/deployment#cloudflare-deployment)** - Edge computing at scale with global distribution


## Demo

https://github.com/user-attachments/assets/895d76ff-2df1-49ab-813a-5eb4a2471a13

## Documentation

Full documentation is available at [docs.lumo-framework.dev](https://lumo-framework.dev).

## Get Started

### Install the CLI

```sh
npm install -g @lumo-framework/cli
```

### Create a new project

```sh
lumo new my-project
```

### Deploy your project

If you have an AWS account, you can deploy your project, just ensure you have the AWS CLI configured with your
credentials and the below environment variables set `CDK_DEFAULT_ACCOUNT` and `CDK_DEFAULT_REGION`:

```sh
lumo build && lumo deploy
```

## Examples

### Create a simple API route

#### List users

Create a simple API endpoint by exporting HTTP method functions:

```ts
// functions/api/users/index.ts
import {http} from "@lumo-framework/core";

export async function GET(request: http.Request) {
    return http.response(http.STATUS_OK).json({
        data: [],
    });
}
```

### Dispatch an Event

Dispatch events from your API handlers using the events.emit() function:

```ts
import {http, events} from '@lumo-framework/core';
import type {UserRegisteredEvent} from '../events/user-registered.js';

export async function POST(request: http.Request) {
    const userData = request.json();

    // Event
    const user: UserRegisteredEvent = {
        id: uuidv7(),
        ...userData,
        registeredAt: new Date().toISOString()
    };

    // Dispatch event for async processing
    await events.emit('user.registered', userRegisteredEvent);

    return http.response(http.STATUS_CREATED).json({
        data: {id: user.id}
    });
}
```

### Create a simple Subscriber

Create a subscriber by exporting a listen function from a file in your functions/subscribers/ directory:

```ts
// functions/subscribers/send-welcome-email.ts
import {events} from '@lumo-framework/core';
import type {UserRegisteredEvent} from '../../events/user-registered.js';

export async function listen(event: events.Event<UserRegisteredEvent>) {
    const {type, data} = event;

    console.log(`Processing ${type} event for user:`, data.id);

    // Send welcome email logic
    await sendWelcomeEmail(data.email, data.name);

    console.log(`Welcome email sent to ${data.email}`);
}

async function sendWelcomeEmail(email: string, name: string) {
    // Email sending implementation
}
```

## Contributors

Thanks to these awesome people who have contributed to the project:

<table style="border: none;">
  <tr style="border: none;">
    <td align="center" style="border: none;">
      <a href="https://github.com/SS1L">
        <img src="https://github.com/SS1L.png" width="80px;" alt="SS1L" style="border-radius: 50%;"/><br />
        <sub><b>SS1L</b></sub>
      </a>
    </td>
  </tr>
</table>

## Documentation

Visit [lumo-framework.dev](https://lumo-framework.dev)

## License

MIT
