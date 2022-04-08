import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema_definitions";
import { resolvers } from "./resolvers";

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});