This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**Application Registration in Azure AD
**
**Step 1: Register the Next.js App in Azure AD
**
Go to the Azure Portal and navigate to Azure Active Directory.

In the left sidebar, select App registrations and then click New registration.

Name: Choose a name for the app (e.g., Next.js SSO App).

Supported account types: Choose whether this app is for single or multi-tenant use.

Redirect URI: Add the URL where Azure AD will redirect after successful authentication.

For local development: http://localhost:3000/api/auth/callback/azure-ad

Click Register to create the app.

**Step 2: Configure Authentication
**
Go to the Authentication tab and add your redirect URI(s).

Check the box for ID tokens (used for implicit and hybrid flows).

**Step 3: Create Client Secret
**
Navigate to Certificates & Secrets and create a new client secret.

Save this secret securely as it will be used in your Next.js app configuration.

**Step 4: Set API Permissions
**
Navigate to API permissions.

Add the following Microsoft Graph API permissions: email, profile, openid.

Grant admin consent for the requested permissions.

**Step 5: Create a .env.local file to store your Azure AD credentials:
**

AZURE_AD_CLIENT_ID=your-client-id
AZURE_AD_CLIENT_SECRET=your-client-secret
AZURE_AD_TENANT_ID=your-tenant-id
NEXTAUTH_URL=your-application-url


Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
