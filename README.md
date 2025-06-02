<p align="center"><a href="https://docs.tsc.run" target="_blank"><img src="https://www.tsc.run/tsc-logo.svg" width="200" alt="tsc.run Logo"></a></p>

<p align="center">
  <a href="https://github.com/tsc-run/monorepo/actions/workflows/release.yml">
    <img alt="CI Status" src="https://github.com/tsc-run/monorepo/actions/workflows/release.yml/badge.svg">
  </a>
  <a href="https://www.npmjs.com/package/@tsc-run/core">
    <img alt="npm version" src="https://img.shields.io/npm/v/@tsc-run/core">
  </a>
  <a href="https://www.npmjs.com/package/@tsc-run/core">
    <img alt="npm downloads" src="https://img.shields.io/npm/dm/@tsc-run/core">
  </a>
  <img alt="License" src="https://img.shields.io/github/license/tsc-run/monorepo">
  <img alt="Contributors" src="https://img.shields.io/github/contributors/tsc-run/monorepo?color=blue">
</p>

> tsc.run is a minimal framework for building serverless applications in TypeScript. It ships with a CLI to deploy your
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

- **[Amazon Web Services](https://docs.tsc.run/docs/deploy-aws/)** - AWS Lambda, DynamoDB, SQS, and more
- **[Cloudflare Workers](https://docs.tsc.run/docs/deploy-cloudflare/)** - Edge computing at scale with global distribution


## Demo

https://github.com/user-attachments/assets/895d76ff-2df1-49ab-813a-5eb4a2471a13

## Documentation

Full documentation is available at [docs.tsc.run](https://docs.tsc.run).

## Get Started

### Install the CLI

```sh
npm install -g @tsc-run/cli
```

### Create a new project

```sh
tsc-run new my-project
```

### Deploy your project

If you have an AWS account, you can deploy your project, just ensure you have the AWS CLI configured with your
credentials and the below environment variables set `CDK_DEFAULT_ACCOUNT` and `CDK_DEFAULT_REGION`:

```sh
tsc-run build && tsc-run deploy
```

## Examples

### Create a simple API route

#### List users

Create a simple API endpoint by exporting HTTP method functions:

```ts
// functions/api/users/index.ts
import {http} from "@tsc-run/core";

export async function GET(request: http.Request) {
    return http.response(http.STATUS_OK).json({
        data: [],
    });
}
```

### Dispatch an Event

Dispatch events from your API handlers using the events.emit() function:

```ts
import {http, events} from '@tsc-run/core';
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
import {events} from '@tsc-run/core';
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

## Documentation

Visit [docs.tsc.run](https://docs.tsc.run)

## License

MIT
