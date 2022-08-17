import { QueryResolvers } from "@graphql-types@";
import { ResolverContext } from "./apollo";

const Query: Required<QueryResolvers<ResolverContext>> = {
  async team(_parent, _args, _context, _info) {
    console.log("AAARGS: ", _args);
    const headers = {
      "Content-Type": "text/xml",
      "X-TBA-Auth-Key": process.env.TBA_AUTH_KEY,
    };
    const init = {
      headers,
    };
    const res = await fetch(
      // @ts-ignore
      `https://www.thebluealliance.com/api/v3/team/frc${_args.teamNumber}`,
      init
    );
    const data = await res.json();
    console.log("RESULT: ", data);
    return data;
  },
  async teamDetails(_parent, _args, _context, _info) {
    console.log("AAARGS: ", _args);
    const headers = {
      "Content-Type": "text/xml",
      "X-TBA-Auth-Key": process.env.TBA_AUTH_KEY,
    };
    const init = {
      headers,
    };
    const res = await fetch(
      // @ts-ignore
      `https://www.thebluealliance.com/api/v3/team/frc${_args.teamNumber}`,
      init
    );
    const data = await res.json();
    console.log("RESULT: ", data);
    return data;
  },
};

export default { Query };
