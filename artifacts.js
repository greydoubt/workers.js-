// Create a repo
const repo = await env.AGENT_REPOS.create(name)
// Pass back the token & remote to your agent
return { repo.remote, repo.token }

interface Env {
  ARTIFACTS: Artifacts
}

export default {
  async fetch(request: Request, env: Env) {
    // Import from GitHub
    const { remote, token } = await env.ARTIFACTS.import({
      source: {
        url: "https://github.com/cloudflare/workers-sdk",
        branch: "main",
      },
      target: {
        name: "workers-sdk",
      },
    })

    // Get a handle to the imported repo
    const repo = await env.ARTIFACTS.get("workers-sdk")

    // Fork to an isolated, read-only copy
    const fork = await repo.fork("workers-sdk-review", {
      readOnly: true,
    })

    return Response.json({ remote: fork.remote, token: fork.token })
  },
}
