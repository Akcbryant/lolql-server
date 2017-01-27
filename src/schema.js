import { buildSchema } from 'graphql';

export default buildSchema(`
  type Query {
    champion(id: Int!): ChampionType
    activeChampions(freeToPlay: Boolean): [ActiveChampionType]
    summoner(name: String): SummonerType
    summonerStats(summonerId: String, season: String): SummonerStatsType
  }

  type ChampionType {
    id: Int,
    title: String,
    name: String,
    key: String
  },

  type SummonerType {
    id: Int,
    name: String,
    profileIconId: Int,
    revisionDate: Float,
    summonerLevel: Int
  },

  type ActiveChampionsType {
    champions: [ActiveChampionType]
  },

  type ActiveChampionType {
    botMmEnabled: Boolean,
    id: Int,
    rankedPlayEnabled: Boolean,
    botEnabled: Boolean,
    active: Boolean,
    freeToPlay: Boolean
  },

  type SummonerStatsType {
    champions: [SummonerChampionStatsType]
  },

  type SummonerChampionStatsType {
    id: Int,
    stats: ChampionStatsType
  },

  type ChampionStatsType {
    totalSessionsPlayed: Int,
    totalSessionsLost: Int,
    totalSessionsWon: Int,
    totalChampionKills: Int,
    totalDamageDealt: Int,
    totalDamageTaken: Int,
    mostChampionKillsPerSession: Int,
    totalMinionKills: Int,
    totalDoubleKills: Int,
    totalTripleKills: Int,
    totalQuadraKills: Int,
    totalPentaKills: Int,
    totalUnrealKills: Int,
    totalDeathsPerSession: Int,
    totalGoldEarned: Int,
    mostSpellsCast: Int,
    totalTurretsKilled: Int,
    totalPhysicalDamageDealt: Int,
    totalMagicDamageDealt: Int,
    totalFirstBlood: Int,
    totalAssists: Int,
    maxChampionsKilled: Int,
    maxNumDeaths: Int
  }
`);
