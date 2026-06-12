/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && repositoryName;
const basePath = isGithubPagesBuild ? `/${repositoryName}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

export default nextConfig;
