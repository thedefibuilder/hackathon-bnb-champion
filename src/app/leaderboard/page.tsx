import { Container } from "@/components/common/grid";
import LeaderboardHero from "../_components/leaderboard-hero";
import LeaderboardTable from "../_components/user-template/leaderboard-table";

export default function Leaderboard() {
  return (
    <Container variant="fluid">
      <div className="h-20" />
      <LeaderboardHero />
      <div className="h-16" />
      <LeaderboardTable />
      <div className="h-16" />
    </Container>
  );
}
