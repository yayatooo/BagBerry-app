// "use client";
// import React from "react";
// import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

// const ReactQueryClientProvider: React.FC<{
//   Component: React.ComponentType;
//   pageProps: any;
// }> = ({ Component, pageProps }) => {
//   const [queryClient] = React.useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Hydrate state={pageProps.dehydratedState}>
//         <Component {...pageProps} />
//       </Hydrate>
//       <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// export default ReactQueryClientProvider;

"use client";
import React from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClientProvider from "./QueryClientProvider";

const ReactQueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClientProvider}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
