import { useMutation } from "@tanstack/react-query";
import type { OrganizationType, ServiceType } from "../backend";
import { useActor } from "./useActor";

export interface QuoteFormData {
  name: string;
  organizationName: string;
  organizationType: OrganizationType;
  serviceType: ServiceType;
  email: string;
  message: string;
}

export function useSubmitQuote() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: QuoteFormData) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitQuoteRequest(
        data.name,
        data.organizationName,
        data.organizationType,
        data.serviceType,
        data.email,
        data.message,
      );
    },
  });
}
