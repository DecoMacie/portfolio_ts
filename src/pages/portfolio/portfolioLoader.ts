import type { RepoSummary } from "../../types/repoSummary";
import { PortfolioRepo } from "../../queries/portfolioRepo";

export interface PortfolioLoaderResult {
    portfolioSummary: RepoSummary[];
}

export async function portfolioLoader(): Promise<PortfolioLoaderResult> {
    const portfolioSummary = await PortfolioRepo();

    return {
        portfolioSummary,
    }
}