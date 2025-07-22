import type { RepoSummary } from "../types/repoSummary";

const FEATURED_REPOS = [
    'calculator-js',
    'mapsclone',
    'registry',
    'Weather_Dashboard'
]

interface RepoResponse {
        name: string;
        created_at: string;
        description: string | null;
        language: string | null;
        license:{
            name: string | null;
        }
        updated_at: string;
        html_url: string;
}

export async function getFeaturedRepo(): Promise<RepoSummary[]>  {
    const promises = FEATURED_REPOS.map(async (name) => {
        const res = await fetch(`https://api.github.com/repos/DecoMacie/${name}`);
        return res.json()
    })
    const data: RepoResponse[] = await Promise.all(promises);

    return data.map(({ name, created_at, description, language, license, updated_at, html_url}) => {
        return{
            name,
            createdAt: created_at,
            description: description ?? "No Description",
            language: language ?? "N/A",
            license: license?.name,
            updatedAt: updated_at,
            html_url
        }
    });

}