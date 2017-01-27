import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlConnect } from 'graphql-server-express';
import { buildSchema } from 'graphql';
import LoLApi from 'leagueapi';
import schema from './schema';

LoLApi.init("");

var resolvers = {
  champion: ({id}) => { return LoLApi.Static.getChampionById(id); },
  activeChampions: ({freeToPlay}) => { return LoLApi.getChampions(freeToPlay); },
  summoner: ({name}) => {
    const normalizedName = name.replace(/ /g, '');
    return LoLApi.Summoner.getByName(name).then(
      data => data[normalizedName]
    )
  },
  summonerStats: ({ summonerId, season }) => {
    return LoLApi.Stats.getRanked(summonerId, season).then(
        data => ({ "champions": data })
        )
  }
};

const PORT = 3000;

var app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema, rootValue: resolvers }));

app.use('/graphiql', graphiqlConnect({
  endpointURL: '/graphql',
}));

app.listen(PORT);
