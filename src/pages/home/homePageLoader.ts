import type { RepoSummary } from "../../api/types/repoSummary";
import { getFeaturedRepo } from "../../api/queries/getFeaturedRepo";

export interface HomePageLoaderResult {
    featuredRepos: RepoSummary[]
}

export async function HomePageLoader(): Promise<HomePageLoaderResult> {
    const featuredRepos = await getFeaturedRepo();

    return {
        featuredRepos
    }
}