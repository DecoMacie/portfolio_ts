import type { RepoSummary } from "../../api/types/repoSummary";
import { PortfolioRepo } from "../../api/queries/portfolioRepo";

export interface PortfolioLoaderResult {
    portfolioSummary: RepoSummary[];
}

export async function portfolioLoader(): Promise<PortfolioLoaderResult> {
    const portfolioSummary = await PortfolioRepo();

    return {
        portfolioSummary,
    }
}