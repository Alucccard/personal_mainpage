import { withPayload } from "@payloadcms/next/withPayload";

const NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default withPayload(NextConfig);
