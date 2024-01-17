import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export const isFetchBaseQueryError = (
  err: unknown
): err is FetchBaseQueryError => {
  return typeof err === "object" && err !== null && "status" in err;
};

// export const isErrWithMessage = (
//   err: unknown
// ): err is { data: { message: string } } => {
//   return (
//     typeof err === "object" &&
//     err !== null &&
//     "data" in err &&
//     "message" in err.data &&
//     typeof err.data.message === "string"
//   );
// };
