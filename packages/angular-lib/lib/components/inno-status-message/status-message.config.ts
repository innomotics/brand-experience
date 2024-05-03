import { TemplateRef } from "@angular/core";
import { InnoStatusMessageConfig } from "@innomotics/brand-experience";

export type StatusMessageConfig = Omit<InnoStatusMessageConfig, "message"> & {
  message: string | TemplateRef<any>;
};
