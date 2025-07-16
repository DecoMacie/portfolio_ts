import { RepoSummary } from "../types/repoSummary";

interface RepoResponse {
        name: string;
        created_at: string;
        description: string | null;
        language: string | null;
        license:{
            name: string | null;
        }
        updated_at: string;
}

export async function PortfolioRepo(): Promise<RepoSummary[]> {
    const res = await fetch("https://api.github.com/users/DecoMacie/repos");
    
    if (!res.ok) {
        throw new Error("--- Failed to fetch GitHub repositories ---  :(")
        
    }
    const data: RepoResponse[] = await res.json();

    return data.map(({ name, created_at, description, language, license, updated_at}) => {
        return{
            name,
            createdAt: created_at,
            description: description ?? "No Description",
            language: language ?? "N/A",
            license: license?.name,
            updatedAt: updated_at,
        }
    });
}