import { TemplateRef } from "@angular/core";
import { InnoStatusMessageConfig } from "@innomotics/ix";

export type StatusMessageConfig = Omit<InnoStatusMessageConfig, "message"> & {
  message: string | TemplateRef<any>;
};
