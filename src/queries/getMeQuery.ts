import { queryToolkit } from "src/queryClient";
import { ServerResponseBase } from "src/types";
import { kyInstance } from "src/utils";

interface GetMeResponse {
  user: {
    address: [];
    email: string;
    id: number;
    defaultAddressId: string;
    profile: {
      save_money: number;
    };
  };
}

const getMeApi = () => () =>
  kyInstance.get("v1/users/me").json<ServerResponseBase<GetMeResponse>>();

export const getMeQuery = queryToolkit(["getMe"], getMeApi, {
  defaultOptions: { retry: 0 },
});
